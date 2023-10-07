import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useVideoDetails from "../Hooks/useVideoDetails";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearResults } from "../utils/searchResultSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const [videos] = useVideoDetails();

  useEffect(() => {
    dispatch(clearResults());
  }, []);

  return (
    <div className=" mx-5 flex flex-wrap">
      {videos?.length === 0 ? (
        <Shimmer />
      ) : (
        videos.map((video) => {
          return (
            <Link key={video?.id} to={"watch?v=" + video.id}>
              <VideoCard info={video} />
            </Link>
          );
        })
      )}
    </div>
  );
};

export default VideoContainer;
