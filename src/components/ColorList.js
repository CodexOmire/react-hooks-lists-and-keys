// src/components/ColorList.js
import React from "react";
import ColorItem from "./ColorItem";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colors.map((color) => (
          <ColorItem key={color} color={color} />
        ))}
      </ol>
    </div>
  );
}

export default ColorList;
