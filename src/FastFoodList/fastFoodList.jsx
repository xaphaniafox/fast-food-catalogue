import React from "react";
import FastFoodItem from "../FastFoodItem/fastFoodItem";

const FastFoodList = ({ fastFoodItems }) => {
  return (
    <div className="row">
      {fastFoodItems.map((fastFoodItem) => {
        return (
          <div
            className="col-md-4 col-sm-6 mb-grid-gutter"
            key={fastFoodItem.id}
          >
            <FastFoodItem {...fastFoodItem} />
          </div>
        );
      })}
    </div>
  );
};

export default FastFoodList;
