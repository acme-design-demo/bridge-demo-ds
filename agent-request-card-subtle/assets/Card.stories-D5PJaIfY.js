import{j as e,B as c}from"./iframe-DXKUr0Oy.js";import{S as h,b as u}from"./StateGrid-XOvQ1EHh.js";import{C as r,a as s,b as n,c as m}from"./Card-of7OFTyE.js";import{B as l}from"./Badge-WhFx8sP1.js";import"./preload-helper-PPVm8Dsz.js";const j={title:"Data display/Card",component:r,args:{padding:"default",interactive:!1,tone:"default"},argTypes:{padding:{control:"inline-radio",options:["none","compact","default"]},tone:{control:"inline-radio",options:["default","subtle"]}}},p=[a=>e.jsx("div",{style:{maxWidth:420},children:e.jsx(a,{})})],t={decorators:p,render:a=>e.jsxs(r,{...a,"aria-labelledby":"card-release",children:[e.jsxs(s,{children:[e.jsx("span",{id:"card-release",children:"Release 1.4.0"}),e.jsx(l,{tone:"success",children:"Published"})]}),e.jsx(n,{children:"Adds a subtle Badge appearance and tightens focus styles. Two components changed, no token changes."}),e.jsxs(m,{children:[e.jsx(c,{variant:"ghost",size:"sm",children:"View diff"}),e.jsx(c,{size:"sm",children:"Approve"})]})]})},d={decorators:p,args:{interactive:!0},render:a=>e.jsxs(r,{...a,children:[e.jsxs(s,{children:[e.jsx("a",{href:"#button","data-card-primary":"",children:"Button"}),e.jsx(l,{tone:"info",children:"12 stories"})]}),e.jsx(n,{children:"Triggers an action on the current screen. 4 variants, 3 sizes, 31 consumers."})]})},o={decorators:p,args:{tone:"subtle"},render:a=>e.jsxs(r,{...a,"aria-labelledby":"card-tips",children:[e.jsx(s,{children:e.jsx("span",{id:"card-tips",children:"Before you invite people"})}),e.jsx(n,{children:"Invited people see every project in this workspace. You can change their role at any time."})]})},i={render:()=>e.jsxs(h,{children:[e.jsx(u,{label:"Static, interactive (hover), interactive (focus visible)",children:["default","hover","focus"].map(a=>e.jsx("div",{style:{width:280},children:e.jsxs(r,{interactive:a!=="default",className:a==="hover"?"pseudo-hover":void 0,children:[e.jsxs(s,{children:[e.jsx("a",{href:"#tokens","data-card-primary":"",className:a==="focus"?"pseudo-focus-visible":void 0,children:"Color tokens"}),e.jsx(l,{tone:"warning",children:"2 failing"})]}),e.jsx(n,{children:"48 semantic tokens. 2 contrast pairs below 4.5:1 in dark."})]})},a))}),e.jsx(u,{label:"Padding: default, compact, none",children:["default","compact","none"].map(a=>e.jsx("div",{style:{width:280},children:e.jsxs(r,{padding:a,children:[e.jsx(s,{children:"Owners"}),e.jsx(n,{children:"Design: Florian G. Tech: platform team."}),e.jsx(m,{children:e.jsx(c,{size:"sm",variant:"secondary",children:"Edit owners"})})]})},a))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  decorators: narrow,
  render: args => <Card {...args} aria-labelledby="card-release">
      <CardHeader>
        <span id="card-release">Release 1.4.0</span>
        <Badge tone="success">Published</Badge>
      </CardHeader>
      <CardBody>Adds a subtle Badge appearance and tightens focus styles. Two components changed, no token changes.</CardBody>
      <CardFooter>
        <Button variant="ghost" size="sm">View diff</Button>
        <Button size="sm">Approve</Button>
      </CardFooter>
    </Card>
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  decorators: narrow,
  args: {
    interactive: true
  },
  render: args => <Card {...args}>
      <CardHeader>
        <a href="#button" data-card-primary="">Button</a>
        <Badge tone="info">12 stories</Badge>
      </CardHeader>
      <CardBody>Triggers an action on the current screen. 4 variants, 3 sizes, 31 consumers.</CardBody>
    </Card>
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  decorators: narrow,
  args: {
    tone: 'subtle'
  },
  render: args => <Card {...args} aria-labelledby="card-tips">
      <CardHeader>
        <span id="card-tips">Before you invite people</span>
      </CardHeader>
      <CardBody>Invited people see every project in this workspace. You can change their role at any time.</CardBody>
    </Card>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenStack>
      <Specimen label="Static, interactive (hover), interactive (focus visible)">
        {(['default', 'hover', 'focus'] as const).map(state => <div key={state} style={{
        width: 280
      }}>
            <Card interactive={state !== 'default'} className={state === 'hover' ? 'pseudo-hover' : undefined}>
              <CardHeader>
                <a href="#tokens" data-card-primary="" className={state === 'focus' ? 'pseudo-focus-visible' : undefined}>
                  Color tokens
                </a>
                <Badge tone="warning">2 failing</Badge>
              </CardHeader>
              <CardBody>48 semantic tokens. 2 contrast pairs below 4.5:1 in dark.</CardBody>
            </Card>
          </div>)}
      </Specimen>
      <Specimen label="Padding: default, compact, none">
        {(['default', 'compact', 'none'] as const).map(padding => <div key={padding} style={{
        width: 280
      }}>
            <Card padding={padding}>
              <CardHeader>Owners</CardHeader>
              <CardBody>Design: Florian G. Tech: platform team.</CardBody>
              <CardFooter>
                <Button size="sm" variant="secondary">Edit owners</Button>
              </CardFooter>
            </Card>
          </div>)}
      </Specimen>
    </SpecimenStack>
}`,...i.parameters?.docs?.source}}};const y=["Default","Interactive","Subtle","AllStates"];export{i as AllStates,t as Default,d as Interactive,o as Subtle,y as __namedExportsOrder,j as default};
