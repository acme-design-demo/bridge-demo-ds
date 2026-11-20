import{j as e}from"./iframe-C39eZITx.js";import{S as v,a as h,b as u}from"./StateGrid-2rAOCvic.js";import{T as r}from"./TokenValue-D8M5v-rS.js";import"./preload-helper-PPVm8Dsz.js";const x={title:"Data display/TokenValue",component:r,args:{name:"color.action.primary.bg",value:"{color.harbor.700}",resolved:"#0B4A8B",size:"md",previous:!1},argTypes:{size:{control:"inline-radio",options:["sm","md"]},swatch:{control:"text"}}},s={},l={args:{name:"color.harbor.700",value:"#0B4A8B",resolved:void 0}},n={args:{name:void 0,value:"{color.harbor.700}",resolved:"#0B4A8B"}},c={args:{name:"space.4",value:"16px",resolved:void 0}},t={args:{size:"sm"}},i={args:{swatch:!1}},a={render:()=>e.jsxs("span",{style:{display:"inline-flex",flexWrap:"wrap",alignItems:"center",gap:"var(--space-2)"},children:[e.jsx(r,{value:"{color.harbor.600}",resolved:"#1B5C9E",previous:!0}),e.jsx(r,{value:"{color.harbor.700}",resolved:"#0B4A8B"})]})},o={render:()=>e.jsx("div",{style:{width:220},children:e.jsx(r,{name:"color.feedback.warning.border.subtle",value:"{color.sand.300}",resolved:"oklch(0.86 0.06 85)"})})},b={alias:{name:"color.action.primary.bg",value:"{color.harbor.700}",resolved:"#0B4A8B"},literal:{name:"color.surface.default",value:"#FFFFFF"},dimension:{name:"radius.control",value:"{radius.md}",resolved:"8px"},previous:{name:"color.text.muted",value:"{color.slate.500}",resolved:"#5B6472",previous:!0},valueOnly:{value:"oklch(0.55 0.12 250)"}},d={render:()=>e.jsxs(v,{children:[e.jsx(h,{columns:[{label:"md"},{label:"sm"}],rows:[{label:"Alias with resolved color",value:"alias"},{label:"White literal (hairline)",value:"literal"},{label:"Dimension, no swatch",value:"dimension"},{label:"Previous value",value:"previous"},{label:"Value only",value:"valueOnly"}],render:(m,p)=>e.jsx(r,{...b[m],size:p.label==="sm"?"sm":"md"})}),e.jsx(u,{label:"Before and after in a sentence",children:e.jsxs("p",{style:{margin:0,maxWidth:520},children:["color.action.primary.bg changes from ",e.jsx(r,{value:"{color.harbor.600}",resolved:"#1B5C9E",previous:!0,size:"sm"})," to"," ",e.jsx(r,{value:"{color.harbor.700}",resolved:"#0B4A8B",size:"sm"}),"."]})}),e.jsx(u,{label:"Narrow cell (wraps)",children:e.jsx("div",{style:{width:220},children:e.jsx(r,{name:"color.feedback.warning.border.subtle",value:"{color.sand.300}",resolved:"oklch(0.86 0.06 85)"})})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'color.harbor.700',
    value: '#0B4A8B',
    resolved: undefined
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    name: undefined,
    value: '{color.harbor.700}',
    resolved: '#0B4A8B'
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'space.4',
    value: '16px',
    resolved: undefined
  }
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    swatch: false
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <span style={{
    display: 'inline-flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 'var(--space-2)'
  }}>
      <TokenValue value="{color.harbor.600}" resolved="#1B5C9E" previous />
      <TokenValue value="{color.harbor.700}" resolved="#0B4A8B" />
    </span>
}`,...a.parameters?.docs?.source},description:{story:"Before and after: the previous value struck through, then the new one.",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 220
  }}>
      <TokenValue name="color.feedback.warning.border.subtle" value="{color.sand.300}" resolved="oklch(0.86 0.06 85)" />
    </div>
}`,...o.parameters?.docs?.source},description:{story:"A long alias in a narrow cell breaks anywhere instead of overflowing.",...o.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenStack>
      <StateGrid<Row> columns={[{
      label: 'md'
    }, {
      label: 'sm'
    }]} rows={[{
      label: 'Alias with resolved color',
      value: 'alias'
    }, {
      label: 'White literal (hairline)',
      value: 'literal'
    }, {
      label: 'Dimension, no swatch',
      value: 'dimension'
    }, {
      label: 'Previous value',
      value: 'previous'
    }, {
      label: 'Value only',
      value: 'valueOnly'
    }]} render={(row, col) => <TokenValue {...ROWS[row]} size={col.label === 'sm' ? 'sm' : 'md'} />} />
      <Specimen label="Before and after in a sentence">
        <p style={{
        margin: 0,
        maxWidth: 520
      }}>
          color.action.primary.bg changes from <TokenValue value="{color.harbor.600}" resolved="#1B5C9E" previous size="sm" /> to{' '}
          <TokenValue value="{color.harbor.700}" resolved="#0B4A8B" size="sm" />.
        </p>
      </Specimen>
      <Specimen label="Narrow cell (wraps)">
        <div style={{
        width: 220
      }}>
          <TokenValue name="color.feedback.warning.border.subtle" value="{color.sand.300}" resolved="oklch(0.86 0.06 85)" />
        </div>
      </Specimen>
    </SpecimenStack>
}`,...d.parameters?.docs?.source}}};const B=["Default","Literal","ValueOnly","NotAColor","Small","NoSwatch","BeforeAfter","NarrowCell","AllStates"];export{d as AllStates,a as BeforeAfter,s as Default,l as Literal,o as NarrowCell,i as NoSwatch,c as NotAColor,t as Small,n as ValueOnly,B as __namedExportsOrder,x as default};
