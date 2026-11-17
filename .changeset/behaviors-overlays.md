---
"@bridge-ds/react": patch
---

Behaviors for Dialog, Tooltip, Accordion and ChoiceCard in their docs.json, the same as Bridge's components of the same code: Dialog opens from its button, keeps Tab inside, pauses the page scroll, closes on Escape and on a click outside, and puts the focus back on its button; Tooltip shows on focus and hover and hides on Escape; Accordion opens and closes with Enter or Space, one section at a time; ChoiceCard moves the choice with the arrow keys. Three new interactions follow (close on a click outside, page scroll paused, move with the arrow keys), and Close on Escape and Focus after closing now include Dialog and Tooltip.
