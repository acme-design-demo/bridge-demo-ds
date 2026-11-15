import{j as e}from"./iframe-RdPw3ozT.js";import{S as d,b as l}from"./StateGrid-BzzO3xCu.js";import{A as o,a as s}from"./Accordion-DuV0xkko.js";import{B as p}from"./Badge-DHJk7zco.js";import"./preload-helper-PPVm8Dsz.js";import"./chevron-down-D1azWKxb.js";import"./useControlled-IPaUtIGi.js";import"./CompositeList-DFOI_bZu.js";import"./useCompositeListItem-DO1Mg_bF.js";import"./useCollapsiblePanel-jZNqDroR.js";const k={title:"Data display/Accordion",component:o,args:{multiple:!1,headingLevel:3,appearance:"contained",children:null},argTypes:{appearance:{control:"inline-radio",options:["contained","flush"]},headingLevel:{control:"inline-radio",options:[2,3,4,5,6]},children:{control:!1}},decorators:[a=>e.jsx("div",{style:{maxWidth:560},children:e.jsx(a,{})})]},i=e.jsxs(e.Fragment,{children:[e.jsx(s,{value:"color",title:"Color tokens",meta:"48",children:"Semantic color tokens alias the palette roles of the active brand. Components only read these."}),e.jsx(s,{value:"space",title:"Spacing tokens",meta:"16",children:"A 4px scale from space.0-5 (2px) to space.24 (96px). Density tokens pick from it."}),e.jsx(s,{value:"motion",title:"Motion tokens",meta:"10",children:"Durations collapse to 0ms when the user prefers reduced motion."})]}),r={render:a=>e.jsx(o,{...a,children:i})},t={args:{multiple:!0,defaultValue:["color","space"]},render:a=>e.jsx(o,{...a,children:i})},c={args:{appearance:"flush"},render:a=>e.jsx(o,{...a,children:i})},n={render:()=>e.jsxs(d,{children:[e.jsx(l,{label:"Open, closed, disabled; hover and focus on the second trigger",children:e.jsx("div",{style:{width:"100%"},children:e.jsxs(o,{defaultValue:["color"],children:[e.jsx(s,{value:"color",title:"Color tokens",meta:e.jsx(p,{tone:"success",size:"sm",children:"Passing"}),children:"220 contrast checks pass in bridge and ocean, light and dark."}),e.jsx(s,{value:"space",title:"Spacing tokens (hover)",className:"pseudo-hover-all",children:"Hover state."}),e.jsx(s,{value:"type",title:"Typography tokens (focus visible)",className:"pseudo-focus-visible-all",children:"Focus state."}),e.jsx(s,{value:"legacy",title:"Legacy tokens",meta:"Removed in 2.0",disabled:!0,children:"Not available."})]})})}),e.jsx(l,{label:"Flush (inside a card or a panel)",children:e.jsx("div",{style:{width:"100%"},children:e.jsx(o,{appearance:"flush",defaultValue:["space"],children:i})})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Accordion {...args}>{items}</Accordion>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: true,
    defaultValue: ['color', 'space']
  },
  render: args => <Accordion {...args}>{items}</Accordion>
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'flush'
  },
  render: args => <Accordion {...args}>{items}</Accordion>
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenStack>
      <Specimen label="Open, closed, disabled; hover and focus on the second trigger">
        <div style={{
        width: '100%'
      }}>
          <Accordion defaultValue={['color']}>
            <AccordionItem value="color" title="Color tokens" meta={<Badge tone="success" size="sm">Passing</Badge>}>
              220 contrast checks pass in bridge and ocean, light and dark.
            </AccordionItem>
            <AccordionItem value="space" title="Spacing tokens (hover)" className="pseudo-hover-all">
              Hover state.
            </AccordionItem>
            <AccordionItem value="type" title="Typography tokens (focus visible)" className="pseudo-focus-visible-all">
              Focus state.
            </AccordionItem>
            <AccordionItem value="legacy" title="Legacy tokens" meta="Removed in 2.0" disabled>
              Not available.
            </AccordionItem>
          </Accordion>
        </div>
      </Specimen>
      <Specimen label="Flush (inside a card or a panel)">
        <div style={{
        width: '100%'
      }}>
          <Accordion appearance="flush" defaultValue={['space']}>{items}</Accordion>
        </div>
      </Specimen>
    </SpecimenStack>
}`,...n.parameters?.docs?.source}}};const y=["Default","Multiple","Flush","AllStates"];export{n as AllStates,r as Default,c as Flush,t as Multiple,y as __namedExportsOrder,k as default};
