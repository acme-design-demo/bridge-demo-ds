import{j as e,B as o}from"./iframe-C39eZITx.js";import{S as y,b as i}from"./StateGrid-2rAOCvic.js";import{E as t,P as m,B as a}from"./Banner-CPyB2FXp.js";import"./preload-helper-PPVm8Dsz.js";const v={parameters:{viewport:{options:{phone390:{name:"Phone 390",styles:{width:"390px",height:"844px"},type:"mobile"}}}},globals:{viewport:{value:"phone390",isRotated:!1}}},j={title:"Feedback/Banner",component:a,args:{title:"Viewing the library as change #118. Nothing is saved.",appearance:"strong"},argTypes:{appearance:{control:"inline-radio",options:["strong","neutral"]},sticky:{control:"inline-radio",options:[void 0,"top","below-header"]},icon:{control:!1},actions:{control:!1},title:{control:"text"}},decorators:[u=>e.jsx("div",{style:{maxWidth:960},children:e.jsx(u,{})})]},n=e.jsx(o,{size:"sm",variant:"secondary",children:"Back to latest library"}),c={args:{icon:t,actions:n}},l={args:{icon:t,actions:n,children:"Components and tokens show the values of change #118. Publishing stays off until you go back."}},d={args:{appearance:"neutral",icon:m,title:"Editing the Button guidelines",children:"Changes stay in a draft until you open a pull request.",actions:e.jsxs(e.Fragment,{children:[e.jsx(o,{size:"sm",variant:"secondary",children:"Open pull request"}),e.jsx(o,{size:"sm",variant:"ghost",children:"Stop editing"})]})}},h={args:{icon:t}},s={render:u=>e.jsxs("div",{style:{height:320,overflow:"auto",border:"var(--border-width-default) dashed var(--color-border-default)"},children:[e.jsx(a,{...u,icon:t,actions:n,sticky:"top"}),Array.from({length:12},(w,g)=>e.jsxs("p",{style:{margin:"var(--space-3) var(--space-4)"},children:["color.surface.strong row ",g+1]},g))]})},r={...v,args:{icon:t,children:"Publishing stays off until you go back.",actions:n}},p={render:()=>e.jsxs(y,{children:[e.jsx(i,{label:"Strong: title, icon, action",children:e.jsx("div",{style:{width:"100%"},children:e.jsx(a,{icon:t,title:"Viewing the library as change #118. Nothing is saved.",actions:n})})}),e.jsx(i,{label:"Strong: with detail",children:e.jsx("div",{style:{width:"100%"},children:e.jsx(a,{icon:t,title:"Viewing the library as change #118. Nothing is saved.",actions:n,children:"Components and tokens show the values of change #118."})})}),e.jsx(i,{label:"Neutral: two actions",children:e.jsx("div",{style:{width:"100%"},children:e.jsx(a,{appearance:"neutral",icon:m,title:"Editing the Button guidelines",actions:e.jsxs(e.Fragment,{children:[e.jsx(o,{size:"sm",variant:"secondary",children:"Open pull request"}),e.jsx(o,{size:"sm",variant:"ghost",children:"Stop editing"})]}),children:"Changes stay in a draft until you open a pull request."})})}),e.jsx(i,{label:"No icon, no action",children:e.jsx("div",{style:{width:"100%"},children:e.jsx(a,{appearance:"neutral",title:"Read only: this library is archived."})})}),e.jsx(i,{label:"Narrow container (wraps; full-width actions need a narrow viewport)",children:e.jsx("div",{style:{width:360},children:e.jsx(a,{icon:t,title:"Viewing the library as change #118. Nothing is saved.",actions:n})})})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Eye,
    actions: backToLatest
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Eye,
    actions: backToLatest,
    children: 'Components and tokens show the values of change #118. Publishing stays off until you go back.'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'neutral',
    icon: PencilRuler,
    title: 'Editing the Button guidelines',
    children: 'Changes stay in a draft until you open a pull request.',
    actions: <>
        <Button size="sm" variant="secondary">Open pull request</Button>
        <Button size="sm" variant="ghost">Stop editing</Button>
      </>
  }
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Eye
  }
}`,...h.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    height: 320,
    overflow: 'auto',
    border: 'var(--border-width-default) dashed var(--color-border-default)'
  }}>
      <Banner {...args} icon={Eye} actions={backToLatest} sticky="top" />
      {Array.from({
      length: 12
    }, (_, i) => <p key={i} style={{
      margin: 'var(--space-3) var(--space-4)'
    }}>
          color.surface.strong row {i + 1}
        </p>)}
    </div>
}`,...s.parameters?.docs?.source},description:{story:"Sticky at the top of the scroll area: the way back stays in view while the page scrolls.",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...phone,
  args: {
    icon: Eye,
    children: 'Publishing stays off until you go back.',
    actions: backToLatest
  }
}`,...r.parameters?.docs?.source},description:{story:"Narrow: the text takes the full width and the actions go under it, each one filling the row.",...r.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenStack>
      <Specimen label="Strong: title, icon, action">
        <div style={{
        width: '100%'
      }}>
          <Banner icon={Eye} title="Viewing the library as change #118. Nothing is saved." actions={backToLatest} />
        </div>
      </Specimen>
      <Specimen label="Strong: with detail">
        <div style={{
        width: '100%'
      }}>
          <Banner icon={Eye} title="Viewing the library as change #118. Nothing is saved." actions={backToLatest}>
            Components and tokens show the values of change #118.
          </Banner>
        </div>
      </Specimen>
      <Specimen label="Neutral: two actions">
        <div style={{
        width: '100%'
      }}>
          <Banner appearance="neutral" icon={PencilRuler} title="Editing the Button guidelines" actions={<>
                <Button size="sm" variant="secondary">Open pull request</Button>
                <Button size="sm" variant="ghost">Stop editing</Button>
              </>}>
            Changes stay in a draft until you open a pull request.
          </Banner>
        </div>
      </Specimen>
      <Specimen label="No icon, no action">
        <div style={{
        width: '100%'
      }}>
          <Banner appearance="neutral" title="Read only: this library is archived." />
        </div>
      </Specimen>
      <Specimen label="Narrow container (wraps; full-width actions need a narrow viewport)">
        <div style={{
        width: 360
      }}>
          <Banner icon={Eye} title="Viewing the library as change #118. Nothing is saved." actions={backToLatest} />
        </div>
      </Specimen>
    </SpecimenStack>
}`,...p.parameters?.docs?.source}}};const k=["Preview","WithDetail","Neutral","TitleOnly","StickyTop","NarrowWithActions","AllStates"];export{p as AllStates,r as NarrowWithActions,d as Neutral,c as Preview,s as StickyTop,h as TitleOnly,l as WithDetail,k as __namedExportsOrder,j as default};
