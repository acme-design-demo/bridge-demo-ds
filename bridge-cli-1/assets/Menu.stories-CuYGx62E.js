import{j as e,a as f,B as h}from"./iframe-RdPw3ozT.js";import{M as i,a as u,b as m,c as r,d as p,e as M,F as v,f as b,g as l,h as C,i as d}from"./Menu-D_2pNAni.js";import{E as S}from"./ellipsis-DvSDKVtG.js";import{C as x}from"./chevron-down-D1azWKxb.js";import{P as k}from"./pencil-8bK0YtEb.js";import{C as y}from"./copy-CZGNgYA_.js";import{G as I}from"./git-branch-Cz56asUi.js";import{T as O}from"./trash-DB8EMX3U.js";import"./preload-helper-PPVm8Dsz.js";import"./check-C56ON0ds.js";import"./chevron-right-BjNgJQTK.js";import"./getPseudoElementBounds-CJP7eeUA.js";import"./useOpenInteractionType-DJ1ynrjZ.js";import"./useValueChanged-DuUNTWOO.js";import"./CompositeItem-CBbubEJr.js";import"./useCompositeItem-wUl_dheB.js";import"./useCompositeListItem-DO1Mg_bF.js";import"./useTriggerFocusGuards-B07KbDE1.js";import"./getHighlightReason-Bxbn38Rb.js";import"./useControlled-IPaUtIGi.js";import"./Separator-Bvs7ACHK.js";import"./CompositeList-DFOI_bZu.js";import"./useAnchoredPopupScrollLock-TjOBpBNU.js";import"./ToolbarRootContext-DVpBozQW.js";import"./composite-Bf66A77I.js";const $={title:"Overlays/Menu",component:i};function j({defaultOpen:c}){return e.jsxs(i,{defaultOpen:c,children:[e.jsx(u,{render:e.jsx(h,{variant:"secondary",iconEnd:x}),children:"Token actions"}),e.jsxs(m,{children:[e.jsx(r,{icon:k,shortcut:"E",children:"Rename"}),e.jsx(r,{icon:y,shortcut:"Cmd+D",children:"Duplicate"}),e.jsxs(M,{icon:v,label:"Move to group",children:[e.jsx(r,{children:"color.action"}),e.jsx(r,{children:"color.feedback"}),e.jsx(r,{children:"color.surface"})]}),e.jsx(r,{icon:I,disabled:!0,children:"Open in branch"}),e.jsx(p,{}),e.jsx(r,{icon:O,tone:"danger",shortcut:"Del",children:"Delete token"})]})]})}const n={render:()=>e.jsx(j,{})},a={render:()=>e.jsxs(i,{children:[e.jsx(u,{render:e.jsx(f,{icon:S,label:"More actions for color.signal.default"})}),e.jsxs(m,{align:"end",children:[e.jsx(r,{children:"View usage"}),e.jsx(r,{children:"Copy CSS variable"}),e.jsx(p,{}),e.jsx(r,{tone:"danger",children:"Deprecate"})]})]})};function g({defaultOpen:c}){return e.jsxs(i,{defaultOpen:c,children:[e.jsx(u,{render:e.jsx(h,{variant:"ghost",iconEnd:x}),children:"View"}),e.jsxs(m,{children:[e.jsxs(b,{label:"Columns",children:[e.jsx(l,{defaultChecked:!0,children:"Light value"}),e.jsx(l,{defaultChecked:!0,children:"Dark value"}),e.jsx(l,{children:"Description"})]}),e.jsx(p,{}),e.jsxs(C,{label:"Sort by",defaultValue:"name",children:[e.jsx(d,{value:"name",children:"Name"}),e.jsx(d,{value:"updated",children:"Last updated"}),e.jsx(d,{value:"usage",children:"Usage"})]})]})]})}const s={render:()=>e.jsx(g,{})},t={parameters:{layout:"padded"},render:()=>e.jsx("div",{style:{display:"flex",alignItems:"flex-start",gap:"var(--space-6)",minHeight:"var(--size-96)"},children:e.jsx(j,{defaultOpen:!0})})},o={name:"All states (checkable)",parameters:{layout:"padded"},render:()=>e.jsx("div",{style:{minHeight:"var(--size-96)"},children:e.jsx(g,{defaultOpen:!0})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <TokenActions />
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Menu>
      <MenuTrigger render={<IconButton icon={MoreHorizontal} label="More actions for color.signal.default" />} />
      <MenuContent align="end">
        <MenuItem>View usage</MenuItem>
        <MenuItem>Copy CSS variable</MenuItem>
        <MenuSeparator />
        <MenuItem tone="danger">Deprecate</MenuItem>
      </MenuContent>
    </Menu>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <ViewOptions />
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    display: 'flex',
    alignItems: 'flex-start',
    gap: 'var(--space-6)',
    minHeight: 'var(--size-96)'
  }}>
      <TokenActions defaultOpen />
    </div>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'All states (checkable)',
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    minHeight: 'var(--size-96)'
  }}>
      <ViewOptions defaultOpen />
    </div>
}`,...o.parameters?.docs?.source}}};const ee=["Actions","RowOverflow","CheckableItems","AllStates","AllStatesCheckable"];export{n as Actions,t as AllStates,o as AllStatesCheckable,s as CheckableItems,a as RowOverflow,ee as __namedExportsOrder,$ as default};
