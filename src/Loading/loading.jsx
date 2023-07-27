import React from "react";

const Loading = ({ theme }) => {
  return (
    <div className="d-felx justify-content-center m-auto">
      <div
        className={`loading spinner-border text-${theme || "success"}`}
      ></div>
    </div>
  );
};

export default Loading;
