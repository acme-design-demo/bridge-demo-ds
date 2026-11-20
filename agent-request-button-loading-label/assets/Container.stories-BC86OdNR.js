import{j as e}from"./iframe-C39eZITx.js";import{D as t}from"./LayoutDemo-Dw3PBfxg.js";import{S as i,b as l}from"./StateGrid-2rAOCvic.js";import{C as n}from"./Container-ZNzqmf-2.js";import"./preload-helper-PPVm8Dsz.js";const S={title:"Layout/Container",component:n,args:{size:"lg",padding:"md"},argTypes:{size:{control:"inline-radio",options:["sm","md","lg","xl","full"]},padding:{control:"inline-radio",options:["none","sm","md","lg"]},render:{control:!1}},parameters:{layout:"fullscreen"}},r={render:a=>e.jsx(n,{...a,children:e.jsx(t,{tall:!0,children:"Page content, centered at the lg width (960px)"})})},d=[{size:"sm",label:"sm 640: forms, reading"},{size:"md",label:"md 720"},{size:"lg",label:"lg 960: settings"},{size:"xl",label:"xl 1200: dashboards, tables"}],s={render:()=>e.jsx(i,{children:e.jsx(l,{label:"Sizes",children:e.jsx("div",{style:{display:"grid",gap:"var(--space-3)",width:"100%"},children:d.map(({size:a,label:o})=>e.jsx(n,{size:a,padding:"none",children:e.jsx(t,{children:o})},a))})})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Container {...args}>
      <DemoBox tall>Page content, centered at the lg width (960px)</DemoBox>
    </Container>
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenStack>
      <Specimen label="Sizes">
        <div style={{
        display: 'grid',
        gap: 'var(--space-3)',
        width: '100%'
      }}>
          {SIZES.map(({
          size,
          label
        }) => <Container key={size} size={size} padding="none">
              <DemoBox>{label}</DemoBox>
            </Container>)}
        </div>
      </Specimen>
    </SpecimenStack>
}`,...s.parameters?.docs?.source}}};const u=["Default","AllStates"];export{s as AllStates,r as Default,u as __namedExportsOrder,S as default};
