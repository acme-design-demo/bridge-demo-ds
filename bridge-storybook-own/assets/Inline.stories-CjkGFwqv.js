import{j as e,B as i}from"./iframe-RdPw3ozT.js";import{D as r}from"./LayoutDemo-BVFo_7Iz.js";import{S as l,b as a}from"./StateGrid-BzzO3xCu.js";import{I as n}from"./Inline-RK6XB5sJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Stack-n1coYAsd.js";const u={title:"Layout/Inline",component:n,args:{gap:"2",align:"center",justify:"start",wrap:!0},argTypes:{gap:{control:"select",options:["0","0-5","1","1-5","2","3","4","5","6","8"]},align:{control:"inline-radio",options:["start","center","end","stretch","baseline"]},justify:{control:"inline-radio",options:["start","center","end","between"]},render:{control:!1}}},t={render:o=>e.jsxs(n,{...o,children:[e.jsx(r,{children:"color"}),e.jsx(r,{children:"space"}),e.jsx(r,{children:"radius"}),e.jsx(r,{children:"motion"})]})},s={render:()=>e.jsxs(l,{children:[e.jsx(a,{label:"Wraps on narrow widths",children:e.jsx(n,{style:{width:240,outline:"var(--border-width-1) dashed var(--color-border-default)"},children:["color","space","radius","motion","elevation","layer"].map(o=>e.jsx(r,{children:o},o))})}),e.jsx(a,{label:"Justify between (page header)",children:e.jsxs(n,{justify:"between",style:{width:480},children:[e.jsx(r,{children:"Tokens"}),e.jsxs(n,{gap:"2",children:[e.jsx(i,{variant:"secondary",size:"sm",children:"Export"}),e.jsx(i,{size:"sm",children:"New token"})]})]})}),e.jsx(a,{label:"No wrap",children:e.jsx(n,{wrap:!1,gap:"1",style:{width:200,overflow:"hidden"},children:["a","b","c","d","e","f"].map(o=>e.jsx(r,{children:o},o))})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Inline {...args}>
      <DemoBox>color</DemoBox>
      <DemoBox>space</DemoBox>
      <DemoBox>radius</DemoBox>
      <DemoBox>motion</DemoBox>
    </Inline>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenStack>
      <Specimen label="Wraps on narrow widths">
        <Inline style={{
        width: 240,
        outline: 'var(--border-width-1) dashed var(--color-border-default)'
      }}>
          {['color', 'space', 'radius', 'motion', 'elevation', 'layer'].map(t => <DemoBox key={t}>{t}</DemoBox>)}
        </Inline>
      </Specimen>
      <Specimen label="Justify between (page header)">
        <Inline justify="between" style={{
        width: 480
      }}>
          <DemoBox>Tokens</DemoBox>
          <Inline gap="2">
            <Button variant="secondary" size="sm">Export</Button>
            <Button size="sm">New token</Button>
          </Inline>
        </Inline>
      </Specimen>
      <Specimen label="No wrap">
        <Inline wrap={false} gap="1" style={{
        width: 200,
        overflow: 'hidden'
      }}>
          {['a', 'b', 'c', 'd', 'e', 'f'].map(t => <DemoBox key={t}>{t}</DemoBox>)}
        </Inline>
      </Specimen>
    </SpecimenStack>
}`,...s.parameters?.docs?.source}}};const w=["Default","AllStates"];export{s as AllStates,t as Default,w as __namedExportsOrder,u as default};
