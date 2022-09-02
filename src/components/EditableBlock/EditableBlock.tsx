type EditableBlockProps = {
  value: any;
  setValue: (value: any) => void;
};

export default function EditableBlock({ value, setValue }: EditableBlockProps) {
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <input
      type="text"
      aria-label="Field name"
      value={value}
      onChange={onChange}
    ></input>
  );
}
