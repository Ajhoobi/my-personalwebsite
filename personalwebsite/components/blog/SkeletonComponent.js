import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonComponent = ({ count }) => {
  return (
    <div className=" w-9/12 gap-y-10 md:gap-y-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className=" 
        rounded-lg shadow-md  p-4"
        >
          <Skeleton
            highlightColor="#1F2326"
            baseColor="#292d30"
            height={200}
            className="rounded-lg bg-primary mb-4"
          />
          <Skeleton
            highlightColor="#1F2326"
            baseColor="#292d30"
            height={20}
            width="80%"
            className="mb-2  bg-primary"
          />
          <Skeleton
            highlightColor="#1F2326"
            baseColor="#292d30"
            count={3}
            height={20}
            className="mb-4  bg-primary"
          />
          <div className="flex justify-between">
            <Skeleton
              highlightColor="#1F2326"
              baseColor="#292d30"
              height={20}
              width={200}
              style={{ marginBottom: "10px", marginTop: "10px" }}
              className=" bg-primary"
            />
            <Skeleton
              highlightColor="#1F2326"
              baseColor="#292d30"
              height={60}
              count={3}
              className=" bg-primary"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonComponent;
