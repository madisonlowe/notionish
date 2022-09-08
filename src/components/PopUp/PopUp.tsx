import icons from "../../assets/icons.js";

type PopUpProps = {
  visiblePop: boolean;
  setVisiblePop: (value: boolean) => void;
  setIconImage: (value: string) => void;
};

interface iconProps {
  name: string;
  image: string;
}

export default function PopUp({
  visiblePop,
  setVisiblePop,
  setIconImage,
}: PopUpProps): JSX.Element | null {
  function onClick(event: React.MouseEvent<HTMLButtonElement>) {
    setIconImage((event.target as HTMLButtonElement).value);
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
