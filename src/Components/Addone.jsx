import React from "react";

const Addone = ({count, handler}) => {
  const handlerclick = () => handler();
  return (
    <div>
      <p>{count}</p>
      <button onClick={handlerclick}>increment</button>
    </div>
  );
};

export default Addone;
