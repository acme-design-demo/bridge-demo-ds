import{j as e}from"./iframe-RdPw3ozT.js";import{D as s}from"./LayoutDemo-BVFo_7Iz.js";import{S as l,b as a}from"./StateGrid-BzzO3xCu.js";import{G as i}from"./Grid-B6phFzAk.js";import"./preload-helper-PPVm8Dsz.js";import"./Stack-n1coYAsd.js";const f={title:"Layout/Grid",component:i,args:{columns:3,gap:"4"},argTypes:{gap:{control:"select",options:["0","1","2","3","4","5","6","8"]},minItemWidth:{control:"select",options:[void 0,"60","72","80","96","120"]},render:{control:!1}}},t={render:n=>e.jsx(i,{...n,children:Array.from({length:6},(r,m)=>e.jsx(s,{tall:!0,children:m+1},m))})},o={render:()=>e.jsxs(l,{children:[e.jsx(a,{label:"Fixed columns: 4",children:e.jsx(i,{columns:4,gap:"3",style:{width:"100%"},children:Array.from({length:8},(n,r)=>e.jsx(s,{children:r+1},r))})}),e.jsx(a,{label:"Auto-fit, min item width 60 (240px)",children:e.jsx(i,{minItemWidth:"60",style:{width:"100%"},children:Array.from({length:5},(n,r)=>e.jsxs(s,{tall:!0,children:["Component ",r+1]},r))})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Grid {...args}>
      {Array.from({
      length: 6
    }, (_, i) => <DemoBox key={i} tall>{i + 1}</DemoBox>)}
    </Grid>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenStack>
      <Specimen label="Fixed columns: 4">
        <Grid columns={4} gap="3" style={{
        width: '100%'
      }}>
          {Array.from({
          length: 8
        }, (_, i) => <DemoBox key={i}>{i + 1}</DemoBox>)}
        </Grid>
      </Specimen>
      <Specimen label="Auto-fit, min item width 60 (240px)">
        <Grid minItemWidth="60" style={{
        width: '100%'
      }}>
          {Array.from({
          length: 5
        }, (_, i) => <DemoBox key={i} tall>Component {i + 1}</DemoBox>)}
        </Grid>
      </Specimen>
    </SpecimenStack>
}`,...o.parameters?.docs?.source}}};const g=["Default","AllStates"];export{o as AllStates,t as Default,g as __namedExportsOrder,f as default};
