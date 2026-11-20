import{ch as t,j as e,a as o,ci as m}from"./iframe-DXKUr0Oy.js";import{S as u,b as s}from"./StateGrid-XOvQ1EHh.js";import{P as c}from"./pencil-CBvXjJO3.js";import{C as l}from"./copy-BMk5mwzx.js";import{G as i}from"./git-branch-DwfZwmkk.js";import{T as p}from"./trash-C5u_CGeY.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"Overlays/Tooltip",component:t,args:{content:"Copy token name",side:"top",children:e.jsx(o,{icon:l,label:"Copy token name"})},argTypes:{side:{control:"inline-radio",options:["top","bottom","left","right"]},children:{control:!1}},parameters:{layout:"centered"},decorators:[d=>e.jsx(m,{children:e.jsx(d,{})})]},n={},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--space-1)"},children:[e.jsx(t,{content:"Edit token",children:e.jsx(o,{icon:c,label:"Edit token"})}),e.jsx(t,{content:"Copy token name",children:e.jsx(o,{icon:l,label:"Copy token name"})}),e.jsx(t,{content:"Create branch",children:e.jsx(o,{icon:i,label:"Create branch"})}),e.jsx(t,{content:"Delete token",children:e.jsx(o,{icon:p,label:"Delete token"})})]})},r={parameters:{layout:"padded"},render:()=>e.jsxs(u,{children:[e.jsx(s,{label:"Sides (open)",children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-24)",padding:"var(--space-12) var(--space-24)"},children:[e.jsx(t,{content:"Top",side:"top",defaultOpen:!0,children:e.jsx(o,{icon:c,label:"Top",variant:"secondary"})}),e.jsx(t,{content:"Bottom",side:"bottom",defaultOpen:!0,children:e.jsx(o,{icon:l,label:"Bottom",variant:"secondary"})}),e.jsx(t,{content:"Left",side:"left",defaultOpen:!0,children:e.jsx(o,{icon:i,label:"Left",variant:"secondary"})}),e.jsx(t,{content:"Right",side:"right",defaultOpen:!0,children:e.jsx(o,{icon:p,label:"Right",variant:"secondary"})})]})}),e.jsx(s,{label:"Long text wraps and balances",children:e.jsx("div",{style:{padding:"var(--space-12) var(--space-24) 0"},children:e.jsx(t,{content:"Publishing is blocked until a design owner and a tech owner approve",side:"bottom",defaultOpen:!0,children:e.jsx(o,{icon:i,label:"Publishing is blocked until a design owner and a tech owner approve",variant:"secondary"})})})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--space-1)'
  }}>
      <Tooltip content="Edit token"><IconButton icon={Pencil} label="Edit token" /></Tooltip>
      <Tooltip content="Copy token name"><IconButton icon={Copy} label="Copy token name" /></Tooltip>
      <Tooltip content="Create branch"><IconButton icon={GitBranch} label="Create branch" /></Tooltip>
      <Tooltip content="Delete token"><IconButton icon={Trash2} label="Delete token" /></Tooltip>
    </div>
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <SpecimenStack>
      <Specimen label="Sides (open)">
        <div style={{
        display: 'flex',
        gap: 'var(--space-24)',
        padding: 'var(--space-12) var(--space-24)'
      }}>
          <Tooltip content="Top" side="top" defaultOpen><IconButton icon={Pencil} label="Top" variant="secondary" /></Tooltip>
          <Tooltip content="Bottom" side="bottom" defaultOpen><IconButton icon={Copy} label="Bottom" variant="secondary" /></Tooltip>
          <Tooltip content="Left" side="left" defaultOpen><IconButton icon={GitBranch} label="Left" variant="secondary" /></Tooltip>
          <Tooltip content="Right" side="right" defaultOpen><IconButton icon={Trash2} label="Right" variant="secondary" /></Tooltip>
        </div>
      </Specimen>
      <Specimen label="Long text wraps and balances">
        <div style={{
        padding: 'var(--space-12) var(--space-24) 0'
      }}>
          <Tooltip content="Publishing is blocked until a design owner and a tech owner approve" side="bottom" defaultOpen>
            <IconButton icon={GitBranch} label="Publishing is blocked until a design owner and a tech owner approve" variant="secondary" />
          </Tooltip>
        </div>
      </Specimen>
    </SpecimenStack>
}`,...r.parameters?.docs?.source}}};const j=["Default","Toolbar","AllStates"];export{r as AllStates,n as Default,a as Toolbar,j as __namedExportsOrder,g as default};
