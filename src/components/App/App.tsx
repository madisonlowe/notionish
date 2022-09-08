import { useState } from "react";
import EditableHeader from "../EditableHeader/EditableHeader";
import EditableBlock from "../EditableBlock/EditableBlock";
import "./App.css";

function App() {
  interface editableValue {
    value: any;
    setValue: any;
  }

  const [value, setValue] = useState<editableValue>();

  return (
    <main className="App">
      <EditableHeader />
      <EditableBlock value={value} setValue={setValue} />
    </main>
  );
}

export default App;
