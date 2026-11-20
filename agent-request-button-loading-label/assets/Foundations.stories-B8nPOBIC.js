import{j as e,c as r}from"./iframe-C39eZITx.js";import"./preload-helper-PPVm8Dsz.js";const i="_page_9uhcd_1",l="_section_9uhcd_8",d="_h2_9uhcd_14",m="_swatches_9uhcd_22",h="_swatch_9uhcd_22",p="_chip_9uhcd_34",v="_name_9uhcd_42",y="_typeRow_9uhcd_48",u="_spaceRow_9uhcd_55",N="_bar_9uhcd_62",g="_radius_9uhcd_68",f="_elevation_9uhcd_69",s={page:i,section:l,h2:d,swatches:m,swatch:h,chip:p,name:v,typeRow:y,spaceRow:u,bar:N,radius:g,elevation:f},R={title:"Foundations/Tokens",tags:["!autodocs"],parameters:{layout:"padded"}},w=Object.keys(r),x=a=>w.filter(n=>n.startsWith(a));function _({name:a}){return e.jsxs("div",{className:s.swatch,children:[e.jsx("span",{className:s.chip,style:{backgroundColor:`var(--${a})`}}),e.jsx("code",{className:s.name,children:a.replace(/^color-/,"")})]})}const c={render:()=>e.jsx("div",{className:s.page,children:["color-bg","color-surface","color-text","color-border","color-action","color-control","color-signal","color-feedback","focus-ring-color"].map(a=>e.jsxs("section",{className:s.section,children:[e.jsx("h2",{className:s.h2,children:a.replace(/^color-/,"").replace("-"," ")}),e.jsx("div",{className:s.swatches,children:x(a).filter(n=>!n.endsWith("width")&&!n.endsWith("offset")).map(n=>e.jsx(_,{name:n},n))})]},a))})},j=["800","700","600","500","400","300","200","100"],o={render:()=>e.jsxs("div",{className:s.page,children:[j.map(a=>e.jsxs("div",{className:s.typeRow,children:[e.jsxs("code",{className:s.name,children:["font.size.",a]}),e.jsx("span",{style:{fontSize:`var(--font-size-${a})`,fontWeight:Number(a)>=400?"var(--font-weight-semibold)":"var(--font-weight-regular)",lineHeight:Number(a)>=500?"var(--font-line-height-tight)":"var(--font-line-height-normal)",letterSpacing:Number(a)>=500?"var(--font-tracking-tight)":"var(--font-tracking-normal)"},children:"Review 12 token changes before publishing"})]},a)),e.jsxs("div",{className:s.typeRow,children:[e.jsx("code",{className:s.name,children:"font.family.mono"}),e.jsx("code",{style:{fontFamily:"var(--font-family-mono)",fontSize:"var(--font-size-200)"},children:"color.action.primary.bg = #1C2735"})]})]})},t={name:"Space, radius, elevation",render:()=>e.jsxs("div",{className:s.page,children:[e.jsxs("section",{className:s.section,children:[e.jsx("h2",{className:s.h2,children:"Space"}),["0-5","1","1-5","2","3","4","5","6","8","10","12","16","20"].map(a=>e.jsxs("div",{className:s.spaceRow,children:[e.jsxs("code",{className:s.name,children:["space.",a]}),e.jsx("span",{className:s.bar,style:{width:`var(--space-${a})`}})]},a))]}),e.jsxs("section",{className:s.section,children:[e.jsx("h2",{className:s.h2,children:"Radius roles"}),e.jsx("div",{className:s.swatches,children:["inset","control","container","overlay","pill"].map(a=>e.jsx("div",{className:s.radius,style:{borderRadius:`var(--radius-${a})`},children:e.jsxs("code",{className:s.name,children:["radius.",a]})},a))})]}),e.jsxs("section",{className:s.section,children:[e.jsx("h2",{className:s.h2,children:"Elevation"}),e.jsx("div",{className:s.swatches,children:["raised","overlay","modal"].map(a=>e.jsx("div",{className:s.elevation,style:{boxShadow:`var(--elevation-${a})`},children:e.jsxs("code",{className:s.name,children:["elevation.",a]})},a))})]})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.page}>
      {['color-bg', 'color-surface', 'color-text', 'color-border', 'color-action', 'color-control', 'color-signal', 'color-feedback', 'focus-ring-color'].map(g => <section key={g} className={styles.section}>
          <h2 className={styles.h2}>{g.replace(/^color-/, '').replace('-', ' ')}</h2>
          <div className={styles.swatches}>
            {group(g).filter(n => !n.endsWith('width') && !n.endsWith('offset')).map(n => <Swatch key={n} name={n} />)}
          </div>
        </section>)}
    </div>
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.page}>
      {SIZES.map(s => <div key={s} className={styles.typeRow}>
          <code className={styles.name}>font.size.{s}</code>
          <span style={{
        fontSize: \`var(--font-size-\${s})\`,
        fontWeight: Number(s) >= 400 ? 'var(--font-weight-semibold)' : 'var(--font-weight-regular)',
        lineHeight: Number(s) >= 500 ? 'var(--font-line-height-tight)' : 'var(--font-line-height-normal)',
        letterSpacing: Number(s) >= 500 ? 'var(--font-tracking-tight)' : 'var(--font-tracking-normal)'
      }}>
            Review 12 token changes before publishing
          </span>
        </div>)}
      <div className={styles.typeRow}>
        <code className={styles.name}>font.family.mono</code>
        <code style={{
        fontFamily: 'var(--font-family-mono)',
        fontSize: 'var(--font-size-200)'
      }}>color.action.primary.bg = #1C2735</code>
      </div>
    </div>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Space, radius, elevation',
  render: () => <div className={styles.page}>
      <section className={styles.section}>
        <h2 className={styles.h2}>Space</h2>
        {['0-5', '1', '1-5', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20'].map(k => <div key={k} className={styles.spaceRow}>
            <code className={styles.name}>space.{k}</code>
            <span className={styles.bar} style={{
          width: \`var(--space-\${k})\`
        }} />
          </div>)}
      </section>
      <section className={styles.section}>
        <h2 className={styles.h2}>Radius roles</h2>
        <div className={styles.swatches}>
          {['inset', 'control', 'container', 'overlay', 'pill'].map(r => <div key={r} className={styles.radius} style={{
          borderRadius: \`var(--radius-\${r})\`
        }}>
              <code className={styles.name}>radius.{r}</code>
            </div>)}
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.h2}>Elevation</h2>
        <div className={styles.swatches}>
          {['raised', 'overlay', 'modal'].map(e => <div key={e} className={styles.elevation} style={{
          boxShadow: \`var(--elevation-\${e})\`
        }}>
              <code className={styles.name}>elevation.{e}</code>
            </div>)}
        </div>
      </section>
    </div>
}`,...t.parameters?.docs?.source}}};const k=["Color","Typography","SpaceRadiusElevation"];export{c as Color,t as SpaceRadiusElevation,o as Typography,k as __namedExportsOrder,R as default};
