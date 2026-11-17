import{j as e,I as g}from"./iframe-RdPw3ozT.js";import{S as v,a as f,b as m}from"./StateGrid-BzzO3xCu.js";import{S as r}from"./Select-CgrcouUY.js";import{P as S}from"./palette-ChrTVtwk.js";import{B as u}from"./Badge-DHJk7zco.js";import"./preload-helper-PPVm8Dsz.js";import"./Field-DyXsUo7P.js";import"./useLabelableId-BAgTrws-.js";import"./FieldsetRootContext-C_U7i75I.js";import"./useFieldValidation-FyswKlZ6.js";import"./useRegisteredLabelId-Oa15vbsh.js";import"./FieldItemContext-TwIg4l54.js";import"./chevron-down-D1azWKxb.js";import"./check-C56ON0ds.js";import"./ItemIndicator-DzuSltGB.js";import"./areArraysEqual-DROtyGZu.js";import"./serializeValue-B8e3iXO-.js";import"./isElementDisabled-CwHw_lZC.js";import"./useControlled-IPaUtIGi.js";import"./useValueChanged-DuUNTWOO.js";import"./useOpenInteractionType-DJ1ynrjZ.js";import"./getPseudoElementBounds-CJP7eeUA.js";import"./resolveAriaLabelledBy-CqSGvM1m.js";import"./CompositeList-DFOI_bZu.js";import"./useCompositeListItem-DO1Mg_bF.js";import"./useAnchoredPopupScrollLock-TjOBpBNU.js";import"./ToolbarRootContext-DVpBozQW.js";import"./composite-Bf66A77I.js";import"./CSPContext-ClAwLlW8.js";const s=[{value:"system",label:"System"},{value:"light",label:"Light"},{value:"dark",label:"Dark"},{value:"contrast",label:"High contrast",description:"Not available for the ocean brand",disabled:!0}],b=[{value:"color.action.primary.bg",label:"color.action.primary.bg",group:"Color"},{value:"color.border.strong",label:"color.border.strong",group:"Color"},{value:"color.signal.default",label:"color.signal.default",group:"Color"},{value:"space.4",label:"space.4",group:"Space"},{value:"space.6",label:"space.6",group:"Space"},{value:"radius.control",label:"radius.control",group:"Radius"},{value:"radius.overlay",label:"radius.overlay",group:"Radius"}],Q={title:"Forms/Select",component:r,args:{label:"Theme",options:s,placeholder:"No theme",hint:"Applies to the preview only."},argTypes:{size:{control:"inline-radio",options:["sm","md","lg"]},prefix:{control:!1},options:{control:!1}}},p=[a=>e.jsx("div",{style:{maxWidth:320},children:e.jsx(a,{})})],t={decorators:p},i={decorators:p,args:{defaultValue:"dark"}},n={decorators:p,args:{error:"Pick a theme before you publish the preview."}},d={decorators:p,args:{label:"Token",options:b,placeholder:"Choose a token",hint:void 0}},y=[{value:"latest",label:"Latest library",description:"What is shipped"},{value:"change-12",label:"Darker default background",description:"by florian",group:"Open changes",badge:e.jsx(u,{tone:"info",size:"sm",children:"In review"})},{value:"change-14",label:"New radius scale",description:"by sam",group:"Open changes",badge:e.jsx(u,{tone:"success",size:"sm",children:"Ready"})},{value:"change-15",label:"Focus ring on dark surfaces",description:"by alex",group:"Open changes",badge:e.jsx(u,{tone:"warning",size:"sm",children:"Changes asked"})}],l={decorators:[a=>e.jsx("div",{style:{maxWidth:360,minHeight:320},children:e.jsx(a,{})})],args:{label:"View the library as",options:y,defaultValue:"change-12",defaultOpen:!0,hint:void 0}},o={decorators:[a=>e.jsx("div",{style:{maxWidth:320,minHeight:360},children:e.jsx(a,{})})],args:{label:"Token",options:b,defaultValue:"color.border.strong",defaultOpen:!0,hint:void 0}},c={render:()=>e.jsxs(v,{children:[e.jsx(f,{columns:[{label:"Default"},{label:"Hover",pseudo:"hover"},{label:"Focus visible",pseudo:"focus-visible"}],rows:[{label:"Placeholder",value:"placeholder"},{label:"Selected",value:"selected"},{label:"Invalid",value:"invalid"},{label:"Disabled",value:"disabled"}],render:(a,h)=>e.jsx("div",{style:{width:220},children:e.jsx(r,{label:`${a} ${h.label}`,hideLabel:!0,options:s,placeholder:"No theme",defaultValue:a==="placeholder"?void 0:"dark",error:a==="invalid"?"Pick a theme.":void 0,disabled:a==="disabled"})})}),e.jsx(m,{label:"Sizes (follow density)",children:e.jsxs("div",{style:{display:"grid",gap:12,width:260},children:[e.jsx(r,{label:"Small",size:"sm",options:s,defaultValue:"light"}),e.jsx(r,{label:"Medium",options:s,defaultValue:"light"}),e.jsx(r,{label:"Large",size:"lg",options:s,defaultValue:"light"})]})}),e.jsx(m,{label:"Prefix icon",children:e.jsx("div",{style:{width:260},children:e.jsx(r,{label:"Brand",options:[{value:"bridge",label:"Bridge"},{value:"ocean",label:"Ocean"}],defaultValue:"bridge",prefix:e.jsx(g,{icon:S,size:"sm"})})})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  decorators: narrow
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  decorators: narrow,
  args: {
    defaultValue: 'dark'
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  decorators: narrow,
  args: {
    error: 'Pick a theme before you publish the preview.'
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  decorators: narrow,
  args: {
    label: 'Token',
    options: TOKEN_GROUPS,
    placeholder: 'Choose a token',
    hint: undefined
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    maxWidth: 360,
    minHeight: 320
  }}><Story /></div>],
  args: {
    label: 'View the library as',
    options: CHANGES,
    defaultValue: 'change-12',
    defaultOpen: true,
    hint: undefined
  }
}`,...l.parameters?.docs?.source},description:{story:'A status Badge on each option and in the trigger (the Studio "Viewing" select).',...l.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    maxWidth: 320,
    minHeight: 360
  }}><Story /></div>],
  args: {
    label: 'Token',
    options: TOKEN_GROUPS,
    defaultValue: 'color.border.strong',
    defaultOpen: true,
    hint: undefined
  }
}`,...o.parameters?.docs?.source},description:{story:"The popup rendered open, for review and screenshots.",...o.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenStack>
      <StateGrid columns={[{
      label: 'Default'
    }, {
      label: 'Hover',
      pseudo: 'hover'
    }, {
      label: 'Focus visible',
      pseudo: 'focus-visible'
    }]} rows={[{
      label: 'Placeholder',
      value: 'placeholder'
    }, {
      label: 'Selected',
      value: 'selected'
    }, {
      label: 'Invalid',
      value: 'invalid'
    }, {
      label: 'Disabled',
      value: 'disabled'
    }]} render={(state, col) => <div style={{
      width: 220
    }}>
            <Select label={\`\${state} \${col.label}\`} hideLabel options={THEMES} placeholder="No theme" defaultValue={state === 'placeholder' ? undefined : 'dark'} error={state === 'invalid' ? 'Pick a theme.' : undefined} disabled={state === 'disabled'} />
          </div>} />
      <Specimen label="Sizes (follow density)">
        <div style={{
        display: 'grid',
        gap: 12,
        width: 260
      }}>
          <Select label="Small" size="sm" options={THEMES} defaultValue="light" />
          <Select label="Medium" options={THEMES} defaultValue="light" />
          <Select label="Large" size="lg" options={THEMES} defaultValue="light" />
        </div>
      </Specimen>
      <Specimen label="Prefix icon">
        <div style={{
        width: 260
      }}>
          <Select label="Brand" options={[{
          value: 'bridge',
          label: 'Bridge'
        }, {
          value: 'ocean',
          label: 'Ocean'
        }]} defaultValue="bridge" prefix={<Icon icon={Palette} size="sm" />} />
        </div>
      </Specimen>
    </SpecimenStack>
}`,...c.parameters?.docs?.source}}};const X=["Default","WithValue","WithError","Grouped","WithBadges","Open","AllStates"];export{c as AllStates,t as Default,d as Grouped,o as Open,l as WithBadges,n as WithError,i as WithValue,X as __namedExportsOrder,Q as default};
