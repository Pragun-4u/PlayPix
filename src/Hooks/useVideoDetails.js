import React, { useState, useEffect } from "react";
import { YOUTUBE_API_KEY } from "../utils/constants";

const useVideoDetails = () => {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    getVideodata();
  }, []);

  const getVideodata = async () => {
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();

    setvideos(json?.items);
  };

  return [videos];
};

export default useVideoDetails;
