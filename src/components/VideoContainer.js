import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useVideoDetails from "../Hooks/useVideoDetails";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearResults } from "../utils/searchResultSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const [videos] = useVideoDetails();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useEffect(() => {
    dispatch(clearResults());
  }, []);

  return (
    <div className={`flex flex-wrap ${isMenuOpen ? "md:ml-40" : ""}`}>
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
