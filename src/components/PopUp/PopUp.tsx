import icons from "../../assets/icons.js";

type PopUpProps = {
  visiblePop: boolean;
  setIconHeader: (value: string) => void;
};

export default function PopUp({ visiblePop, setIconHeader }: PopUpProps) {
  // function onClick(e) {
  //     setIconHeader(e.target.value);
  // }
  if (visiblePop === true) {
    return (
      <div>
        <p>Click to select an icon.</p>
        {icons.map((icon) => (
          <span>{icon.image}</span>
        ))}
      </div>
    );
  }
}
