import{j as e,I as u}from"./iframe-C39eZITx.js";import{S as h,a as b,b as c}from"./StateGrid-2rAOCvic.js";import{I as a}from"./Input-iwnLpKGS.js";import{S as f}from"./search-BD0gZ4lh.js";import"./preload-helper-PPVm8Dsz.js";import"./Field-6QnWmBSd.js";import"./useLabelableId-pAjvY1jM.js";import"./FieldsetRootContext-B3zMziWd.js";import"./useFieldValidation-BHx4iXkJ.js";import"./useRegisteredLabelId-cipmxtEU.js";import"./FieldItemContext-DhG4-jcP.js";import"./Input-DqWER9-0.js";import"./useValueChanged-iaW_aQ2H.js";const $={title:"Forms/Input",component:a,args:{label:"Token name",placeholder:"color.action.primary.bg",hint:"Dot-separated path, lowercase."},argTypes:{size:{control:"inline-radio",options:["sm","md","lg"]},prefix:{control:!1},suffix:{control:!1}}},l=[r=>e.jsx("div",{style:{maxWidth:360},children:e.jsx(r,{})})],o={decorators:l},i={decorators:l,args:{defaultValue:"Color Primary",error:"Use lowercase and dots, like color.action.primary."}},s={decorators:l,args:{required:!0}},d={decorators:l,args:{label:"Spacing value",hint:void 0,placeholder:"16",suffix:"px",type:"number",inputMode:"numeric"}},t={name:"Search",decorators:l,args:{label:"Search tokens",hint:void 0,placeholder:"Search tokens",type:"search",prefix:e.jsx(u,{icon:f,size:"sm"})}},n={render:()=>e.jsxs(h,{children:[e.jsx(b,{columns:[{label:"Default"},{label:"Hover",pseudo:"hover"},{label:"Focus",pseudo:"focus-visible"}],rows:[{label:"Empty",value:"empty"},{label:"Filled",value:"filled"},{label:"Invalid",value:"invalid"},{label:"Disabled",value:"disabled"},{label:"Read only",value:"readonly"}],render:(r,p,m)=>e.jsx("div",{style:{width:240},children:e.jsx(a,{label:"Token name",hideLabel:!0,id:`input-${r}-${m}`,placeholder:"color.action.primary.bg",defaultValue:r==="empty"?void 0:r==="invalid"?"Color Primary":"color.signal.default",error:r==="invalid"?"Use lowercase and dots.":void 0,disabled:r==="disabled",readOnly:r==="readonly","aria-label":`${r} ${p.label}`})})}),e.jsx(c,{label:"Sizes",children:e.jsxs("div",{style:{display:"grid",gap:12,width:280},children:[e.jsx(a,{label:"Small",size:"sm",placeholder:"sm"}),e.jsx(a,{label:"Medium",placeholder:"md"}),e.jsx(a,{label:"Large",size:"lg",placeholder:"lg"})]})}),e.jsx(c,{label:"Field anatomy",children:e.jsx("div",{style:{width:320},children:e.jsx(a,{label:"Figma file URL",required:!0,hint:"Paste the link from Share, Copy link.",placeholder:"https://www.figma.com/design/...",error:"Enter a Figma design link."})})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  decorators: narrow
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  decorators: narrow,
  args: {
    defaultValue: 'Color Primary',
    error: 'Use lowercase and dots, like color.action.primary.'
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  decorators: narrow,
  args: {
    required: true
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  decorators: narrow,
  args: {
    label: 'Spacing value',
    hint: undefined,
    placeholder: '16',
    suffix: 'px',
    type: 'number',
    inputMode: 'numeric'
  }
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Search',
  decorators: narrow,
  args: {
    label: 'Search tokens',
    hint: undefined,
    placeholder: 'Search tokens',
    type: 'search',
    prefix: <Icon icon={Search} size="sm" />
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenStack>
      <StateGrid columns={[{
      label: 'Default'
    }, {
      label: 'Hover',
      pseudo: 'hover'
    }, {
      label: 'Focus',
      pseudo: 'focus-visible'
    }]} rows={[{
      label: 'Empty',
      value: 'empty'
    }, {
      label: 'Filled',
      value: 'filled'
    }, {
      label: 'Invalid',
      value: 'invalid'
    }, {
      label: 'Disabled',
      value: 'disabled'
    }, {
      label: 'Read only',
      value: 'readonly'
    }]} render={(state, col, i) => <div style={{
      width: 240
    }}>
            <Input label="Token name" hideLabel id={\`input-\${state}-\${i}\`} placeholder="color.action.primary.bg" defaultValue={state === 'empty' ? undefined : state === 'invalid' ? 'Color Primary' : 'color.signal.default'} error={state === 'invalid' ? 'Use lowercase and dots.' : undefined} disabled={state === 'disabled'} readOnly={state === 'readonly'} aria-label={\`\${state} \${col.label}\`} />
          </div>} />
      <Specimen label="Sizes">
        <div style={{
        display: 'grid',
        gap: 12,
        width: 280
      }}>
          <Input label="Small" size="sm" placeholder="sm" />
          <Input label="Medium" placeholder="md" />
          <Input label="Large" size="lg" placeholder="lg" />
        </div>
      </Specimen>
      <Specimen label="Field anatomy">
        <div style={{
        width: 320
      }}>
          <Input label="Figma file URL" required hint="Paste the link from Share, Copy link." placeholder="https://www.figma.com/design/..." error="Enter a Figma design link." />
        </div>
      </Specimen>
    </SpecimenStack>
}`,...n.parameters?.docs?.source}}};const D=["Default","WithError","Required","PrefixAndSuffix","Search_","AllStates"];export{n as AllStates,o as Default,d as PrefixAndSuffix,s as Required,t as Search_,i as WithError,D as __namedExportsOrder,$ as default};
