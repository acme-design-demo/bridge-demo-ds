import{j as e,B as i}from"./iframe-RdPw3ozT.js";import{S as u,b as l}from"./StateGrid-BzzO3xCu.js";import{C as r,a as t,b as o,c as p}from"./Card-xXj5czqy.js";import{B as c}from"./Badge-DHJk7zco.js";import"./preload-helper-PPVm8Dsz.js";const x={title:"Data display/Card",component:r,args:{padding:"default",interactive:!1},argTypes:{padding:{control:"inline-radio",options:["none","compact","default"]}}},m=[a=>e.jsx("div",{style:{maxWidth:420},children:e.jsx(a,{})})],s={decorators:m,render:a=>e.jsxs(r,{...a,"aria-labelledby":"card-release",children:[e.jsxs(t,{children:[e.jsx("span",{id:"card-release",children:"Release 1.4.0"}),e.jsx(c,{tone:"success",children:"Published"})]}),e.jsx(o,{children:"Adds a subtle Badge appearance and tightens focus styles. Two components changed, no token changes."}),e.jsxs(p,{children:[e.jsx(i,{variant:"ghost",size:"sm",children:"View diff"}),e.jsx(i,{size:"sm",children:"Approve"})]})]})},n={decorators:m,args:{interactive:!0},render:a=>e.jsxs(r,{...a,children:[e.jsxs(t,{children:[e.jsx("a",{href:"#button","data-card-primary":"",children:"Button"}),e.jsx(c,{tone:"info",children:"12 stories"})]}),e.jsx(o,{children:"Triggers an action on the current screen. 4 variants, 3 sizes, 31 consumers."})]})},d={render:()=>e.jsxs(u,{children:[e.jsx(l,{label:"Static, interactive (hover), interactive (focus visible)",children:["default","hover","focus"].map(a=>e.jsx("div",{style:{width:280},children:e.jsxs(r,{interactive:a!=="default",className:a==="hover"?"pseudo-hover":void 0,children:[e.jsxs(t,{children:[e.jsx("a",{href:"#tokens","data-card-primary":"",className:a==="focus"?"pseudo-focus-visible":void 0,children:"Color tokens"}),e.jsx(c,{tone:"warning",children:"2 failing"})]}),e.jsx(o,{children:"48 semantic tokens. 2 contrast pairs below 4.5:1 in dark."})]})},a))}),e.jsx(l,{label:"Padding: default, compact, none",children:["default","compact","none"].map(a=>e.jsx("div",{style:{width:280},children:e.jsxs(r,{padding:a,children:[e.jsx(t,{children:"Owners"}),e.jsx(o,{children:"Design: Florian G. Tech: platform team."}),e.jsx(p,{children:e.jsx(i,{size:"sm",variant:"secondary",children:"Edit owners"})})]})},a))})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const j=["Default","Interactive","AllStates"];export{d as AllStates,s as Default,n as Interactive,j as __namedExportsOrder,x as default};
