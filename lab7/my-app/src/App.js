import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import GoodsCard from "./components/GoodsCard";
import "./App.css";

function App() {
  const [headerActive, setHeaderActive] = useState(false);
  const [isFirstClick, setIsFirstClick] = useState(false);
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

  const goods = [
    { id: 1, name: "Туш для вій", price: 400, image: "https://media.prostor.ua/catalog/product/2/0/20939078547038.jpg?store=ru&image-type=image" },
    { id: 2, name: "Тіні для повік", price: 300, image: "https://images.prom.ua/3298323022_w300_h300_tini-dlya-povik.jpg" },
    { id: 3, name: "Рум'яна", price: 450, image: "https://goddess.com.ua/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/h/m/hm-flat_1400x1400.jpg" },
    { id: 4, name: "Хайлайтер", price: 370, image: "https://ezebra.com.ua/rus_pl_THE-BALM-MARY-LOU-MANIZER-TRAVEL-SIZE-HAILAITER-2-7G-126383_1.webp" },
    { id: 5, name: "Блиск для губ", price: 500, image: "https://intertop.ua/load/KML2894/1600x2133/MAIN.jpg" },
    { id: 6, name: "Олія для волосся", price: 1100, image: "https://kosmetolog.ua/content/images/45/536x536l50nn0/vosstanavlivaushee-maslo-dlja-volos-chi-royal-treatment-bond-repair-oil-118-ml-61322171151311.jpg" },
  ];

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
      <section className="goods-gallery">
        {goods.map((item) => (
          <GoodsCard
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </section>
    </div>
  );
}

export default App;



