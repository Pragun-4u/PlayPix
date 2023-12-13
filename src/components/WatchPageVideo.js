import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clearMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import useVideoIDinfo from "../Hooks/useVideoIDinfo";
import convertNumber from "../Helper/convertNumber";
import CommentsContainer from "./CommentsContainer";

const WatchPageVideo = () => {
  const dispatch = useDispatch();
  const [showDesc, setshowDesc] = useState(false);
  const [SearchParams] = useSearchParams();
  // console.log(SearchParams.get("v"));

  const [videoInfo] = useVideoIDinfo(SearchParams.get("v"));
  // console.log(videoInfo);

  const { snippet, statistics } = videoInfo;
  useEffect(() => {
    dispatch(clearMenu());
  }, [SearchParams]);
  return (
    //
    <div className="">
      <iframe
        className=" w-screen mx-auto h-72 md:h-[32rem]  mt-10 md:mx-24 md:mt-20 md:mb-3 md:w-[52rem] rounded-xl"
        width="900"
        height="500"
        src={
          "https://www.youtube.com/embed/" +
          SearchParams.get("v") +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <div className="md:mx-20">
        <h1 className="font-bold md:text-2xl px-4 pt-2">{snippet?.title}</h1>
        <div className="flex px-4  flex-wrap">
          <img
            className="h-10  md:w-10  mt-2 rounded-2xl"
            src={snippet?.thumbnails?.medium?.url}
          />
          <h1 className="md:text-lg font-bold p-2">{snippet?.channelTitle}</h1>
          {
            <h1 className="text-sm md:text-md pt-2 mx-5">
              Views: {convertNumber(statistics?.viewCount)}
            </h1>
          }
          {
            <h1 className="pt-2 text-sm md:text-md mx-5">
              Published On:{" "}
              {new Date(snippet?.publishedAt).toLocaleString(undefined, {
                timeZone: "Asia/Kolkata",
              })}
            </h1>
          }
          {
            <span className="pt-2  mx-5 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                />
              </svg>

              <span className="mx-2 text-sm md:text-md">
                {convertNumber(statistics?.likeCount)}
              </span>
            </span>
          }
        </div>
        <div className="">
          {" "}
          {showDesc ? (
            <button
              onClick={() => setshowDesc(false)}
              className=" text-sm md:text-md bg-gray-300 flex p-2 m-2 rounded-lg"
            >
              {" "}
              Hide description
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 mx-2 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => setshowDesc(true)}
              className="bg-gray-300 p-2 m-2 text-sm md:text-md flex rounded-lg"
            >
              Show description
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mx-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
            </button>
          )}
          {showDesc && (
            <div className="bg-gray-100  overflow-hidden md:max-w-4xl  p-2 rounded-lg shadow-lg mx-2">
              <p className="text-xs md:text-md  pt-2">
                {snippet?.localized?.description}
              </p>
              <p>
                Tags:
                {snippet?.tags.map((tag, index) => (
                  <span className="italic text-sm" key={index}>
                    {" "}
                    #{tag}
                  </span>
                ))}
              </p>
            </div>
          )}
        </div>
      </div>
      <CommentsContainer statistics={statistics} />
    </div>
  );
};

export default WatchPageVideo;
