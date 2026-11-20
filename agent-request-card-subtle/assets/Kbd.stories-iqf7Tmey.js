import{j as e}from"./iframe-DXKUr0Oy.js";import{S as m,b as t}from"./StateGrid-XOvQ1EHh.js";import{K as s}from"./Kbd-Dgvb-qap.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"Data display/Kbd",component:s,args:{keys:["Cmd","K"],size:"md"},argTypes:{size:{control:"inline-radio",options:["sm","md"]}}},r={},n={args:{keys:"Esc"}},a={render:()=>e.jsxs(m,{children:[e.jsxs(t,{label:"Single keys",children:[e.jsx(s,{keys:"Esc"}),e.jsx(s,{keys:"Enter"}),e.jsx(s,{keys:"/"}),e.jsx(s,{keys:"↑"})]}),e.jsxs(t,{label:"Combinations, md and sm",children:[e.jsx(s,{keys:["Cmd","K"]}),e.jsx(s,{keys:["Shift","Cmd","P"]}),e.jsx(s,{keys:["Ctrl","Enter"],size:"sm"})]}),e.jsx(t,{label:"In running text",children:e.jsxs("p",{style:{margin:0},children:["Press ",e.jsx(s,{keys:["Cmd","K"],size:"sm"})," to search tokens, components and pages."]})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    keys: 'Esc'
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenStack>
      <Specimen label="Single keys">
        <Kbd keys="Esc" />
        <Kbd keys="Enter" />
        <Kbd keys="/" />
        <Kbd keys="↑" />
      </Specimen>
      <Specimen label="Combinations, md and sm">
        <Kbd keys={['Cmd', 'K']} />
        <Kbd keys={['Shift', 'Cmd', 'P']} />
        <Kbd keys={['Ctrl', 'Enter']} size="sm" />
      </Specimen>
      <Specimen label="In running text">
        <p style={{
        margin: 0
      }}>
          Press <Kbd keys={['Cmd', 'K']} size="sm" /> to search tokens, components and pages.
        </p>
      </Specimen>
    </SpecimenStack>
}`,...a.parameters?.docs?.source}}};const l=["Combination","SingleKey","AllStates"];export{a as AllStates,r as Combination,n as SingleKey,l as __namedExportsOrder,p as default};
