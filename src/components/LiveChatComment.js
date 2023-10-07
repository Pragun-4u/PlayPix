import React from "react";

const LiveChatComment = ({ name, message }) => {
  return (
    <>
      <div className="px-2 pb-2 my-2   rounded-md shadow-md ">
        <div className="flex flex-wrap items-center">
          <img
            className="h-8 "
            src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
            alt="User Icon"
          />
          <span className=" font-bold px-2">{name}</span>
          <span>{message}</span>
        </div>
      </div>
    </>
  );
};

export default LiveChatComment;
