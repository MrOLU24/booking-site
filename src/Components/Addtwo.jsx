import React from "react";

const Addtwo = ({ count, handler }) => {
  const handleclick = () => handler();
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleclick}>increment</button>
    </div>
  );
};

export default Addtwo;
