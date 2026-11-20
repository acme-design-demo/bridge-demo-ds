import{j as e}from"./iframe-DXKUr0Oy.js";import{S as d,a as c,b as m}from"./StateGrid-XOvQ1EHh.js";import{S as i}from"./Slider-CXDPf7VV.js";import"./preload-helper-PPVm8Dsz.js";import"./Field-BDqUGIo2.js";import"./useLabelableId-CSZVJFjq.js";import"./FieldsetRootContext-DJ8oDLFy.js";import"./useFieldValidation-8rMq9P0G.js";import"./useRegisteredLabelId-m5lwGR0I.js";import"./FieldItemContext-CvKyGhJ-.js";import"./useControlled-DBMtfaiZ.js";import"./areArraysEqual-DROtyGZu.js";import"./useValueChanged-BPkaUzIM.js";import"./CompositeList-C8aoU88U.js";import"./useCompositeListItem-gjaH6HOu.js";import"./resolveAriaLabelledBy-CqSGvM1m.js";import"./usePressAndHold-CAh0avj-.js";import"./valueToPercent-D5LwnO_k.js";import"./PrehydrationScript-COLnFH9D.js";import"./CSPContext-CCXS5gcm.js";import"./formatNumber-BpqCpru1.js";import"./stringifyLocale-BMPUsiav.js";import"./composite-DhWHhwUi.js";const H={title:"Forms/Slider",component:i,args:{label:"Minimum contrast",defaultValue:4.5,min:3,max:7,step:.5,hint:"Pairs below this ratio fail the token build."}},s=[a=>e.jsx("div",{style:{maxWidth:400},children:e.jsx(a,{})})],r={decorators:s},n={decorators:s,args:{label:"Spacing range",hint:"Steps shown in the scale preview.",defaultValue:[8,32],min:0,max:64,step:4}},l={decorators:s,args:{label:"Scrim opacity",hint:void 0,defaultValue:.48,min:0,max:1,step:.01,format:{style:"percent"}}},t={render:()=>e.jsxs(d,{children:[e.jsx(c,{columns:[{label:"Default"},{label:"Hover",pseudo:"hover"},{label:"Focus visible",pseudo:"focus-visible"}],rows:[{label:"Default",value:"default"},{label:"Invalid",value:"invalid"},{label:"Disabled",value:"disabled"}],render:(a,o)=>e.jsx("div",{style:{width:240},children:e.jsx(i,{label:`Opacity ${a} ${o.label}`,hideLabel:!0,defaultValue:40,disabled:a==="disabled",error:a==="invalid"?"Keep it above 50.":void 0})})}),e.jsx(m,{label:"Range",children:e.jsx("div",{style:{width:320},children:e.jsx(i,{label:"Spacing range",defaultValue:[8,32],min:0,max:64,step:4})})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  decorators: narrow
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  decorators: narrow,
  args: {
    label: 'Spacing range',
    hint: 'Steps shown in the scale preview.',
    defaultValue: [8, 32],
    min: 0,
    max: 64,
    step: 4
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  decorators: narrow,
  args: {
    label: 'Scrim opacity',
    hint: undefined,
    defaultValue: 0.48,
    min: 0,
    max: 1,
    step: 0.01,
    format: {
      style: 'percent'
    }
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
      label: 'Default',
      value: 'default'
    }, {
      label: 'Invalid',
      value: 'invalid'
    }, {
      label: 'Disabled',
      value: 'disabled'
    }]} render={(row, col) => <div style={{
      width: 240
    }}>
            <Slider label={\`Opacity \${row} \${col.label}\`} hideLabel defaultValue={40} disabled={row === 'disabled'} error={row === 'invalid' ? 'Keep it above 50.' : undefined} />
          </div>} />
      <Specimen label="Range">
        <div style={{
        width: 320
      }}>
          <Slider label="Spacing range" defaultValue={[8, 32]} min={0} max={64} step={4} />
        </div>
      </Specimen>
    </SpecimenStack>
}`,...t.parameters?.docs?.source}}};const I=["Default","Range","Percent","AllStates"];export{t as AllStates,r as Default,l as Percent,n as Range,I as __namedExportsOrder,H as default};
