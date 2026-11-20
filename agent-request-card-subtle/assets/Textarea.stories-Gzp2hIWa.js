import{j as e}from"./iframe-DXKUr0Oy.js";import{S as w,b as h,a as u}from"./StateGrid-XOvQ1EHh.js";import{T as t}from"./Textarea-R-bZMxtx.js";import"./preload-helper-PPVm8Dsz.js";import"./Field-BDqUGIo2.js";import"./useLabelableId-CSZVJFjq.js";import"./FieldsetRootContext-DJ8oDLFy.js";import"./useFieldValidation-8rMq9P0G.js";import"./useRegisteredLabelId-m5lwGR0I.js";import"./FieldItemContext-CvKyGhJ-.js";import"./Input-COtZ000K.js";import"./useValueChanged-BPkaUzIM.js";const F={title:"Forms/Textarea",component:t,args:{label:"Change summary",hint:"Reviewers read this first. Say what changed and why.",placeholder:"Darkens steel 600 so muted text passes 4.5:1 on the canvas."}},p=[a=>e.jsx("div",{style:{maxWidth:420},children:e.jsx(a,{})})],m={maxWidth:"65ch",color:"var(--color-text-default)",fontFamily:"var(--typography-body-family)",fontSize:"var(--typography-body-size)",lineHeight:"var(--typography-body-line-height)",letterSpacing:"var(--typography-body-tracking)"},i={decorators:p},o={decorators:p,args:{maxLength:280,showCount:!0}},l={decorators:p,args:{error:"Add a summary before you request review."}},d={decorators:p,args:{autosize:!1,rows:4}},s={name:"In a paragraph",render:()=>e.jsxs("div",{style:m,children:[e.jsx("h3",{style:{margin:"0 0 var(--space-2)",font:"inherit",fontWeight:"var(--font-weight-semibold)"},children:"Summary"}),e.jsx(t,{appearance:"inline","aria-label":"Summary",placeholder:"One or two sentences: what it is for, and what to use instead.",defaultValue:"Multi-line text that grows with its content up to a maximum, with an optional character count. Give it a label prop or place it inside a Field."}),e.jsx("p",{style:{margin:"var(--space-4) 0 0"},children:"The paragraph above is a textarea. This one is plain text, set in the same type, so you can compare the two."})]})},n={name:"In a list",render:()=>e.jsx("ul",{style:{...m,margin:0,paddingLeft:"var(--space-6)"},children:["Free text longer than one line: pull request summaries, release notes, review comments.","showCount with maxLength when there is a hard limit.",""].map((a,r)=>e.jsx("li",{children:e.jsx(t,{appearance:"inline","aria-label":`When to use, item ${r+1}`,placeholder:"Write one sentence",defaultValue:a})},r))})},y=[{label:"Empty",value:"empty"},{label:"Filled",value:"filled"},{label:"Invalid",value:"invalid"},{label:"Disabled",value:"disabled"},{label:"Read only",value:"readonly"}],g=[{label:"Default"},{label:"Hover",pseudo:"hover"},{label:"Focus",pseudo:"focus-visible"}],c={render:()=>e.jsxs(w,{children:[e.jsx(h,{label:"Field (default)",children:e.jsx(u,{columns:g,rows:y,render:(a,r)=>e.jsx("div",{style:{width:260},children:e.jsx(t,{label:`Summary ${a} ${r.label}`,hideLabel:!0,rows:2,placeholder:"What changed and why",defaultValue:a==="empty"?void 0:"Darkens steel 600 so muted text passes on the canvas.",error:a==="invalid"?"Keep it under 280 characters.":void 0,disabled:a==="disabled",readOnly:a==="readonly"})})})}),e.jsx(h,{label:"Inline (in-place editing)",children:e.jsx(u,{columns:g,rows:y,render:(a,r)=>e.jsx("div",{style:{...m,width:260,paddingInline:"var(--space-3)"},children:e.jsx(t,{appearance:"inline",label:`Inline summary ${a} ${r.label}`,hideLabel:!0,placeholder:"What changed and why",defaultValue:a==="empty"?void 0:"Darkens steel 600 so muted text passes on the canvas.",error:a==="invalid"?"Keep it under 280 characters.":void 0,disabled:a==="disabled",readOnly:a==="readonly"})})})}),e.jsx(h,{label:"Autosize with counter",children:e.jsx("div",{style:{width:360},children:e.jsx(t,{label:"Release notes",maxLength:500,showCount:!0,defaultValue:`Adds the ocean brand.
Fixes border.strong contrast in both themes.
New density tokens.`})})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  decorators: narrow
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  decorators: narrow,
  args: {
    maxLength: 280,
    showCount: true
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  decorators: narrow,
  args: {
    error: 'Add a summary before you request review.'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  decorators: narrow,
  args: {
    autosize: false,
    rows: 4
  }
}`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'In a paragraph',
  render: () => <div style={page}>
      <h3 style={{
      margin: '0 0 var(--space-2)',
      font: 'inherit',
      fontWeight: 'var(--font-weight-semibold)'
    }}>Summary</h3>
      <Textarea appearance="inline" aria-label="Summary" placeholder="One or two sentences: what it is for, and what to use instead." defaultValue="Multi-line text that grows with its content up to a maximum, with an optional character count. Give it a label prop or place it inside a Field." />
      <p style={{
      margin: 'var(--space-4) 0 0'
    }}>
        The paragraph above is a textarea. This one is plain text, set in the same type, so you can compare the two.
      </p>
    </div>
}`,...s.parameters?.docs?.source},description:{story:"A paragraph edited in place: the text keeps the page's font, size and line height, the field shows on hover and focus.",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'In a list',
  render: () => <ul style={{
    ...page,
    margin: 0,
    paddingLeft: 'var(--space-6)'
  }}>
      {['Free text longer than one line: pull request summaries, release notes, review comments.', 'showCount with maxLength when there is a hard limit.', ''].map((text, i) => <li key={i}>
          <Textarea appearance="inline" aria-label={\`When to use, item \${i + 1}\`} placeholder="Write one sentence" defaultValue={text} />
        </li>)}
    </ul>
}`,...n.parameters?.docs?.source},description:{story:"One inline Textarea per list item, as the Library edits When to use and Accessibility lists.",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenStack>
      <Specimen label="Field (default)">
        <StateGrid<Row> columns={columns} rows={rows} render={(row, col) => <div style={{
        width: 260
      }}>
              <Textarea label={\`Summary \${row} \${col.label}\`} hideLabel rows={2} placeholder="What changed and why" defaultValue={row === 'empty' ? undefined : 'Darkens steel 600 so muted text passes on the canvas.'} error={row === 'invalid' ? 'Keep it under 280 characters.' : undefined} disabled={row === 'disabled'} readOnly={row === 'readonly'} />
            </div>} />
      </Specimen>
      <Specimen label="Inline (in-place editing)">
        <StateGrid<Row> columns={columns} rows={rows} render={(row, col) => <div style={{
        ...page,
        width: 260,
        paddingInline: 'var(--space-3)'
      }}>
              <Textarea appearance="inline" label={\`Inline summary \${row} \${col.label}\`} hideLabel placeholder="What changed and why" defaultValue={row === 'empty' ? undefined : 'Darkens steel 600 so muted text passes on the canvas.'} error={row === 'invalid' ? 'Keep it under 280 characters.' : undefined} disabled={row === 'disabled'} readOnly={row === 'readonly'} />
            </div>} />
      </Specimen>
      <Specimen label="Autosize with counter">
        <div style={{
        width: 360
      }}>
          <Textarea label="Release notes" maxLength={500} showCount defaultValue={'Adds the ocean brand.\\nFixes border.strong contrast in both themes.\\nNew density tokens.'} />
        </div>
      </Specimen>
    </SpecimenStack>
}`,...c.parameters?.docs?.source}}};const V=["Default","WithCount","Invalid","Resizable","InAParagraph","InAList","AllStates"];export{c as AllStates,i as Default,n as InAList,s as InAParagraph,l as Invalid,d as Resizable,o as WithCount,V as __namedExportsOrder,F as default};
