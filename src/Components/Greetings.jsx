import React from "react";

function Greetings(TimeOfDay) {
  return TimeOfDay === "afternoon" ? (
    <h1>Good Afternoon</h1>
  ) : (
    <h1>Good morning</h1>
  );
}

export default Greetings;
