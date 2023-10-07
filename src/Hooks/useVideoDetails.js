import React, { useState, useEffect } from "react";

const useVideoDetails = () => {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    getVideodata();
  }, []);

  const getVideodata = async () => {
    const data = await fetch(process.env.REACT_APP_YOUTUBE_API_KEY);
    const json = await data.json();

    setvideos(json?.items);
  };

  return [videos];
};

export default useVideoDetails;
