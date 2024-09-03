import React from "react";
import ResponsiveComponent from "./navbarComponents/toggleFunction";
import { Link } from "react-router-dom";

const PersonalHead = () => {
  return (
    <div className="box-border shadow-2xl  fixed w-screen h-16 bg-primary text-textColor items-center z-50 ">
      <div className=" flex flex-wrap  md:pl-28 items-center justify-between m-4 max-w-screen-2xl sm:flex-nowrap ">
        <Link
          to={"/"}
          className="flex select-none  font-primaryFont md:text-xl lg:text-2xl text-md font-bold tracking-widest mb-16   md:hover:text-secondery  transition-colors duration-100 "
        >
          <strong className=" text-secondery   text-xl lg:text-4xl md:text-3xl">
            M
          </strong>
          ARAKKAR
        </Link>
        <ResponsiveComponent />
      </div>
    </div>
  );
};

export default PersonalHead;
