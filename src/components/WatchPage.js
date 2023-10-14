import React, { useEffect } from "react";
import WatchPageVideo from "./WatchPageVideo";
import WatchPageRecommendation from "./WatchPageRecommendation";
import LiveChatBox from "./LiveChatBox";
import { useDispatch } from "react-redux";
import { clearSuggestion, toggleSuggestion } from "../utils/appSlice";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearSuggestion(false));
  }, []);

  return (
    <div className="flex w-full absolute top-10">
      <WatchPageVideo />
      <div className="mt-6 w-full">
        <LiveChatBox />
        <WatchPageRecommendation />
      </div>
    </div>
  );
};

export default WatchPage;
