import React from "react";

const ProductName = (props) => {
  return (
    <div>
      <ul>
        <li>{props.name}</li>
        <li>{props.price}</li>
      </ul>
    </div>
  );
};
export default ProductName;
