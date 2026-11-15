import{j as e,r as C}from"./iframe-RdPw3ozT.js";import{S as v,a as g,b as h}from"./StateGrid-BzzO3xCu.js";import{C as i,a as r}from"./ChoiceCard-UdVd7Rr7.js";import{T as b}from"./TokenValue-DeZGY56b.js";import"./preload-helper-PPVm8Dsz.js";import"./RadioGroup.module-CNGcKyBI.js";import"./RadioRoot-C5YVmo90.js";import"./useControlled-IPaUtIGi.js";import"./composite-Bf66A77I.js";import"./CompositeRoot-Dc1wXdH0.js";import"./CompositeList-DFOI_bZu.js";import"./useCompositeListItem-DO1Mg_bF.js";import"./isElementDisabled-CwHw_lZC.js";import"./useLabelableId-BAgTrws-.js";import"./useFieldValidation-FyswKlZ6.js";import"./FieldsetRootContext-C_U7i75I.js";import"./useValueChanged-DuUNTWOO.js";import"./CompositeItem-CBbubEJr.js";import"./useCompositeItem-wUl_dheB.js";import"./FieldItemContext-TwIg4l54.js";import"./useAriaLabelledBy-D4xQe9kx.js";import"./serializeValue-B8e3iXO-.js";const x={parameters:{viewport:{options:{phone390:{name:"Phone 390",styles:{width:"390px",height:"844px"},type:"mobile"}}}},globals:{viewport:{value:"phone390",isRotated:!1}}},z={title:"Forms/ChoiceCard",component:i,args:{label:"Which value should this change keep?",orientation:"horizontal",hideLabel:!1,disabled:!1,children:null},argTypes:{orientation:{control:"inline-radio",options:["horizontal","vertical"]},label:{control:"text"},description:{control:"text"},error:{control:"text"},children:{control:!1}},decorators:[a=>e.jsx("div",{style:{maxWidth:640},children:e.jsx(a,{})})]};function u(){return e.jsxs(e.Fragment,{children:[e.jsx(r,{value:"mine",title:"Keep mine",description:e.jsx(b,{value:"{color.harbor.600}",resolved:"#1B5C9E",size:"sm"})}),e.jsx(r,{value:"library",title:"Use the library's",description:e.jsx(b,{value:"{color.harbor.700}",resolved:"#0B4A8B",size:"sm"})})]})}const l={render:a=>{const[p,m]=C.useState("library");return e.jsx(i,{...a,description:"color.action.primary.bg changed in the library and in your branch.",value:p,onValueChange:m,children:e.jsx(u,{})})}},t={render:()=>e.jsxs(i,{label:"Starting brand",defaultValue:"bridge",children:[e.jsx(r,{value:"bridge",title:"Bridge",description:"Deep Harbor actions, Fraunces headings. The default."}),e.jsx(r,{value:"ocean",title:"Ocean",description:"Brighter blue actions, rounder corners."}),e.jsx(r,{value:"blank",title:"Start blank",description:"Neutral grays. You add your own palette."})]})},s={render:()=>e.jsxs(i,{label:"Corner style",orientation:"vertical",defaultValue:"soft",children:[e.jsx(r,{value:"sharp",title:"Sharp",description:"2px on controls, 4px on containers."}),e.jsx(r,{value:"soft",title:"Soft",description:"6px on controls, 12px on containers."}),e.jsx(r,{value:"round",title:"Round",description:"Pill controls, 16px on containers."})]})},n={render:()=>e.jsx(i,{label:"Which value should this change keep?",error:"Pick a value before you merge.",children:e.jsx(u,{})})},d={render:()=>e.jsxs(i,{label:"Starting brand",defaultValue:"bridge",children:[e.jsx(r,{value:"bridge",title:"Bridge",description:"Deep Harbor actions, Fraunces headings."}),e.jsx(r,{value:"ocean",title:"Ocean",description:"Only on the Team plan.",disabled:!0})]})},o={...x,render:()=>e.jsx(i,{label:"Which value should this change keep?",defaultValue:"library",children:e.jsx(u,{})})},c={decorators:[a=>e.jsx(a,{})],render:()=>e.jsxs(v,{children:[e.jsx(g,{columns:[{label:"Default"},{label:"Hover",pseudo:"hover"},{label:"Focus visible",pseudo:"focus-visible"},{label:"Active",pseudo:"active"}],rows:[{label:"Unchecked",value:"unchecked"},{label:"Checked",value:"checked"},{label:"Disabled",value:"disabled"},{label:"Disabled, checked",value:"disabledChecked"},{label:"Invalid group",value:"invalid"}],render:(a,p)=>e.jsx("div",{style:{width:240},children:e.jsx(i,{label:`${a} ${p.label}`,hideLabel:!0,orientation:"vertical",defaultValue:a==="checked"||a==="disabledChecked"?"library":void 0,disabled:a==="disabled"||a==="disabledChecked",error:a==="invalid"?"Pick a value.":void 0,children:e.jsx(r,{value:"library",title:"Use the library's",description:"{color.harbor.700}"})})})}),e.jsx(h,{label:"Title only",children:e.jsx("div",{style:{width:480},children:e.jsxs(i,{label:"Keep which version?",defaultValue:"mine",children:[e.jsx(r,{value:"mine",title:"Keep mine"}),e.jsx(r,{value:"library",title:"Use the library's"})]})})}),e.jsx(h,{label:"With TokenValue descriptions",children:e.jsx("div",{style:{width:560},children:e.jsx(i,{label:"Which value should this change keep?",description:"color.action.primary.bg changed in both places.",defaultValue:"mine",children:e.jsx(u,{})})})})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('library');
    return <ChoiceCardGroup {...args} description="color.action.primary.bg changed in the library and in your branch." value={value} onValueChange={setValue}>
        <ConflictCards />
      </ChoiceCardGroup>;
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <ChoiceCardGroup label="Starting brand" defaultValue="bridge">
      <ChoiceCard value="bridge" title="Bridge" description="Deep Harbor actions, Fraunces headings. The default." />
      <ChoiceCard value="ocean" title="Ocean" description="Brighter blue actions, rounder corners." />
      <ChoiceCard value="blank" title="Start blank" description="Neutral grays. You add your own palette." />
    </ChoiceCardGroup>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <ChoiceCardGroup label="Corner style" orientation="vertical" defaultValue="soft">
      <ChoiceCard value="sharp" title="Sharp" description="2px on controls, 4px on containers." />
      <ChoiceCard value="soft" title="Soft" description="6px on controls, 12px on containers." />
      <ChoiceCard value="round" title="Round" description="Pill controls, 16px on containers." />
    </ChoiceCardGroup>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <ChoiceCardGroup label="Which value should this change keep?" error="Pick a value before you merge.">
      <ConflictCards />
    </ChoiceCardGroup>
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <ChoiceCardGroup label="Starting brand" defaultValue="bridge">
      <ChoiceCard value="bridge" title="Bridge" description="Deep Harbor actions, Fraunces headings." />
      <ChoiceCard value="ocean" title="Ocean" description="Only on the Team plan." disabled />
    </ChoiceCardGroup>
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...phone,
  render: () => <ChoiceCardGroup label="Which value should this change keep?" defaultValue="library">
      <ConflictCards />
    </ChoiceCardGroup>
}`,...o.parameters?.docs?.source},description:{story:"Narrow: the two cards stack, full width, in reading order.",...o.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <Story />],
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
      label: 'Unchecked',
      value: 'unchecked'
    }, {
      label: 'Checked',
      value: 'checked'
    }, {
      label: 'Disabled',
      value: 'disabled'
    }, {
      label: 'Disabled, checked',
      value: 'disabledChecked'
    }, {
      label: 'Invalid group',
      value: 'invalid'
    }]} render={(row, col) => <div style={{
      width: 240
    }}>
            <ChoiceCardGroup label={\`\${row} \${col.label}\`} hideLabel orientation="vertical" defaultValue={row === 'checked' || row === 'disabledChecked' ? 'library' : undefined} disabled={row === 'disabled' || row === 'disabledChecked'} error={row === 'invalid' ? 'Pick a value.' : undefined}>
              <ChoiceCard value="library" title="Use the library's" description="{color.harbor.700}" />
            </ChoiceCardGroup>
          </div>} />
      <Specimen label="Title only">
        <div style={{
        width: 480
      }}>
          <ChoiceCardGroup label="Keep which version?" defaultValue="mine">
            <ChoiceCard value="mine" title="Keep mine" />
            <ChoiceCard value="library" title="Use the library's" />
          </ChoiceCardGroup>
        </div>
      </Specimen>
      <Specimen label="With TokenValue descriptions">
        <div style={{
        width: 560
      }}>
          <ChoiceCardGroup label="Which value should this change keep?" description="color.action.primary.bg changed in both places." defaultValue="mine">
            <ConflictCards />
          </ChoiceCardGroup>
        </div>
      </Specimen>
    </SpecimenStack>
}`,...c.parameters?.docs?.source}}};const $=["Conflict","StartingBrand","Vertical","WithError","DisabledCard","NarrowConflict","AllStates"];export{c as AllStates,l as Conflict,d as DisabledCard,o as NarrowConflict,t as StartingBrand,s as Vertical,n as WithError,$ as __namedExportsOrder,z as default};
