import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { clearMenu, toggleMenu, toggleSuggestion } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";

import VideoCardSearchResult from "./VideoCardSearchResult";
import ShimmerSearchResult from "./ShimmerSearchResult";
import useVideoSearchResult from "../Hooks/useVideoSearchResult";
import { addtoresult, clearResults } from "../utils/searchResultSlice";

const SearchResultPage = () => {
  const [searchParam] = useSearchParams();
  const [videoInfo] = useVideoSearchResult();
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // dispatch(clearMenu(true));

  useEffect(() => {
    dispatch(clearResults());
    dispatch(toggleSuggestion());
  }, [searchParam]);

  useEffect(() => {}, []);

  // console.log(videoInfo);
  return (
    <div
      className={`relative  md:z-10  md:w-3/5 md:left-60 top-10 ${
        isMenuOpen ? "-z-10" : "z-10"
      }`}
    >
      {videoInfo?.length === 0 ? (
        <ShimmerSearchResult />
      ) : (
        videoInfo?.map((eachvideo) => {
          dispatch(addtoresult(eachvideo));
          return (
            <VideoCardSearchResult
              key={eachvideo?.id?.videoId}
              info={eachvideo}
            />
          );
        })
      )}
    </div>
  );
};

export default SearchResultPage;
