import{T as c,I as t,j as e,C as o}from"./iframe-DXKUr0Oy.js";import{S as d,a as p,b as u}from"./StateGrid-XOvQ1EHh.js";import{G as n}from"./git-pull-request-BcUW4Ke8.js";import{P as g}from"./pencil-CBvXjJO3.js";import{G as b}from"./git-branch-DwfZwmkk.js";import"./preload-helper-PPVm8Dsz.js";const C={title:"Foundations/Icon",component:t,args:{icon:n,size:"sm"},argTypes:{icon:{control:!1},size:{control:"inline-radio",options:["xs","sm","md","lg"]},label:{control:"text"}}},s={},a={args:{size:"lg"}},r={args:{icon:c,size:"md",label:"Contrast below 4.5:1"}},x=[{label:"xs (12)",value:"xs"},{label:"sm (16)",value:"sm"},{label:"md (20)",value:"md"},{label:"lg (24)",value:"lg"}],l={render:()=>e.jsxs(d,{children:[e.jsx(p,{columns:[{label:"Pull request"},{label:"Branch"},{label:"Edit"},{label:"Passed"}],rows:x,render:(i,m)=>e.jsx(t,{icon:{"Pull request":n,Branch:b,Edit:g,Passed:o}[m.label]??n,size:i})}),e.jsxs(u,{label:"Inherits the text color",children:[e.jsxs("span",{style:{color:"var(--color-feedback-success-text)",display:"inline-flex",alignItems:"center",gap:6},children:[e.jsx(t,{icon:o})," Contrast 4.8:1"]}),e.jsxs("span",{style:{color:"var(--color-feedback-warning-text)",display:"inline-flex",alignItems:"center",gap:6},children:[e.jsx(t,{icon:c,label:"Warning"})," 2 unused tokens"]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    icon: TriangleAlert,
    size: 'md',
    label: 'Contrast below 4.5:1'
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenStack>
      <StateGrid columns={[{
      label: 'Pull request'
    }, {
      label: 'Branch'
    }, {
      label: 'Edit'
    }, {
      label: 'Passed'
    }]} rows={SIZES} render={(size, col) => <Icon icon={{
      'Pull request': GitPullRequest,
      Branch: GitBranch,
      Edit: Pencil,
      Passed: CircleCheck
    }[col.label] ?? GitPullRequest} size={size} />} />
      <Specimen label="Inherits the text color">
        <span style={{
        color: 'var(--color-feedback-success-text)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6
      }}>
          <Icon icon={CircleCheck} /> Contrast 4.8:1
        </span>
        <span style={{
        color: 'var(--color-feedback-warning-text)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6
      }}>
          <Icon icon={TriangleAlert} label="Warning" /> 2 unused tokens
        </span>
      </Specimen>
    </SpecimenStack>
}`,...l.parameters?.docs?.source}}};const j=["Default","Large","WithLabel","AllStates"];export{l as AllStates,s as Default,a as Large,r as WithLabel,j as __namedExportsOrder,C as default};
