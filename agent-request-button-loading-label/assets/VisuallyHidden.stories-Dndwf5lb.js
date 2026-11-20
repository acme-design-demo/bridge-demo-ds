import{j as e,I as l}from"./iframe-C39eZITx.js";import{S as d,b as s}from"./StateGrid-2rAOCvic.js";import{V as r}from"./VisuallyHidden-Dv77UG8G.js";import{D as t}from"./download-DWRufxuJ.js";import{L as o}from"./Link-44_TUs-4.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"Foundations/VisuallyHidden",component:r,args:{children:"Download the release notes"},argTypes:{children:{control:"text"}},render:i=>e.jsx(s,{label:`Screen readers read: "${String(i.children??"")}"`,children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[e.jsx(l,{icon:t,size:"md"}),e.jsx(r,{...i})]})})},n={},a={render:()=>e.jsxs(d,{children:[e.jsx(s,{label:'Next to a symbol: screen readers read "Download the release notes"',children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[e.jsx(l,{icon:t,size:"md"}),e.jsx(r,{children:"Download the release notes"})]})}),e.jsx(s,{label:'After an external link: screen readers add "(opens in a new tab)"',children:e.jsx(o,{href:"#",external:!0,children:"Release notes"})}),e.jsx(s,{label:'Naming a loading region: screen readers read "Loading tokens"',children:e.jsxs("div",{"aria-busy":"true",children:[e.jsx(r,{children:"Loading tokens"}),e.jsx("span",{"aria-hidden":"true",children:"..."})]})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenStack>
      <Specimen label={'Next to a symbol: screen readers read "Download the release notes"'}>
        <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8
      }}>
          <Icon icon={Download} size="md" />
          <VisuallyHidden>Download the release notes</VisuallyHidden>
        </span>
      </Specimen>
      <Specimen label={'After an external link: screen readers add "(opens in a new tab)"'}>
        <Link href="#" external>
          Release notes
        </Link>
      </Specimen>
      <Specimen label={'Naming a loading region: screen readers read "Loading tokens"'}>
        <div aria-busy="true">
          <VisuallyHidden>Loading tokens</VisuallyHidden>
          <span aria-hidden="true">...</span>
        </div>
      </Specimen>
    </SpecimenStack>
}`,...a.parameters?.docs?.source}}};const S=["Default","AllStates"];export{a as AllStates,n as Default,S as __namedExportsOrder,g as default};
