import { useState } from "react";
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
      <EditableBlock value={value} setValue={setValue} />
    </main>
  );
}

export default App;
