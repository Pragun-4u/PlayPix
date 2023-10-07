import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <>
      <div className="flex ">
        <aside className="h-screen sticky top-0">
          <Sidebar />
        </aside>
        <Outlet />
      </div>
    </>
  );
};

export default Body;
