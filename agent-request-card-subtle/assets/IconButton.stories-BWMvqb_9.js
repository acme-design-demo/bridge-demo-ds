import{a,j as e,X as i}from"./iframe-DXKUr0Oy.js";import{S as c,a as d,b as m}from"./StateGrid-XOvQ1EHh.js";import{C as p}from"./copy-BMk5mwzx.js";import{P as b}from"./pencil-CBvXjJO3.js";import{T as u}from"./trash-C5u_CGeY.js";import{E as g}from"./ellipsis-B1lmDZ-x.js";import"./preload-helper-PPVm8Dsz.js";const h={title:"Actions/IconButton",component:a,args:{icon:b,label:"Edit token",variant:"ghost",size:"md"},argTypes:{icon:{control:!1},variant:{control:"inline-radio",options:["primary","secondary","ghost","danger"]},size:{control:"inline-radio",options:["sm","md","lg"]}}},o={},s={args:{variant:"secondary",icon:p,label:"Copy token name"}},r={args:{loading:!0}},S=[{label:"Ghost",value:"ghost"},{label:"Secondary",value:"secondary"},{label:"Primary",value:"primary"},{label:"Danger",value:"danger"}],l={render:()=>e.jsxs(c,{children:[e.jsx(d,{columns:[{label:"Default"},{label:"Hover",pseudo:"hover"},{label:"Focus visible",pseudo:"focus-visible"},{label:"Pressed",pseudo:"active"},{label:"Loading"},{label:"Disabled"}],rows:S,render:(n,t)=>e.jsx(a,{variant:n,icon:n==="danger"?u:g,label:n==="danger"?"Delete token":"More actions",loading:t.label==="Loading",disabled:t.label==="Disabled"})}),e.jsxs(m,{label:"Sizes",children:[e.jsx(a,{size:"sm",icon:i,label:"Close"}),e.jsx(a,{size:"md",icon:i,label:"Close"}),e.jsx(a,{size:"lg",icon:i,label:"Close"})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    icon: Copy,
    label: 'Copy token name'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenStack>
      <StateGrid columns={[{
      label: 'Default'
    }, {
      label: 'Hover',
      pseudo: 'hover'
    }, {
      label: 'Focus visible',
      pseudo: 'focus-visible'
    }, {
      label: 'Pressed',
      pseudo: 'active'
    }, {
      label: 'Loading'
    }, {
      label: 'Disabled'
    }]} rows={ROWS} render={(variant, col) => <IconButton variant={variant} icon={variant === 'danger' ? Trash2 : MoreHorizontal} label={variant === 'danger' ? 'Delete token' : 'More actions'} loading={col.label === 'Loading'} disabled={col.label === 'Disabled'} />} />
      <Specimen label="Sizes">
        <IconButton size="sm" icon={X} label="Close" />
        <IconButton size="md" icon={X} label="Close" />
        <IconButton size="lg" icon={X} label="Close" />
      </Specimen>
    </SpecimenStack>
}`,...l.parameters?.docs?.source}}};const j=["Default","Secondary","Loading","AllStates"];export{l as AllStates,o as Default,r as Loading,s as Secondary,j as __namedExportsOrder,h as default};
