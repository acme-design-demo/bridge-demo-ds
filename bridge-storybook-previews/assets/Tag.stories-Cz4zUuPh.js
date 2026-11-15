import{j as e,r as p}from"./iframe-RdPw3ozT.js";import{S as u,a as b,b as v}from"./StateGrid-BzzO3xCu.js";import{T as s,L as h}from"./Tag-CyVICLcm.js";import"./preload-helper-PPVm8Dsz.js";import"./useControlled-IPaUtIGi.js";import"./CompositeItem-CBbubEJr.js";import"./useCompositeItem-wUl_dheB.js";import"./useCompositeListItem-DO1Mg_bF.js";import"./check-C56ON0ds.js";const C={title:"Data display/Tag",component:s,args:{children:"color.action",tone:"neutral",size:"md"},argTypes:{tone:{control:"inline-radio",options:["neutral","signal"]},size:{control:"inline-radio",options:["sm","md"]},icon:{control:!1}}},r={},t={args:{onRemove:()=>{},children:"Button"}},o={args:{defaultSelected:!0,children:"Dark theme"}},i={render:()=>{const[a,c]=p.useState(["Light"]);return e.jsx("div",{role:"group","aria-label":"Filter by theme",style:{display:"flex",gap:8},children:["Light","Dark","Ocean"].map(l=>e.jsx(s,{selected:a.includes(l),onSelectedChange:m=>c(d=>m?[...d,l]:d.filter(g=>g!==l)),children:l},l))})}},n={render:()=>e.jsxs(u,{children:[e.jsx(b,{columns:[{label:"Default"},{label:"Hover",pseudo:"hover"},{label:"Focus visible",pseudo:"focus-visible"},{label:"Disabled"}],rows:[{label:"Static",value:"static"},{label:"Toggle",value:"toggle"},{label:"Selected",value:"selected"},{label:"Removable",value:"removable"}],render:(a,c)=>e.jsx(s,{disabled:c.label==="Disabled",selected:a==="toggle"?!1:a==="selected"?!0:void 0,onSelectedChange:a==="toggle"||a==="selected"?()=>{}:void 0,onRemove:a==="removable"?()=>{}:void 0,children:a==="removable"?"Badge":"Compact density"})}),e.jsxs(v,{label:"Tones, icon, small",children:[e.jsx(s,{tone:"signal",children:'Matches "border"'}),e.jsx(s,{icon:h,children:"Primitives"}),e.jsx(s,{size:"sm",onRemove:()=>{},children:"ocean"})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    onRemove: () => {},
    children: 'Button'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSelected: true,
    children: 'Dark theme'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [themes, setThemes] = useState<string[]>(['Light']);
    return <div role="group" aria-label="Filter by theme" style={{
      display: 'flex',
      gap: 8
    }}>
        {['Light', 'Dark', 'Ocean'].map(t => <Tag key={t} selected={themes.includes(t)} onSelectedChange={on => setThemes(s => on ? [...s, t] : s.filter(x => x !== t))}>
            {t}
          </Tag>)}
      </div>;
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenStack>
      <StateGrid columns={[{
      label: 'Default'
    }, {
      label: 'Hover',
      pseudo: 'hover'
    }, {
      label: 'Focus visible',
      pseudo: 'focus-visible'
    }, {
      label: 'Disabled'
    }]} rows={[{
      label: 'Static',
      value: 'static' as Kind
    }, {
      label: 'Toggle',
      value: 'toggle' as Kind
    }, {
      label: 'Selected',
      value: 'selected' as Kind
    }, {
      label: 'Removable',
      value: 'removable' as Kind
    }]} render={(kind, col) => <Tag disabled={col.label === 'Disabled'} selected={kind === 'toggle' ? false : kind === 'selected' ? true : undefined} onSelectedChange={kind === 'toggle' || kind === 'selected' ? () => {} : undefined} onRemove={kind === 'removable' ? () => {} : undefined}>
            {kind === 'removable' ? 'Badge' : 'Compact density'}
          </Tag>} />
      <Specimen label="Tones, icon, small">
        <Tag tone="signal">Matches "border"</Tag>
        <Tag icon={Layers}>Primitives</Tag>
        <Tag size="sm" onRemove={() => {}}>ocean</Tag>
      </Specimen>
    </SpecimenStack>
}`,...n.parameters?.docs?.source}}};const L=["Static","Removable","Toggle","FilterChips","AllStates"];export{n as AllStates,i as FilterChips,t as Removable,r as Static,o as Toggle,L as __namedExportsOrder,C as default};
