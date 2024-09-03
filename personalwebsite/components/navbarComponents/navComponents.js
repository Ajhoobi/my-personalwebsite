import React from "react";
import { linkData } from "../../data/linkData";
import { Link } from "react-router-dom";

const navComponents = () => {
  return (
    <div className="">
      <ul className="flex space-x-5 md:space-x-10 justify-around  items-center  font-primaryFont pb-16 mr-2.5">
        {linkData.map((link) => (
          <li key={link.id}>
            <Link
              className="hover:text-secondery  transition-colors duration-100"
              to={link.dist}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default navComponents;
