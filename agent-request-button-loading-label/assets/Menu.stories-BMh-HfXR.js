import{j as e,a as f,B as h}from"./iframe-C39eZITx.js";import{M as i,a as u,b as m,c as r,d as p,e as M,F as v,f as b,g as l,h as C,i as d}from"./Menu-Mi3pxKTv.js";import{E as S}from"./ellipsis-C2Q1z5iv.js";import{C as x}from"./chevron-down-DeuJsxnH.js";import{P as k}from"./pencil-DvOarg1u.js";import{C as y}from"./copy-DxOz1WLg.js";import{G as I}from"./git-branch-QseGZzQf.js";import{T as O}from"./trash-C4rRzIED.js";import"./preload-helper-PPVm8Dsz.js";import"./check-DF5JWxCX.js";import"./chevron-right-DrcG1yNB.js";import"./getPseudoElementBounds-DUvyX8d0.js";import"./useOpenInteractionType-v9BQoCPk.js";import"./useValueChanged-iaW_aQ2H.js";import"./CompositeItem-D_XGV9Mr.js";import"./useCompositeItem-D-QgrSzF.js";import"./useCompositeListItem-CzV-ZnVM.js";import"./useTriggerFocusGuards-CxNI3ZQB.js";import"./getHighlightReason-Csmvwf4F.js";import"./useControlled-C2dEVo6h.js";import"./Separator-DqwMXQC1.js";import"./CompositeList-BMhZK_ur.js";import"./useAnchoredPopupScrollLock-DKvtgpee.js";import"./ToolbarRootContext-5kk-AaVF.js";import"./composite-D1d9lgzi.js";const $={title:"Overlays/Menu",component:i};function j({defaultOpen:c}){return e.jsxs(i,{defaultOpen:c,children:[e.jsx(u,{render:e.jsx(h,{variant:"secondary",iconEnd:x}),children:"Token actions"}),e.jsxs(m,{children:[e.jsx(r,{icon:k,shortcut:"E",children:"Rename"}),e.jsx(r,{icon:y,shortcut:"Cmd+D",children:"Duplicate"}),e.jsxs(M,{icon:v,label:"Move to group",children:[e.jsx(r,{children:"color.action"}),e.jsx(r,{children:"color.feedback"}),e.jsx(r,{children:"color.surface"})]}),e.jsx(r,{icon:I,disabled:!0,children:"Open in branch"}),e.jsx(p,{}),e.jsx(r,{icon:O,tone:"danger",shortcut:"Del",children:"Delete token"})]})]})}const n={render:()=>e.jsx(j,{})},a={render:()=>e.jsxs(i,{children:[e.jsx(u,{render:e.jsx(f,{icon:S,label:"More actions for color.signal.default"})}),e.jsxs(m,{align:"end",children:[e.jsx(r,{children:"View usage"}),e.jsx(r,{children:"Copy CSS variable"}),e.jsx(p,{}),e.jsx(r,{tone:"danger",children:"Deprecate"})]})]})};function g({defaultOpen:c}){return e.jsxs(i,{defaultOpen:c,children:[e.jsx(u,{render:e.jsx(h,{variant:"ghost",iconEnd:x}),children:"View"}),e.jsxs(m,{children:[e.jsxs(b,{label:"Columns",children:[e.jsx(l,{defaultChecked:!0,children:"Light value"}),e.jsx(l,{defaultChecked:!0,children:"Dark value"}),e.jsx(l,{children:"Description"})]}),e.jsx(p,{}),e.jsxs(C,{label:"Sort by",defaultValue:"name",children:[e.jsx(d,{value:"name",children:"Name"}),e.jsx(d,{value:"updated",children:"Last updated"}),e.jsx(d,{value:"usage",children:"Usage"})]})]})]})}const s={render:()=>e.jsx(g,{})},t={parameters:{layout:"padded"},render:()=>e.jsx("div",{style:{display:"flex",alignItems:"flex-start",gap:"var(--space-6)",minHeight:"var(--size-96)"},children:e.jsx(j,{defaultOpen:!0})})},o={name:"All states (checkable)",parameters:{layout:"padded"},render:()=>e.jsx("div",{style:{minHeight:"var(--size-96)"},children:e.jsx(g,{defaultOpen:!0})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
