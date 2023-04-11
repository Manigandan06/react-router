import { useState } from "react";
import "./App.css";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import Component4 from "./components/Component4";

function App() {
  const [name, setname] = useState("Mani");
  const [profession, setprofession] = useState("React Developer");

  return (
    <div className="App">
      <h3>{name}</h3>
      <h3>{profession}</h3>
      <button onClick={() => setprofession("Full Stack")}>Promote</button>
      <h1>React Router</h1>
      <Component1 name={name} profession={profession} setname={setname} />
      <Component2 name={name} profession={profession} />
      <Component3 />
      <Component4 />
    </div>
  );
}

export default App;
