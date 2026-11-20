import{S as n,j as e,B as t}from"./iframe-C39eZITx.js";import{S as o,b as a}from"./StateGrid-2rAOCvic.js";import"./preload-helper-PPVm8Dsz.js";const d={title:"Feedback/Spinner",component:n,args:{size:"md",tone:"signal",label:"Loading tokens"},argTypes:{size:{control:"inline-radio",options:["xs","sm","md","lg"]},tone:{control:"inline-radio",options:["current","signal"]}}},s={},i={render:()=>e.jsxs(o,{children:[e.jsxs(a,{label:"Sizes (signal tone)",children:[e.jsx(n,{size:"xs",tone:"signal",label:"Loading"}),e.jsx(n,{size:"sm",tone:"signal",label:"Loading"}),e.jsx(n,{size:"md",tone:"signal",label:"Loading"}),e.jsx(n,{size:"lg",tone:"signal",label:"Loading"})]}),e.jsx(a,{label:"Current color (inherits text)",children:e.jsxs("span",{style:{display:"inline-flex",gap:8,alignItems:"center",color:"var(--color-text-muted)"},children:[e.jsx(n,{size:"sm"})," Checking contrast pairs"]})}),e.jsxs(a,{label:"Inside a control (hidden from assistive tech, the button sets aria-busy)",children:[e.jsx(t,{loading:!0,children:"Publishing"}),e.jsx(t,{variant:"secondary",loading:!0,children:"Syncing"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenStack>
      <Specimen label="Sizes (signal tone)">
        <Spinner size="xs" tone="signal" label="Loading" />
        <Spinner size="sm" tone="signal" label="Loading" />
        <Spinner size="md" tone="signal" label="Loading" />
        <Spinner size="lg" tone="signal" label="Loading" />
      </Specimen>
      <Specimen label="Current color (inherits text)">
        <span style={{
        display: 'inline-flex',
        gap: 8,
        alignItems: 'center',
        color: 'var(--color-text-muted)'
      }}>
          <Spinner size="sm" /> Checking contrast pairs
        </span>
      </Specimen>
      <Specimen label="Inside a control (hidden from assistive tech, the button sets aria-busy)">
        <Button loading>Publishing</Button>
        <Button variant="secondary" loading>Syncing</Button>
      </Specimen>
    </SpecimenStack>
}`,...i.parameters?.docs?.source}}};const p=["Default","AllStates"];export{i as AllStates,s as Default,p as __namedExportsOrder,d as default};
