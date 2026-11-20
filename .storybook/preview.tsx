import type { Decorator, Preview } from '@storybook/react-vite';
import { useEffect } from 'react';
import '@demo-ds/tokens/fonts.css';
import '@demo-ds/tokens/tokens.css';
import '../packages/react/src/styles/base.css';
import './preview.css';
import { ThemeProvider } from '../packages/react/src/theme';
import { ToastProvider } from '../packages/react/src/components/Toast';
import { TooltipProvider } from '../packages/react/src/components/Tooltip';
import { type Brand, type Density, type Theme, brands, defaults } from '@demo-ds/tokens';

// Embedded in a Bridge Studio drawer (iframe.html?...&embed=bridge, apps/docs-site/src/lib/story-frame.ts): the
// canvas sizes to the story instead of the viewport, the story is centered, and the document height is posted to the
// parent so the drawer frame fits it with no inner scrollbar. The full Storybook and the measure pipeline never pass
// the parameter, so their canvas is unchanged.
if (typeof window !== 'undefined' && window.parent !== window && new URLSearchParams(window.location.search).get('embed') === 'bridge') {
  document.documentElement.classList.add('sb-embed');
  let last = 0;
  // The story's own height plus the canvas padding: never the viewport, so a taller frame does not grow the report.
  const post = () => {
    const story = document.getElementById('storybook-root');
    if (!story) return;
    const pad = getComputedStyle(document.body);
    const height = Math.ceil(story.getBoundingClientRect().height + parseFloat(pad.paddingTop) + parseFloat(pad.paddingBottom));
    if (height === last) return;
    last = height;
    window.parent.postMessage({ type: 'bridge:story-height', height }, '*');
  };
  const watch = () => {
    const story = document.getElementById('storybook-root');
    if (story) new ResizeObserver(post).observe(story);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', watch, { once: true });
  else watch();
  window.addEventListener('load', post);
}

// Played from Bridge Studio (iframe.html?...&embed=bridge-keys, apps/docs-site/src/lib/story-replay.ts): "Play both" on a
// behavior request presses the same keys on today's story and on Claude's preview. Asked by its parent, the story
// focuses its first control, presses the keys with Storybook's own userEvent (real keyboard events, Tab moving focus as
// a browser does), then posts what it sees: the popup open (by role), the focused element's name, what the control
// shows. Nothing else listens: the full Storybook and the other embeds never pass the parameter.
if (typeof window !== 'undefined' && window.parent !== window && new URLSearchParams(window.location.search).get('embed') === 'bridge-keys') {
  document.documentElement.classList.add('sb-embed');
  const nameOf = (el: Element | null): string | null => {
    if (!el || el === document.body) return null;
    const labelled = el.getAttribute('aria-labelledby');
    const byId = labelled ? labelled.split(/\s+/).map((id) => document.getElementById(id)?.textContent ?? '').join(' ') : '';
    const label = (el as HTMLInputElement).labels?.[0]?.textContent ?? '';
    return (el.getAttribute('aria-label') || byId || label || el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 60) || null;
  };
  const visible = (el: Element) => {
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0 && getComputedStyle(el).visibility !== 'hidden';
  };
  const token = (k: string) => (k === ' ' || k === 'Space' ? ' ' : k.length === 1 ? k : `{${k}}`);
  window.addEventListener('message', (e: MessageEvent) => {
    const d = e.data as { type?: unknown; id?: unknown; keys?: unknown } | null;
    if (!d || d.type !== 'bridge:press-keys' || typeof d.id !== 'string' || !Array.isArray(d.keys)) return;
    const keys = d.keys.filter((k): k is string => typeof k === 'string' && k.length > 0 && k.length <= 20).slice(0, 12);
    void (async () => {
      const root = document.getElementById('storybook-root');
      const first = root?.querySelector<HTMLElement>('button:not([disabled]), [href], input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])') ?? null;
      first?.focus();
      const { userEvent } = await import('storybook/test');
      const user = userEvent.setup();
      for (const k of keys) await user.keyboard(token(k));
      await new Promise((r) => setTimeout(r, 300));
      const popup = Array.from(document.querySelectorAll('[role="listbox"], [role="menu"], [role="dialog"], [role="alertdialog"]')).find(visible);
      const role = popup?.getAttribute('role') ?? null;
      const active = document.activeElement;
      const result = {
        open: role === 'listbox' ? 'list' : role === 'alertdialog' ? 'dialog' : role,
        focus: active && (root?.contains(active) || popup?.contains(active)) ? nameOf(active) : null,
        shows: first ? (first.textContent ?? '').trim().replace(/\s+/g, ' ').slice(0, 60) || null : null,
      };
      (e.source as Window | null)?.postMessage({ type: 'bridge:keys-result', id: d.id, result }, '*');
    })();
  });
  const ready = () => window.parent.postMessage({ type: 'bridge:keys-ready' }, '*');
  if (document.readyState === 'complete') ready();
  else window.addEventListener('load', ready, { once: true });
}

// Brands come from bridge.config.json through the token build, so a merged brand shows up in the toolbar.
const brandTitle = (b: string) => b.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

// Applies the scope the way a product does: all three attributes on <html> (for portaled overlays and the
// page background) and a ThemeProvider around the story.
const withScope: Decorator = (Story, context) => {
  const theme = (context.globals.theme ?? 'light') as Theme;
  const brand = (context.globals.brand ?? 'bridge') as Brand;
  const density = (context.globals.density ?? 'comfortable') as Density;
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.setAttribute('data-brand', brand);
    root.setAttribute('data-density', density);
  }, [theme, brand, density]);
  return (
    <ThemeProvider theme={theme} brand={brand} density={density} className="sb-theme-root">
      <TooltipProvider>
        <ToastProvider>
          <Story />
        </ToastProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
};

const preview: Preview = {
  decorators: [withScope],
  globalTypes: {
    theme: {
      description: 'Color theme',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
    brand: {
      description: 'Brand',
      toolbar: {
        title: 'Brand',
        icon: 'paintbrush',
        items: brands.map((b) => ({ value: b, title: brandTitle(b) })),
        dynamicTitle: true,
      },
    },
    density: {
      description: 'Density',
      toolbar: {
        title: 'Density',
        icon: 'component',
        items: [
          { value: 'comfortable', title: 'Comfortable' },
          { value: 'compact', title: 'Compact' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: 'light', brand: defaults.brand, density: 'comfortable' },
  parameters: {
    layout: 'padded',
    controls: { expanded: true },
    options: {
      storySort: { order: ['Foundations', 'Actions', 'Forms', 'Feedback', 'Overlays', 'Navigation', 'Data display', 'Layout', '*'] },
    },
    // Accessibility violations fail story tests instead of only showing as warnings.
    a11y: { test: 'error' },
  },
};

export default preview;
