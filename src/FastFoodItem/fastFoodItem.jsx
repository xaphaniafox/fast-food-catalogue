import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import "./fastFoodItem.css";

const FastFoodItem = ({ name, price, ingredients, imageUrl }) => {
  return (
    <div>
      <div className="card-container card product-card h-100 border-0 shadow-sm pb-1">
        <span className="badge badge-end badge-shadow bg-success fs-md fw-medium">
          قیمت: {price.toLocaleString()} تومان
        </span>
        <img className="card-img-top" src={imageUrl} alt="fast food image" />
        <div className="card-body text-center pt-3 pb-4">
          <h5 className="mb-2">{name}</h5>
          <div className="fs-ms fw-bold text-muted mb-3">{ingredients}</div>
          <button className="btn btn-outline-success btn-sm w-100 mt-auto fw-bold">
            <TiShoppingCart className="fs-5 ms-3" />
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default FastFoodItem;
