import React, { useEffect, useState } from "react";

const useVideoIDinfo = (videoID) => {
  const [videoInfo, setvideoInfo] = useState([]);
  useEffect(() => {
    getVideoInfo();
  }, [videoID]);

  const getVideoInfo = async () => {
    const data = await fetch(
      process.env.REACT_APP_YOUTUBE_VIDEOINFO_API + videoID
    );
    const json = await data.json();
    setvideoInfo(json?.items[0]);
  };

  return [videoInfo];
};

export default useVideoIDinfo;
