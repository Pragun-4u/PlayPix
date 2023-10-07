import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearMenu, toggleMenu } from "../utils/appSlice";

const Shimmer = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  !isMenuOpen && dispatch(toggleMenu());
  return Array(12)
    .fill(" ")
    .map((e, index) => {
      return (
        <div
          key={index}
          className="animate-pulse p-2 m-2 w-72 h-72 bg-gray-400 shadow-xl rounded-lg"
        ></div>
      );
    });
};

export default Shimmer;
