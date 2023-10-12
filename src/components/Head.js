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
    // console.log(searchQuery);
    const data = await fetch(
      process.env.REACT_APP_YOUTUBE_SUGGESTION_API + searchQuery
    );
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <div className="grid grid-flow-col sticky top-0 z-50 bg-white p-2 flex-wrap shadow-lg">
      <div className="flex col-span-1 mx-4">
        <img
          onClick={() => {
            dispatch(toggleMenu());
          }}
          className="h-10 mt-1 cursor-pointer hover:bg-gray-200 rounded-lg  "
          alt="Menu"
          src="https://static.thenounproject.com/png/880223-200.png"
        ></img>
        <img
          className="h-12 ml-2"
          alt="Logo"
          src="https://cdn-icons-png.flaticon.com/512/6387/6387389.png"
        ></img>

        <Link to="/" className="mt-1 ">
          <span className="pl-2 hover:underline font-bold text-3xl">Play</span>
          <span className="text-red-400 font-bold text-3xl hover:underline">
            Pix
          </span>
        </Link>
      </div>
      <div className=" ">
        <div className="col-span-10 flex mr-48">
          <input
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            placeholder="Search"
            className=" px-10 py-2 w-4/5  border rounded-l-full border-gray-400  "
            onFocus={() => {
              dispatch(toggleSuggestion(false));
            }}
          ></input>

          <button
            className="rounded-r-full
        "
            onClick={() => navigate("/results?searchquery=" + searchQuery)}
          >
            <img
              className="h-12 cursor-pointer border border-gray-400 bg-gray-100 rounded-r-full"
              src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-8.png"
            />
          </button>
        </div>
        {showSuggestion && suggestions.length !== 0 && (
          <div className="fixed mt-1  w-[28rem] pt-4 rounded-xl bg-gray-50">
            <ul>
              {suggestions.map((Result) => (
                <Link
                  onBlur={() => {
                    dispatch(toggleSuggestion(true));
                  }}
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
          className="h-8 px-2 pt-2 col-span-1 "
          src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
          alt="User Icon"
        />
        <span className="pt-2">Pragun K.</span>
      </div>
    </div>
  );
};

export default Head;
