import{j as e,r as R,a as z}from"./iframe-DXKUr0Oy.js";import{S as D,b as k}from"./StateGrid-XOvQ1EHh.js";import{T as x,a as y,b as o,c as r,d as S,e as n,u as U,f as L}from"./Table-DgtyGCof.js";import{B}from"./Badge-WhFx8sP1.js";import{C as A}from"./Checkbox-D6lL853r.js";import{V as g}from"./VisuallyHidden-C2Zxdkmv.js";import{E as $}from"./ellipsis-B1lmDZ-x.js";import"./preload-helper-PPVm8Dsz.js";import"./check-Be9-HUDz.js";import"./minus-BDi4_1s5.js";import"./useControlled-DBMtfaiZ.js";import"./useLabelableId-CSZVJFjq.js";import"./FieldItemContext-CvKyGhJ-.js";import"./useAriaLabelledBy-Cuc0zZXq.js";import"./useValueChanged-BPkaUzIM.js";const se={title:"Data display/Table",component:x,args:{caption:"Tokens changed in this release",stickyHeader:!1,gridLines:!1}},T=[{name:"color.text.default",owner:"Design",uses:212,contrast:15.1,status:{tone:"success",label:"Published"}},{name:"color.border.strong",owner:"Design",uses:48,contrast:3.25,status:{tone:"info",label:"Changed"}},{name:"color.signal.default",owner:"Platform",uses:31,contrast:3.72,status:{tone:"success",label:"Published"}},{name:"color.feedback.danger.text",owner:"Design",uses:19,contrast:6.4,status:{tone:"warning",label:"In review"}},{name:"radius.overlay",owner:"Platform",uses:7,contrast:0,status:{tone:"neutral",label:"Draft"}}];function c({rows:a=T,sticky:E=!1,maxHeight:O,caption:W="Tokens changed in this release"}){const{sort:l,headProps:j}=U({key:"uses",direction:"descending"}),[w,f]=R.useState(["color.border.strong"]),C=R.useMemo(()=>{if(!l)return a;const s=l.direction==="ascending"?1:-1;return[...a].sort((t,h)=>t[l.key]<h[l.key]?-s:t[l.key]>h[l.key]?s:0)},[a,l]),v=a.length>0&&w.length===a.length,N=w.length>0&&!v;return e.jsxs(x,{caption:W,stickyHeader:E,maxHeight:O,children:[e.jsx(y,{children:e.jsxs(o,{children:[e.jsx(r,{children:e.jsx(A,{label:e.jsx(g,{children:"Select all tokens"}),checked:v,indeterminate:N,onCheckedChange:s=>f(s?a.map(t=>t.name):[])})}),e.jsx(r,{...j("name"),children:"Token"}),e.jsx(r,{children:"Owner"}),e.jsx(r,{numeric:!0,...j("uses"),children:"Uses"}),e.jsx(r,{numeric:!0,...j("contrast"),children:"Contrast"}),e.jsx(r,{children:"Status"}),e.jsx(r,{children:e.jsx(g,{children:"Actions"})})]})}),e.jsxs(S,{children:[C.length===0&&e.jsx(L,{colSpan:7,children:"No tokens changed. Changes you sync from Figma appear here."}),C.map(s=>{const t=w.includes(s.name);return e.jsxs(o,{selected:t,children:[e.jsx(n,{select:!0,children:e.jsx(A,{label:e.jsxs(g,{children:["Select ",s.name]}),checked:t,onCheckedChange:h=>f(H=>h?[...H,s.name]:H.filter(P=>P!==s.name))})}),e.jsx(n,{children:e.jsx("code",{children:s.name})}),e.jsx(n,{children:s.owner}),e.jsx(n,{numeric:!0,children:s.uses}),e.jsx(n,{numeric:!0,children:s.contrast?`${s.contrast.toFixed(2)}:1`:"n/a"}),e.jsx(n,{children:e.jsx(B,{tone:s.status.tone,children:s.status.label})}),e.jsx(n,{numeric:!0,children:e.jsx(z,{icon:$,label:`More actions for ${s.name}`,size:"sm"})})]},s.name)})]})]})}const m={render:()=>e.jsx(c,{})},b={render:()=>e.jsx(c,{sticky:!0,maxHeight:"var(--size-60)",rows:[...T,...T.map(a=>({...a,name:`${a.name}-alt`}))]})},i={render:()=>e.jsxs(x,{"aria-label":"What each kind of change needs",layout:"fixed",children:[e.jsx(y,{children:e.jsxs(o,{children:[e.jsx(r,{width:.25,children:"Change"}),e.jsx(r,{children:"Needs"}),e.jsx(r,{width:"var(--size-20)",numeric:!0,children:"Approvals"})]})}),e.jsxs(S,{children:[e.jsxs(o,{children:[e.jsx(n,{children:"Token value"}),e.jsx(n,{children:"A design owner approves; the visual before and after runs on every theme."}),e.jsx(n,{numeric:!0,children:"1"})]}),e.jsxs(o,{children:[e.jsx(n,{children:"New component"}),e.jsx(n,{children:"A design owner and a tech owner approve; tests and the accessibility checks pass."}),e.jsx(n,{numeric:!0,children:"2"})]})]})]})},d={decorators:[a=>e.jsx("div",{style:{width:358,maxWidth:"100%"},children:e.jsx(a,{})})],render:()=>e.jsxs(x,{caption:"Tokens changed in this release",narrowLayout:"stack",children:[e.jsx(y,{children:e.jsxs(o,{children:[e.jsx(r,{children:"Token"}),e.jsx(r,{children:"Owner"}),e.jsx(r,{numeric:!0,children:"Uses"}),e.jsx(r,{children:"Status"})]})}),e.jsx(S,{children:T.slice(0,3).map(a=>e.jsxs(o,{children:[e.jsx(n,{label:"",children:e.jsx("code",{children:a.name})}),e.jsx(n,{children:a.owner}),e.jsx(n,{numeric:!0,children:a.uses}),e.jsx(n,{children:e.jsx(B,{tone:a.status.tone,children:a.status.label})})]},a.name))})]})},u={render:()=>e.jsx(c,{rows:[]})},p={render:()=>e.jsxs(D,{children:[e.jsx(k,{label:"Sortable (Uses descending), one selected row",children:e.jsx("div",{style:{width:"100%"},children:e.jsx(c,{})})}),e.jsx(k,{label:"Narrow container: the region scrolls sideways and is keyboard focusable",children:e.jsx("div",{style:{width:360},children:e.jsx(c,{caption:"Tokens changed in 1.3.0"})})}),e.jsx(k,{label:"Empty",children:e.jsx("div",{style:{width:"100%"},children:e.jsx(c,{rows:[],caption:"Tokens changed in 1.2.1"})})})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <TokenTable />
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <TokenTable sticky maxHeight="var(--size-60)" rows={[...ROWS, ...ROWS.map(r => ({
    ...r,
    name: \`\${r.name}-alt\`
  }))]} />
}`,...b.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Table aria-label="What each kind of change needs" layout="fixed">
      <TableHeader>
        <TableRow>
          <TableHead width={0.25}>Change</TableHead>
          <TableHead>Needs</TableHead>
          <TableHead width="var(--size-20)" numeric>
            Approvals
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Token value</TableCell>
          <TableCell>A design owner approves; the visual before and after runs on every theme.</TableCell>
          <TableCell numeric>1</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>New component</TableCell>
          <TableCell>A design owner and a tech owner approve; tests and the accessibility checks pass.</TableCell>
          <TableCell numeric>2</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...i.parameters?.docs?.source},description:{story:'Column widths: a fixed token width, a fraction of the table and a minimum. layout="fixed" keeps them exact.',...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  decorators: [S => <div style={{
    width: 358,
    maxWidth: '100%'
  }}><S /></div>],
  render: () => <Table caption="Tokens changed in this release" narrowLayout="stack">
      <TableHeader>
        <TableRow>
          <TableHead>Token</TableHead>
          <TableHead>Owner</TableHead>
          <TableHead numeric>Uses</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {ROWS.slice(0, 3).map(r => <TableRow key={r.name}>
            <TableCell label="">
              <code>{r.name}</code>
            </TableCell>
            <TableCell>{r.owner}</TableCell>
            <TableCell numeric>{r.uses}</TableCell>
            <TableCell>
              <Badge tone={r.status.tone}>{r.status.label}</Badge>
            </TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...d.parameters?.docs?.source},description:{story:'narrowLayout="stack" in a phone-wide container: every row is a card, each value beside its column name.',...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <TokenTable rows={[]} />
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenStack>
      <Specimen label="Sortable (Uses descending), one selected row">
        <div style={{
        width: '100%'
      }}>
          <TokenTable />
        </div>
      </Specimen>
      <Specimen label="Narrow container: the region scrolls sideways and is keyboard focusable">
        <div style={{
        width: 360
      }}>
          <TokenTable caption="Tokens changed in 1.3.0" />
        </div>
      </Specimen>
      <Specimen label="Empty">
        <div style={{
        width: '100%'
      }}>
          <TokenTable rows={[]} caption="Tokens changed in 1.2.1" />
        </div>
      </Specimen>
    </SpecimenStack>
}`,...p.parameters?.docs?.source}}};const ne=["SortableAndSelectable","StickyHeader","ColumnWidths","StackedOnPhone","Empty","AllStates"];export{p as AllStates,i as ColumnWidths,u as Empty,m as SortableAndSelectable,d as StackedOnPhone,b as StickyHeader,ne as __namedExportsOrder,se as default};
