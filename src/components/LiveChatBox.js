import React, { useEffect, useState } from "react";
import LiveChatComment from "./LiveChatComment";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import {
  RandomNameGenerator,
  getRandomComment,
} from "../Helper/RandomNameMessageGenerator";

const LiveChatBox = () => {
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.chatMessages);
  const [showlivechat, setshowlivechat] = useState(true);
  const [liveMessage, setliveMessage] = useState("");

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
  });

  return (
    <>
      <div>
        <div className="my-3 md:pl-2 text-center md:text-left  ">
          <span className="text-lg  px-2  text-center font-bold">
            Live Comments Box.
          </span>
          {!showlivechat ? (
            <button onClick={() => setshowlivechat(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                />
              </svg>
            </button>
          ) : (
            <button onClick={() => setshowlivechat(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                />
              </svg>
            </button>
          )}
        </div>

        {showlivechat && (
          <div>
            <div className="w-screen md:w-3/4 h-[480px] mt-2 rounded-lg border overflow-y-scroll flex flex-col-reverse border-black   bg-slate-50">
              {chatMessage?.map((eachChat) => (
                <LiveChatComment
                  key={eachChat?.name}
                  name={eachChat?.name}
                  message={eachChat?.message}
                />
              ))}
            </div>
            <form
              className="w-screen md:w-3/4 p-2 rounded-lg border border-black"
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
                placeholder="Add a Comment."
                className="border px-2 border-black w-3/4 "
                value={liveMessage}
                onChange={(e) => {
                  setliveMessage(e.target.value);
                }}
              ></input>
              <button className="px-2 mx-1 rounded-lg bg-green-400">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default LiveChatBox;
