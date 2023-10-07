import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_COMMENT_API } from "../utils/constants";
import convertNumber from "../Helper/convertNumber";

const CommentsContainer = ({ statistics }) => {
  const [searchParams] = useSearchParams();
  const [comments, setcomments] = useState([]);
  useEffect(() => {
    getComments();
  }, [searchParams.get("v")]);

  const getComments = async () => {
    const data = await fetch(YOUTUBE_COMMENT_API + searchParams.get("v"));
    const json = await data.json();

    // console.log(json?.items);
    setcomments(json?.items);
  };

  return (
    <>
      <div className=" font-bold text-xl mx-2 mb-4 mt-9">
        Comments : {convertNumber(statistics?.commentCount)}
      </div>
      <div className=" bg-gray-100 w-full rounded-lg ">
        {comments.map((eachcomment) => (
          <Comment
            key={eachcomment?.id}
            data={eachcomment?.snippet?.topLevelComment?.snippet}
          />
        ))}
      </div>
    </>
  );
};

export default CommentsContainer;
