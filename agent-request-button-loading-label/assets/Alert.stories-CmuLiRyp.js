import{j as e,B as s,r as g}from"./iframe-C39eZITx.js";import{S as f,b as r}from"./StateGrid-2rAOCvic.js";import{A as t}from"./Alert-CkvHCBaa.js";import{L as b}from"./Link-44_TUs-4.js";import"./preload-helper-PPVm8Dsz.js";import"./VisuallyHidden-Dv77UG8G.js";const j={title:"Feedback/Alert",component:t,args:{tone:"info",title:"Figma sync is running",children:"New variables appear here when the sync finishes. You can keep editing."},argTypes:{tone:{control:"inline-radio",options:["neutral","info","success","warning","danger"]},icon:{control:!1},actions:{control:!1}},decorators:[n=>e.jsx("div",{style:{maxWidth:640},children:e.jsx(n,{})})]},a={},o={args:{tone:"success",title:"Tokens published",children:"Version 1.4.0 is live. 12 tokens changed, 0 removed."}},c={args:{tone:"warning",title:"3 tokens fail contrast",children:"color.text.muted is below 4.5:1 on color.bg.subtle in the ocean brand."}},l={args:{tone:"danger",title:"Publish failed",children:"The token build found 2 broken aliases. Fix them and publish again.",actions:e.jsx(s,{size:"sm",variant:"secondary",children:"View build log"})}},d={render:n=>{const[p,m]=g.useState(!0);return p?e.jsx(t,{...n,onDismiss:()=>m(!1)}):e.jsx(s,{variant:"secondary",onClick:()=>m(!0),children:"Show alert again"})}},i={args:{tone:"info",title:void 0,children:"You are viewing change #12, not the latest library.",actionsPlacement:"inline",actions:e.jsx(s,{size:"sm",variant:"secondary",children:"Back to latest"})}},u={neutral:["Read only","This branch is protected. Open a pull request to propose changes."],info:["Figma sync is running","New variables appear here when the sync finishes."],success:["Tokens published","Version 1.4.0 is live. 12 tokens changed."],warning:["3 tokens fail contrast","Review them before you publish."],danger:["Publish failed","The token build found 2 broken aliases."]},h={decorators:[n=>e.jsx("div",{style:{maxWidth:720},children:e.jsx(n,{})})],render:()=>e.jsxs(f,{children:[e.jsx(r,{label:"Tones (title, description, dismiss)",children:e.jsx("div",{style:{display:"grid",gap:12,width:"100%"},children:Object.keys(u).map(n=>e.jsx(t,{tone:n,title:u[n][0],onDismiss:()=>{},announce:"off",children:u[n][1]},n))})}),e.jsx(r,{label:"With actions",children:e.jsx(t,{tone:"warning",title:"2 pull requests wait for design review",announce:"off",actions:e.jsxs(e.Fragment,{children:[e.jsx(s,{size:"sm",variant:"secondary",children:"Review now"}),e.jsx(s,{size:"sm",variant:"ghost",children:"Remind me later"})]}),children:"Token changes need a design owner and a tech owner before merge."})}),e.jsx(r,{label:"Inline action (wraps under the text when narrow)",children:e.jsxs("div",{style:{display:"grid",gap:12,width:"100%"},children:[e.jsx(t,{tone:"info",announce:"off",actionsPlacement:"inline",actions:e.jsx(s,{size:"sm",variant:"secondary",children:"Back to latest"}),children:"You are viewing change #12, not the latest library."}),e.jsx("div",{style:{maxWidth:358},children:e.jsx(t,{tone:"info",announce:"off",actionsPlacement:"inline",actions:e.jsx(s,{size:"sm",variant:"secondary",children:"Back to latest"}),children:"You are viewing change #12, not the latest library."})})]})}),e.jsx(r,{label:"Description only",children:e.jsxs(t,{tone:"info",announce:"off",children:["Tokens Studio reads these files directly. ",e.jsx(b,{href:"#import",children:"See the import guide"}),"."]})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'success',
    title: 'Tokens published',
    children: 'Version 1.4.0 is live. 12 tokens changed, 0 removed.'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'warning',
    title: '3 tokens fail contrast',
    children: 'color.text.muted is below 4.5:1 on color.bg.subtle in the ocean brand.'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'danger',
    title: 'Publish failed',
    children: 'The token build found 2 broken aliases. Fix them and publish again.',
    actions: <Button size="sm" variant="secondary">View build log</Button>
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    return open ? <Alert {...args} onDismiss={() => setOpen(false)} /> : <Button variant="secondary" onClick={() => setOpen(true)}>Show alert again</Button>;
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'info',
    title: undefined,
    children: 'You are viewing change #12, not the latest library.',
    actionsPlacement: 'inline',
    actions: <Button size="sm" variant="secondary">Back to latest</Button>
  }
}`,...i.parameters?.docs?.source},description:{story:"One short message with its action at the end of the line; under 390px the action wraps under the text.",...i.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    maxWidth: 720
  }}><Story /></div>],
  render: () => <SpecimenStack>
      <Specimen label="Tones (title, description, dismiss)">
        <div style={{
        display: 'grid',
        gap: 12,
        width: '100%'
      }}>
          {(Object.keys(COPY) as AlertTone[]).map(tone => <Alert key={tone} tone={tone} title={COPY[tone][0]} onDismiss={() => {}} announce="off">
              {COPY[tone][1]}
            </Alert>)}
        </div>
      </Specimen>
      <Specimen label="With actions">
        <Alert tone="warning" title="2 pull requests wait for design review" announce="off" actions={<>
              <Button size="sm" variant="secondary">Review now</Button>
              <Button size="sm" variant="ghost">Remind me later</Button>
            </>}>
          Token changes need a design owner and a tech owner before merge.
        </Alert>
      </Specimen>
      <Specimen label="Inline action (wraps under the text when narrow)">
        <div style={{
        display: 'grid',
        gap: 12,
        width: '100%'
      }}>
          <Alert tone="info" announce="off" actionsPlacement="inline" actions={<Button size="sm" variant="secondary">Back to latest</Button>}>
            You are viewing change #12, not the latest library.
          </Alert>
          <div style={{
          maxWidth: 358
        }}>
            <Alert tone="info" announce="off" actionsPlacement="inline" actions={<Button size="sm" variant="secondary">Back to latest</Button>}>
              You are viewing change #12, not the latest library.
            </Alert>
          </div>
        </div>
      </Specimen>
      <Specimen label="Description only">
        <Alert tone="info" announce="off">
          Tokens Studio reads these files directly. <Link href="#import">See the import guide</Link>.
        </Alert>
      </Specimen>
    </SpecimenStack>
}`,...h.parameters?.docs?.source}}};const B=["Info","Success","Warning","Danger","Dismissible","InlineAction","AllStates"];export{h as AllStates,l as Danger,d as Dismissible,a as Info,i as InlineAction,o as Success,c as Warning,B as __namedExportsOrder,j as default};
