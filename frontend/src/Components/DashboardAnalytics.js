import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  LabelList,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import UserContext from "../Contexts/userContext";

const DashboardAnalytics = (props) => {
  const data01 = [
    {
      name: "Tech",
      value: 400,
    },
    {
      name: "Food",
      value: 300,
    },
    {
      name: "Jewellery",
      value: 240,
    },
    {
      name: "Pet",
      value: 240,
    },
    {
      name: "Gaming",
      value: 120,
    },
    {
      name: "Others",
      value: 96,
    },
  ];

  const bardata = [
    { day: "18-11", hours: "06" },
    { day: "19-11", hours: "01" },
    { day: "20-11", hours: "02" },
    { day: "21-11", hours: "03" },
    { day: "22-11", hours: "04" },
    { day: "23-11", hours: "05" },
    { day: "24-11", hours: "06" },
  ];

  const { uid, setUid } = useContext(UserContext);
  const [user, setUser] = useState({});
  const [interests, setInterest] = useState([" "]);
  const [searchterms, setSearchterms] = useState([" "]);

  const getUser = async () => {
    try {
      console.log(uid);
      const response = await axios.post("http://localhost:5000/get-user", {
        uid,
      });
      console.log(response.data);
      setUser(response.data);
      setInterest(response.data.interests);
      setSearchterms(response.data.searchterms);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <div className="flex flex-col w-full h-full text-white p-4  rounded-lg bg-dark-primary">
        <div className="flex flex-row justify-between ">
          <div className="text-4xl font-semibold ">Analytics</div>
        </div>
        <div className="flex flex-row w-full  justify-start items-start p-2 ">
          <div className="flex flex-col gap-2 w-4/12 py-10 px-4">
            <div className=" flex flex-row gap-8 justify-start items-center">
              <div className="text-xl ">Clicks</div>
              <div className="text-xl ">197</div>
            </div>
            <div className=" flex flex-row gap-8 justify-start items-center">
              <div className="text-xl ">Views</div>
              <div className="text-xl ">368</div>
            </div>
            <div className=" flex flex-row gap-8 justify-start items-center">
              <div className="text-xl ">Time spent</div>
              <div className="text-xl ">13.2 hrs</div>
            </div>

            {props.forSingleUser && (
              <>
                <div className=" flex flex-row gap-8 justify-start items-center">
                  <div className="text-xl ">Interests:</div>
                  <div className="text-xl ">{interests.join(",")}</div>
                </div>
                <div className=" flex flex-row gap-8 justify-start items-center">
                  <div className="text-xl ">Search Terms: </div>
                  <div className="text-xl ">{searchterms.join(", ")}</div>
                </div>
              </>
            )}
          </div>
   
        </div>
        <div className="flex flex-row w-full  justify-center items-start p-2 ">
            {!props.forSingleUser && (  <div className="flex flex-col justify-center items-center gap-4">
            <div className="text-xl font-semibold">
              Top Categories {"(All Users)"}
            </div>

            <PieChart className="text-sm font-thin  " width={500} height={300}>
              <Pie
                data={data01}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#8884d8"
                label
              >
                <LabelList dataKey="name" position="inside" />
              </Pie>
              <Tooltip />
            </PieChart>
          </div>)}
        
          {props.forSingleUser && (
            <div className="flex flex-col justify-center items-center">
              <div className="text-xl font-semibold">
                Time Spent in hours  {"(Last 7 days)"}
              </div>

              <BarChart
                width={700}
                height={350}
                data={bardata}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              >
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="hours" fill="#8884d8" >
                <LabelList dataKey="hours" position="top" />
                  </Bar>
              </BarChart>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardAnalytics;
