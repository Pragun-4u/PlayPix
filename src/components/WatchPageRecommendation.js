import { useSelector } from "react-redux";
import useVideoDetails from "../Hooks/useVideoDetails";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

import SearchResultPageRecommendation from "./searchResultPageRecommendation";

const WatchPageRecommendation = () => {
  const SearchResultPage = useSelector((store) => store.searchResult.results);

  const [videos] = useVideoDetails();

  return (
    <>
      <h1 className="md:text-left md:ml-5 text-lg my-3 text-center font-bold">
        Recommended Videos.
      </h1>
      {SearchResultPage.length !== 0
        ? SearchResultPage?.map((video) => (
            <Link key={video?.id?.videoId} to={"?v=" + video?.id?.videoId}>
              <SearchResultPageRecommendation info={video} />
            </Link>
          ))
        : videos?.map((video) => (
            <Link key={video?.id} to={"?v=" + video.id}>
              <VideoCard info={video} />
            </Link>
          ))}
    </>
  );
};

export default WatchPageRecommendation;
