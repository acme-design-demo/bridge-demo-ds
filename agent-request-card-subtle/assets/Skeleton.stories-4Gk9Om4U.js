import{j as e}from"./iframe-DXKUr0Oy.js";import{S as c,b as t}from"./StateGrid-XOvQ1EHh.js";import{S as r}from"./Skeleton-DzL3Y8r2.js";import{V as d}from"./VisuallyHidden-C2Zxdkmv.js";import"./preload-helper-PPVm8Dsz.js";const S={title:"Feedback/Skeleton",component:r,args:{variant:"text",lines:3},argTypes:{variant:{control:"inline-radio",options:["text","circle","rect"]}},decorators:[l=>e.jsx("div",{style:{maxWidth:420},children:e.jsx(l,{})})]},i={},a={args:{variant:"circle"}},s={args:{variant:"rect",height:"120px"}},n={render:()=>e.jsxs(c,{children:[e.jsx(t,{label:"Loading a token row (aria-busy pattern)",children:e.jsxs("div",{"aria-busy":"true",style:{display:"flex",gap:12,alignItems:"center",width:380},children:[e.jsx(d,{children:"Loading tokens"}),e.jsx(r,{variant:"circle"}),e.jsxs("div",{style:{flex:1},children:[e.jsx(r,{width:"60%"}),e.jsx(r,{width:"35%"})]})]})}),e.jsx(t,{label:"Paragraph",children:e.jsx("div",{style:{width:380},children:e.jsx(r,{lines:4})})}),e.jsx(t,{label:"Card",children:e.jsxs("div",{style:{width:280,display:"grid",gap:12},children:[e.jsx(r,{variant:"rect",height:"120px"}),e.jsx(r,{width:"70%"}),e.jsx(r,{lines:2})]})}),e.jsx(t,{label:"Static (no shimmer)",children:e.jsx("div",{style:{width:280},children:e.jsx(r,{lines:2,static:!0})})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'circle'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'rect',
    height: '120px'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenStack>
      <Specimen label="Loading a token row (aria-busy pattern)">
        <div aria-busy="true" style={{
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        width: 380
      }}>
          <VisuallyHidden>Loading tokens</VisuallyHidden>
          <Skeleton variant="circle" />
          <div style={{
          flex: 1
        }}>
            <Skeleton width="60%" />
            <Skeleton width="35%" />
          </div>
        </div>
      </Specimen>
      <Specimen label="Paragraph">
        <div style={{
        width: 380
      }}>
          <Skeleton lines={4} />
        </div>
      </Specimen>
      <Specimen label="Card">
        <div style={{
        width: 280,
        display: 'grid',
        gap: 12
      }}>
          <Skeleton variant="rect" height="120px" />
          <Skeleton width="70%" />
          <Skeleton lines={2} />
        </div>
      </Specimen>
      <Specimen label="Static (no shimmer)">
        <div style={{
        width: 280
      }}>
          <Skeleton lines={2} static />
        </div>
      </Specimen>
    </SpecimenStack>
}`,...n.parameters?.docs?.source}}};const g=["Text","Circle","Rect","AllStates"];export{n as AllStates,a as Circle,s as Rect,i as Text,g as __namedExportsOrder,S as default};
