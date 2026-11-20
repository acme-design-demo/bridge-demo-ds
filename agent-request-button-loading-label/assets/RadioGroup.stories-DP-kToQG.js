import{j as e}from"./iframe-C39eZITx.js";import{S as n,a as c,b as m}from"./StateGrid-2rAOCvic.js";import{R as l,a as r}from"./RadioGroup-CjEk8GsC.js";import"./preload-helper-PPVm8Dsz.js";import"./RadioGroup.module-By0Tk5aS.js";import"./RadioRoot-qL-XHdUf.js";import"./useControlled-C2dEVo6h.js";import"./composite-D1d9lgzi.js";import"./CompositeRoot-D6dLPKAl.js";import"./CompositeList-BMhZK_ur.js";import"./useCompositeListItem-CzV-ZnVM.js";import"./isElementDisabled-CwHw_lZC.js";import"./useLabelableId-pAjvY1jM.js";import"./useFieldValidation-BHx4iXkJ.js";import"./FieldsetRootContext-B3zMziWd.js";import"./useValueChanged-iaW_aQ2H.js";import"./CompositeItem-D_XGV9Mr.js";import"./useCompositeItem-D-QgrSzF.js";import"./FieldItemContext-DhG4-jcP.js";import"./useAriaLabelledBy-B9d6y81L.js";import"./serializeValue-B8e3iXO-.js";const I={title:"Forms/RadioGroup",component:l,args:{label:"Merge strategy",defaultValue:"squash",children:null},argTypes:{orientation:{control:"inline-radio",options:["vertical","horizontal"]}}},d=e.jsxs(e.Fragment,{children:[e.jsx(r,{value:"merge",label:"Merge commit",description:"Keeps every commit from the branch."}),e.jsx(r,{value:"squash",label:"Squash and merge",description:"One commit per pull request. Recommended for token changes."}),e.jsx(r,{value:"rebase",label:"Rebase and merge"})]}),o={render:a=>e.jsx(l,{...a,children:d})},s={args:{label:"Theme",orientation:"horizontal",defaultValue:"light"},render:a=>e.jsxs(l,{...a,children:[e.jsx(r,{value:"light",label:"Light"}),e.jsx(r,{value:"dark",label:"Dark"}),e.jsx(r,{value:"system",label:"System"})]})},i={args:{defaultValue:void 0,required:!0,error:"Pick a merge strategy before you publish."},render:a=>e.jsx(l,{...a,children:d})},t={render:()=>e.jsxs(n,{children:[e.jsx(c,{columns:[{label:"Default"},{label:"Hover",pseudo:"hover"},{label:"Focus visible",pseudo:"focus-visible"}],rows:[{label:"Unselected",value:"unchecked"},{label:"Selected",value:"checked"},{label:"Disabled",value:"disabled"},{label:"Disabled selected",value:"disabledChecked"}],render:(a,u)=>e.jsx(l,{label:`${a} ${u.label}`,hideLabel:!0,defaultValue:a==="checked"||a==="disabledChecked"?"a":void 0,disabled:a.startsWith("disabled"),children:e.jsx(r,{value:"a",label:"Squash and merge"})})}),e.jsx(m,{label:"Invalid",children:e.jsx(l,{label:"Merge strategy",required:!0,error:"Pick a merge strategy before you publish.",children:d})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <RadioGroup {...args}>{options}</RadioGroup>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Theme',
    orientation: 'horizontal',
    defaultValue: 'light'
  },
  render: args => <RadioGroup {...args}>
      <Radio value="light" label="Light" />
      <Radio value="dark" label="Dark" />
      <Radio value="system" label="System" />
    </RadioGroup>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: undefined,
    required: true,
    error: 'Pick a merge strategy before you publish.'
  },
  render: args => <RadioGroup {...args}>{options}</RadioGroup>
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
      label: 'Unselected',
      value: 'unchecked'
    }, {
      label: 'Selected',
      value: 'checked'
    }, {
      label: 'Disabled',
      value: 'disabled'
    }, {
      label: 'Disabled selected',
      value: 'disabledChecked'
    }]} render={(row, col) => <RadioGroup label={\`\${row} \${col.label}\`} hideLabel defaultValue={row === 'checked' || row === 'disabledChecked' ? 'a' : undefined} disabled={row.startsWith('disabled')}>
            <Radio value="a" label="Squash and merge" />
          </RadioGroup>} />
      <Specimen label="Invalid">
        <RadioGroup label="Merge strategy" required error="Pick a merge strategy before you publish.">
          {options}
        </RadioGroup>
      </Specimen>
    </SpecimenStack>
}`,...t.parameters?.docs?.source}}};const L=["Default","Horizontal","Invalid","AllStates"];export{t as AllStates,o as Default,s as Horizontal,i as Invalid,L as __namedExportsOrder,I as default};
