import React from "react";
import { LabelList, Pie, PieChart, Tooltip } from "recharts";

const DashboardAnalytics = (props) => {
  const data01 = [
    {
      name: "Tech",
      value: 400,
    },
    {
      name: "Gaming",
      value: 300,
    },
    {
      name: "Apparel",
      value: 240,
    },
    {
      name: "Wellness",
      value: 240,
    },
    {
      name: "Food",
      value: 120,
    },
    {
      name: "Others",
      value: 96,
    },
  ];
  const user = props.user;
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
              <div className="text-xl ">40,000</div>
            </div>
            <div className=" flex flex-row gap-8 justify-start items-center">
              <div className="text-xl ">Views</div>
              <div className="text-xl ">1,60,000</div>
            </div>
            <div className=" flex flex-row gap-8 justify-start items-center">
              <div className="text-xl ">Time spent</div>
              <div className="text-xl ">2.3 hr</div>
            </div>

            {props.forSingleUser && (<>

              <div className=" flex flex-row gap-8 justify-start items-center">
              <div className="text-xl ">Interests:</div>
              <div className="text-xl ">jewellery,pet,home</div>
            </div>
            <div className=" flex flex-row gap-8 justify-start items-center">
              <div className="text-xl ">Search Terms: </div>
              <div className="text-xl ">fashion</div>
            </div>

            </>)}

          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-xl font-semibold">
              Top Categories {"(All Users)"}
            </div>

            <PieChart className="text-sm font-thin  " width={400} height={250}>
              <Pie
                data={data01}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                <LabelList dataKey="name" position="inside" />
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        </div>
        <div className="flex flex-row w-full  justify-start items-start p-2 ">
        <div className="flex flex-col justify-center items-center">
            <div className="text-xl font-semibold">
              Top Categories {"(All Users)"}
            </div>

            <PieChart className="text-sm font-thin  " width={500} height={250}>
              <Pie
                data={data01}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                <LabelList dataKey="name" position="inside" />
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-xl font-semibold">
              Top Categories {"(All Users)"}
            </div>

            <PieChart className="text-sm font-thin  " width={500} height={250}>
              <Pie
                data={data01}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                <LabelList dataKey="name" position="inside" />
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardAnalytics;
