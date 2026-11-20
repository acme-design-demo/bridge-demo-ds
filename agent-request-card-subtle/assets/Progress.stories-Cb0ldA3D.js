import{j as e}from"./iframe-DXKUr0Oy.js";import{S as o,b as t}from"./StateGrid-XOvQ1EHh.js";import{P as a}from"./Progress-BM4JQtHT.js";import"./preload-helper-PPVm8Dsz.js";import"./formatNumber-BpqCpru1.js";import"./stringifyLocale-BMPUsiav.js";import"./valueToPercent-D5LwnO_k.js";import"./useRegisteredLabelId-m5lwGR0I.js";const S={title:"Feedback/Progress",component:a,args:{value:64,label:"Publishing tokens",variant:"linear",size:"md",tone:"signal"},argTypes:{variant:{control:"inline-radio",options:["linear","circular"]},size:{control:"inline-radio",options:["sm","md","lg"]},tone:{control:"inline-radio",options:["signal","success","warning","danger"]}},decorators:[r=>e.jsx("div",{style:{maxWidth:420},children:e.jsx(r,{})})]},l={},s={args:{value:null,label:"Syncing from Figma"}},i={args:{variant:"circular",size:"lg",label:"Contrast checks"}},n={decorators:[r=>e.jsx("div",{style:{maxWidth:720},children:e.jsx(r,{})})],render:()=>e.jsxs(o,{children:[e.jsx(t,{label:"Linear sizes",children:e.jsxs("div",{style:{display:"grid",gap:20,width:360},children:[e.jsx(a,{value:24,size:"sm",label:"Small"}),e.jsx(a,{value:64,label:"Medium"}),e.jsx(a,{value:88,size:"lg",label:"Large"})]})}),e.jsx(t,{label:"Linear states",children:e.jsxs("div",{style:{display:"grid",gap:20,width:360},children:[e.jsx(a,{value:null,label:"Syncing from Figma"}),e.jsx(a,{value:100,tone:"success",label:"Published"}),e.jsx(a,{value:40,tone:"danger",label:"Build stopped at 40%"}),e.jsx(a,{value:12,max:40,label:"Checking contrast",getAriaValueText:(r,c)=>`${c} of 40 pairs`}),e.jsx(a,{value:52,"aria-label":"Upload"})]})}),e.jsxs(t,{label:"Circular",children:[e.jsx(a,{variant:"circular",size:"sm",value:30,"aria-label":"Small ring"}),e.jsx(a,{variant:"circular",value:64,"aria-label":"Medium ring"}),e.jsx(a,{variant:"circular",size:"lg",value:88,"aria-label":"Large ring with value"}),e.jsx(a,{variant:"circular",value:null,"aria-label":"Working"}),e.jsx(a,{variant:"circular",size:"lg",value:100,tone:"success",label:"Contrast checks passed"})]})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: null,
    label: 'Syncing from Figma'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'circular',
    size: 'lg',
    label: 'Contrast checks'
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    maxWidth: 720
  }}><Story /></div>],
  render: () => <SpecimenStack>
      <Specimen label="Linear sizes">
        <div style={{
        display: 'grid',
        gap: 20,
        width: 360
      }}>
          <Progress value={24} size="sm" label="Small" />
          <Progress value={64} label="Medium" />
          <Progress value={88} size="lg" label="Large" />
        </div>
      </Specimen>
      <Specimen label="Linear states">
        <div style={{
        display: 'grid',
        gap: 20,
        width: 360
      }}>
          <Progress value={null} label="Syncing from Figma" />
          <Progress value={100} tone="success" label="Published" />
          <Progress value={40} tone="danger" label="Build stopped at 40%" />
          <Progress value={12} max={40} label="Checking contrast" getAriaValueText={(_, v) => \`\${v} of 40 pairs\`} />
          <Progress value={52} aria-label="Upload" />
        </div>
      </Specimen>
      <Specimen label="Circular">
        <Progress variant="circular" size="sm" value={30} aria-label="Small ring" />
        <Progress variant="circular" value={64} aria-label="Medium ring" />
        <Progress variant="circular" size="lg" value={88} aria-label="Large ring with value" />
        <Progress variant="circular" value={null} aria-label="Working" />
        <Progress variant="circular" size="lg" value={100} tone="success" label="Contrast checks passed" />
      </Specimen>
    </SpecimenStack>
}`,...n.parameters?.docs?.source}}};const h=["Linear","Indeterminate","Circular","AllStates"];export{n as AllStates,i as Circular,s as Indeterminate,l as Linear,h as __namedExportsOrder,S as default};
