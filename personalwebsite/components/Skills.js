import React, { useEffect, useState } from "react";
import axios from "axios";
import ProgressBar from "@ramonak/react-progress-bar";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingSpinnerComponent from "react-spinners-components";

const Skills = () => {
  const [programmingData, setProgrammingData] = useState([]);
  const [cyberSecurityData, setCyberSecurityData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://192.168.1.4:3001/api/skill");

        // Assuming the server response contains 'data' and 'cyber' properties

        setCyberSecurityData(response.data.cyber);

        setTimeout(() => {
          setProgrammingData(response.data.data);
          setLoading(false);
        }, 1);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [cyberSecurityToggle, setCyberSecurityToggle] = useState({});

  const toggleDropdown = (itemId) => {
    setCyberSecurityToggle((prevToggle) => ({
      ...prevToggle,
      [itemId]: !prevToggle[itemId],
    }));
  };

  const [programToggle, setProgramToggle] = useState({});

  const toggleDropdown2 = (itemId) => {
    setProgramToggle((prevToggle) => ({
      ...prevToggle,
      [itemId]: !prevToggle[itemId],
    }));
  };

  return (
    <div>
      {loading ? (
        <div className="md:p-96 p-32 pt-72 ">
          <LoadingSpinnerComponent
            type={"Spinner"}
            color={"#BA1168"}
            size={"50px"}
          />
        </div>
      ) : (
        <div className=" font-primaryFont text-textColor pt-40 md:pt-22  ">
          <h1 className=" text-secondery text-center font-bold items-center md:text-xl lg:text-2xl text-mdtracking-widest ">
            Skills
          </h1>
          <div className="md:text-lg text-sm block text-center md:flex justify-around pl-8 pr-8 pt-12 pb-20 ">
            <div className=" w-11/12 pl-5 md:pl-0 md:w-4/12 ">
              <ul className="flex-col flex space-y-5">
                <h2 className="p-5 text-shadow-xl ">Programming</h2>
                {programmingData.map((item) => (
                  <li
                    onClick={() => toggleDropdown2(item.id)}
                    className=" flex-1 text-start p-3 bg-third rounded-lg "
                    key={item.id}
                  >
                    <div className="flex justify-between pb-5">
                      <p>{item.lang}</p>
                      <button>
                        <FontAwesomeIcon
                          icon={
                            programToggle[item.id] ? faChevronDown : faChevronUp
                          }
                        />
                      </button>
                    </div>
                    <ProgressBar
                      className={`${programToggle[item.id] ? " block" : "hidden"} h-10 pt-3 flex `}
                      height="5px"
                      width="90%"
                      bgColor="#BA1168"
                      customLabel={`${item.percentage}%`}
                      completed={item.percentage}
                      labelAlignment="outside"
                      labelClassName="pl-5"
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className=" w-11/12 pl-5 md:pl-0 md:w-4/12  ">
              <ul className="flex-col flex space-y-5 ">
                <h2 className="p-5   pt-20 md:pt-5 text-shadow-xl">
                  Cyber Security
                </h2>
                {cyberSecurityData.map((item) => (
                  <li
                    onClick={() => toggleDropdown(item.id)}
                    className="flex-1 text-start p-3 bg-third rounded-lg"
                    key={item.id}
                  >
                    <div className="flex justify-between pb-5">
                      <p>{item.feild}</p>
                      <button>
                        <FontAwesomeIcon
                          icon={
                            cyberSecurityToggle[item.id]
                              ? faChevronDown
                              : faChevronUp
                          }
                        />
                      </button>
                    </div>
                    <ProgressBar
                      className={`${cyberSecurityToggle[item.id] ? " block" : "hidden"} h-10 pt-3 flex `}
                      height="5px"
                      width="90%"
                      bgColor="#BA1168"
                      customLabel={`${item.percentage}%`}
                      completed={item.percentage}
                      labelAlignment="outside"
                      labelClassName="pl-5"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
