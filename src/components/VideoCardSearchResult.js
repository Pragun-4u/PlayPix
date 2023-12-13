import React from "react";
import { Link } from "react-router-dom";

const VideoCardSearchResult = ({ info }) => {
  //   console.log(info);
  const { id, snippet } = info;
  const { videoId } = id;
  // console.log(videoId);
  const { channelTitle, description, publishedAt, thumbnails, title } = snippet;

  return (
    <>
      <div className="w-full">
        {videoId === undefined ? null : (
          <Link to={"/watch?v=" + videoId}>
            <div className="md:flex my-8 flex-wrap w-screen md:w-full  bg-gray-100 shadow-xl rounded-xl cursor-pointer hover:bg-transparent ">
              <div className="md:w-60 flex w-screen">
                <img
                  className="w-[100vw] object-contain rounded-lg"
                  src={thumbnails?.medium?.url}
                  alt="thumbnail"
                />
              </div>
              <div className="mx-5 md:w-80 border border-red-200 w-[100vw] overflow-hidden">
                <span className="font-bold text-lg">{title}</span>
                <div className="flex">
                  <img
                    className="h-8 w-fit pt-2 col-span-1 "
                    src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                    alt="User Icon"
                  ></img>
                  <span className="mx-1 my-1 text-lg">{channelTitle}</span>
                </div>
                <h6>{new Date(publishedAt).toLocaleDateString()}</h6>
                <span className="italic text-sm ">{description}</span>
              </div>
            </div>
          </Link>
        )}
      </div>
    </>
  );
};

export default VideoCardSearchResult;
