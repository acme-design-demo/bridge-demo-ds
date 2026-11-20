import{j as e}from"./iframe-DXKUr0Oy.js";import{D as t}from"./LayoutDemo-bP-ce6X-.js";import{S as c,b as n}from"./StateGrid-XOvQ1EHh.js";import{S as o}from"./Stack-CQS2Hht1.js";import"./preload-helper-PPVm8Dsz.js";const l=["0","0-5","1","1-5","2","3","4","5","6","8","10","12","16"],S={title:"Layout/Stack",component:o,args:{gap:"3",align:"stretch",justify:"start"},argTypes:{gap:{control:"select",options:l},align:{control:"inline-radio",options:["start","center","end","stretch","baseline"]},justify:{control:"inline-radio",options:["start","center","end","between"]},render:{control:!1}}},r={render:a=>e.jsxs(o,{...a,style:{maxWidth:320},children:[e.jsx(t,{children:"Token name"}),e.jsx(t,{children:"Value"}),e.jsx(t,{children:"Description"})]})},s={render:()=>e.jsxs(c,{children:[e.jsx(n,{label:"Default gap (layout.gap: 16 comfortable, 12 compact)",children:e.jsxs(o,{style:{width:200},children:[e.jsx(t,{children:"1"}),e.jsx(t,{children:"2"}),e.jsx(t,{children:"3"})]})}),e.jsx(n,{label:"Gap scale",children:["1","2","4","8"].map(a=>e.jsxs(o,{gap:a,style:{width:96},children:[e.jsxs(t,{children:["gap ",a]}),e.jsx(t,{}),e.jsx(t,{})]},a))}),e.jsx(n,{label:"Align start, center, end",children:["start","center","end"].map(a=>e.jsxs(o,{align:a,gap:"2",style:{width:160},children:[e.jsx(t,{children:a}),e.jsx(t,{children:"longer item"})]},a))})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Stack {...args} style={{
    maxWidth: 320
  }}>
      <DemoBox>Token name</DemoBox>
      <DemoBox>Value</DemoBox>
      <DemoBox>Description</DemoBox>
    </Stack>
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenStack>
      <Specimen label="Default gap (layout.gap: 16 comfortable, 12 compact)">
        <Stack style={{
        width: 200
      }}>
          <DemoBox>1</DemoBox>
          <DemoBox>2</DemoBox>
          <DemoBox>3</DemoBox>
        </Stack>
      </Specimen>
      <Specimen label="Gap scale">
        {(['1', '2', '4', '8'] as const).map(g => <Stack key={g} gap={g} style={{
        width: 96
      }}>
            <DemoBox>gap {g}</DemoBox>
            <DemoBox />
            <DemoBox />
          </Stack>)}
      </Specimen>
      <Specimen label="Align start, center, end">
        {(['start', 'center', 'end'] as const).map(a => <Stack key={a} align={a} gap="2" style={{
        width: 160
      }}>
            <DemoBox>{a}</DemoBox>
            <DemoBox>longer item</DemoBox>
          </Stack>)}
      </Specimen>
    </SpecimenStack>
}`,...s.parameters?.docs?.source}}};const g=["Default","AllStates"];export{s as AllStates,r as Default,g as __namedExportsOrder,S as default};
