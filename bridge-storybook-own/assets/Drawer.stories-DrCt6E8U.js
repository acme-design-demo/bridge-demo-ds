import{j as e,B as i}from"./iframe-RdPw3ozT.js";import{D as l,a as m,b as u,c}from"./Drawer-etmg36mN.js";import{I as d}from"./Input-B73-mT8Q.js";import{B as g}from"./ButtonGroup-BY9l5sKG.js";import"./preload-helper-PPVm8Dsz.js";import"./DialogTrigger-CRbdPhbp.js";import"./useOpenInteractionType-DJ1ynrjZ.js";import"./useValueChanged-DuUNTWOO.js";import"./useControlled-IPaUtIGi.js";import"./composite-Bf66A77I.js";import"./Field-DyXsUo7P.js";import"./useLabelableId-BAgTrws-.js";import"./FieldsetRootContext-C_U7i75I.js";import"./useFieldValidation-FyswKlZ6.js";import"./useRegisteredLabelId-Oa15vbsh.js";import"./FieldItemContext-TwIg4l54.js";import"./Input-C-EmWLCs.js";const A={title:"Overlays/Drawer",component:l,args:{side:"end"},argTypes:{side:{control:"inline-radio",options:["start","end","bottom"]}}};function n({side:r,defaultOpen:p}){return e.jsxs(l,{side:r,defaultOpen:p,children:[e.jsx(m,{render:e.jsx(i,{variant:"secondary"}),children:"Edit token"}),e.jsx(u,{title:"color.signal.default",description:"Used by focus rings, active tabs and progress.",footer:e.jsxs(g,{align:"end",children:[e.jsx(c,{render:e.jsx(i,{variant:"ghost"}),children:"Cancel"}),e.jsx(c,{render:e.jsx(i,{}),children:"Save changes"})]}),children:e.jsxs("div",{style:{display:"grid",gap:"var(--space-4)"},children:[e.jsx(d,{label:"Light value",defaultValue:"{palette.accent.500}"}),e.jsx(d,{label:"Dark value",defaultValue:"{palette.accent.400}"}),e.jsx(d,{label:"Description",defaultValue:"The signal: active indicators, progress, slider range."})]})})]})}const s={render:r=>e.jsx(n,{side:r.side??"end"})},t={args:{side:"start"},render:r=>e.jsx(n,{side:r.side??"start"})},a={args:{side:"bottom"},render:r=>e.jsx(n,{side:r.side??"bottom"})},o={render:()=>e.jsx(n,{side:"end",defaultOpen:!0})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <TokenDetails side={args.side ?? 'end'} />
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'start'
  },
  render: args => <TokenDetails side={args.side ?? 'start'} />
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'bottom'
  },
  render: args => <TokenDetails side={args.side ?? 'bottom'} />
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <TokenDetails side="end" defaultOpen />
}`,...o.parameters?.docs?.source}}};const I=["End","Start","Bottom","AllStates"];export{o as AllStates,a as Bottom,s as End,t as Start,I as __namedExportsOrder,A as default};
