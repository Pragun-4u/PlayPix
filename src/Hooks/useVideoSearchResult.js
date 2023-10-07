import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_LIST_API } from "../utils/constants";
import { useSearchParams } from "react-router-dom";

const useVideoSearchResult = () => {
  const [videoInfo, setvideoInfo] = useState([]);
  const [searchParam] = useSearchParams();
  useEffect(() => {
    getVideoInfo();
  }, [searchParam]);

  const getVideoInfo = async () => {
    const data = await fetch(
      process.env.REACT_APP_YOUTUBE_SEARCH_LIST_API +
        searchParam.get("searchquery")
    );
    const json = await data.json();
    setvideoInfo(json?.items);
  };

  return [videoInfo];
};

export default useVideoSearchResult;
