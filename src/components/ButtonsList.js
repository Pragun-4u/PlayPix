import React from "react";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";
const List = [
  "All",
  "UEFA Champions League",
  "Gaming",
  "Arijit Singh",
  "Cricket",
  "Pop Music",
  "The Weeknd",
  "Comedy",
  "Cars",
  "Podcast",
];
const ButtonsList = () => {
  return (
    <div className="mt-16 ">
      <div className=" flex items-center justify-start md:justify-center  flex-wrap ml-5 m-auto">
        {List.map((item, index) => (
          <Link key={index} to={"/results?searchquery=" + item}>
            <Buttons name={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ButtonsList;
