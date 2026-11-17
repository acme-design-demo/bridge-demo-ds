import{j as e}from"./iframe-RdPw3ozT.js";import{S as d,a as c,b as n}from"./StateGrid-BzzO3xCu.js";import{S as s}from"./Switch-Db4ftnGa.js";import"./preload-helper-PPVm8Dsz.js";import"./useControlled-IPaUtIGi.js";import"./useLabelableId-BAgTrws-.js";import"./useAriaLabelledBy-D4xQe9kx.js";import"./useValueChanged-DuUNTWOO.js";const w={title:"Forms/Switch",component:s,args:{label:"Auto-publish approved tokens"},argTypes:{labelPlacement:{control:"inline-radio",options:["end","start"]},size:{control:"inline-radio",options:["sm","md"]}}},l={},r={args:{defaultChecked:!0}},t={args:{description:"Publishes a new package version after two approvals."}},i={args:{labelPlacement:"start",description:"Email me when someone requests my review.",label:"Review requests"},decorators:[a=>e.jsx("div",{style:{maxWidth:480},children:e.jsx(a,{})})]},o={render:()=>e.jsxs(d,{children:[e.jsx(c,{columns:[{label:"Default"},{label:"Hover",pseudo:"hover"},{label:"Focus visible",pseudo:"focus-visible"}],rows:[{label:"Off",value:"off"},{label:"On",value:"on"},{label:"Disabled off",value:"disabledOff"},{label:"Disabled on",value:"disabledOn"}],render:a=>e.jsx(s,{label:"Dark theme",defaultChecked:a==="on"||a==="disabledOn",disabled:a.startsWith("disabled")})}),e.jsxs(n,{label:"Sizes",children:[e.jsx(s,{size:"sm",label:"Small",defaultChecked:!0}),e.jsx(s,{size:"md",label:"Medium",defaultChecked:!0})]}),e.jsx(n,{label:"Settings list (label first)",children:e.jsxs("div",{style:{display:"grid",gap:12,width:420},children:[e.jsx(s,{labelPlacement:"start",label:"Review requests",description:"Email me when someone requests my review.",defaultChecked:!0}),e.jsx(s,{labelPlacement:"start",label:"Weekly digest",description:"A summary of token changes every Monday."})]})})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'Publishes a new package version after two approvals.'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    labelPlacement: 'start',
    description: 'Email me when someone requests my review.',
    label: 'Review requests'
  },
  decorators: [S => <div style={{
    maxWidth: 480
  }}><S /></div>]
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
      label: 'Off',
      value: 'off'
    }, {
      label: 'On',
      value: 'on'
    }, {
      label: 'Disabled off',
      value: 'disabledOff'
    }, {
      label: 'Disabled on',
      value: 'disabledOn'
    }]} render={row => <Switch label="Dark theme" defaultChecked={row === 'on' || row === 'disabledOn'} disabled={row.startsWith('disabled')} />} />
      <Specimen label="Sizes">
        <Switch size="sm" label="Small" defaultChecked />
        <Switch size="md" label="Medium" defaultChecked />
      </Specimen>
      <Specimen label="Settings list (label first)">
        <div style={{
        display: 'grid',
        gap: 12,
        width: 420
      }}>
          <Switch labelPlacement="start" label="Review requests" description="Email me when someone requests my review." defaultChecked />
          <Switch labelPlacement="start" label="Weekly digest" description="A summary of token changes every Monday." />
        </div>
      </Specimen>
    </SpecimenStack>
}`,...o.parameters?.docs?.source}}};const g=["Default","On","WithDescription","SettingsRow","AllStates"];export{o as AllStates,l as Default,r as On,i as SettingsRow,t as WithDescription,g as __namedExportsOrder,w as default};
