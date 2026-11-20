import{j as e}from"./iframe-C39eZITx.js";import{S as n,a as u,b as m}from"./StateGrid-2rAOCvic.js";import{N as l}from"./NumberField-Cdn5s7wn.js";import"./preload-helper-PPVm8Dsz.js";import"./Field-6QnWmBSd.js";import"./useLabelableId-pAjvY1jM.js";import"./FieldsetRootContext-B3zMziWd.js";import"./useFieldValidation-BHx4iXkJ.js";import"./useRegisteredLabelId-cipmxtEU.js";import"./FieldItemContext-DhG4-jcP.js";import"./minus-DOgofFiA.js";import"./plus-fksgzYP8.js";import"./useControlled-C2dEVo6h.js";import"./formatNumber-BpqCpru1.js";import"./stringifyLocale-BMPUsiav.js";import"./usePressAndHold-C-DpeTUe.js";import"./useValueChanged-iaW_aQ2H.js";const R={title:"Forms/NumberField",component:l,args:{label:"Required approvals",defaultValue:2,min:1,max:5,hint:"Reviews needed before a token change merges."},argTypes:{size:{control:"inline-radio",options:["sm","md","lg"]}}},d=[a=>e.jsx("div",{style:{maxWidth:240},children:e.jsx(a,{})})],r={decorators:d},s={decorators:d,args:{label:"Base spacing",hint:void 0,defaultValue:4,min:1,max:16,suffix:"px"}},i={decorators:d,args:{defaultValue:0,error:"Use at least 1 approval."}},o={render:()=>e.jsxs(n,{children:[e.jsx(u,{columns:[{label:"Default"},{label:"Hover",pseudo:"hover"},{label:"Focus",pseudo:"focus-visible"}],rows:[{label:"Default",value:"default"},{label:"Invalid",value:"invalid"},{label:"Disabled",value:"disabled"},{label:"Read only",value:"readonly"}],render:(a,t)=>e.jsx("div",{style:{width:180},children:e.jsx(l,{label:`Approvals ${a} ${t.label}`,hideLabel:!0,defaultValue:2,min:1,max:5,disabled:a==="disabled",readOnly:a==="readonly",error:a==="invalid"?"Use 1 to 5.":void 0})})}),e.jsx(m,{label:"Sizes and unit",children:e.jsxs("div",{style:{display:"grid",gap:12,width:200},children:[e.jsx(l,{label:"Small",size:"sm",defaultValue:8,suffix:"px"}),e.jsx(l,{label:"Medium",defaultValue:16,suffix:"px"}),e.jsx(l,{label:"Large",size:"lg",defaultValue:24,suffix:"px"})]})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  decorators: narrow
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  decorators: narrow,
  args: {
    label: 'Base spacing',
    hint: undefined,
    defaultValue: 4,
    min: 1,
    max: 16,
    suffix: 'px'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  decorators: narrow,
  args: {
    defaultValue: 0,
    error: 'Use at least 1 approval.'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenStack>
      <StateGrid<Row> columns={[{
      label: 'Default'
    }, {
      label: 'Hover',
      pseudo: 'hover'
    }, {
      label: 'Focus',
      pseudo: 'focus-visible'
    }]} rows={[{
      label: 'Default',
      value: 'default'
    }, {
      label: 'Invalid',
      value: 'invalid'
    }, {
      label: 'Disabled',
      value: 'disabled'
    }, {
      label: 'Read only',
      value: 'readonly'
    }]} render={(row, col) => <div style={{
      width: 180
    }}>
            <NumberField label={\`Approvals \${row} \${col.label}\`} hideLabel defaultValue={2} min={1} max={5} disabled={row === 'disabled'} readOnly={row === 'readonly'} error={row === 'invalid' ? 'Use 1 to 5.' : undefined} />
          </div>} />
      <Specimen label="Sizes and unit">
        <div style={{
        display: 'grid',
        gap: 12,
        width: 200
      }}>
          <NumberField label="Small" size="sm" defaultValue={8} suffix="px" />
          <NumberField label="Medium" defaultValue={16} suffix="px" />
          <NumberField label="Large" size="lg" defaultValue={24} suffix="px" />
        </div>
      </Specimen>
    </SpecimenStack>
}`,...o.parameters?.docs?.source}}};const U=["Default","WithUnit","Invalid","AllStates"];export{o as AllStates,r as Default,i as Invalid,s as WithUnit,U as __namedExportsOrder,R as default};
