import{j as e,B as n}from"./iframe-DXKUr0Oy.js";import{S as l,b as t}from"./StateGrid-XOvQ1EHh.js";import{P as a}from"./PageHeader-CXlVypDM.js";import{P as c}from"./pencil-CBvXjJO3.js";import{B as d}from"./Badge-WhFx8sP1.js";import{P as p}from"./plus-Bnrk9pgJ.js";import"./preload-helper-PPVm8Dsz.js";const v={title:"Layout/PageHeader",component:a,args:{title:"Spacing",lead:"A 4 px base scale: step n is n times 4 px. Tight inside groups, generous between them.",meta:"Updated 3 days ago, from packages/tokens/src/primitives/space.tokens.json"},argTypes:{actions:{control:!1},headingLevel:{control:"inline-radio",options:[1,2]}}},r={args:{actions:e.jsx(n,{variant:"secondary",iconStart:c,children:"Edit in Studio"})}},s={args:{lead:void 0,meta:void 0}},i={args:{title:"Tokens",actions:e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"secondary",children:"Export"}),e.jsx(n,{iconStart:p,children:"Create token"})]})}},o={render:()=>e.jsxs(l,{children:[e.jsx(t,{label:"Title, lead, meta, actions",children:e.jsx(a,{title:"Spacing",lead:"A 4 px base scale.",meta:"Updated 3 days ago",actions:e.jsx(n,{variant:"secondary",iconStart:c,children:"Edit in Studio"})})}),e.jsx(t,{label:"Title only",children:e.jsx(a,{title:"Install"})}),e.jsx(t,{label:"Meta with a badge",children:e.jsx(a,{title:"Button",lead:"Triggers an action on the current screen.",meta:e.jsx(d,{tone:"success",children:"Stable"})})}),e.jsx(t,{label:"Heading level 2",children:e.jsx(a,{headingLevel:2,title:"Overview",lead:"Read the system, check its health."})}),e.jsx(t,{label:"Narrow container, actions wrap",children:e.jsx("div",{style:{maxWidth:360},children:e.jsx(a,{title:"Typography",lead:"Plex Sans for UI and body text.",actions:e.jsx(n,{variant:"secondary",children:"Edit in Studio"})})})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    actions: <Button variant="secondary" iconStart={Pencil}>Edit in Studio</Button>
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    lead: undefined,
    meta: undefined
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Tokens',
    actions: <>
        <Button variant="secondary">Export</Button>
        <Button iconStart={Plus}>Create token</Button>
      </>
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenStack>
      <Specimen label="Title, lead, meta, actions">
        <PageHeader title="Spacing" lead="A 4 px base scale." meta="Updated 3 days ago" actions={<Button variant="secondary" iconStart={Pencil}>Edit in Studio</Button>} />
      </Specimen>
      <Specimen label="Title only">
        <PageHeader title="Install" />
      </Specimen>
      <Specimen label="Meta with a badge">
        <PageHeader title="Button" lead="Triggers an action on the current screen." meta={<Badge tone="success">Stable</Badge>} />
      </Specimen>
      <Specimen label="Heading level 2">
        <PageHeader headingLevel={2} title="Overview" lead="Read the system, check its health." />
      </Specimen>
      <Specimen label="Narrow container, actions wrap">
        <div style={{
        maxWidth: 360
      }}>
          <PageHeader title="Typography" lead="Plex Sans for UI and body text." actions={<Button variant="secondary">Edit in Studio</Button>} />
        </div>
      </Specimen>
    </SpecimenStack>
}`,...o.parameters?.docs?.source}}};const j=["Default","TitleOnly","TwoActions","AllStates"];export{o as AllStates,r as Default,s as TitleOnly,i as TwoActions,j as __namedExportsOrder,v as default};
