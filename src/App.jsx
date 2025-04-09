import React, { useState } from "react";
import Addone from "./Components/Addone";
import Addtwo from "./Components/Addtwo";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [count, setCount] = useState(0)

  return (
    <div>
      <Addone counter={counter} setCounter={setCounter} />
      <Addtwo count={count} setCount={setCount} />
    </div>
  );
};

export default App;
