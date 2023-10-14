import React, { useEffect } from "react";
import WatchPageVideo from "./WatchPageVideo";
import WatchPageRecommendation from "./WatchPageRecommendation";
import LiveChatBox from "./LiveChatBox";
import { useDispatch, useSelector } from "react-redux";
import { clearSuggestion, toggleSuggestion } from "../utils/appSlice";

const WatchPage = () => {
  const dispatch = useDispatch();

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useEffect(() => {
    dispatch(clearSuggestion(false));
  }, []);

  return (
    <div
      className={`md:flex w-full absolute top-10  ${
        isMenuOpen ? "-z-10" : "z-10"
      }`}
    >
      <WatchPageVideo />
      <div className="md:mt-6 md:w-full">
        <LiveChatBox />
        <WatchPageRecommendation />
      </div>
    </div>
  );
};

export default WatchPage;
