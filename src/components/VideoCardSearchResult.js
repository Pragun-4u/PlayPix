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
      <div>
        {videoId === undefined ? null : (
          <Link to={"/watch?v=" + videoId}>
            <div className=" flex my-8 mx-14 h-40 w-[60rem] bg-gray-100 shadow-xl rounded-xl cursor-pointer hover:bg-transparent ">
              <div className=" justify-around my-1 mx-2">
                <img
                  className=" w-auto h-36 rounded-lg"
                  src={thumbnails?.medium?.url}
                />
              </div>
              <div className="mx-1">
                <h1 className=" font-bold text-xl">{title}</h1>
                <div className="flex">
                  <img
                    className="h-8  pt-2 col-span-1 "
                    src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                    alt="User Icon"
                  ></img>
                  <h6 className="mx-1 my-1 text-lg">{channelTitle}</h6>
                </div>
                <h1>{new Date(publishedAt).toLocaleDateString()}</h1>
                <span className="italic text-sm">{description}</span>
              </div>
            </div>
          </Link>
        )}
      </div>
    </>
  );
};

export default VideoCardSearchResult;
