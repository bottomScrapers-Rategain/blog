import React from "react";
import { Link } from "react-router-dom";

const DashboardUser = () => {
  return (
    <>
      <div className="flex flex-col gap-2 w-5/12 h-full p-4 text-white  rounded-lg bg-dark-primary">
        <div className="flex flex-row justify-between">
          <div className="text-4xl font-semibold">Users</div>
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

        <div className="flex flex-col justify-start items-start gap-1 p-2 divide-y divide-slate-300 overflow-y-scroll">
          <div className="text-lg font-semibold w-full">Unique Identifier</div>
          <div className="text-lg w-full p-1 duration-150 ease-in-out hover:bg-blue-100">
            <Link>
              <button className="text-blue-500">12345690</button>
            </Link>
          </div>
          <div className="text-lg w-full p-1 duration-150 ease-in-out hover:bg-blue-100">
            <Link>
              <button className="text-blue-500">12345690</button>
            </Link>
          </div>
          <div className="text-lg w-full p-1 duration-150 ease-in-out hover:bg-blue-100">
            <Link>
              <button className="text-blue-500">12345690</button>
            </Link>
          </div>
          <div className="text-lg w-full p-1 duration-150 ease-in-out hover:bg-blue-100">
            <Link>
              <button className="text-blue-500">12345690</button>
            </Link>
          </div>
          <div className="text-lg w-full p-1 duration-150 ease-in-out hover:bg-blue-100">
            <Link>
              <button className="text-blue-500">12345690</button>
            </Link>
          </div>
          <div className="text-lg w-full p-1 duration-150 ease-in-out hover:bg-blue-100">
            <Link>
              <button className="text-blue-500">12345690</button>
            </Link>
          </div>
          <div className="text-lg w-full p-1 duration-150 ease-in-out hover:bg-blue-100">
            <Link>
              <button className="text-blue-500">12345690</button>
            </Link>
          </div>
          <div className="text-lg w-full p-1 duration-150 ease-in-out hover:bg-blue-100">
            <Link>
              <button className="text-blue-500">12345690</button>
            </Link>
          </div>
          <div className="text-lg w-full p-1 duration-150 ease-in-out hover:bg-blue-100">
            <Link>
              <button className="text-blue-500">12345690</button>
            </Link>
          </div>
          <div className="text-lg w-full p-1 duration-150 ease-in-out hover:bg-blue-100">
            <Link>
              <button className="text-blue-500">12345690</button>
            </Link>
          </div>
          <div className="text-lg w-full p-1 duration-150 ease-in-out hover:bg-blue-100">
            <Link>
              <button className="text-blue-500">12345690</button>
            </Link>
          </div>
          <div className="text-lg w-full p-1 duration-150 ease-in-out hover:bg-blue-100">
            <Link>
              <button className="text-blue-500">12345690</button>
            </Link>
          </div>
          <div className="text-lg w-full p-1 duration-150 ease-in-out hover:bg-blue-100">
            <Link>
              <button className="text-blue-500">12345690</button>
            </Link>
          </div>
          <div className="text-lg w-full p-1 duration-150 ease-in-out hover:bg-blue-100">
            <Link>
              <button className="text-blue-500">12345690</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardUser;
