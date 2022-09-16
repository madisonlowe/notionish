import PopUp from "../PopUp/PopUp";
import headers from "../../assets/headers.js";
import "./Button.css";

type ButtonProps = {
  instruction: string;
  visiblePop: boolean;
  setVisiblePop: (value: boolean) => void;
  setImage: (value: string) => void;
  isHovering: any;
};

export default function Button({
  instruction,
  visiblePop,
  setVisiblePop,
  setImage,
  isHovering,
}: ButtonProps) {
  function onClick() {
    setVisiblePop(!visiblePop);
  }
  if (isHovering === true) {
    return (
      <>
        <button
          onClick={onClick}
          className="buttonElement"
          style={{ opacity: 1 }}
        >
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
  return (
    <>
      <button
        onClick={onClick}
        className="buttonElement"
        style={{ opacity: 0 }}
      >
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
