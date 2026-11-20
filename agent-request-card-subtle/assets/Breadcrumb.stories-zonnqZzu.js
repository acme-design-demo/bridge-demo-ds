import{j as e}from"./iframe-DXKUr0Oy.js";import{S as i,a as m,b as n}from"./StateGrid-XOvQ1EHh.js";import{B as o}from"./Breadcrumb-BLyahD9P.js";import"./preload-helper-PPVm8Dsz.js";import"./ellipsis-B1lmDZ-x.js";import"./Link-BExWZNa2.js";import"./VisuallyHidden-C2Zxdkmv.js";import"./chevron-right-DQLZUh9D.js";const t=[{label:"Library",href:"#library"},{label:"Components",href:"#components"},{label:"Forms",href:"#forms"},{label:"Input",href:"#input"},{label:"Accessibility"}],v={title:"Navigation/Breadcrumb",component:o,args:{items:t.slice(1)}},r={},a={args:{items:t,maxItems:3}},s={args:{items:[{label:"Tokens",href:"#tokens"},{label:"color.feedback.warning.border-subtle-hover",href:"#t"},{label:"History of changes for this token across every release"}]}},l={render:()=>e.jsxs(i,{children:[e.jsx(m,{columns:[{label:"Default"},{label:"Hover",pseudo:"hover"},{label:"Focus visible",pseudo:"focus-visible"}],rows:[{label:"Link",value:"link"}],render:(b,c)=>e.jsx(o,{"aria-label":`Breadcrumb ${c.label}`,items:t.slice(1,4)})}),e.jsx(n,{label:"Collapsed (maxItems 3)",children:e.jsx(o,{"aria-label":"Collapsed breadcrumb",items:t,maxItems:3})}),e.jsx(n,{label:"Long labels truncate",children:e.jsx(o,{"aria-label":"Long breadcrumb",items:[{label:"Tokens",href:"#tokens"},{label:"color.feedback.warning.border-subtle-hover",href:"#t"},{label:"History of changes for this token across every release"}]})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: PATH,
    maxItems: 3
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Tokens',
      href: '#tokens'
    }, {
      label: 'color.feedback.warning.border-subtle-hover',
      href: '#t'
    }, {
      label: 'History of changes for this token across every release'
    }]
  }
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
    }]} rows={[{
      label: 'Link',
      value: 'link'
    }]} render={(_, col) => <Breadcrumb aria-label={\`Breadcrumb \${col.label}\`} items={PATH.slice(1, 4)} />} />
      <Specimen label="Collapsed (maxItems 3)">
        <Breadcrumb aria-label="Collapsed breadcrumb" items={PATH} maxItems={3} />
      </Specimen>
      <Specimen label="Long labels truncate">
        <Breadcrumb aria-label="Long breadcrumb" items={[{
        label: 'Tokens',
        href: '#tokens'
      }, {
        label: 'color.feedback.warning.border-subtle-hover',
        href: '#t'
      }, {
        label: 'History of changes for this token across every release'
      }]} />
      </Specimen>
    </SpecimenStack>
}`,...l.parameters?.docs?.source}}};const x=["Default","Collapsed","LongLabels","AllStates"];export{l as AllStates,a as Collapsed,r as Default,s as LongLabels,x as __namedExportsOrder,v as default};
