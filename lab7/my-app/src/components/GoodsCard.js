import React from "react";

function GoodsCard({ name, price, image }) {
  return (
    <div className="goods-card">
      <img src={image} alt={name} className="goods-image" />
      <h3 className="goods-name">{name}</h3>
      <p className="goods-price">{price} грн</p>
    </div>
  );
}

export default GoodsCard;
