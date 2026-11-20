import{j as e,r as p,I as w,B as y}from"./iframe-DXKUr0Oy.js";import{S as I,a as A,b as x}from"./StateGrid-XOvQ1EHh.js";import{C as t}from"./Combobox-CGyL-jEV.js";import{S as C}from"./search-Bx_uzxhs.js";import{D as M,a as T,b as V}from"./Dialog-BB4A0_x-.js";import"./preload-helper-PPVm8Dsz.js";import"./Field-BDqUGIo2.js";import"./useLabelableId-CSZVJFjq.js";import"./FieldsetRootContext-DJ8oDLFy.js";import"./useFieldValidation-8rMq9P0G.js";import"./useRegisteredLabelId-m5lwGR0I.js";import"./FieldItemContext-CvKyGhJ-.js";import"./chevron-down-CNwx0GXN.js";import"./check-Be9-HUDz.js";import"./useControlled-DBMtfaiZ.js";import"./ItemIndicator-CLLnGjfa.js";import"./areArraysEqual-DROtyGZu.js";import"./serializeValue-B8e3iXO-.js";import"./getHighlightReason-CknWLL49.js";import"./stringifyLocale-BMPUsiav.js";import"./useOpenInteractionType-836zuFso.js";import"./useValueChanged-BPkaUzIM.js";import"./getPseudoElementBounds-BT1GuZT3.js";import"./CompositeList-C8aoU88U.js";import"./useCompositeListItem-gjaH6HOu.js";import"./resolveAriaLabelledBy-CqSGvM1m.js";import"./useAnchoredPopupScrollLock-CvxOudMN.js";import"./Dialog.module-8XKeti7S.js";import"./DialogTrigger-Y0vqXnSh.js";import"./composite-DhWHhwUi.js";const d=[{value:"ada",label:"Ada Moreau",description:"Design owner",group:"Owners"},{value:"bao",label:"Bao Tran",description:"Tech owner",group:"Owners"},{value:"chloe",label:"Chloe Martin",description:"Product designer",group:"Contributors"},{value:"dev",label:"Dev Patel",description:"Front-end engineer",group:"Contributors"},{value:"emma",label:"Emma Rossi",description:"Away until Monday",group:"Contributors",disabled:!0}],n=["Accordion","Alert","Avatar","Badge","Breadcrumb","Button","Card","Checkbox","Combobox","Dialog","Drawer","Input","Menu","Popover","Select","Switch","Table","Tabs","Toast","Tooltip"].map(o=>({value:o.toLowerCase(),label:o})),ce={title:"Forms/Combobox",component:t,args:{label:"Component",options:n,placeholder:"Search components",hint:"Type to filter 20 components."},argTypes:{size:{control:"inline-radio",options:["sm","md","lg"]},prefix:{control:!1},options:{control:!1},filter:{control:!1}}},g=[o=>e.jsx("div",{style:{maxWidth:360},children:e.jsx(o,{})})],c={decorators:g},L=[{value:"button",label:"Button",description:"Actions"},{value:"select",label:"Select",description:"Forms"},{value:"combobox",label:"Combobox",description:"Forms"},{value:"dialog",label:"Dialog",description:"Overlays"},{value:"table",label:"Table",description:"Data display"}],a={render:()=>e.jsx(M,{defaultOpen:!0,children:e.jsx(T,{title:"Add a variant",description:"Which component gets the new option?",footer:e.jsxs(e.Fragment,{children:[e.jsx(V,{render:e.jsx(y,{variant:"secondary"}),children:"Cancel"}),e.jsx(y,{children:"Continue"})]}),children:e.jsx(t,{label:"Component",options:L,placeholder:"Type a name, for example Button",defaultOpen:!0})})})},u={decorators:g,args:{label:"Reviewer",options:d,placeholder:"Search people",hint:void 0}},m={decorators:g,args:{label:"Reviewers",options:d,multiple:!0,defaultValue:["ada","dev"],placeholder:"Add reviewers",hint:"At least one owner must approve."}},h={decorators:g,args:{error:"Choose a component from the list.",defaultInputValue:"Buton"}},s={decorators:[o=>e.jsx("div",{style:{maxWidth:360,minHeight:380},children:e.jsx(o,{})})],args:{label:"Reviewer",options:d,defaultOpen:!0,defaultValue:"bao",hint:void 0,prefix:e.jsx(w,{icon:C,size:"sm"})}},l={decorators:[o=>e.jsx("div",{style:{maxWidth:360,minHeight:320},children:e.jsx(o,{})})],render:o=>{const[r,E]=p.useState(""),[j,S]=p.useState([]),[R,v]=p.useState(!1);return p.useEffect(()=>{if(!r.trim()){S([]),v(!1);return}v(!0);const D=setTimeout(()=>{S(d.filter(f=>f.label.toLowerCase().includes(r.trim().toLowerCase())).map(({group:f,...O})=>O)),v(!1)},600);return()=>clearTimeout(D)},[r]),e.jsx(t,{...o,label:"Assign reviewer",hint:"Search people in this workspace.",options:j,filter:null,inputValue:r,onInputValueChange:E,loading:R,loadingMessage:"Searching people",emptyMessage:r?`No one matches "${r}".`:"Start typing a name.",placeholder:"Type a name",prefix:e.jsx(w,{icon:C,size:"sm"})})}},i={decorators:[o=>e.jsx("div",{style:{maxWidth:360,minHeight:200},children:e.jsx(o,{})})],args:{label:"Assign reviewer",options:[],filter:null,loading:!0,loadingMessage:"Searching people",defaultOpen:!0,hint:void 0}},b={render:()=>e.jsxs(I,{children:[e.jsx(A,{columns:[{label:"Default"},{label:"Hover",pseudo:"hover"},{label:"Focus",pseudo:"focus-visible"}],rows:[{label:"Empty",value:"empty"},{label:"Selected",value:"selected"},{label:"Invalid",value:"invalid"},{label:"Disabled",value:"disabled"}],render:(o,r)=>e.jsx("div",{style:{width:240},children:e.jsx(t,{label:`${o} ${r.label}`,hideLabel:!0,options:n,placeholder:"Search components",defaultValue:o==="empty"?void 0:"button",error:o==="invalid"?"Choose from the list.":void 0,disabled:o==="disabled"})})}),e.jsx(x,{label:"Multiple with chips",children:e.jsx("div",{style:{width:320},children:e.jsx(t,{label:"Reviewers",multiple:!0,options:d,defaultValue:["ada","bao","dev"]})})}),e.jsx(x,{label:"Sizes (follow density)",children:e.jsxs("div",{style:{display:"grid",gap:12,width:280},children:[e.jsx(t,{label:"Small",size:"sm",options:n,placeholder:"sm"}),e.jsx(t,{label:"Medium",options:n,placeholder:"md"}),e.jsx(t,{label:"Large",size:"lg",options:n,placeholder:"lg"})]})})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  decorators: narrow
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog defaultOpen>
      <DialogContent title="Add a variant" description="Which component gets the new option?" footer={<>
            <DialogClose render={<Button variant="secondary" />}>Cancel</DialogClose>
            <Button>Continue</Button>
          </>}>
        <Combobox label="Component" options={FAMILIES} placeholder="Type a name, for example Button" defaultOpen />
      </DialogContent>
    </Dialog>
}`,...a.parameters?.docs?.source},description:{story:"Inside a Dialog: the list opens above the dialog (popover layer), focus stays in the dialog.",...a.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  decorators: narrow,
  args: {
    label: 'Reviewer',
    options: REVIEWERS,
    placeholder: 'Search people',
    hint: undefined
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  decorators: narrow,
  args: {
    label: 'Reviewers',
    options: REVIEWERS,
    multiple: true,
    defaultValue: ['ada', 'dev'],
    placeholder: 'Add reviewers',
    hint: 'At least one owner must approve.'
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  decorators: narrow,
  args: {
    error: 'Choose a component from the list.',
    defaultInputValue: 'Buton'
  }
}`,...h.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    maxWidth: 360,
    minHeight: 380
  }}><Story /></div>],
  args: {
    label: 'Reviewer',
    options: REVIEWERS,
    defaultOpen: true,
    defaultValue: 'bao',
    hint: undefined,
    prefix: <Icon icon={Search} size="sm" />
  }
}`,...s.parameters?.docs?.source},description:{story:"The popup rendered open, for review and screenshots.",...s.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    maxWidth: 360,
    minHeight: 320
  }}><Story /></div>],
  render: args => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<ComboboxOption[]>([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      if (!query.trim()) {
        setResults([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      const id = setTimeout(() => {
        setResults(REVIEWERS.filter(r => r.label.toLowerCase().includes(query.trim().toLowerCase())).map(({
          group: _group,
          ...r
        }) => r));
        setLoading(false);
      }, 600);
      return () => clearTimeout(id);
    }, [query]);
    return <Combobox {...args} label="Assign reviewer" hint="Search people in this workspace." options={results} filter={null} inputValue={query} onInputValueChange={setQuery} loading={loading} loadingMessage="Searching people" emptyMessage={query ? \`No one matches "\${query}".\` : 'Start typing a name.'} placeholder="Type a name" prefix={<Icon icon={Search} size="sm" />} />;
  }
}`,...l.parameters?.docs?.source},description:{story:'Async search: the input is controlled, results arrive after a delay, filtering happens on the "server".',...l.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    maxWidth: 360,
    minHeight: 200
  }}><Story /></div>],
  args: {
    label: 'Assign reviewer',
    options: [],
    filter: null,
    loading: true,
    loadingMessage: 'Searching people',
    defaultOpen: true,
    hint: undefined
  }
}`,...i.parameters?.docs?.source},description:{story:"Loading row, rendered open.",...i.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
      label: 'Selected',
      value: 'selected'
    }, {
      label: 'Invalid',
      value: 'invalid'
    }, {
      label: 'Disabled',
      value: 'disabled'
    }]} render={(state, col) => <div style={{
      width: 240
    }}>
            <Combobox label={\`\${state} \${col.label}\`} hideLabel options={COMPONENTS} placeholder="Search components" defaultValue={state === 'empty' ? undefined : 'button'} error={state === 'invalid' ? 'Choose from the list.' : undefined} disabled={state === 'disabled'} />
          </div>} />
      <Specimen label="Multiple with chips">
        <div style={{
        width: 320
      }}>
          <Combobox label="Reviewers" multiple options={REVIEWERS} defaultValue={['ada', 'bao', 'dev']} />
        </div>
      </Specimen>
      <Specimen label="Sizes (follow density)">
        <div style={{
        display: 'grid',
        gap: 12,
        width: 280
      }}>
          <Combobox label="Small" size="sm" options={COMPONENTS} placeholder="sm" />
          <Combobox label="Medium" options={COMPONENTS} placeholder="md" />
          <Combobox label="Large" size="lg" options={COMPONENTS} placeholder="lg" />
        </div>
      </Specimen>
    </SpecimenStack>
}`,...b.parameters?.docs?.source}}};const ue=["Default","InsideDialog","Grouped","Multiple","WithError","Open","AsyncSearch","Loading","AllStates"];export{b as AllStates,l as AsyncSearch,c as Default,u as Grouped,a as InsideDialog,i as Loading,m as Multiple,s as Open,h as WithError,ue as __namedExportsOrder,ce as default};
