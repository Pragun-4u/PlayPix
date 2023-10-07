import React from "react";
import { useSelector } from "react-redux";

const SearchResultPageRecommendation = ({ info }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const { id, snippet } = info;
  const { videoId } = id;
  // console.log(videoId);
  const { channelTitle, description, publishedAt, thumbnails, title } = snippet;

  if (videoId === undefined) {
    return null;
  }

  return (
    <div
      className={`p-2 m-2 bg-gray-200 shadow-xl rounded-lg hover:bg-transparent ${
        isMenuOpen ? "w-72" : "w-56 ml-5"
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
        <h5 className=" text-md">{channelTitle}</h5>
        <h5 className="text-xs">{description}</h5>
        <h5>{"Uploaded On " + new Date(publishedAt).toLocaleDateString()}</h5>
      </div>
    </div>
  );
};

export default SearchResultPageRecommendation;
