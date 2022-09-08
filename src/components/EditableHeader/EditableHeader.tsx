import { useState } from "react";
import PopUp from "../PopUp/PopUp";
import Button from "../Button/Button";
import "./EditableHeader.css";
import icons from "../../assets/icons.js";

export default function EditableHeader() {
  const [headerText, setHeaderText] = useState("Untitled");
  const [iconImage, setIconImage] = useState("💌");
  const [visibleIconPop, setVisibleIconPop] = useState(false);
  const [visibleHeaderPop, setVisibleHeaderPop] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [headerImage, setHeaderImage] = useState(
    "https://www.northyorkmoors.org.uk/__data/assets/image/0032/117878/NYMR-steam-train-in-Newtondale_credit-Mike-Kipling-NYMNP.jpg"
  );

  function onChange(e: React.ChangeEvent) {
    setHeaderText((e.target as HTMLTextAreaElement).value);
  }

  function onClick() {
    setVisibleIconPop(!visibleIconPop);
  }

  function onHover() {
    setButtonVisible(true);
  }

  return (
    <div className="EditableHeader">
      <div onMouseOver={onHover} onMouseOut={onHover}>
        <img
          alt="Decorative header background."
          src={headerImage}
          className="headerImage"
        />
        <Button
          instruction={"Click to change header."}
          buttonVisible={buttonVisible}
          visiblePop={visibleHeaderPop}
          setVisiblePop={setVisibleHeaderPop}
          setImage={setHeaderImage}
        />
      </div>
      <span className="headerIcon" onClick={onClick}>
        {iconImage}
      </span>
      <PopUp
        visiblePop={visibleIconPop}
        setVisiblePop={setVisibleIconPop}
        setImage={setIconImage}
        choices={icons}
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
- Editable icon field.
    - Need to make sure the set icon on the page is also set as the page favicon.
- Editable cover field.
    - On Notion, when you hover over the header cover, a button to 'Change cover' comes up.
    - If you click to change cover, it brings up another pop up.
    - You select the cover you want from the 'Gallery', and the cover updates.
*/
