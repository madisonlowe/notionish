type ButtonProps = {
  instruction: string;
  buttonVisible: boolean;
};

export default function Button({ instruction, buttonVisible }: ButtonProps) {
  if (buttonVisible === true) {
    return <button>{instruction}</button>;
  }
  return null;
}
