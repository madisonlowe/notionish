# LOG

## Plan

- Baseline: create an editable text component
- 2.0: Block component that can be turned into other components through user slash commands.

## Chronology

- Wrote up this README.
- Initialised CRA with TypeScript template flag.
- Tidied up boilerplate.
- Created an editable text component, currently is an `<input>` tag and takes in any value, which is set to a piece of state.
- Updated editable text component from `<input>` to `<textarea>` which also seemed to eliminate the controlled and uncontrolled error that the console was throwing? Worth Googling more, the React docs on form state control are a bit out of date and don't mention hooks.
- Updated CSS for EditableBlock.
- Had some errors I've not seen before when trying to write an onKeyDown handler (which I have also not seen or written before)! KeyboardEvent isn't assignable to HTMLTextAreaElement and it was making the property target incompatible. Read [this interesting article](https://freshman.tech/snippets/typescript/fix-value-not-exist-eventtarget/) that illuminates things a bit, but something I'll need to read more!
- Sorted out the onKeyDown function! To set the type of the event target, used: `(e.target as HTMLTextAreaElement).blur();` which meant that `blur` could be used as a property on the element. Previously linked article goes into it a bit more. [This article here](https://bobbyhadz.com/blog/typescript-event-target-type) was also helpful to understand more about typing events.
- Now, our input field is a textarea that expands as more is typed into it, and focus blurs when users hit enter, until they click onto it again.
