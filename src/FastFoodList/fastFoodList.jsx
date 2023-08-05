import FastFoodItem from "../FastFoodItem/fastFoodItem";

const FastFoodList = ({ fastFoodItems }) => {
  let delay = 0.1;
  return (
    <div className="row">
      {fastFoodItems.map((fastFoodItem) => {
        delay += 0.03;
        return (
          <div
            className="col-md-4 col-sm-6 mb-grid-gutter"
            key={fastFoodItem.id}
          >
            <FastFoodItem {...fastFoodItem} delay={delay} />
          </div>
        );
      })}
    </div>
  );
};

export default FastFoodList;
