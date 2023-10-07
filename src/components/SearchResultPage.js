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
  dispatch(clearMenu(true));

  useEffect(() => {
    dispatch(clearResults());
    dispatch(toggleSuggestion());
  }, [searchParam]);

  useEffect(() => {}, []);

  // console.log(videoInfo);
  return (
    <div>
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
