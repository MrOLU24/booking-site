import React from "react";

const Greet = "hello fam";
const date = new Date()
const Greetings = () => {
  return (
    <div>
      <h1>{Greet.toUpperCase()}</h1>
      <p>today date is {date.getDate()}</p>
    </div>
  );
};

export default Greetings;
