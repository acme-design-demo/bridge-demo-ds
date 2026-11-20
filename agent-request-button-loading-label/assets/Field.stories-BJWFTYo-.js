import{j as e}from"./iframe-C39eZITx.js";import{F as a}from"./Field-6QnWmBSd.js";import{I as s}from"./Input-iwnLpKGS.js";import"./preload-helper-PPVm8Dsz.js";import"./useLabelableId-pAjvY1jM.js";import"./FieldsetRootContext-B3zMziWd.js";import"./useFieldValidation-BHx4iXkJ.js";import"./useRegisteredLabelId-cipmxtEU.js";import"./FieldItemContext-DhG4-jcP.js";import"./Input-DqWER9-0.js";import"./useValueChanged-iaW_aQ2H.js";const F={title:"Forms/Field",component:a,args:{label:"Repository",description:"Owner and name, like acme/design-tokens.",children:null},decorators:[r=>e.jsx("div",{style:{maxWidth:360},children:e.jsx(r,{})})]},d={render:r=>e.jsx(a,{...r,children:e.jsx(s,{placeholder:"acme/design-tokens"})})},l={args:{error:"Repository not found. Check the owner and the name."},render:r=>e.jsx(a,{...r,children:e.jsx(s,{defaultValue:"acme/desing-tokens"})})},i={args:{required:!0},render:r=>e.jsx(a,{...r,children:e.jsx(s,{})})},t={args:{disabled:!0},render:r=>e.jsx(a,{...r,children:e.jsx(s,{defaultValue:"acme/design-tokens"})})},o={render:()=>e.jsxs("div",{style:{display:"grid",gap:24},children:[e.jsx(a,{label:"Default",description:"Description sits under the label.",children:e.jsx(s,{placeholder:"Placeholder"})}),e.jsx(a,{label:"Required",required:!0,children:e.jsx(s,{})}),e.jsx(a,{label:"Invalid",error:"Name the problem and how to fix it.",children:e.jsx(s,{defaultValue:"wrong value"})}),e.jsx(a,{label:"Disabled",disabled:!0,description:"Explains why it is disabled.",children:e.jsx(s,{defaultValue:"locked"})})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Field {...args}><Input placeholder="acme/design-tokens" /></Field>
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    error: 'Repository not found. Check the owner and the name.'
  },
  render: args => <Field {...args}><Input defaultValue="acme/desing-tokens" /></Field>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  },
  render: args => <Field {...args}><Input /></Field>
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <Field {...args}><Input defaultValue="acme/design-tokens" /></Field>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 24
  }}>
      <Field label="Default" description="Description sits under the label."><Input placeholder="Placeholder" /></Field>
      <Field label="Required" required><Input /></Field>
      <Field label="Invalid" error="Name the problem and how to fix it."><Input defaultValue="wrong value" /></Field>
      <Field label="Disabled" disabled description="Explains why it is disabled."><Input defaultValue="locked" /></Field>
    </div>
}`,...o.parameters?.docs?.source}}};const I=["Default","Invalid","Required","Disabled","AllStates"];export{o as AllStates,d as Default,t as Disabled,l as Invalid,i as Required,I as __namedExportsOrder,F as default};
