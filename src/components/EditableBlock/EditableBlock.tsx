import { useState } from "react";
import "./EditableBlock.css";

interface EditableBlockProps {
  value: string;
  setValue: (value: string) => void;
  components: any; // fix
  setComponents: any; // fix
}

export default function EditableBlock({
  value,
  setValue,
  components,
  setComponents,
}: EditableBlockProps) {
  const [editingValue, setEditingValue] = useState(value);

  function addComponent() {
    setComponents([...components, "Test Component"]);
    setValue("");
  }

  function onChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setEditingValue(e.target.value);
  }

  function onInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    if (e.target.scrollHeight > 33) {
      e.target.style.height = "5px";
      e.target.style.height = e.target.scrollHeight - 16 + "px";
    }
  }

  function onBlur(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setValue(e.target.value);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      (e.target as HTMLTextAreaElement).blur();
      addComponent();
    } else if (e.key === "Escape") {
      (e.target as HTMLTextAreaElement).blur();
    }
  }

  return (
    <textarea
      value={editingValue}
      onChange={onChange}
      onInput={onInput}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      rows={1}
      className="EditableBlock"
      autoFocus
    ></textarea>
  );
}
