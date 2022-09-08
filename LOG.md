# LOG

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
  - Returns static header zone on all editable pages. DONE.
    - Returns editable header zone on all editable pages. DONE.
  - Returns one editable block as default.
  - When you press enter inside of an editable block, it duplicates the block (but empty) on the next line.
- **Editable header zone: DONE.**
  - Static icon field. DONE.
    - Editable icon field.
  - Static title field. DONE.
    - Editable title field. DONE (VERSION 1, SEE NOTES).
  - Static cover field. DONE.
    - Editable cover field. DONE.
- **Editable block: WORKING ON.**
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
- Similar to above weird choices (or choices I don't understand yet), the header text on Notion is just a div with a set placeholder. Using an input is going kind of weird, so will try that!
- Figured out the input and types, but now nothing shows when the page compiles, which is so fun.
- Figured out why it wasn't showing: had something between the input tags, like a fool.
- On Notion, when you type a title for a page that exceeds the size of the input field, it stretches and continues onto a new line. Will attempt to implement that now! Think the input would need to be a textarea to be multiline? Will Google.
  - I was correct. Will make a textarea.
- Got it working properly, but the CSS is kind of nightmarish and I can't be bothered figuring it out right now, would rather make some more functional things. So! Going to save the code I had in a code block here for it, and then just put a limit on how many characters can be entered into an input.

```typescript
export default function EditableHeader() {
  const [headerText, setHeaderText] = useState("Untitled");

  function onChange(e: React.ChangeEvent) {
    setHeaderText((e.target as HTMLTextAreaElement).value);
  }

  function onInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    if (e.target.scrollHeight > 33) {
      e.target.style.height = "5px";
      e.target.style.height = e.target.scrollHeight - 16 + "px";
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" || e.key === "Escape") {
      (e.target as HTMLTextAreaElement).blur();
    }
  }

  return (
    <div className="EditableHeader">
      <img
        alt="Decorative header background."
        src="https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/main_image_star-forming_region_carina_nircam_final-1280.jpg"
        className="headerImage"
      />
      <span className="headerIcon">⭐️</span>
      <textarea
        value={headerText}
        onChange={onChange}
        onInput={onInput}
        onKeyDown={onKeyDown}
        rows={1}
        className="headerTitle"
      ></textarea>
    </div>
  );
}
```

- Set maxLength to 11, which is a bit short, but read somewhere that the widest letter is capitalised W, and 11 capitalised Ws fit, so it is what it is.

On the fly notes copied from component plan:

- Editable icon field.
  - You click the icon.
  - A menu of other emoji icons comes up.
  - You select from the icons.
  - The icon is set as the icon in the header, and the icon in the metadata.
  - There's a lot more functionality, and you can set images, but I can worry about this later.
  - So, recreating:
    - You click on the icon.
    - A menu comes up.
    - Menu contains a dictionary of icons that you can select and use.
    - On click, the selected icon is set as state for the main icon.
    - This state should also be used to set the metadata of the EditablePage, so will need to be raised later?

**Thu 8th Sept**

- Back on it!
- Made a PopUp component which is rendered inside of EditableHeader. When you click the icon in the header, it renders the pop up component, and lets you select a new icon for the document from a provided list.
- Took a while to get the onClick on the pop up for setting the icon state to work, but! Fixed it in the end!
- Still need to:
  - Use the state for the current icon to update the page metadata, so the favicon is the icon.
    - Just seems like this is gonna be crunchy, so setting aside for now.
  - Make the CSS for updating the icon apply properly.
    - CSS wasn't working because I'd forgotten to import it again, unreal.
- Working on making the cover image on the page editable now.
  - As with rest of interactive functionality in the EditableHeader, it's not a firm match to all the Notion functionality, but it's the basics. Can add complexity later, but you can't add complexity to what's not there.

Copied plan:

- Editable cover field.
  - On Notion, when you hover over the header cover, a button to 'Change cover' comes up.
  - If you click to change cover, it brings up another pop up.
  - You select the cover you want from the pop up 'Gallery', and the cover updates.

Will be working towards achieving the above.

- Got it done! First time I've really gotten how to make components fully reuseable as well. Took a lot of fiddling around with PopUp and Button, and they are absolutely not clean at all, but this was a concept I was struggling with since they first told us about it, so I'm pretty pleased, even if the code is hideous.

To get to:

- Make it so that the button for changing the header disappears when you mouse away from the header image itself, but still remains clickable.
- Maybe try out some code so that you can dynamically update the favicon and tab title with the page icon and title?
- Alternatively, just have a crack at cleaning up some different components. Review plan!

Having reviewed plan, going to focus on:

- Making the button disappear when you move away from the header image, but also remain clickable with the onmouseover and onmouseout.
  - Had a brainwave. Realised I could literally just do this with hover in CSS. Don't know why I was agonising over making state for it, unreal scenes.
  - Fixed it, though! Just need to actually tidy up some of the CSS so it's less ugly, but i think the functionality of the EditableHeader (the basic functionality) is done? Will check.

TODO:

- Check types and interfaces are correct and fitting.
- Clean up logs and readme.
- Work on editable block.
