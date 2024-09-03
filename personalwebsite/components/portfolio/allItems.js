import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

function Allitems({ data, setAllData, setSelectedField }) {
  return (
    <div>
      <ul className="">
        {data.map((item) => (
          <li
            key={item.id}
            className="w-3/4"
            onClick={() => {
              setSelectedField(item.id);
              setAllData(false);
            }}
          >
            <div className="flex justify-between">
              <p>{item.name}</p>
              <label>{item.percentage}%</label>
            </div>
            <ProgressBar
              className="h-10 flex"
              height="5px"
              width="100%"
              bgColor="#BA1168"
              completed={item.percentage}
              labelColor="#BA1168"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Allitems;