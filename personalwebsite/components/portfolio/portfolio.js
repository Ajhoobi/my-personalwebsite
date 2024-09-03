import React, { useEffect, useState } from "react";
import axios from "axios";
import Allitems from "./allItems";
import Subfields from "./subfields";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import salah from "../../build/images/propic.jpg"
import RadarChart from './RadarChartDemo';

function Portfolio() {
  // Use PascalCase for component names
  const [skillSet, setSkillSet] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allData, setAllData] = useState(true);
  const [selectedField, setSelectedField] = useState(null);


 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://192.168.1.4:3001/api/skill");

        setSkillSet(response.data.fields);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const fieldValue = selectedField;
  const selectedData = skillSet.find(
    (field) => field.id === fieldValue,
  )?.subfields;
  
  const WhichData = allData ? skillSet : selectedData;
  const chartData = WhichData?.map(item => item.percentage);
  const chartLabal = WhichData?.map(item => item.name);


  
  console.log(fieldValue)
  return (
    <div className="w-screen h-screen flex  text-textColor font-primaryFont ">
      <div className="w-2/5 ">
        <div className="ml-20 mt-20">
          <div className="w-36 h-36 ">
            <img src={salah} alt="propic" className="rounded-full box-border shadow-lg shadow-boxShadow" />
          </div>
          <div className=" mb-5">
            <h3 className="pt-2 text-xl font-bold font-primaryFont">
              Mohammad Salahudeen
            </h3>
            <h3 className="pt-2 font-light font-primaryFont">
              Security Analyst
            </h3>
          </div>
          {allData ? (
            <div> </div>
          ) : (
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={() => {
                setAllData(true);
              }}
            />
          )}

          {allData ? (
            <Allitems
              data={skillSet}
              setSelectedField={setSelectedField}
              setAllData={setAllData}
            />
          ) : (
            <Subfields data={selectedData} />
          )}
        </div>
      </div>
      <div className="w-3/5 ">
     <div className="w-9/12 h-3/4 mt-36 ml-48">
     <RadarChart data={chartData} labels={chartLabal} title={allData ? `skill` : (skillSet.find(
    (field) => field.id === fieldValue,
  )?.name)} />
     </div>
      </div>
    </div>
  );
}

export default Portfolio;
