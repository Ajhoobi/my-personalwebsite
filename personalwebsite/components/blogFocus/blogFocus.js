import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import LoadingSpinnerComponent from "react-spinners-components";
import axios from "axios";
function blogFocus() {
  const [blog, setBlog] = useState();
  const [loading, setLoading] = useState(true);
  const [params, setParams] = useSearchParams();
  const id = params.get("id");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://192.168.1.4:3001/api/blogfocus?id=${id}`,
        );

        // Assuming the server response contains 'data' and 'cyber' properties

        setTimeout(() => {
          setBlog(response.data.data[0]);
          setLoading(false);
        }, 1);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(blog);
  // console.log(id)
  return (
    <div className=" w-full, h-full ">
      {loading ? (
        <div className="md:p-96 p-32 pt-72 ">
          <LoadingSpinnerComponent
            type={"Spinner"}
            color={"#BA1168"}
            size={"50px"}
          />
        </div>
      ) : (
        <div className="pt-32 font-primaryFont text-textColor">
          <div className="h-80 flex justify-center ">
            <img
              className=" md:w-4/12  rounded-3xl"
              src={blog.src}
              alt="Card Image"
            />
          </div>
          <div>
            <h3 className=" text-secondery pl-8 md:pl-80  pt-10 font-bold items-center md:text-2xl lg:text-3xl text-xl  ">
              {blog.title}
            </h3>
            <p className="block text-center p-5  md:text-lg text-sm md:pl-80 md:pt-20 md:pr-80">
              {blog.contents}
            </p>
            <p className=" p-5  md:text-lg text-sm md:pl-80 md:pt-20 md:pr-80 pb-10">
              Published On: {blog.date}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default blogFocus;
