import React from "react";
import { Link, useNavigate } from "react-router-dom";

function blogs(props) {
  const navigate = useNavigate();

  React.useEffect(() => {
    // Use navigate to redirect to the desired route
  }, []);

  return (
    <div className=" w-full md:w-11/12 lg:w-10/12 font-primaryFont bg-third rounded-xl text-textColor">
      <img
        className="w-full h-48 rounded-xl"
        src={props.img}
        alt="Card Image"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-secondery">
          {props.title}
        </div>
        <p className="text-gray-700 text-base">
          {props.contents.substring(0, 100)}....
        </p>
        <button
          className="text-sm text-link"
          onClick={() => {
            navigate(`/blogfocus?id=${props.id}`);
          }}
        >
          <br />
          (read more)
        </button>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {props.time}
        </span>
      </div>
    </div>
  );
}

export default blogs;
