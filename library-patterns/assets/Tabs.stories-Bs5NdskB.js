import{j as e}from"./iframe-RdPw3ozT.js";import{S as b,a as p,b as u}from"./StateGrid-BzzO3xCu.js";import{T as r,a as d,b as a,c as n}from"./Tabs-wl_80IGA.js";import{P as v}from"./palette-ChrTVtwk.js";import{B as h,R as T}from"./rotate-ccw-clock-2fjuMEUm.js";import{G as x}from"./git-pull-request-Bl4OPDCZ.js";import"./preload-helper-PPVm8Dsz.js";import"./useControlled-IPaUtIGi.js";import"./CompositeList-DFOI_bZu.js";import"./useCompositeListItem-DO1Mg_bF.js";import"./CompositeRoot-Dc1wXdH0.js";import"./isElementDisabled-CwHw_lZC.js";import"./composite-Bf66A77I.js";import"./useCompositeItem-wUl_dheB.js";import"./PrehydrationScript-CSz7rkwr.js";import"./CSPContext-ClAwLlW8.js";const P={title:"Navigation/Tabs",component:r,args:{variant:"underline",size:"md",defaultValue:"tokens"},argTypes:{variant:{control:"inline-radio",options:["underline","contained"]},size:{control:"inline-radio",options:["sm","md"]},orientation:{control:"inline-radio",options:["horizontal","vertical"]}}},i=s=>e.jsxs(r,{...s,children:[e.jsxs(d,{"aria-label":"Library views",children:[e.jsx(a,{value:"tokens",icon:v,children:"Tokens"}),e.jsx(a,{value:"components",icon:h,children:"Components"}),e.jsx(a,{value:"reviews",icon:x,count:3,children:"Reviews"}),e.jsx(a,{value:"changelog",icon:T,children:"Changelog"})]}),e.jsx(n,{value:"tokens",children:"412 tokens across 2 brands and 2 themes."}),e.jsx(n,{value:"components",children:"38 components, 4 with open changes."}),e.jsx(n,{value:"reviews",children:"3 pull requests wait for design review."}),e.jsx(n,{value:"changelog",children:"Version 1.0.0 published today."})]}),l={render:s=>e.jsx(i,{...s})},o={args:{variant:"contained"},render:s=>e.jsx(i,{...s})},t={args:{orientation:"vertical"},render:s=>e.jsx(i,{...s})},j=[{label:"Underline",value:"underline"},{label:"Contained",value:"contained"}],c={render:()=>e.jsxs(b,{children:[e.jsx(p,{columns:[{label:"Default"},{label:"Hover",pseudo:"hover"},{label:"Focus visible",pseudo:"focus-visible"}],rows:j,render:(s,m)=>e.jsx(r,{variant:s,defaultValue:"tokens",children:e.jsxs(d,{"aria-label":`${s} ${m.label}`,children:[e.jsx(a,{value:"tokens",children:"Tokens"}),e.jsx(a,{value:"components",children:"Components"}),e.jsx(a,{value:"archived",disabled:!0,children:"Archived"})]})})}),e.jsxs(u,{label:"Sizes",children:[e.jsx(r,{size:"sm",defaultValue:"a",children:e.jsxs(d,{"aria-label":"Diff view small",children:[e.jsx(a,{value:"a",children:"Unified"}),e.jsx(a,{value:"b",children:"Split"})]})}),e.jsx(r,{size:"sm",variant:"contained",defaultValue:"a",children:e.jsxs(d,{"aria-label":"Theme preview small",children:[e.jsx(a,{value:"a",children:"Light"}),e.jsx(a,{value:"b",children:"Dark"})]})})]}),e.jsx(u,{label:"Icons and counts",children:e.jsx(i,{defaultValue:"reviews"})}),e.jsx(u,{label:"Vertical",children:e.jsx(i,{defaultValue:"components",orientation:"vertical"})})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <Library {...args} />
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained'
  },
  render: args => <Library {...args} />
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  render: args => <Library {...args} />
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenStack>
      <StateGrid columns={[{
      label: 'Default'
    }, {
      label: 'Hover',
      pseudo: 'hover'
    }, {
      label: 'Focus visible',
      pseudo: 'focus-visible'
    }]} rows={VARIANTS} render={(variant, col) => <Tabs variant={variant} defaultValue="tokens">
            <TabsList aria-label={\`\${variant} \${col.label}\`}>
              {/* The forced state lands on the first tab, the selected one. */}
              <Tab value="tokens">Tokens</Tab>
              <Tab value="components">Components</Tab>
              <Tab value="archived" disabled>Archived</Tab>
            </TabsList>
          </Tabs>} />
      <Specimen label="Sizes">
        <Tabs size="sm" defaultValue="a">
          <TabsList aria-label="Diff view small">
            <Tab value="a">Unified</Tab>
            <Tab value="b">Split</Tab>
          </TabsList>
        </Tabs>
        <Tabs size="sm" variant="contained" defaultValue="a">
          <TabsList aria-label="Theme preview small">
            <Tab value="a">Light</Tab>
            <Tab value="b">Dark</Tab>
          </TabsList>
        </Tabs>
      </Specimen>
      <Specimen label="Icons and counts">
        <Library defaultValue="reviews" />
      </Specimen>
      <Specimen label="Vertical">
        <Library defaultValue="components" orientation="vertical" />
      </Specimen>
    </SpecimenStack>
}`,...c.parameters?.docs?.source}}};const $=["Underline","Contained","Vertical","AllStates"];export{c as AllStates,o as Contained,l as Underline,t as Vertical,$ as __namedExportsOrder,P as default};
