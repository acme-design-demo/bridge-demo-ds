import{B as r,j as e,r as f}from"./iframe-RdPw3ozT.js";import{S as x,a as b,b as n}from"./StateGrid-BzzO3xCu.js";import{T as k}from"./trash-DB8EMX3U.js";import{G as S}from"./git-pull-request-Bl4OPDCZ.js";import{P as B}from"./plus-DbJ-XIgv.js";import{C as j}from"./chevron-down-D1azWKxb.js";import{C as w}from"./check-C56ON0ds.js";import{C as z}from"./columns-2-CX3VJyTb.js";import"./preload-helper-PPVm8Dsz.js";const W={title:"Actions/Button",component:r,args:{children:"Publish tokens",variant:"primary",size:"md"},argTypes:{variant:{control:"inline-radio",options:["primary","secondary","ghost","danger","link","inverse"]},size:{control:"inline-radio",options:["sm","md","lg"]},iconStart:{control:!1},iconEnd:{control:!1},render:{control:!1}}},o={},i={args:{variant:"secondary",children:"Save as draft"}},t={args:{variant:"ghost",children:"View diff"}},l={args:{variant:"danger",children:"Delete 3 tokens",iconStart:k}},d={args:{iconStart:S,children:"Open pull request"}},c={args:{loading:!0,children:"Publishing"}},u={args:{disabled:!0}},p={args:{variant:"link",children:"Show only these"},render:a=>e.jsxs("p",{style:{margin:0,fontSize:"var(--font-size-300)"},children:["2 components need guidance. ",e.jsx(r,{...a})]})},m={args:{variant:"inverse",children:"Copy command"},decorators:[a=>e.jsx("div",{style:{padding:"var(--space-6)",borderRadius:"var(--radius-container)",backgroundColor:"var(--color-surface-inverse)"},children:e.jsx(a,{})})]};function P(){const[a,s]=f.useState(!1);return e.jsx(r,{variant:"secondary",iconStart:z,pressed:a,onClick:()=>s(y=>!y),children:"Compare"})}const v={render:()=>e.jsx(P,{})},g={args:{fullWidth:!0},decorators:[a=>e.jsx("div",{style:{maxWidth:360},children:e.jsx(a,{})})]},C=[{label:"Primary",value:"primary"},{label:"Secondary",value:"secondary"},{label:"Ghost",value:"ghost"},{label:"Danger",value:"danger"}],D={primary:"Publish",secondary:"Save draft",ghost:"View diff",danger:"Delete"},h={parameters:{layout:"padded"},render:()=>e.jsxs(x,{children:[e.jsx(b,{columns:[{label:"Default"},{label:"Hover",pseudo:"hover"},{label:"Focus visible",pseudo:"focus-visible"},{label:"Pressed",pseudo:"active"},{label:"Loading"},{label:"Disabled"}],rows:C,render:(a,s)=>e.jsx(r,{variant:a,loading:s.label==="Loading",disabled:s.label==="Disabled",children:D[a]})}),e.jsxs(n,{label:"Sizes (follow density)",children:[e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"md",children:"Medium"}),e.jsx(r,{size:"lg",children:"Large"})]}),e.jsxs(n,{label:"Icons",children:[e.jsx(r,{iconStart:B,children:"New token"}),e.jsx(r,{variant:"secondary",iconEnd:j,children:"Theme"}),e.jsx(r,{variant:"ghost",size:"sm",iconStart:S,children:"Review"})]}),e.jsx(b,{columns:[{label:"Not pressed"},{label:"Pressed"},{label:"Pressed, hover",pseudo:"hover"},{label:"Pressed, focus visible",pseudo:"focus-visible"}],rows:[{label:"Toggle, secondary",value:"secondary"},{label:"Toggle, ghost",value:"ghost"},{label:"Toggle, link",value:"link"}],render:(a,s)=>e.jsx(r,{variant:a,size:"sm",pressed:s.label!=="Not pressed",iconStart:a==="link"||s.label==="Not pressed"?void 0:w,children:a==="link"?"Show only these":"Show what changed"})}),e.jsx(n,{label:"Link inside a sentence",children:e.jsxs("span",{children:["3 components need guidance. ",e.jsx(r,{variant:"link",children:"Show only these"})]})}),e.jsxs(n,{label:"Inverse on a strong surface",children:[e.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",padding:"var(--space-4)",borderRadius:"var(--radius-container)",backgroundColor:"var(--color-surface-inverse)"},children:[e.jsx(r,{variant:"inverse",size:"sm",children:"Copy command"}),e.jsx(r,{variant:"inverse",size:"sm",disabled:!0,children:"Disabled"})]}),e.jsx("div",{style:{display:"flex",gap:"var(--space-3)",padding:"var(--space-4)",borderRadius:"var(--radius-container)",backgroundColor:"var(--color-action-primary-bg)"},children:e.jsx(r,{variant:"inverse",size:"sm",children:"Review the change"})})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Save as draft'
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'View diff'
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Delete 3 tokens',
    iconStart: Trash2
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    iconStart: GitPullRequest,
    children: 'Open pull request'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: 'Publishing'
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'link',
    children: 'Show only these'
  },
  render: args => <p style={{
    margin: 0,
    fontSize: 'var(--font-size-300)'
  }}>
      2 components need guidance. <Button {...args} />
    </p>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'inverse',
    children: 'Copy command'
  },
  decorators: [S => <div style={{
    padding: 'var(--space-6)',
    borderRadius: 'var(--radius-container)',
    backgroundColor: 'var(--color-surface-inverse)'
  }}>
        <S />
      </div>]
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleDemo />
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  },
  decorators: [S => <div style={{
    maxWidth: 360
  }}><S /></div>]
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
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
      label: 'Pressed',
      pseudo: 'active'
    }, {
      label: 'Loading'
    }, {
      label: 'Disabled'
    }]} rows={VARIANTS} render={(variant, col) => <Button variant={variant} loading={col.label === 'Loading'} disabled={col.label === 'Disabled'}>
            {LABEL[variant]}
          </Button>} />
      <Specimen label="Sizes (follow density)">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </Specimen>
      <Specimen label="Icons">
        <Button iconStart={Plus}>New token</Button>
        <Button variant="secondary" iconEnd={ChevronDown}>Theme</Button>
        <Button variant="ghost" size="sm" iconStart={GitPullRequest}>Review</Button>
      </Specimen>
      <StateGrid columns={[{
      label: 'Not pressed'
    }, {
      label: 'Pressed'
    }, {
      label: 'Pressed, hover',
      pseudo: 'hover'
    }, {
      label: 'Pressed, focus visible',
      pseudo: 'focus-visible'
    }]} rows={[{
      label: 'Toggle, secondary',
      value: 'secondary' as ButtonVariant
    }, {
      label: 'Toggle, ghost',
      value: 'ghost' as ButtonVariant
    }, {
      label: 'Toggle, link',
      value: 'link' as ButtonVariant
    }]} render={(variant, col) => <Button variant={variant} size="sm" pressed={col.label !== 'Not pressed'} iconStart={variant === 'link' ? undefined : col.label === 'Not pressed' ? undefined : Check}>
            {variant === 'link' ? 'Show only these' : 'Show what changed'}
          </Button>} />
      <Specimen label="Link inside a sentence">
        <span>
          3 components need guidance. <Button variant="link">Show only these</Button>
        </span>
      </Specimen>
      <Specimen label="Inverse on a strong surface">
        <div style={{
        display: 'flex',
        gap: 'var(--space-3)',
        padding: 'var(--space-4)',
        borderRadius: 'var(--radius-container)',
        backgroundColor: 'var(--color-surface-inverse)'
      }}>
          <Button variant="inverse" size="sm">Copy command</Button>
          <Button variant="inverse" size="sm" disabled>Disabled</Button>
        </div>
        <div style={{
        display: 'flex',
        gap: 'var(--space-3)',
        padding: 'var(--space-4)',
        borderRadius: 'var(--radius-container)',
        backgroundColor: 'var(--color-action-primary-bg)'
      }}>
          <Button variant="inverse" size="sm">Review the change</Button>
        </div>
      </Specimen>
    </SpecimenStack>
}`,...h.parameters?.docs?.source}}};const q=["Primary","Secondary","Ghost","Danger","WithIcons","Loading","Disabled","Link","Inverse","Toggle","FullWidth","AllStates"];export{h as AllStates,l as Danger,u as Disabled,g as FullWidth,t as Ghost,m as Inverse,p as Link,c as Loading,o as Primary,i as Secondary,v as Toggle,d as WithIcons,q as __namedExportsOrder,W as default};
