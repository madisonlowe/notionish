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
  const [components, setComponents] = useState(["Tester"]);

  return (
    <main className="App">
      <EditableHeader />
      <div>
        {components.map(() => (
          <EditableBlock
            value={value}
            setValue={setValue}
            components={components}
            setComponents={setComponents}
          />
        ))}
      </div>
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
