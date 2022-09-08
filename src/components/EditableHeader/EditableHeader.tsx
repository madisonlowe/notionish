import { useState } from "react";
import PopUp from "../PopUp/PopUp";
import "./EditableHeader.css";
import icons from "../../assets/icons.js";

export default function EditableHeader() {
  const [headerText, setHeaderText] = useState("Untitled");
  const [iconImage, setIconImage] = useState("💌");
  const [visiblePop, setVisiblePop] = useState(false);

  function onChange(e: React.ChangeEvent) {
    setHeaderText((e.target as HTMLTextAreaElement).value);
  }

  function onClick() {
    setVisiblePop(!visiblePop);
  }

  return (
    <div className="EditableHeader">
      <img
        alt="Decorative header background."
        src="https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/main_image_star-forming_region_carina_nircam_final-1280.jpg"
        className="headerImage"
      />
      <span className="headerIcon" onClick={onClick}>
        {iconImage}
      </span>
      <PopUp
        visiblePop={visiblePop}
        setIconImage={setIconImage}
        setVisiblePop={setVisiblePop}
      />
      <input
        value={headerText}
        onChange={onChange}
        maxLength={11}
        className="headerTitle"
      ></input>
    </div>
  );
}

/* **Editable header zone:**
- Editable icon field. WORKING ON THIS NOW.
    - You click the icon.
    - A menu of other emoji icons comes up.
    - You select from the icons.
    - The icon is set as the icon in the header, and the icon in the metadata.
    - There's a lot more functionality, and you can set images, but I can worry about this later.
    So, recreating:
        - You click on the icon.
        - A menu comes up.
        - Menu contains a dictionary of icons that you can select and use.
        - On click, the selected icon is set as state for the main icon.
        - This state should also be used to set the metadata of the EditablePage, so will need to be raised later?
- Editable cover field.
    - Only editable through clicking on various buttons.
Can manage this state through just this component? Maybe? I think? Nothing else on the wider page is able to affect it, and it's always visible on the page, so don't need state any higher?
TODO:
- Fix the onChange, so that it takes in different parameters, and can change states a few different ways.
- Going to have to make a component for the pop up menu for emojis.

I AM CURRENTLY TRYING TO HAND IN PROPS OF STATE TO THE SPAN SO THAT I CAN MAKE THE POP UP APPEAR AND SET THE SETICONHEADER STATE.
*/
