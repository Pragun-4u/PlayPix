import React, { useState, useEffect } from "react";

const useVideoDetails = () => {
  const [videos, setvideos] = useState([]);

  const getVideodata = async () => {
    try {
      const data = await fetch(process.env.REACT_APP_YOUTUBE_API_KEY);
      // console.log("from use videoDetails  ");
      // console.log(data);
      const json = await data.json();

      setvideos(json?.items);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    getVideodata();
  }, []);

  return [videos];
};

export default useVideoDetails;
