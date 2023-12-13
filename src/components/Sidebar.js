import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null; // <div className="w-32 p-5 shadow-lg text-center">
  //   <ul className="mb-2">
  //     <li className=" text-center p-2 hover:bg-gray-200 rounded-md">
  //       Home{" "}
  //     </li>
  //     <li className=" text-center p-2 hover:bg-gray-200 rounded-md">
  //       Shorts{" "}
  //     </li>
  //     <li className=" text-center p-2 hover:bg-gray-200 rounded-md">
  //       Subscription{" "}
  //     </li>
  //     <li className=" text-center p-2 hover:bg-gray-200 rounded-md">
  //       Library{" "}
  //     </li>
  //   </ul>
  // </div>

  return (
    <div className="w-36 p-5 shadow-lg fixed z-50 bg-white top-10 text-center">
      <div className="border-b-2">
        <ul className="mb-2">
          <Link to="/">
            <li className=" text-center p-2 hover:bg-gray-200 rounded-md">
              Home{" "}
            </li>{" "}
          </Link>
          <li className=" text-center p-2 hover:bg-gray-200 rounded-md">
            Shorts{" "}
          </li>
          <li className=" text-center p-2 hover:bg-gray-200 rounded-md">
            Subscription{" "}
          </li>
        </ul>
      </div>

      <ul className="mt-4 border-b-2">
        <li className=" text-center p-2 hover:bg-gray-200 rounded-md">
          Library{" "}
        </li>
        <li className=" text-center p-2 hover:bg-gray-200 rounded-md">
          History
        </li>
        <li className=" text-center p-2 hover:bg-gray-200 rounded-md">
          Watch Later{" "}
        </li>
        <li className=" text-center p-2 hover:bg-gray-200 rounded-md">
          Liked videos
        </li>
      </ul>
      <ul className="mt-4">
        <li className=" text-center p-2 hover:bg-gray-200 rounded-md">
          Library{" "}
        </li>
        <li className=" text-center p-2 hover:bg-gray-200 rounded-md">
          History
        </li>
        <li className=" text-center p-2 hover:bg-gray-200 rounded-md">
          Watch Later{" "}
        </li>
        <li className=" text-center p-2 hover:bg-gray-200 rounded-md">
          Liked videos
        </li>
      </ul>
      <ul className="mt-4">
        <li className=" text-center p-2 hover:bg-gray-200 rounded-md">
          Library{" "}
        </li>
        <li className=" text-center p-2 hover:bg-gray-200 rounded-md">
          History
        </li>
        <li className=" text-center p-2 hover:bg-gray-200 rounded-md">
          Watch Later{" "}
        </li>
        <li className=" text-center p-2 hover:bg-gray-200 rounded-md">
          Liked videos
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
