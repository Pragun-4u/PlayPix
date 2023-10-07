import React from "react";

const ShimmerSearchResult = () => {
  return Array(12)
    .fill(" ")
    .map((index) => {
      return (
        <div
          key={index}
          className="my-8 mx-14 h-40 w-[60rem] bg-gray-300 shadow-xl rounded-xl cursor-pointer hover:bg-transparent"
        ></div>
      );
    });
};

export default ShimmerSearchResult;
