import React from "react";
//import "./Image.css"; // Якщо потрібен окремий CSS для Image

function Image({ image, imageWidth, toggleColor }) {
  return (
    <img
      src={image.src}
      alt="Dynamic"
      width={imageWidth}
      className={image.active ? "active" : ""}
      onClick={() => toggleColor(image.id)}
    />
  );
}

export default Image;


