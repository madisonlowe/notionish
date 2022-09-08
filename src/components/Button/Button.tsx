import PopUp from "../PopUp/PopUp";
import headers from "../../assets/headers.js";

type ButtonProps = {
  instruction: string;
  buttonVisible: boolean;
  visiblePop: boolean;
  setVisiblePop: (value: boolean) => void;
  setImage: (value: string) => void;
};

export default function Button({
  instruction,
  buttonVisible,
  visiblePop,
  setVisiblePop,
  setImage,
}: ButtonProps) {
  function onClick() {
    setVisiblePop(!visiblePop);
  }
  if (buttonVisible === true) {
    return (
      <>
        <button onClick={onClick}>{instruction}</button>
        <PopUp
          visiblePop={visiblePop}
          setVisiblePop={setVisiblePop}
          setImage={setImage}
          choices={headers}
        />
      </>
    );
  }
  return null;
}
