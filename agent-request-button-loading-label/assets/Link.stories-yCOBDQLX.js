import{j as e}from"./iframe-C39eZITx.js";import{S as i,a as l,b as c}from"./StateGrid-2rAOCvic.js";import{L as t}from"./Link-44_TUs-4.js";import"./preload-helper-PPVm8Dsz.js";import"./VisuallyHidden-Dv77UG8G.js";const S={title:"Actions/Link",component:t,args:{href:"#tokens",children:"Read the token guidelines",variant:"inline"},argTypes:{variant:{control:"inline-radio",options:["inline","standalone","subtle"]},render:{control:!1}}},n={render:o=>e.jsxs("p",{style:{maxWidth:"60ch",margin:0},children:["Semantic tokens alias primitives per theme. ",e.jsx(t,{...o})," before you add a new one."]})},r={args:{variant:"standalone",children:"View all components"}},a={args:{external:!0,href:"https://www.designtokens.org/",children:"DTCG specification"}},d=[{label:"Inline",value:"inline"},{label:"Standalone",value:"standalone"},{label:"Subtle",value:"subtle"}],s={render:()=>e.jsxs(i,{children:[e.jsx(l,{columns:[{label:"Default"},{label:"Hover",pseudo:"hover"},{label:"Focus visible",pseudo:"focus-visible"}],rows:d,render:o=>e.jsx(t,{variant:o,href:"#changelog",children:"Changelog"})}),e.jsx(c,{label:"External",children:e.jsx(t,{external:!0,href:"https://www.designtokens.org/",children:"DTCG specification"})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <p style={{
    maxWidth: '60ch',
    margin: 0
  }}>
      Semantic tokens alias primitives per theme. <Link {...args} /> before you add a new one.
    </p>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'standalone',
    children: 'View all components'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    external: true,
    href: 'https://www.designtokens.org/',
    children: 'DTCG specification'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenStack>
      <StateGrid columns={[{
      label: 'Default'
    }, {
      label: 'Hover',
      pseudo: 'hover'
    }, {
      label: 'Focus visible',
      pseudo: 'focus-visible'
    }]} rows={ROWS} render={variant => <Link variant={variant} href="#changelog">
            Changelog
          </Link>} />
      <Specimen label="External">
        <Link external href="https://www.designtokens.org/">DTCG specification</Link>
      </Specimen>
    </SpecimenStack>
}`,...s.parameters?.docs?.source}}};const f=["Inline","Standalone","External","AllStates"];export{s as AllStates,a as External,n as Inline,r as Standalone,f as __namedExportsOrder,S as default};
