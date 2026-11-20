import{j as e,B as a,r as m}from"./iframe-C39eZITx.js";import{A as t,a as l,b as i}from"./AlertDialog-Cu28F25Q.js";import{T as u}from"./trash-C4rRzIED.js";import"./preload-helper-PPVm8Dsz.js";import"./Dialog.module-C6uZvA9U.js";import"./DialogTrigger-DWGmA-6e.js";import"./useOpenInteractionType-v9BQoCPk.js";import"./useValueChanged-iaW_aQ2H.js";import"./composite-D1d9lgzi.js";import"./ButtonGroup-BGSAmrT0.js";const S={title:"Overlays/AlertDialog",component:t},r={render:()=>e.jsxs(t,{children:[e.jsx(l,{render:e.jsx(a,{variant:"danger",iconStart:u}),children:"Delete 3 tokens"}),e.jsx(i,{title:"Delete 3 tokens?",description:"Components that use them fall back to their defaults. This cannot be undone.",confirmLabel:"Delete tokens"})]})},n={render:()=>e.jsxs(t,{children:[e.jsx(l,{render:e.jsx(a,{}),children:"Publish release"}),e.jsx(i,{tone:"primary",title:"Publish release 2.4.0?",description:"Consumers on the latest channel get it on their next install.",confirmLabel:"Publish release"})]})},s={render:function(){const[p,c]=m.useState(!1),[g,d]=m.useState(!1);return e.jsxs(t,{open:p,onOpenChange:c,children:[e.jsx(l,{render:e.jsx(a,{variant:"danger"}),children:"Revoke access"}),e.jsx(i,{title:"Revoke access for Ines?",description:"She can no longer review or merge changes in this system.",confirmLabel:g?"Revoking":"Revoke access",loading:g,closeOnConfirm:!1,onConfirm:()=>{d(!0),setTimeout(()=>{d(!1),c(!1)},1200)}})]})}},o={render:()=>e.jsxs(t,{defaultOpen:!0,children:[e.jsx(l,{render:e.jsx(a,{variant:"danger",iconStart:u}),children:"Delete 3 tokens"}),e.jsx(i,{title:"Delete 3 tokens?",description:"Components that use them fall back to their defaults. This cannot be undone.",confirmLabel:"Delete tokens",children:e.jsxs("ul",{style:{margin:0,paddingInlineStart:"var(--space-5)",fontFamily:"var(--font-family-mono)",fontSize:"var(--font-size-100)"},children:[e.jsx("li",{children:"color.legacy.brand"}),e.jsx("li",{children:"color.legacy.accent"}),e.jsx("li",{children:"space.legacy.gutter"})]})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger render={<Button variant="danger" iconStart={Trash2} />}>Delete 3 tokens</AlertDialogTrigger>
      <AlertDialogContent title="Delete 3 tokens?" description="Components that use them fall back to their defaults. This cannot be undone." confirmLabel="Delete tokens" />
    </AlertDialog>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger render={<Button />}>Publish release</AlertDialogTrigger>
      <AlertDialogContent tone="primary" title="Publish release 2.4.0?" description="Consumers on the latest channel get it on their next install." confirmLabel="Publish release" />
    </AlertDialog>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    const [busy, setBusy] = useState(false);
    return <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger render={<Button variant="danger" />}>Revoke access</AlertDialogTrigger>
        <AlertDialogContent title="Revoke access for Ines?" description="She can no longer review or merge changes in this system." confirmLabel={busy ? 'Revoking' : 'Revoke access'} loading={busy} closeOnConfirm={false} onConfirm={() => {
        setBusy(true);
        setTimeout(() => {
          setBusy(false);
          setOpen(false);
        }, 1200);
      }} />
      </AlertDialog>;
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <AlertDialog defaultOpen>
      <AlertDialogTrigger render={<Button variant="danger" iconStart={Trash2} />}>Delete 3 tokens</AlertDialogTrigger>
      <AlertDialogContent title="Delete 3 tokens?" description="Components that use them fall back to their defaults. This cannot be undone." confirmLabel="Delete tokens">
        <ul style={{
        margin: 0,
        paddingInlineStart: 'var(--space-5)',
        fontFamily: 'var(--font-family-mono)',
        fontSize: 'var(--font-size-100)'
      }}>
          <li>color.legacy.brand</li>
          <li>color.legacy.accent</li>
          <li>space.legacy.gutter</li>
        </ul>
      </AlertDialogContent>
    </AlertDialog>
}`,...o.parameters?.docs?.source}}};const T=["Destructive","Consequential","AsyncConfirm","AllStates"];export{o as AllStates,s as AsyncConfirm,n as Consequential,r as Destructive,T as __namedExportsOrder,S as default};
