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
  const [headerImage, setHeaderImage] = useState(
    "https://www.northyorkmoors.org.uk/__data/assets/image/0032/117878/NYMR-steam-train-in-Newtondale_credit-Mike-Kipling-NYMNP.jpg"
  );
  const [isHovering, setIsHovering] = useState(false);

  function onChange(e: React.ChangeEvent) {
    setHeaderText((e.target as HTMLTextAreaElement).value);
  }

  function onClick() {
    setVisibleIconPop(!visibleIconPop);
  }

  function onMouseOver() {
    setIsHovering(true);
  }

  function onMouseOut() {
    setIsHovering(false);
  }

  return (
    <div
      className="EditableHeader"
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <div>
        <img
          alt="Decorative header background."
          src={headerImage}
          className="headerImage"
        />
        <Button
          instruction={"Click to change header."}
          visiblePop={visibleHeaderPop}
          setVisiblePop={setVisibleHeaderPop}
          setImage={setHeaderImage}
          isHovering={isHovering}
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

/* 
Version One finished!

Version Two:
- Editable icon field.
    - Need to make sure the set icon on the page is also set as the page favicon.
*/
