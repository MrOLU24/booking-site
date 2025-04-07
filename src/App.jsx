import React from "react";
import Greetings from "./Components/Greetings";

const App = () => {
  return (
    <main>
      {/* <ProductInfo />
      <Greetings />
      <User name="Abdul" Level="graduted" proffession="Software Eng" />
      <ProductName name="Orange" price="$50" /> */}
      {/* <Weather/> */}
      {/* <UserStatus isloggedIn={true} isAdmin={true} /> */}
      <Greetings TimeOfDay="morning"/>
    </main>
  );
};

export default App;
