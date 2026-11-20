import{j as e,r as c}from"./iframe-C39eZITx.js";import{S as g,a as u,b as r}from"./StateGrid-2rAOCvic.js";import{P as a}from"./Pagination-Cr29ACdp.js";import"./preload-helper-PPVm8Dsz.js";import"./chevron-right-DrcG1yNB.js";import"./ellipsis-C2Q1z5iv.js";const v={title:"Navigation/Pagination",component:a,args:{pageCount:12,defaultPage:6,siblingCount:1,variant:"full",size:"md"},argTypes:{variant:{control:"inline-radio",options:["full","compact"]},size:{control:"inline-radio",options:["sm","md"]}}},t={},s={args:{variant:"compact"}},o={render:n=>{const[i,p]=c.useState(1);return e.jsx(a,{...n,page:i,onPageChange:p})}},l={render:()=>e.jsxs(g,{children:[e.jsx(u,{columns:[{label:"Default"},{label:"Hover",pseudo:"hover"},{label:"Focus visible",pseudo:"focus-visible"}],rows:[{label:"Previous",value:"previous"}],render:(n,i)=>e.jsx(a,{"aria-label":`Pagination ${i.label}`,pageCount:3,defaultPage:3})}),e.jsx(r,{label:"First page (previous disabled)",children:e.jsx(a,{"aria-label":"First page",pageCount:12,defaultPage:1})}),e.jsx(r,{label:"Middle page (two ellipses)",children:e.jsx(a,{"aria-label":"Middle page",pageCount:48,defaultPage:24})}),e.jsx(r,{label:"Last page, size sm",children:e.jsx(a,{"aria-label":"Last page",pageCount:12,defaultPage:12,size:"sm"})}),e.jsx(r,{label:"Compact",children:e.jsx(a,{"aria-label":"Compact",variant:"compact",pageCount:12,defaultPage:3})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'compact'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [page, setPage] = useState(1);
    return <Pagination {...args} page={page} onPageChange={setPage} />;
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenStack>
      <StateGrid columns={[{
      label: 'Default'
    }, {
      label: 'Hover',
      pseudo: 'hover'
    }, {
      label: 'Focus visible',
      pseudo: 'focus-visible'
    }]} rows={[{
      label: 'Previous',
      value: 'previous'
    }]} render={(_, col) => <Pagination aria-label={\`Pagination \${col.label}\`} pageCount={3} defaultPage={3} />} />
      <Specimen label="First page (previous disabled)">
        <Pagination aria-label="First page" pageCount={12} defaultPage={1} />
      </Specimen>
      <Specimen label="Middle page (two ellipses)">
        <Pagination aria-label="Middle page" pageCount={48} defaultPage={24} />
      </Specimen>
      <Specimen label="Last page, size sm">
        <Pagination aria-label="Last page" pageCount={12} defaultPage={12} size="sm" />
      </Specimen>
      <Specimen label="Compact">
        <Pagination aria-label="Compact" variant="compact" pageCount={12} defaultPage={3} />
      </Specimen>
    </SpecimenStack>
}`,...l.parameters?.docs?.source}}};const C=["Default","Compact","Controlled","AllStates"];export{l as AllStates,s as Compact,o as Controlled,t as Default,C as __namedExportsOrder,v as default};
