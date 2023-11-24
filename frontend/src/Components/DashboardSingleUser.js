import React from "react";
import { Link } from "react-router-dom";
const DashboardSingleUser = () => {
  return (
    <>
      <div className="flex flex-col gap-2 w-5/12 text-white ">
        <div className="w-full flex flex-col gap-4 p-4 bg-dark-primary rounded-lg ">
          <div className="text-2xl font-semibold">
            Unique Identifier :{" "}
            <span className="text-lg font-normal">1234567890</span>
          </div>
          <div className="text-xl font-semibold">Select Type of Marketing</div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-row justify-center items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                id="behavioral"
                name="behavioral"
                value="Behavioral"
              />
              <label className="text-lg font-semibold" for="behavioral">
                Behavioral
              </label>
            </div>
            <div className="flex flex-row justify-center items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                id="contextual"
                name="contextual"
                value="contextual"
              />
              <label className="text-lg font-semibold" for="contextual">
                Contextual
              </label>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 p-4 bg-dark-primary rounded-lg ">
          <div className="text-4xl font-semibold">Blogs</div>
          <div className="flex flex-col justify-start items-start gap-1 p-2 divide-y divide-slate-300 overflow-y-scroll">
            <div className="text-lg w-full p-1 duration-150 ease-in-out hover:bg-blue-100">
              <Link>
                <button className="text-blue-500">Top 5 Phones 2023</button>
              </Link>
            </div>
            <div className="text-lg w-full p-1 duration-150 ease-in-out hover:bg-blue-100">
              <Link>
                <button className="text-blue-500">Top 10 Sex Positions</button>
              </Link>
            </div>
            <div className="text-lg w-full p-1 duration-150 ease-in-out hover:bg-blue-100">
              <Link>
                <button className="text-blue-500">Review of Restaurant</button>
              </Link>
            </div>
            <div className="text-lg w-full p-1 duration-150 ease-in-out hover:bg-blue-100">
              <Link>
                <button className="text-blue-500 text-justify">Metallica Songs : Ranked Worst to Best</button>
              </Link>
            </div>
            <div className="text-lg w-full p-1 duration-150 ease-in-out hover:bg-blue-100">
              <Link>
                <button className="text-blue-500"></button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSingleUser;
