import{j as e}from"./iframe-C39eZITx.js";import{S as x,a as f,b as r}from"./StateGrid-2rAOCvic.js";import{S as y,M as w,a as l,L as j,b as W}from"./SegmentedControl-Cp_msbkb.js";import"./preload-helper-PPVm8Dsz.js";import"./RadioRoot-qL-XHdUf.js";import"./useControlled-C2dEVo6h.js";import"./composite-D1d9lgzi.js";import"./CompositeRoot-D6dLPKAl.js";import"./CompositeList-BMhZK_ur.js";import"./useCompositeListItem-CzV-ZnVM.js";import"./isElementDisabled-CwHw_lZC.js";import"./useLabelableId-pAjvY1jM.js";import"./useFieldValidation-BHx4iXkJ.js";import"./FieldsetRootContext-B3zMziWd.js";import"./useValueChanged-iaW_aQ2H.js";import"./CompositeItem-D_XGV9Mr.js";import"./useCompositeItem-D-QgrSzF.js";import"./FieldItemContext-DhG4-jcP.js";import"./useAriaLabelledBy-B9d6y81L.js";import"./serializeValue-B8e3iXO-.js";const h=[{value:"comfortable",label:"Comfortable"},{value:"compact",label:"Compact"}],N={title:"Forms/SegmentedControl",component:l,args:{label:"Density",items:h,defaultValue:"comfortable",size:"md"},argTypes:{size:{control:"inline-radio",options:["sm","md"]},appearance:{control:"inline-radio",options:["default","strong"]},items:{control:!1}}},i={},o={args:{size:"sm"}},n={args:{label:"Theme",defaultValue:"light",items:[{value:"light",label:"Light",icon:y},{value:"dark",label:"Dark",icon:w}]}},d={args:{label:"Themes shown",defaultValue:"both",items:[{value:"light",label:"Light"},{value:"dark",label:"Dark"},{value:"both",label:"Both"}]}},c={args:{fullWidth:!0},decorators:[a=>e.jsx("div",{style:{maxWidth:320},children:e.jsx(a,{})})]},m={args:{disabled:!0}},t=[{value:"open",label:"Open"},{value:"you",label:"Needs you"},{value:"review",label:"In review"},{value:"ready",label:"Ready"},{value:"blocked",label:"Blocked"},{value:"shipped",label:"Shipped"},{value:"closed",label:"Closed"}],u={args:{label:"Status",appearance:"strong",items:t.slice(0,4),defaultValue:"open"}},s={args:{label:"Status",appearance:"strong",size:"sm",items:t,defaultValue:"blocked"},decorators:[a=>e.jsx("div",{style:{width:358,maxWidth:"100%",outline:"1px dashed var(--color-border-default)"},children:e.jsx(a,{})})]};function g({id:a,text:v,size:S="sm"}){return e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"var(--space-2)"},children:[e.jsx("span",{id:a,style:{color:"var(--color-text-muted)",fontSize:"var(--typography-caption-size)",fontWeight:"var(--font-weight-medium)"},children:v}),e.jsx(l,{"aria-labelledby":a,size:S,defaultValue:"bridge",items:[{value:"bridge",label:"Bridge"},{value:"ocean",label:"Ocean"}]})]})}const p={render:()=>e.jsx(g,{id:"story-preview-brand",text:"Preview brand"})},b={render:()=>e.jsxs(x,{children:[e.jsx(f,{columns:[{label:"Default"},{label:"Hover",pseudo:"hover"},{label:"Focus visible",pseudo:"focus-visible"},{label:"Active",pseudo:"active"}],rows:[{label:"Size md",value:"md"},{label:"Size sm",value:"sm"},{label:"With icons",value:"icons"},{label:"Disabled group",value:"disabled"},{label:"Disabled segment",value:"disabledItem"}],render:(a,v)=>e.jsx(l,{label:`${a} ${v.label}`,size:a==="sm"?"sm":"md",disabled:a==="disabled",defaultValue:"grid",items:[{value:"list",label:"List",icon:a==="icons"?j:void 0},{value:"grid",label:"Grid",icon:a==="icons"?W:void 0},{value:"table",label:"Table",disabled:a==="disabledItem"}]})}),e.jsx(r,{label:"External label (sm and md)",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--space-6)",alignItems:"center"},children:[e.jsx(g,{id:"all-states-label-sm",text:"Preview brand"}),e.jsx(g,{id:"all-states-label-md",text:"Preview brand",size:"md"})]})}),e.jsxs(r,{label:"Strong (Deep Harbor selection)",children:[e.jsx(l,{label:"Status strong",appearance:"strong",items:t.slice(0,4),defaultValue:"you"}),e.jsx(l,{label:"Status strong sm",appearance:"strong",size:"sm",items:t.slice(0,4),defaultValue:"you"})]}),e.jsx(r,{label:"Seven segments at phone width (scrolls sideways)",children:e.jsx("div",{style:{width:358,maxWidth:"100%"},children:e.jsx(l,{label:"Status phone",appearance:"strong",size:"sm",items:t,defaultValue:"open"})})}),e.jsx(r,{label:"Full width",children:e.jsx("div",{style:{maxWidth:320},children:e.jsx(l,{label:"Density",items:h,defaultValue:"compact",fullWidth:!0})})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Theme',
    defaultValue: 'light',
    items: [{
      value: 'light',
      label: 'Light',
      icon: Sun
    }, {
      value: 'dark',
      label: 'Dark',
      icon: Moon
    }]
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Themes shown',
    defaultValue: 'both',
    items: [{
      value: 'light',
      label: 'Light'
    }, {
      value: 'dark',
      label: 'Dark'
    }, {
      value: 'both',
      label: 'Both'
    }]
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  },
  decorators: [S => <div style={{
    maxWidth: 320
  }}><S /></div>]
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Status',
    appearance: 'strong',
    items: statuses.slice(0, 4),
    defaultValue: 'open'
  }
}`,...u.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Status',
    appearance: 'strong',
    size: 'sm',
    items: statuses,
    defaultValue: 'blocked'
  },
  decorators: [S => <div style={{
    width: 358,
    maxWidth: '100%',
    outline: '1px dashed var(--color-border-default)'
  }}><S /></div>]
}`,...s.parameters?.docs?.source},description:{story:"Seven segments in a phone-wide container: the track scrolls sideways, the page does not.",...s.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <ExternalLabel id="story-preview-brand" text="Preview brand" />
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenStack>
      <StateGrid<Row> columns={[{
      label: 'Default'
    }, {
      label: 'Hover',
      pseudo: 'hover'
    }, {
      label: 'Focus visible',
      pseudo: 'focus-visible'
    }, {
      label: 'Active',
      pseudo: 'active'
    }]} rows={[{
      label: 'Size md',
      value: 'md'
    }, {
      label: 'Size sm',
      value: 'sm'
    }, {
      label: 'With icons',
      value: 'icons'
    }, {
      label: 'Disabled group',
      value: 'disabled'
    }, {
      label: 'Disabled segment',
      value: 'disabledItem'
    }]} render={(row, col) => <SegmentedControl label={\`\${row} \${col.label}\`} size={row === 'sm' ? 'sm' : 'md'} disabled={row === 'disabled'} defaultValue="grid" items={[{
      value: 'list',
      label: 'List',
      icon: row === 'icons' ? List : undefined
    }, {
      value: 'grid',
      label: 'Grid',
      icon: row === 'icons' ? LayoutGrid : undefined
    }, {
      value: 'table',
      label: 'Table',
      disabled: row === 'disabledItem'
    }]} />} />
      <Specimen label="External label (sm and md)">
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--space-6)',
        alignItems: 'center'
      }}>
          <ExternalLabel id="all-states-label-sm" text="Preview brand" />
          <ExternalLabel id="all-states-label-md" text="Preview brand" size="md" />
        </div>
      </Specimen>
      <Specimen label="Strong (Deep Harbor selection)">
        <SegmentedControl label="Status strong" appearance="strong" items={statuses.slice(0, 4)} defaultValue="you" />
        <SegmentedControl label="Status strong sm" appearance="strong" size="sm" items={statuses.slice(0, 4)} defaultValue="you" />
      </Specimen>
      <Specimen label="Seven segments at phone width (scrolls sideways)">
        <div style={{
        width: 358,
        maxWidth: '100%'
      }}>
          <SegmentedControl label="Status phone" appearance="strong" size="sm" items={statuses} defaultValue="open" />
        </div>
      </Specimen>
      <Specimen label="Full width">
        <div style={{
        maxWidth: 320
      }}>
          <SegmentedControl label="Density" items={density} defaultValue="compact" fullWidth />
        </div>
      </Specimen>
    </SpecimenStack>
}`,...b.parameters?.docs?.source}}};const q=["Default","Small","WithIcons","ThreeOptions","FullWidth","Disabled","Strong","ManyOnPhone","WithVisibleLabel","AllStates"];export{b as AllStates,i as Default,m as Disabled,c as FullWidth,s as ManyOnPhone,o as Small,u as Strong,d as ThreeOptions,n as WithIcons,p as WithVisibleLabel,q as __namedExportsOrder,N as default};
