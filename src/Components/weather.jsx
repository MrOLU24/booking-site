import React from "react";

const Weather = () => {
  let temp = 67;

  if (temp <= 15) {
    return <h1>It's Cold Outside</h1>;
  } else if (temp > 15 && temp < 25) {
    return <h1>It's Normal Outside</h1>;
  } else if(temp > 25) {
    return <h1>It's Hot Outside</h1>;
  }
};

export default Weather;