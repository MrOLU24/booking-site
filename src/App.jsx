import React, { useState } from "react";
import Addone from "./Components/Addone";
import Addtwo from "./Components/Addtwo";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <main>
      <Addone count={count} handler={() => setCount(count + 1)} />
      <Addtwo count={count} handler={() => setCount(count + 1)}/>
    </main>
  );
};

export default App;
