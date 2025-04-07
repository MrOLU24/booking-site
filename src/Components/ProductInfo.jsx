import React from "react";

const ProductInfo = () => {
  const product = [
    {
      Name: "nike",
      Size: 53,
      Color: "Red",
      id: 1,
    },
    {
      Name: "Adiddas",
      Size: 58,
      Color: "Blue",
      id: 2,
    },
  ];

  return (
    <div>
      {product.map(({ Name, Size, Color, id }) => (
        <ul key={id}>
          <li>{Name}</li>
          <li>{Size}</li>
        </ul>
      ))}
    </div>
  );
};

export default ProductInfo;
