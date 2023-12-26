import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, toggleSuggestion } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showfullwidth, setshowfullwidth] = useState(false);
  // console.log(showfullwidth);
  const showSuggestion = useSelector((store) => store.app.showSuggestion);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log(process.env.REACT_APP_YOUTUBE_SUGGESTION_API);
    const data = await fetch(
      process.env.REACT_APP_YOUTUBE_SUGGESTION_API + searchQuery
    );
    const json = await data.json();
    setSuggestions(json[1]);
    // console.log(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <div className="relative top-0">
      <div className=" md:flex flex-wrap w-screen fixed top-0  z-50 bg-white p-2  shadow-lg">
        <div className="flex">
          <div className="flex mx-4">
            {showfullwidth && (
              <div className="md:hidden mt-1">
                <button
                  className="rounded-full mt-1 p-1 bg-slate-300"
                  onClick={() => {
                    setshowfullwidth(false);
                    dispatch(toggleSuggestion());
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                </button>
              </div>
            )}
            <div className={` ${showfullwidth ? "hidden" : "flex"} `}>
              <img
                onClick={() => {
                  dispatch(toggleMenu());
                }}
                className="-ml-6 md:ml-0 h-10 mt-1 cursor-pointer hover:bg-gray-200 rounded-lg  "
                alt="Menu"
                src="https://static.thenounproject.com/png/880223-200.png"
              ></img>
              <Link to="/">
                <img
                  className="h-12  ml-2"
                  alt="Logo"
                  src="https://cdn-icons-png.flaticon.com/512/6387/6387389.png"
                ></img>
              </Link>

              <div className="md:block pt-1 mx-1">
                <Link to="/" className="mt-1 ">
                  <span className="pl-2 hover:underline font-bold text-3xl">
                    Play
                  </span>
                  <span className="text-red-400 font-bold text-3xl hover:underline">
                    Pix
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-[50vw]">
            <div
              className={`flex  md:flex md:justify-center ${
                showfullwidth ? "md:w-full" : "hidden"
              }`}
            >
              <input
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
                placeholder="Search"
                onFocus={() => {
                  dispatch(toggleSuggestion(true));
                }}
                onBlur={(e) => {
                  // console.log(e.relatedTarget);
                  if (e.relatedTarget === null) {
                    dispatch(toggleSuggestion(false));
                  } else {
                    navigate(
                      "/results?searchquery=" + e.relatedTarget.textContent
                    );
                  }
                }}
                className=" px-5 py-2 w-3/4 md:w-3/4  border rounded-l-full  border-gray-400  "
              ></input>

              <button
                className="rounded-r-full
            "
                onClick={() => navigate("/results?searchquery=" + searchQuery)}
              >
                <img
                  alt="search Icon"
                  className="h-10 md:h-12 cursor-pointer border border-gray-400 bg-gray-100 rounded-r-full"
                  src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-8.png"
                />
              </button>
            </div>
            {!showfullwidth && (
              <div className="md:hidden mt-1">
                <button
                  className="rounded-full "
                  onClick={() => setshowfullwidth(true)}
                >
                  <img
                    className="rounded-full  bg-gray-200 h-10"
                    src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-8.png"
                  />
                </button>
              </div>
            )}
            {showSuggestion && suggestions.length !== 0 && (
              <div
                onFocus={() => {
                  dispatch(toggleSuggestion());
                }}
                className="absolute top-10 mt-4 md:mt-4 z-50 md:mx-16  w-[28rem] pt-4 rounded-xl bg-gray-50"
              >
                <ul>
                  {suggestions.map((Result) => (
                    <Link
                      to={"/results?searchquery=" + Result}
                      key={Result}
                      className="flex hover:bg-gray-300 mb-1  "
                    >
                      {" "}
                      <img
                        className="h-8"
                        src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-8.png"
                      />
                      {Result}
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="flex">
            <img
              className="h-9 px-2 pt-2   "
              src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
              alt="User Icon"
            />
            <span className="pt-2  md:block hidden">Pragun K.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
