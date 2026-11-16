import{j as e,C as i,T as c,F as d}from"./iframe-RdPw3ozT.js";import{S as u,a as p,b as m}from"./StateGrid-BzzO3xCu.js";import{B as a}from"./Badge-DHJk7zco.js";import"./preload-helper-PPVm8Dsz.js";const f={title:"Data display/Badge",component:a,args:{children:"Draft",tone:"neutral",appearance:"subtle",size:"md"},argTypes:{tone:{control:"select",options:["neutral","success","warning","danger","info"]},appearance:{control:"inline-radio",options:["subtle","solid"]},size:{control:"inline-radio",options:["sm","md"]},icon:{control:!1}}},r={args:{tone:"success",children:"Published"}},n={args:{tone:"danger",appearance:"solid",children:"Build failed"}},s={args:{tone:"warning",dot:!0,children:"Needs review"}},g=[{label:"Neutral",value:"neutral"},{label:"Success",value:"success"},{label:"Warning",value:"warning"},{label:"Danger",value:"danger"},{label:"Info",value:"info"}],S={neutral:"Draft",success:"Published",warning:"Needs review",danger:"Failed",info:"Beta"},l={render:()=>e.jsxs(u,{children:[e.jsx(p,{columns:[{label:"Subtle"},{label:"Subtle with dot"},{label:"Solid"},{label:"Small"}],rows:g,render:(t,o)=>e.jsx(a,{tone:t,appearance:o.label==="Solid"?"solid":"subtle",dot:o.label==="Subtle with dot",size:o.label==="Small"?"sm":"md",children:S[t]})}),e.jsxs(m,{label:"With icons",children:[e.jsx(a,{tone:"success",icon:i,children:"Contrast 4.8:1"}),e.jsx(a,{tone:"warning",icon:c,children:"2 unused tokens"}),e.jsx(a,{tone:"danger",icon:d,appearance:"solid",children:"Breaking"})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'success',
    children: 'Published'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'danger',
    appearance: 'solid',
    children: 'Build failed'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'warning',
    dot: true,
    children: 'Needs review'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenStack>
      <StateGrid columns={[{
      label: 'Subtle'
    }, {
      label: 'Subtle with dot'
    }, {
      label: 'Solid'
    }, {
      label: 'Small'
    }]} rows={TONES} render={(tone, col) => <Badge tone={tone} appearance={col.label === 'Solid' ? 'solid' : 'subtle'} dot={col.label === 'Subtle with dot'} size={col.label === 'Small' ? 'sm' : 'md'}>
            {TEXT[tone]}
          </Badge>} />
      <Specimen label="With icons">
        <Badge tone="success" icon={CircleCheck}>Contrast 4.8:1</Badge>
        <Badge tone="warning" icon={TriangleAlert}>2 unused tokens</Badge>
        <Badge tone="danger" icon={CircleAlert} appearance="solid">Breaking</Badge>
      </Specimen>
    </SpecimenStack>
}`,...l.parameters?.docs?.source}}};const x=["Subtle","Solid","WithDot","AllStates"];export{l as AllStates,n as Solid,r as Subtle,s as WithDot,x as __namedExportsOrder,f as default};
