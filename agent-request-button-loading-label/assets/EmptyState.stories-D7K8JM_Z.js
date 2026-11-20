import{j as e,B as r}from"./iframe-C39eZITx.js";import{S as c,b as i}from"./StateGrid-2rAOCvic.js";import{S as n,E as o}from"./EmptyState-B4D5fJ69.js";import{G as l}from"./git-pull-request-B_qjw4v5.js";import{P as d}from"./palette-CuB8hiNv.js";import{L as m}from"./Link-44_TUs-4.js";import"./preload-helper-PPVm8Dsz.js";import"./VisuallyHidden-Dv77UG8G.js";const v={title:"Feedback/EmptyState",component:o,args:{icon:l,title:"No pull requests yet",description:"Changes you sync from Figma open a pull request here, ready for review.",size:"md"},argTypes:{size:{control:"inline-radio",options:["sm","md","lg"]},icon:{control:!1},actions:{control:!1}}},t={args:{actions:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Sync from Figma"}),e.jsx(r,{variant:"ghost",children:"Read the guide"})]})}},a={args:{icon:n,size:"sm",title:'No tokens match "brand.700"',description:"Check the spelling or search by value, like #E64611.",actions:e.jsx(r,{variant:"secondary",size:"sm",children:"Clear search"})}},s={render:()=>e.jsxs(c,{children:[e.jsx(i,{label:"Large (whole page)",children:e.jsx("div",{style:{width:"100%",border:"1px dashed var(--color-border-default)"},children:e.jsx(o,{size:"lg",icon:d,title:"Start your design system",description:"Import variables from a Figma file or start from the Bridge starter tokens. You can change everything later.",actions:e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"lg",children:"Import from Figma"}),e.jsx(r,{size:"lg",variant:"secondary",children:"Use starter tokens"})]})})})}),e.jsx(i,{label:"Medium (panel)",children:e.jsx("div",{style:{width:480,border:"1px dashed var(--color-border-default)"},children:e.jsx(o,{icon:l,title:"No pull requests yet",description:"Changes you sync from Figma open a pull request here, ready for review.",actions:e.jsx(r,{children:"Sync from Figma"})})})}),e.jsx(i,{label:"Small, start aligned (inside a table or card)",children:e.jsx("div",{style:{width:420,border:"1px dashed var(--color-border-default)"},children:e.jsx(o,{size:"sm",align:"start",icon:n,title:'No tokens match "brand.700"',description:e.jsxs(e.Fragment,{children:["Check the spelling or ",e.jsx(m,{href:"#all",children:"browse all tokens"}),"."]})})})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    actions: <>
        <Button>Sync from Figma</Button>
        <Button variant="ghost">Read the guide</Button>
      </>
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    icon: SearchX,
    size: 'sm',
    title: 'No tokens match "brand.700"',
    description: 'Check the spelling or search by value, like #E64611.',
    actions: <Button variant="secondary" size="sm">Clear search</Button>
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenStack>
      <Specimen label="Large (whole page)">
        <div style={{
        width: '100%',
        border: '1px dashed var(--color-border-default)'
      }}>
          <EmptyState size="lg" icon={Palette} title="Start your design system" description="Import variables from a Figma file or start from the Bridge starter tokens. You can change everything later." actions={<>
                <Button size="lg">Import from Figma</Button>
                <Button size="lg" variant="secondary">Use starter tokens</Button>
              </>} />
        </div>
      </Specimen>
      <Specimen label="Medium (panel)">
        <div style={{
        width: 480,
        border: '1px dashed var(--color-border-default)'
      }}>
          <EmptyState icon={GitPullRequest} title="No pull requests yet" description="Changes you sync from Figma open a pull request here, ready for review." actions={<Button>Sync from Figma</Button>} />
        </div>
      </Specimen>
      <Specimen label="Small, start aligned (inside a table or card)">
        <div style={{
        width: 420,
        border: '1px dashed var(--color-border-default)'
      }}>
          <EmptyState size="sm" align="start" icon={SearchX} title='No tokens match "brand.700"' description={<>Check the spelling or <Link href="#all">browse all tokens</Link>.</>} />
        </div>
      </Specimen>
    </SpecimenStack>
}`,...s.parameters?.docs?.source}}};const x=["Default","NoResults","AllStates"];export{s as AllStates,t as Default,a as NoResults,x as __namedExportsOrder,v as default};
