# LOG

## Plan

- Baseline: create an editable text component
- 2.0: Block component that can be turned into other components through user slash commands.

## Chronology

### Experimenting

- Wrote up this README.
- Initialised CRA with TypeScript template flag.
- Tidied up boilerplate.
- Created an editable text component, currently is an `<input>` tag and takes in any value, which is set to a piece of state.
- Updated editable text component from `<input>` to `<textarea>` which also seemed to eliminate the controlled and uncontrolled error that the console was throwing? Worth Googling more, the React docs on form state control are a bit out of date and don't mention hooks.
- Updated CSS for EditableBlock.
- Had some errors I've not seen before when trying to write an onKeyDown handler (which I have also not seen or written before)! KeyboardEvent isn't assignable to HTMLTextAreaElement and it was making the property target incompatible. Read [this interesting article](https://freshman.tech/snippets/typescript/fix-value-not-exist-eventtarget/) that illuminates things a bit, but something I'll need to read more!
- Sorted out the onKeyDown function! To set the type of the event target, used: `(e.target as HTMLTextAreaElement).blur();` which meant that `blur` could be used as a property on the element. Previously linked article goes into it a bit more. [This article here](https://bobbyhadz.com/blog/typescript-event-target-type) was also helpful to understand more about typing events.
- Now, our input field is a textarea that expands as more is typed into it, and focus blurs when users hit enter, until they click onto it again.

### Perceiving Notion & Re-Experimenting

- Concrete goal: rebuild single typing page with the editable `<p>` field.
  - Notion page consists of: header with inputtable icon, title, and banner fields.
  - Default plain page is just a single editable block on the top line.
  - Using a slash command while on this line lets you pick what kind of block that block should turn into.
  - Pressing enter over and over duplicates whatever block kind you're on.
- So, need: editable page, editable header zone, editable block, models for the blocks to become post-slash command.
- Can reimagine current code for editable block and inline editable textarea field for the `<p>` model and the editable block?

### To Do

- **Editable page:**
  - Returns static header zone on all editable pages.
    - Returns editable header zone on all editable pages.
  - Returns one editable block as default.
  - When you press enter inside of an editable block, it duplicates the block (but empty) on the next line.
- **Editable header zone:**
  - Static icon field.
    - Editable icon field.
  - Static title field.
    - Editable title field.
  - Static cover field.
    - Editable cover field.
- **Editable block:**
  - The Notion editable block features:
    - When you use the slash command, you can select the block type.
    - When you press enter, you duplicate the block type you are in on a new line.
    - The moment you start typing anything other than a slash command, it defaults to a `<p>` input field.
- Start with: an editable block that lets you select two kinds of sub-block, to make sure that code works.
- Then: try and recreate the duplication that occurs on enter or clicking below the current block you're in.
- **Models for the blocks:**
  - `<p>` block.
  - `<img>` block.

### Coding Log

- Started building the editable header component on a new branch.
- Started making the static version first. Was wondering how Notion dealt with the images for the selectable icons, turns out they're listed as spans in the code? Inside of two divs? One of those divs has a button role? With font family styling for emojis applied to them, and then the emoji itself changes between the span tags?
  - Not sure why, but I'm sure I'll find out.
  - Maybe so that the image can be selected and altered?
  - Potentially the CSS is easier if it's being treated as a more text-like element than an image element? Maybe not though?
  - Maybe because the icon in the tab becomes the same emoji as whatever you select for the page icon, and it's easier to convert to that one line of SVG emoji code if it's formatted as a span? You can just copy it over to wherever it needs to be inside the metadata?
  - Maybe also because when there's no source provided for an image, a visual error displays, but that doesn't happen with spans?
- The cover, however, is just an image. To change that, you need to go through a few more sub-menus and select new options and perform an upload.
- Setting the font-size on the span for the header icon is how you change the size of the emoji, as it's read as a font (I think)!
