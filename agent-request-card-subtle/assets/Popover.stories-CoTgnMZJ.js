import{j as e,B as n,a as c,bN as d}from"./iframe-DXKUr0Oy.js";import{P as s,a,b as i,c as p}from"./Popover-3dEL_xUE.js";import"./preload-helper-PPVm8Dsz.js";import"./useTriggerFocusGuards-DtkfUeCy.js";import"./useOpenInteractionType-836zuFso.js";import"./useValueChanged-BPkaUzIM.js";import"./useAnchoredPopupScrollLock-CvxOudMN.js";import"./composite-DhWHhwUi.js";import"./ToolbarRootContext-DS6fvx17.js";const y={title:"Overlays/Popover",component:s,parameters:{layout:"centered"}},r={render:()=>e.jsxs(s,{children:[e.jsx(a,{render:e.jsx(c,{icon:d,label:"About contrast checks",variant:"secondary"})}),e.jsx(i,{title:"Contrast checks",description:"The token build checks 55 color pairs in every brand and theme and fails below WCAG minimums."})]})},o={render:()=>e.jsxs(s,{children:[e.jsx(a,{render:e.jsx(n,{variant:"secondary"}),children:"Branch: feat/tokens-v2"}),e.jsxs(i,{title:"Switch branch",showClose:!0,side:"bottom",align:"start",children:[e.jsx("p",{style:{margin:0,color:"var(--color-text-muted)"},children:"3 commits ahead of main, 1 open review."}),e.jsx(p,{render:e.jsx(n,{size:"sm"}),children:"Open pull request"})]})]})},t={parameters:{layout:"padded"},render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",paddingBlock:"var(--space-20) var(--space-24)"},children:e.jsxs(s,{defaultOpen:!0,children:[e.jsx(a,{render:e.jsx(n,{variant:"secondary"}),children:"Reviewers"}),e.jsx(i,{title:"Required reviewers",description:"One design owner and one tech owner must approve token changes.",showClose:!0})]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger render={<IconButton icon={Info} label="About contrast checks" variant="secondary" />} />
      <PopoverContent title="Contrast checks" description="The token build checks 55 color pairs in every brand and theme and fails below WCAG minimums." />
    </Popover>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger render={<Button variant="secondary" />}>Branch: feat/tokens-v2</PopoverTrigger>
      <PopoverContent title="Switch branch" showClose side="bottom" align="start">
        <p style={{
        margin: 0,
        color: 'var(--color-text-muted)'
      }}>3 commits ahead of main, 1 open review.</p>
        <PopoverClose render={<Button size="sm" />}>Open pull request</PopoverClose>
      </PopoverContent>
    </Popover>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    display: 'flex',
    justifyContent: 'center',
    paddingBlock: 'var(--space-20) var(--space-24)'
  }}>
      <Popover defaultOpen>
        <PopoverTrigger render={<Button variant="secondary" />}>Reviewers</PopoverTrigger>
        <PopoverContent title="Required reviewers" description="One design owner and one tech owner must approve token changes." showClose />
      </Popover>
    </div>
}`,...t.parameters?.docs?.source}}};const f=["Default","WithActions","AllStates"];export{t as AllStates,r as Default,o as WithActions,f as __namedExportsOrder,y as default};
