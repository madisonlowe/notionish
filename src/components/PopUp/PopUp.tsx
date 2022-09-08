import icons from "../../assets/icons.js";
import "./PopUp.css";

type PopUpProps = {
  visiblePop: boolean;
  setVisiblePop: (value: boolean) => void;
  setImage: (value: string) => void;
};

interface iconProps {
  name: string;
  image: string;
}

export default function PopUp({
  visiblePop,
  setVisiblePop,
  setImage,
}: PopUpProps): JSX.Element | null {
  function onClick(event: React.MouseEvent<HTMLButtonElement>) {
    setImage((event.target as HTMLButtonElement).value);
    setVisiblePop(false);
  }

  if (visiblePop === true) {
    return (
      <div className="PopUpContainer">
        <p>Click to select an icon.</p>
        {icons.map((icon: iconProps) => (
          <button
            onClick={onClick}
            className="iconContainer"
            value={icon.image}
          >
            {icon.image}
          </button>
        ))}
      </div>
    );
  }
  return null;
}
