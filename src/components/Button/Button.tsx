import PopUp from "../PopUp/PopUp";
import headers from "../../assets/headers.js";
import "./Button.css";

type ButtonProps = {
  instruction: string;
  visiblePop: boolean;
  setVisiblePop: (value: boolean) => void;
  setImage: (value: string) => void;
};

export default function Button({
  instruction,
  visiblePop,
  setVisiblePop,
  setImage,
}: ButtonProps) {
  function onClick() {
    setVisiblePop(!visiblePop);
  }
  return (
    <>
      <button onClick={onClick} className="buttonElement">
        {instruction}
      </button>
      <PopUp
        visiblePop={visiblePop}
        setVisiblePop={setVisiblePop}
        setImage={setImage}
        choices={headers}
      />
    </>
  );
}
