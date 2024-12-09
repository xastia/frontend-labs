import React, { Component } from "react";
import Image from "./Image";
//import "./Content.css"; // Якщо потрібен окремий CSS для Content

class Content extends Component {
  render() {
    const {
      images,
      imageWidth,
      toggleColor,
      addImage,
      increaseSize,
      decreaseSize,
      removeImage,
    } = this.props;

    return (
      <section>
        <div id="image-container">
          {images.map((image) => (
            <Image
              key={image.id}
              image={image}
              imageWidth={imageWidth}
              toggleColor={toggleColor}
            />
          ))}
        </div>
        <section className="controls">
          <button onClick={addImage}>Додати зображення</button>
          <button onClick={increaseSize}>Збільшити зображення</button>
          <button onClick={decreaseSize}>Зменшити зображення</button>
          <button onClick={removeImage}>Видалити останнє зображення</button>
        </section>
      </section>
    );
  }
}

export default Content;

