import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const { snippet, statistics } = info;

  const { channelTitle, description, publishedAt, thumbnails, title } = snippet;
  const {
    commentCount,
    favoriteCount,
    likeCount,

    viewCount,
  } = statistics;

  return (
    <div
      className={`p-2 m-2 bg-gray-200 shadow-xl rounded-lg hover:bg-transparent ${
        isMenuOpen ? "w-72" : "w-52 ml-5"
      }`}
    >
      <img
        alt="thumbnail"
        className="rounded-t-md"
        src={thumbnails?.medium?.url}
      ></img>
      <div className="text-start ">
        <h1 className="font-bold text-base">
          {title.length >= 60 ? (
            <span>{title.slice(0, 55) + "..."}</span>
          ) : (
            title
          )}
        </h1>
        <h5 className=" text-sm">{channelTitle}</h5>
        <h5>
          {viewCount.length >= 6 ? (
            <span>
              {viewCount.slice(0, 1) + "." + viewCount.slice(1, 2) + "M"}
            </span>
          ) : (
            <span>{viewCount}</span>
          )}{" "}
          views
        </h5>
      </div>
    </div>
  );
};

export default VideoCard;
