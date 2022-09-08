import "./PopUp.css";

type PopUpProps = {
  visiblePop: boolean;
  setVisiblePop: (value: boolean) => void;
  setImage: (value: string) => void;
  choices: any;
};

interface iconProps {
  name: string;
  image: string;
  representation: string;
}

export default function PopUp({
  visiblePop,
  setVisiblePop,
  setImage,
  choices,
}: PopUpProps): JSX.Element | null {
  function onClick(event: React.MouseEvent<HTMLButtonElement>) {
    setImage((event.target as HTMLButtonElement).value);
    setVisiblePop(false);
  }

  if (visiblePop === true) {
    return (
      <div className="PopUpContainer">
        <p>Click to select.</p>
        {choices.map((choice: iconProps) => (
          <button
            onClick={onClick}
            className="iconContainer"
            value={choice.image}
          >
            {choice.representation}
          </button>
        ))}
      </div>
    );
  }
  return null;
}
