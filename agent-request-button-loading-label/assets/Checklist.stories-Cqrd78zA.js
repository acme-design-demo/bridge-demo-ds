import{j as e,B as i}from"./iframe-C39eZITx.js";import{S as h,b as o}from"./StateGrid-2rAOCvic.js";import{C as s,a as t}from"./Checklist-C21UKl8q.js";import"./preload-helper-PPVm8Dsz.js";import"./check-DF5JWxCX.js";import"./VisuallyHidden-Dv77UG8G.js";const u={parameters:{viewport:{options:{phone390:{name:"Phone 390",styles:{width:"390px",height:"844px"},type:"mobile"}}}},globals:{viewport:{value:"phone390",isRotated:!1}}},b={title:"Data display/Checklist",component:s,args:{label:"What it needs to ship"},argTypes:{footer:{control:!1},children:{control:!1}},decorators:[a=>e.jsx("div",{style:{maxWidth:720},children:e.jsx(a,{})})]};function p({approve:a=!0}){return e.jsxs(s,{label:"What it needs to ship",children:[e.jsx(t,{status:"done",title:"Design rules",detail:"All 14 rules pass: contrast, naming, aliases."}),e.jsx(t,{status:"done",title:"Developer tests",detail:"212 tests pass on the preview build."}),e.jsx(t,{status:"waiting",title:"Design approval",detail:"Waiting on a design owner.",action:a?e.jsx(i,{size:"sm",variant:"secondary",children:"Approve"}):void 0})]})}const r={render:()=>e.jsx(p,{})},l={render:()=>e.jsxs(s,{label:"What it needs to ship",footer:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"This change waits on a failing test. Fix it on the branch, or ask a developer to look."}),e.jsx("div",{children:e.jsx(i,{size:"sm",variant:"secondary",children:"Open the test report"})})]}),children:[e.jsx(t,{status:"done",title:"Design rules",detail:"All 14 rules pass."}),e.jsx(t,{status:"failed",title:"Developer tests",detail:"2 of 212 tests fail: Button focus ring, Select keyboard.",action:e.jsx(i,{size:"sm",variant:"secondary",children:"View tests"})}),e.jsx(t,{status:"warning",title:"Design approval",detail:"Approved before the last change. Ask again.",action:e.jsx(i,{size:"sm",variant:"secondary",children:"Ask again"})})]})},d={render:()=>e.jsxs(s,{label:"What it needs to ship",children:[e.jsx(t,{status:"done",title:"Design rules",detail:"All 14 rules pass."}),e.jsx(t,{status:"done",title:"Developer tests",detail:"212 tests pass."}),e.jsx(t,{status:"done",title:"Design approval",detail:"Approved by Lea Martin."})]})},n={...u,render:()=>e.jsx(p,{})},m=[{status:"done",title:"Design rules",detail:"All 14 rules pass."},{status:"failed",title:"Developer tests",detail:"2 of 212 tests fail."},{status:"warning",title:"Contrast",detail:"color.text.muted is 4.3:1 on color.bg.subtle."},{status:"waiting",title:"Design approval",detail:"Waiting on a design owner."}],c={render:()=>e.jsxs(h,{children:[e.jsx(o,{label:"Statuses (done, failed, warning, waiting)",children:e.jsx("div",{style:{width:"100%"},children:e.jsx(s,{label:"Statuses",children:m.map(a=>e.jsx(t,{...a},a.status))})})}),e.jsx(o,{label:"Row with an action (hover and focus come from Button)",children:e.jsx("div",{style:{width:"100%"},children:e.jsx(p,{})})}),e.jsx(o,{label:"Footer with an action",children:e.jsx("div",{style:{width:"100%"},children:e.jsxs(s,{label:"What it needs to ship",footer:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Design approval waits on a design owner. Anyone with the design role can approve."}),e.jsx("div",{children:e.jsx(i,{size:"sm",variant:"secondary",children:"Request a review"})})]}),children:[e.jsx(t,{status:"done",title:"Developer tests",detail:"212 tests pass."}),e.jsx(t,{status:"waiting",title:"Design approval",detail:"Waiting on a design owner."})]})})}),e.jsx(o,{label:"Long detail (wraps in its column)",children:e.jsx("div",{style:{width:"100%"},children:e.jsx(s,{label:"Long detail",children:e.jsx(t,{status:"warning",title:"Design rules",detail:"color.feedback.warning.border.subtle has no dark value, and 3 components still read color.harbor.500 directly instead of a semantic token.",action:e.jsx(i,{size:"sm",variant:"secondary",children:"Review"})})})})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <ShipChecklist />
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Checklist label="What it needs to ship" footer={<>
          <p>This change waits on a failing test. Fix it on the branch, or ask a developer to look.</p>
          <div>
            <Button size="sm" variant="secondary">Open the test report</Button>
          </div>
        </>}>
      <ChecklistRow status="done" title="Design rules" detail="All 14 rules pass." />
      <ChecklistRow status="failed" title="Developer tests" detail="2 of 212 tests fail: Button focus ring, Select keyboard." action={<Button size="sm" variant="secondary">View tests</Button>} />
      <ChecklistRow status="warning" title="Design approval" detail="Approved before the last change. Ask again." action={<Button size="sm" variant="secondary">Ask again</Button>} />
    </Checklist>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Checklist label="What it needs to ship">
      <ChecklistRow status="done" title="Design rules" detail="All 14 rules pass." />
      <ChecklistRow status="done" title="Developer tests" detail="212 tests pass." />
      <ChecklistRow status="done" title="Design approval" detail="Approved by Lea Martin." />
    </Checklist>
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...phone,
  render: () => <ShipChecklist />
}`,...n.parameters?.docs?.source},description:{story:"Narrow: the detail goes under the title and the Approve button takes the full width of the row.",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenStack>
      <Specimen label="Statuses (done, failed, warning, waiting)">
        <div style={{
        width: '100%'
      }}>
          <Checklist label="Statuses">
            {STATUSES.map(s => <ChecklistRow key={s.status} {...s} />)}
          </Checklist>
        </div>
      </Specimen>
      <Specimen label="Row with an action (hover and focus come from Button)">
        <div style={{
        width: '100%'
      }}>
          <ShipChecklist />
        </div>
      </Specimen>
      <Specimen label="Footer with an action">
        <div style={{
        width: '100%'
      }}>
          <Checklist label="What it needs to ship" footer={<>
                <p>Design approval waits on a design owner. Anyone with the design role can approve.</p>
                <div>
                  <Button size="sm" variant="secondary">Request a review</Button>
                </div>
              </>}>
            <ChecklistRow status="done" title="Developer tests" detail="212 tests pass." />
            <ChecklistRow status="waiting" title="Design approval" detail="Waiting on a design owner." />
          </Checklist>
        </div>
      </Specimen>
      <Specimen label="Long detail (wraps in its column)">
        <div style={{
        width: '100%'
      }}>
          <Checklist label="Long detail">
            <ChecklistRow status="warning" title="Design rules" detail="color.feedback.warning.border.subtle has no dark value, and 3 components still read color.harbor.500 directly instead of a semantic token." action={<Button size="sm" variant="secondary">Review</Button>} />
          </Checklist>
        </div>
      </Specimen>
    </SpecimenStack>
}`,...c.parameters?.docs?.source}}};const f=["Default","Blocked","ReadyToShip","NarrowWithAction","AllStates"];export{c as AllStates,l as Blocked,r as Default,n as NarrowWithAction,d as ReadyToShip,f as __namedExportsOrder,b as default};
