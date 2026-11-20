import{j as a,B as e,a as c}from"./iframe-DXKUr0Oy.js";import{S as l,b as n}from"./StateGrid-XOvQ1EHh.js";import{B as t}from"./ButtonGroup-BtbAJDrU.js";import{T as d,a as p,b as u}from"./text-align-start-CRafyeKU.js";import"./preload-helper-PPVm8Dsz.js";const x={title:"Actions/ButtonGroup",component:t,args:{appearance:"spaced",orientation:"horizontal",align:"start"},argTypes:{appearance:{control:"inline-radio",options:["spaced","attached"]},orientation:{control:"inline-radio",options:["horizontal","vertical"]},align:{control:"inline-radio",options:["start","end","between"]}}},r={args:{align:"end","aria-label":"Review actions"},render:s=>a.jsxs(t,{...s,children:[a.jsx(e,{variant:"ghost",children:"Cancel"}),a.jsx(e,{variant:"secondary",children:"Request changes"}),a.jsx(e,{children:"Approve"})]})},o={args:{appearance:"attached","aria-label":"Preview theme"},render:s=>a.jsxs(t,{...s,children:[a.jsx(e,{variant:"secondary",children:"Light"}),a.jsx(e,{variant:"secondary",children:"Dark"}),a.jsx(e,{variant:"secondary",children:"System"})]})},i={render:()=>a.jsxs(l,{children:[a.jsx(n,{label:"Spaced, end aligned (dialog and form footers)",children:a.jsxs(t,{align:"end","aria-label":"Dialog actions",style:{width:"100%"},children:[a.jsx(e,{variant:"ghost",children:"Cancel"}),a.jsx(e,{children:"Save changes"})]})}),a.jsx(n,{label:"Attached text buttons",children:a.jsxs(t,{appearance:"attached","aria-label":"Diff view",children:[a.jsx(e,{variant:"secondary",size:"sm",children:"Unified"}),a.jsx(e,{variant:"secondary",size:"sm",children:"Split"})]})}),a.jsx(n,{label:"Attached icon buttons",children:a.jsxs(t,{appearance:"attached","aria-label":"Text alignment",children:[a.jsx(c,{variant:"secondary",icon:d,label:"Align left"}),a.jsx(c,{variant:"secondary",icon:p,label:"Align center"}),a.jsx(c,{variant:"secondary",icon:u,label:"Align right"})]})}),a.jsx(n,{label:"Vertical",children:a.jsxs(t,{orientation:"vertical",appearance:"attached","aria-label":"Export format",style:{width:200},children:[a.jsx(e,{variant:"secondary",children:"CSS variables"}),a.jsx(e,{variant:"secondary",children:"TypeScript"}),a.jsx(e,{variant:"secondary",children:"DTCG JSON"})]})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    align: 'end',
    'aria-label': 'Review actions'
  },
  render: args => <ButtonGroup {...args}>
      <Button variant="ghost">Cancel</Button>
      <Button variant="secondary">Request changes</Button>
      <Button>Approve</Button>
    </ButtonGroup>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'attached',
    'aria-label': 'Preview theme'
  },
  render: args => <ButtonGroup {...args}>
      <Button variant="secondary">Light</Button>
      <Button variant="secondary">Dark</Button>
      <Button variant="secondary">System</Button>
    </ButtonGroup>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenStack>
      <Specimen label="Spaced, end aligned (dialog and form footers)">
        <ButtonGroup align="end" aria-label="Dialog actions" style={{
        width: '100%'
      }}>
          <Button variant="ghost">Cancel</Button>
          <Button>Save changes</Button>
        </ButtonGroup>
      </Specimen>
      <Specimen label="Attached text buttons">
        <ButtonGroup appearance="attached" aria-label="Diff view">
          <Button variant="secondary" size="sm">Unified</Button>
          <Button variant="secondary" size="sm">Split</Button>
        </ButtonGroup>
      </Specimen>
      <Specimen label="Attached icon buttons">
        <ButtonGroup appearance="attached" aria-label="Text alignment">
          <IconButton variant="secondary" icon={AlignLeft} label="Align left" />
          <IconButton variant="secondary" icon={AlignCenter} label="Align center" />
          <IconButton variant="secondary" icon={AlignRight} label="Align right" />
        </ButtonGroup>
      </Specimen>
      <Specimen label="Vertical">
        <ButtonGroup orientation="vertical" appearance="attached" aria-label="Export format" style={{
        width: 200
      }}>
          <Button variant="secondary">CSS variables</Button>
          <Button variant="secondary">TypeScript</Button>
          <Button variant="secondary">DTCG JSON</Button>
        </ButtonGroup>
      </Specimen>
    </SpecimenStack>
}`,...i.parameters?.docs?.source}}};const S=["Footer","Attached","AllStates"];export{i as AllStates,o as Attached,r as Footer,S as __namedExportsOrder,x as default};
