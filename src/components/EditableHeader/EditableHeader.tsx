import { useState } from "react";
import "./EditableHeader.css";

export default function EditableHeader() {
  const [headerText, setHeaderText] = useState("Untitled");

  function onChange(e: React.ChangeEvent) {
    setHeaderText((e.target as HTMLTextAreaElement).value);
  }

  return (
    <div className="EditableHeader">
      <img
        alt="Decorative header background."
        src="https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/main_image_star-forming_region_carina_nircam_final-1280.jpg"
        className="headerImage"
      />
      <span className="headerIcon">⭐️</span>
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
- Editable icon field.
    - Editable on click.
- Editable cover field.
    - Only editable through clicking on various buttons.
Can manage this state through just this component? Maybe? I think? Nothing else on the wider page is able to affect it, and it's always visible on the page, so don't need state any higher?
*/
