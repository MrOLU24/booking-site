import React from "react";

const User = ({ name, Level, proffession }) => {
  return (
    <>
      <h2>{name}</h2>
      <p>{Level}</p>
      <p>{proffession}</p>
    </>
  );
};

export default User;
