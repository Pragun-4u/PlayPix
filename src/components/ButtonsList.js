import React from "react";
import Buttons from "./Buttons";
import ConsoleHelper from "../Helper/ConsoleHelper";
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
    <div className="flex flex-wrap ml-5">
      {List.map((item, index) => (
        <Link key={index} to={"/results?searchquery=" + item}>
          <Buttons name={item} />
        </Link>
      ))}
    </div>
  );
};

export default ButtonsList;
