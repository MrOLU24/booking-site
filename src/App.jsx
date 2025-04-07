import React from "react";
import ProductInfo from "./Components/ProductInfo";
import Greetings from "./Components/Greetings";
import User from "./Components/Person";
import ProductName from "./Components/Product";

const App = () => {
  return (
    <main>
      <ProductInfo />
      <Greetings />
      <User name="Abdul" Level="graduted" proffession="Software Eng" />
      <ProductName name="Orange" price="$50" />
    </main>
  );
};

export default App;
