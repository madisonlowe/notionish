import { SetStateAction, useState } from "react";
import EditableHeader from "../EditableHeader/EditableHeader";
import EditableBlock from "../EditableBlock/EditableBlock";
import "./App.css";

function App() {
  interface editableValue {
    value: any;
    setValue: any;
  }

  interface pageComponents {
    components: any;
    setComponents: (value: any) => void;
  }

  const [value, setValue] = useState<editableValue>();
  const [components, setComponents] = useState<pageComponents>(["Tester"]);

  function addComponent() {
    setComponents([...components, "Test Component"]);
  }

  return (
    <main className="App">
      <EditableHeader />
      <EditableBlock value={value} setValue={setValue} />
    </main>
  );
}

export default App;

/*
AIMS:
- we create a state that tracks how many components we have
- on a certain input, we add another component to the array of components tracked in state
- we render those components on screen
- we can later take those components away from the array
- this is meant to mimic how, on enter in notion, a new component comes onto screen
*/
