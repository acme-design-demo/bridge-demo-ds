import{j as e}from"./iframe-DXKUr0Oy.js";import{S as d,a as v,b as u}from"./StateGrid-XOvQ1EHh.js";import{S as t,a as r,b as a,L as p,c as b,d as m}from"./SidebarNav-e4_YAuaK.js";import{G as o}from"./git-pull-request-BcUW4Ke8.js";import{P as h}from"./palette-CjLOoysi.js";import{B as S,R as x}from"./rotate-ccw-clock-C8uz09sb.js";import"./preload-helper-PPVm8Dsz.js";import"./chevron-down-CNwx0GXN.js";import"./useCollapsiblePanel-Blycelrb.js";import"./useControlled-DBMtfaiZ.js";const F={title:"Navigation/SidebarNav",component:t,args:{"aria-label":"Library"}},n=({label:i="Library"})=>e.jsxs(t,{"aria-label":i,children:[e.jsx(r,{children:e.jsx(a,{href:"#overview",icon:p,children:"Overview"})}),e.jsxs(r,{title:"Library",children:[e.jsx(a,{href:"#tokens",icon:h,active:!0,children:"Tokens"}),e.jsx(a,{href:"#components",icon:S,children:"Components"}),e.jsx(a,{href:"#changelog",icon:x,children:"Changelog"})]}),e.jsxs(r,{title:"Governance",collapsible:!0,children:[e.jsx(a,{href:"#reviews",icon:o,count:3,children:"Reviews"}),e.jsx(a,{href:"#contrast",icon:b,children:"Contrast checks"})]}),e.jsx(r,{title:"Workspace",collapsible:!0,defaultOpen:!1,children:e.jsx(a,{href:"#settings",icon:m,children:"Settings"})})]}),s={render:()=>e.jsx("div",{style:{width:248},children:e.jsx(n,{})})},l={render:()=>e.jsxs(d,{children:[e.jsx(v,{columns:[{label:"Default"},{label:"Hover",pseudo:"hover"},{label:"Focus visible",pseudo:"focus-visible"},{label:"Pressed",pseudo:"active"}],rows:[{label:"Item",value:!1},{label:"Current page",value:!0}],render:(i,c)=>e.jsx("div",{style:{width:200},children:e.jsx(t,{"aria-label":`${i?"Current":"Item"} ${c.label}`,children:e.jsx(r,{children:e.jsx(a,{href:"#reviews",icon:o,count:3,active:i,children:"Reviews"})})})})}),e.jsx(u,{label:"Full navigation (sections, collapsible, counts)",children:e.jsx("div",{style:{width:248},children:e.jsx(n,{label:"Full navigation"})})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 248
  }}><AppNav /></div>
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
    }]} rows={[{
      label: 'Item',
      value: false
    }, {
      label: 'Current page',
      value: true
    }]} render={(active, col) => <div style={{
      width: 200
    }}>
            <SidebarNav aria-label={\`\${active ? 'Current' : 'Item'} \${col.label}\`}>
              <SidebarNavSection>
                <SidebarNavItem href="#reviews" icon={GitPullRequest} count={3} active={active}>
                  Reviews
                </SidebarNavItem>
              </SidebarNavSection>
            </SidebarNav>
          </div>} />
      <Specimen label="Full navigation (sections, collapsible, counts)">
        <div style={{
        width: 248
      }}>
          <AppNav label="Full navigation" />
        </div>
      </Specimen>
    </SpecimenStack>
}`,...l.parameters?.docs?.source}}};const G=["Default","AllStates"];export{l as AllStates,s as Default,G as __namedExportsOrder,F as default};
