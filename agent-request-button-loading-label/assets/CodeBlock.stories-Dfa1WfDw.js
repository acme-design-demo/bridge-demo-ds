import{j as e}from"./iframe-C39eZITx.js";import{S as h,a as y,b}from"./StateGrid-2rAOCvic.js";import{C as u}from"./CodeBlock-BfwMXesa.js";import"./preload-helper-PPVm8Dsz.js";import"./check-DF5JWxCX.js";import"./copy-DxOz1WLg.js";import"./VisuallyHidden-Dv77UG8G.js";const g={parameters:{viewport:{options:{phone390:{name:"Phone 390",styles:{width:"390px",height:"844px"},type:"mobile"}}}},globals:{viewport:{value:"phone390",isRotated:!1}}},s="claude mcp add bridge --env BRIDGE_TOKEN=bridge_live_8f2c41 -- npx -y @bridge-ds/mcp@latest --repo acme/design-tokens",L={title:"Data display/CodeBlock",component:u,args:{code:"npm install @demo-ds/react",label:"Install",wrap:!0,hideCopy:!1},argTypes:{label:{control:"text"},onCopy:{control:!1},codeProps:{control:!1}},decorators:[o=>e.jsx("div",{style:{maxWidth:560},children:e.jsx(o,{})})]},l={},t={args:{label:void 0,code:"npx @bridge-ds/cli publish --dry-run"}},n={args:{label:"Add the MCP server",code:s,wrap:!1}},c={args:{label:"Add the MCP server",code:s,wrap:!0}},d={args:{label:"Use a token in CSS",code:`.publish {
  background: var(--color-action-primary-bg);
  color: var(--color-action-primary-text);
}`}},p={args:{label:"Token file",code:"tokens/semantic/color.json",hideCopy:!0}},i={args:{label:"Token name",code:"color.action.primary.bg",copyLabel:"Copy name",copiedLabel:"Name copied"}},r={...g,args:{label:"Add the MCP server",code:s,wrap:!1}},a={...g,args:{label:"Add the MCP server",code:s,wrap:!0}},m={decorators:[o=>e.jsx(o,{})],render:()=>e.jsxs(h,{children:[e.jsx(y,{columns:[{label:"Default"},{label:"Hover",pseudo:"hover"},{label:"Focus visible",pseudo:"focus-visible"},{label:"Active",pseudo:"active"}],rows:[{label:"Short command",value:"short"},{label:"Long, scrolls",value:"long"},{label:"Long, wraps",value:"wrap"},{label:"No copy button",value:"readonly"}],render:o=>e.jsx("div",{style:{width:280},children:e.jsx(u,{label:"Install",code:o==="short"?"npm install @demo-ds/react":s,wrap:o!=="long",hideCopy:o==="readonly"})})}),e.jsx(b,{label:"Multi-line, no label",children:e.jsx("div",{style:{width:400},children:e.jsx(u,{code:`import { Button } from '@demo-ds/react';
import '@demo-ds/react/styles.css';`})})}),e.jsx(b,{label:"Custom button text",children:e.jsx("div",{style:{width:400},children:e.jsx(u,{label:"Token name",code:"color.action.primary.bg",copyLabel:"Copy name",copiedLabel:"Name copied"})})})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    code: 'npx @bridge-ds/cli publish --dry-run'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Add the MCP server',
    code: MCP_COMMAND,
    wrap: false
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Add the MCP server',
    code: MCP_COMMAND,
    wrap: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Use a token in CSS',
    code: '.publish {\\n  background: var(--color-action-primary-bg);\\n  color: var(--color-action-primary-text);\\n}'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Token file',
    code: 'tokens/semantic/color.json',
    hideCopy: true
  }
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Token name',
    code: 'color.action.primary.bg',
    copyLabel: 'Copy name',
    copiedLabel: 'Name copied'
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...phone,
  args: {
    label: 'Add the MCP server',
    code: MCP_COMMAND,
    wrap: false
  }
}`,...r.parameters?.docs?.source},description:{story:"Narrow with wrap off: a long command keeps one line and scrolls inside the plate; the copy button stays on the same line.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...phone,
  args: {
    label: 'Add the MCP server',
    code: MCP_COMMAND,
    wrap: true
  }
}`,...a.parameters?.docs?.source},description:{story:"Narrow and wrapped: the command breaks anywhere, the copy button stays at the top right.",...a.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <Story />],
  render: () => <SpecimenStack>
      <StateGrid<Row> columns={[{
      label: 'Default'
    }, {
      label: 'Hover',
      pseudo: 'hover'
    }, {
      label: 'Focus visible',
      pseudo: 'focus-visible'
    }, {
      label: 'Active',
      pseudo: 'active'
    }]} rows={[{
      label: 'Short command',
      value: 'short'
    }, {
      label: 'Long, scrolls',
      value: 'long'
    }, {
      label: 'Long, wraps',
      value: 'wrap'
    }, {
      label: 'No copy button',
      value: 'readonly'
    }]} render={row => <div style={{
      width: 280
    }}>
            <CodeBlock label="Install" code={row === 'short' ? 'npm install @demo-ds/react' : MCP_COMMAND} wrap={row !== 'long'} hideCopy={row === 'readonly'} />
          </div>} />
      <Specimen label="Multi-line, no label">
        <div style={{
        width: 400
      }}>
          <CodeBlock code={"import { Button } from '@demo-ds/react';\\nimport '@demo-ds/react/styles.css';"} />
        </div>
      </Specimen>
      <Specimen label="Custom button text">
        <div style={{
        width: 400
      }}>
          <CodeBlock label="Token name" code="color.action.primary.bg" copyLabel="Copy name" copiedLabel="Name copied" />
        </div>
      </Specimen>
    </SpecimenStack>
}`,...m.parameters?.docs?.source}}};const k=["Default","NoLabel","LongCommandScrolls","LongCommandWraps","MultiLine","ReadOnly","CustomLabels","NarrowLongCommand","NarrowWrapped","AllStates"];export{m as AllStates,i as CustomLabels,l as Default,n as LongCommandScrolls,c as LongCommandWraps,d as MultiLine,r as NarrowLongCommand,a as NarrowWrapped,t as NoLabel,p as ReadOnly,k as __namedExportsOrder,L as default};
