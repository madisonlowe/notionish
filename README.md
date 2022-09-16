# Notionish

A Notion(ish) attempt at building a second brain app. Or, parts of a second brain app.

Google says that the web version of Notion is built in ElectronJS, but I really wanted to get some practice in at using TypeScript in React, which is what I'll be building this in. So! That's what we're doing.

See `LOG.md` for a step-by-step log of my progress and notes while building.

Please see below for the quickreference of what I'm working on, and what I'll be working on in future.

## Goals

### Version One

- **Editable page: DONE.**
  - ~~Returns static header zone on all editable pages.~~ **DONE.**
    - ~~Returns editable header zone on all editable pages.~~ **DONE.**
  - ~~Returns one editable block as default.~~ **DONE.**
  - ~~When you press enter inside of an editable block, it duplicates the block (but empty) on the next line.~~ **DONE.**
- **Editable header zone: DONE.**
  - ~~Static icon field.~~ **DONE.**
    - ~~Editable icon field.~~ **DONE.**
  - ~~Static title field.~~ **DONE.**
    - ~~Editable title field.~~ **DONE.**
  - ~~Static cover field.~~ **DONE.**
    - ~~Editable cover field.~~ **DONE.**
- **Editable block: WORKING ON.**
  - The Notion editable block features:
    - When you use the slash command, you can select the block type.
    - ~~When you press enter, you duplicate the block type you are in on a new line.~~ **DONE.**
    - The moment you start typing anything other than a slash command, it defaults to a `<p>` input field.
- Start with: an editable block that lets you select two kinds of sub-block, to make sure that code works.
- Then: try and recreate the duplication that occurs on enter or clicking below the current block you're in.
- **Models for the blocks:**
  - `<p>` block.
  - `<img>` block.

### Version Two

Not organised into a chronological game plan, but see list below for things that will need improving or editing to make more faithful to the original!

A lot of these are things that came up while making Version One, but they weren't a priority to improve, over being able to get more useful improvements going in other areas. Will address them going forward, once base functionality and styling is finished!

- Before others: go through all typing and interfaces and read up on best practices and nuts and bolts.
- Cover field op-up should show previews of the images you can select.
- The title field should be a textarea rather than an input, and should flow onto multiple lines rather than having the number of characters limited to prevent weird styling problems. Will probably need a good bit of styling doing to fix it, which is why I put this on the backburner while I was trying to get more functionality working.
