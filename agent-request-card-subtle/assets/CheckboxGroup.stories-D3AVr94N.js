import{j as e}from"./iframe-DXKUr0Oy.js";import{S as u,b as r}from"./StateGrid-XOvQ1EHh.js";import{C as a}from"./CheckboxGroup-DqNfisGb.js";import{C as l}from"./Checkbox-D6lL853r.js";import"./preload-helper-PPVm8Dsz.js";import"./useControlled-DBMtfaiZ.js";import"./areArraysEqual-DROtyGZu.js";import"./useFieldValidation-8rMq9P0G.js";import"./useLabelableId-CSZVJFjq.js";import"./useValueChanged-BPkaUzIM.js";import"./check-Be9-HUDz.js";import"./minus-BDi4_1s5.js";import"./FieldItemContext-CvKyGhJ-.js";import"./useAriaLabelledBy-Cuc0zZXq.js";const G={title:"Forms/CheckboxGroup",component:a,args:{label:"Notify me about",children:null}},n=e.jsxs(e.Fragment,{children:[e.jsx(l,{value:"reviews",label:"Review requests"}),e.jsx(l,{value:"merges",label:"Merged pull requests"}),e.jsx(l,{value:"releases",label:"Releases",description:"Includes the changelog for each package."})]}),s={args:{defaultValue:["reviews"],description:"We send one email per event."},render:c=>e.jsx(a,{...c,children:n})},o={render:()=>e.jsxs(a,{label:"Themes to publish",allValues:["light","dark","high-contrast"],defaultValue:["light"],children:[e.jsx(l,{parent:!0,label:"All themes"}),e.jsx(l,{value:"light",label:"Light"}),e.jsx(l,{value:"dark",label:"Dark"}),e.jsx(l,{value:"high-contrast",label:"High contrast"})]})},t={args:{error:"Pick at least one reviewer group.",label:"Reviewers",required:!0},render:c=>e.jsxs(a,{...c,children:[e.jsx(l,{value:"design",label:"Design owners"}),e.jsx(l,{value:"tech",label:"Tech owners"})]})},i={render:()=>e.jsxs(u,{children:[e.jsx(r,{label:"Parent with mixed state",children:e.jsxs(a,{label:"Themes to publish",allValues:["light","dark","high-contrast"],defaultValue:["light","dark"],children:[e.jsx(l,{parent:!0,label:"All themes"}),e.jsx(l,{value:"light",label:"Light"}),e.jsx(l,{value:"dark",label:"Dark"}),e.jsx(l,{value:"high-contrast",label:"High contrast"})]})}),e.jsx(r,{label:"Horizontal",children:e.jsxs(a,{label:"Platforms",orientation:"horizontal",defaultValue:["web"],children:[e.jsx(l,{value:"web",label:"Web"}),e.jsx(l,{value:"ios",label:"iOS"}),e.jsx(l,{value:"android",label:"Android"})]})}),e.jsx(r,{label:"Invalid",children:e.jsxs(a,{label:"Reviewers",required:!0,error:"Pick at least one reviewer group.",children:[e.jsx(l,{value:"design",label:"Design owners"}),e.jsx(l,{value:"tech",label:"Tech owners"})]})}),e.jsx(r,{label:"Disabled",children:e.jsx(a,{label:"Notify me about",disabled:!0,defaultValue:["reviews"],children:n})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ['reviews'],
    description: 'We send one email per event.'
  },
  render: args => <CheckboxGroup {...args}>{items}</CheckboxGroup>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxGroup label="Themes to publish" allValues={['light', 'dark', 'high-contrast']} defaultValue={['light']}>
      <Checkbox parent label="All themes" />
      <Checkbox value="light" label="Light" />
      <Checkbox value="dark" label="Dark" />
      <Checkbox value="high-contrast" label="High contrast" />
    </CheckboxGroup>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    error: 'Pick at least one reviewer group.',
    label: 'Reviewers',
    required: true
  },
  render: args => <CheckboxGroup {...args}>
      <Checkbox value="design" label="Design owners" />
      <Checkbox value="tech" label="Tech owners" />
    </CheckboxGroup>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenStack>
      <Specimen label="Parent with mixed state">
        <CheckboxGroup label="Themes to publish" allValues={['light', 'dark', 'high-contrast']} defaultValue={['light', 'dark']}>
          <Checkbox parent label="All themes" />
          <Checkbox value="light" label="Light" />
          <Checkbox value="dark" label="Dark" />
          <Checkbox value="high-contrast" label="High contrast" />
        </CheckboxGroup>
      </Specimen>
      <Specimen label="Horizontal">
        <CheckboxGroup label="Platforms" orientation="horizontal" defaultValue={['web']}>
          <Checkbox value="web" label="Web" />
          <Checkbox value="ios" label="iOS" />
          <Checkbox value="android" label="Android" />
        </CheckboxGroup>
      </Specimen>
      <Specimen label="Invalid">
        <CheckboxGroup label="Reviewers" required error="Pick at least one reviewer group.">
          <Checkbox value="design" label="Design owners" />
          <Checkbox value="tech" label="Tech owners" />
        </CheckboxGroup>
      </Specimen>
      <Specimen label="Disabled">
        <CheckboxGroup label="Notify me about" disabled defaultValue={['reviews']}>
          {items}
        </CheckboxGroup>
      </Specimen>
    </SpecimenStack>
}`,...i.parameters?.docs?.source}}};const V=["Default","SelectAll","Invalid","AllStates"];export{i as AllStates,s as Default,t as Invalid,o as SelectAll,V as __namedExportsOrder,G as default};
