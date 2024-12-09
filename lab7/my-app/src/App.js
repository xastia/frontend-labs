import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import "./App.css";

function App() {
  const [headerActive, setHeaderActive] = useState(false);
  const [isFirstClick, setIsFirstClick] = useState(false); // Для перевірки першого кліку
  const [images, setImages] = useState([
    {
      id: 1,
      src: "https://ukraine.ua/wp-content/uploads/2020/11/Theatre-in-old-town-of-Odesa-sea-port-weiv.simbiothy.depositphotos-2048x1536.jpg",
      active: false,
    },
  ]);
  const [imageWidth, setImageWidth] = useState(600);

  const toggleHeaderColor = () => {
    if (!isFirstClick) {
      setIsFirstClick(true);
    }
    setHeaderActive((prev) => !prev);
  };

  const toggleColor = (id) => {
    setImages((prevImages) =>
      prevImages.map((img) =>
        img.id === id ? { ...img, active: !img.active } : img
      )
    );
  };

  const addImage = () => {
    const newImage = {
      id: Date.now(),
      src: "https://ukraine.ua/wp-content/uploads/2020/11/Theatre-in-old-town-of-Odesa-sea-port-weiv.simbiothy.depositphotos-2048x1536.jpg",
      active: false,
    };
    setImages((prev) => [...prev, newImage]);
  };

  const increaseSize = () => {
    setImageWidth((prev) => prev + 50);
  };

  const decreaseSize = () => {
    setImageWidth((prev) => (prev > 50 ? prev - 50 : prev));
  };

  const removeImage = () => {
    setImages((prev) => prev.slice(0, -1));
  };

  return (
    <div className="App">
      <Header
        headerActive={headerActive}
        toggleHeaderColor={toggleHeaderColor}
        isFirstClick={isFirstClick}
      />
      <Content
        images={images}
        imageWidth={imageWidth}
        toggleColor={toggleColor}
        addImage={addImage}
        increaseSize={increaseSize}
        decreaseSize={decreaseSize}
        removeImage={removeImage}
      />
    </div>
  );
}

export default App;


