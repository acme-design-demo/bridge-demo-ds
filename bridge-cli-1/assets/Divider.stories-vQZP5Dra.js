import{j as e}from"./iframe-RdPw3ozT.js";import{S as l,b as t}from"./StateGrid-BzzO3xCu.js";import{D as a}from"./Divider-B9whWmAm.js";import"./preload-helper-PPVm8Dsz.js";import"./Separator-Bvs7ACHK.js";const h={title:"Data display/Divider",component:a,args:{orientation:"horizontal",spacing:"md"},argTypes:{orientation:{control:"inline-radio",options:["horizontal","vertical"]},spacing:{control:"inline-radio",options:["none","sm","md"]}},decorators:[n=>e.jsx("div",{style:{maxWidth:420},children:e.jsx(n,{})})]},s={},i={args:{label:"Older changes"}},r={render:()=>e.jsxs(l,{children:[e.jsx(t,{label:"Horizontal between groups",children:e.jsxs("div",{style:{width:"100%"},children:[e.jsx("p",{style:{margin:0},children:"Light theme: 220 contrast checks passing."}),e.jsx(a,{}),e.jsx("p",{style:{margin:0},children:"Dark theme: 220 contrast checks passing."})]})}),e.jsx(t,{label:"With label",children:e.jsx("div",{style:{width:"100%"},children:e.jsx(a,{label:"Or"})})}),e.jsx(t,{label:"Vertical in a toolbar",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",height:24},children:[e.jsx("span",{children:"Light"}),e.jsx(a,{orientation:"vertical",spacing:"sm"}),e.jsx("span",{children:"Dark"}),e.jsx(a,{orientation:"vertical",spacing:"sm"}),e.jsx("span",{children:"Compact"})]})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Older changes'
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenStack>
      <Specimen label="Horizontal between groups">
        <div style={{
        width: '100%'
      }}>
          <p style={{
          margin: 0
        }}>Light theme: 220 contrast checks passing.</p>
          <Divider />
          <p style={{
          margin: 0
        }}>Dark theme: 220 contrast checks passing.</p>
        </div>
      </Specimen>
      <Specimen label="With label">
        <div style={{
        width: '100%'
      }}>
          <Divider label="Or" />
        </div>
      </Specimen>
      <Specimen label="Vertical in a toolbar">
        <div style={{
        display: 'flex',
        alignItems: 'center',
        height: 24
      }}>
          <span>Light</span>
          <Divider orientation="vertical" spacing="sm" />
          <span>Dark</span>
          <Divider orientation="vertical" spacing="sm" />
          <span>Compact</span>
        </div>
      </Specimen>
    </SpecimenStack>
}`,...r.parameters?.docs?.source}}};const g=["Horizontal","Labelled","AllStates"];export{r as AllStates,s as Horizontal,i as Labelled,g as __namedExportsOrder,h as default};
