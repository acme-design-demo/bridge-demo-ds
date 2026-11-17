import{j as e,B as n,r as f}from"./iframe-RdPw3ozT.js";import{D as r,c as p,a as d,b as c}from"./Dialog-CQ_07bdw.js";import{I as m}from"./Input-B73-mT8Q.js";import{B as g}from"./ButtonGroup-BY9l5sKG.js";import"./preload-helper-PPVm8Dsz.js";import"./Dialog.module-DC0p-ThD.js";import"./DialogTrigger-CRbdPhbp.js";import"./useOpenInteractionType-DJ1ynrjZ.js";import"./useValueChanged-DuUNTWOO.js";import"./composite-Bf66A77I.js";import"./Field-DyXsUo7P.js";import"./useLabelableId-BAgTrws-.js";import"./FieldsetRootContext-C_U7i75I.js";import"./useFieldValidation-FyswKlZ6.js";import"./useRegisteredLabelId-Oa15vbsh.js";import"./FieldItemContext-TwIg4l54.js";import"./Input-C-EmWLCs.js";const A={title:"Overlays/Dialog",component:r,parameters:{layout:"padded"}},u=e.jsxs(g,{align:"end",children:[e.jsx(c,{render:e.jsx(n,{variant:"ghost"}),children:"Cancel"}),e.jsx(c,{render:e.jsx(n,{}),children:"Rename token"})]}),s={render:()=>e.jsxs(r,{children:[e.jsx(p,{render:e.jsx(n,{variant:"secondary"}),children:"Rename token"}),e.jsx(d,{title:"Rename token",description:"References in components update in the next release.",footer:u,children:e.jsx(m,{label:"New name",defaultValue:"color.signal.default",hint:"Dot-separated path, lowercase."})})]})},i={render:()=>e.jsxs(r,{children:[e.jsx(p,{render:e.jsx(n,{variant:"secondary"}),children:"Review release notes"}),e.jsx(d,{size:"lg",title:"Release 2.4.0",description:"12 token changes and 3 component updates since 2.3.1.",footer:e.jsxs(g,{align:"end",children:[e.jsx(c,{render:e.jsx(n,{variant:"ghost"}),children:"Close"}),e.jsx(c,{render:e.jsx(n,{}),children:"Publish release"})]}),children:Array.from({length:14},(h,o)=>e.jsxs("p",{style:{margin:"0 0 var(--space-3)"},children:["Change ",o+1,": color.action.primary.bg now aliases palette.primary.900 in light and palette.primary.50 in dark, so primary buttons keep 4.5:1 contrast in both themes."]},o))})]})},l={render:function(){const[o,a]=f.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>a(!0),children:"Invite reviewer"}),e.jsx(r,{open:o,onOpenChange:a,disablePointerDismissal:!0,children:e.jsx(d,{size:"sm",title:"Invite reviewer",description:"They can approve token and component changes.",footer:e.jsxs(g,{align:"end",children:[e.jsx(n,{variant:"ghost",onClick:()=>a(!1),children:"Cancel"}),e.jsx(n,{onClick:()=>a(!1),children:"Send invite"})]}),children:e.jsx(m,{label:"Work email",type:"email",placeholder:"name@company.com"})})})]})}},t={render:()=>e.jsxs(r,{defaultOpen:!0,children:[e.jsx(p,{render:e.jsx(n,{variant:"secondary"}),children:"Rename token"}),e.jsx(d,{title:"Rename token",description:"References in components update in the next release.",footer:u,children:e.jsx(m,{label:"New name",defaultValue:"color.signal.default",hint:"Dot-separated path, lowercase."})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger render={<Button variant="secondary" />}>Rename token</DialogTrigger>
      <DialogContent title="Rename token" description="References in components update in the next release." footer={footer}>
        <Input label="New name" defaultValue="color.signal.default" hint="Dot-separated path, lowercase." />
      </DialogContent>
    </Dialog>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger render={<Button variant="secondary" />}>Review release notes</DialogTrigger>
      <DialogContent size="lg" title="Release 2.4.0" description="12 token changes and 3 component updates since 2.3.1." footer={<ButtonGroup align="end">
            <DialogClose render={<Button variant="ghost" />}>Close</DialogClose>
            <DialogClose render={<Button />}>Publish release</DialogClose>
          </ButtonGroup>}>
        {Array.from({
        length: 14
      }, (_, i) => <p key={i} style={{
        margin: '0 0 var(--space-3)'
      }}>
            Change {i + 1}: color.action.primary.bg now aliases palette.primary.900 in light and palette.primary.50 in dark,
            so primary buttons keep 4.5:1 contrast in both themes.
          </p>)}
      </DialogContent>
    </Dialog>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Invite reviewer</Button>
        <Dialog open={open} onOpenChange={setOpen} disablePointerDismissal>
          <DialogContent size="sm" title="Invite reviewer" description="They can approve token and component changes." footer={<ButtonGroup align="end">
                <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={() => setOpen(false)}>Send invite</Button>
              </ButtonGroup>}>
            <Input label="Work email" type="email" placeholder="name@company.com" />
          </DialogContent>
        </Dialog>
      </>;
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog defaultOpen>
      <DialogTrigger render={<Button variant="secondary" />}>Rename token</DialogTrigger>
      <DialogContent title="Rename token" description="References in components update in the next release." footer={footer}>
        <Input label="New name" defaultValue="color.signal.default" hint="Dot-separated path, lowercase." />
      </DialogContent>
    </Dialog>
}`,...t.parameters?.docs?.source},description:{story:"Open by default so the surface, header, body and footer can be reviewed in every theme.",...t.parameters?.docs?.description}}};const N=["Default","LongContent","Controlled","AllStates"];export{t as AllStates,l as Controlled,s as Default,i as LongContent,N as __namedExportsOrder,A as default};
