import{j as a}from"./iframe-DXKUr0Oy.js";import{S as o,a as c,b as p}from"./StateGrid-XOvQ1EHh.js";import{C as n}from"./Checkbox-D6lL853r.js";import"./preload-helper-PPVm8Dsz.js";import"./check-Be9-HUDz.js";import"./minus-BDi4_1s5.js";import"./useControlled-DBMtfaiZ.js";import"./useLabelableId-CSZVJFjq.js";import"./FieldItemContext-CvKyGhJ-.js";import"./useAriaLabelledBy-Cuc0zZXq.js";import"./useValueChanged-BPkaUzIM.js";const x={title:"Forms/Checkbox",component:n,args:{label:"Notify reviewers when I open a pull request"}},r={},s={args:{defaultChecked:!0}},l={args:{label:"All tokens",indeterminate:!0}},d={args:{label:"Require two approvals",description:"Token changes merge only after a designer and an engineer approve."}},t={args:{disabled:!0,defaultChecked:!0}},i={render:()=>a.jsxs(o,{children:[a.jsx(c,{columns:[{label:"Default"},{label:"Hover",pseudo:"hover"},{label:"Focus visible",pseudo:"focus-visible"}],rows:[{label:"Unchecked",value:"unchecked"},{label:"Checked",value:"checked"},{label:"Indeterminate",value:"indeterminate"},{label:"Invalid",value:"invalid"},{label:"Disabled",value:"disabled"},{label:"Disabled checked",value:"disabledChecked"}],render:e=>a.jsx(n,{label:"Dark theme",defaultChecked:e==="checked"||e==="disabledChecked",indeterminate:e==="indeterminate"||void 0,invalid:e==="invalid",disabled:e==="disabled"||e==="disabledChecked"})}),a.jsx(p,{label:"With description",children:a.jsx(n,{label:"Require two approvals",description:"Token changes merge only after a designer and an engineer approve.",defaultChecked:!0})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'All tokens',
    indeterminate: true
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Require two approvals',
    description: 'Token changes merge only after a designer and an engineer approve.'
  }
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenStack>
      <StateGrid<Row> columns={[{
      label: 'Default'
    }, {
      label: 'Hover',
      pseudo: 'hover'
    }, {
      label: 'Focus visible',
      pseudo: 'focus-visible'
    }]} rows={[{
      label: 'Unchecked',
      value: 'unchecked'
    }, {
      label: 'Checked',
      value: 'checked'
    }, {
      label: 'Indeterminate',
      value: 'indeterminate'
    }, {
      label: 'Invalid',
      value: 'invalid'
    }, {
      label: 'Disabled',
      value: 'disabled'
    }, {
      label: 'Disabled checked',
      value: 'disabledChecked'
    }]} render={row => <Checkbox label="Dark theme" defaultChecked={row === 'checked' || row === 'disabledChecked'} indeterminate={row === 'indeterminate' || undefined} invalid={row === 'invalid'} disabled={row === 'disabled' || row === 'disabledChecked'} />} />
      <Specimen label="With description">
        <Checkbox label="Require two approvals" description="Token changes merge only after a designer and an engineer approve." defaultChecked />
      </Specimen>
    </SpecimenStack>
}`,...i.parameters?.docs?.source}}};const w=["Default","Checked","Indeterminate","WithDescription","Disabled","AllStates"];export{i as AllStates,s as Checked,r as Default,t as Disabled,l as Indeterminate,d as WithDescription,w as __namedExportsOrder,x as default};
