import React, { useEffect, useState } from "react";
import LiveChatComment from "./LiveChatComment";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import {
  RandomNameGenerator,
  getRandomComment,
} from "../Helper/RandomNameMessageGenerator";
import { useSearchParams } from "react-router-dom";

const LiveChatBox = () => {
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.chatMessages);
  const [searchParam] = useSearchParams();
  const [liveMessage, setliveMessage] = useState("");

  // useEffect(() => {
  //   const clrInterval = setInterval(() => {
  //     console.log("api call");
  //     dispatch(
  //       addMessage({
  //         name: RandomNameGenerator(),
  //         message: getRandomComment(),
  //       })
  //     );
  //   }, 1500);

  //   return () => {
  //     clearInterval(clrInterval);
  //   };
  // }, []);
  useEffect(() => {
    const i = setInterval(() => {
      // API Polling

      dispatch(
        addMessage({
          name: RandomNameGenerator(),
          message: getRandomComment(),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div>
        <div className="w-3/4 h-[480px] mt-2 rounded-lg border overflow-y-scroll flex flex-col-reverse border-black   bg-slate-50">
          {chatMessage?.map((eachChat) => (
            <LiveChatComment
              key={eachChat?.name}
              name={eachChat?.name}
              message={eachChat?.message}
            />
          ))}
        </div>
        <form
          className="w-3/4 p-2 rounded-lg border border-black"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: "Pragun",
                message: liveMessage,
              })
            );
            setliveMessage("");
          }}
        >
          <input
            className="border px-2 border-black w-3/4 "
            value={liveMessage}
            onChange={(e) => {
              setliveMessage(e.target.value);
            }}
          ></input>
          <button className="px-2 mx-1 rounded-lg bg-green-400">Submit</button>
        </form>
      </div>
    </>
  );
};

export default LiveChatBox;
