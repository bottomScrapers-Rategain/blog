import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../Contexts/userContext";

const DashboardUser = () => {
  const a = useContext(UserContext);
  const setUid = a.setUid;
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/get-all-users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const clickHandler = (uid) => {
    setUid(uid);
    navigate(`/dashboard/${uid}`);
  };

  return (
    <>
      <div className="flex flex-col gap-2 w-5/12 h-full p-4 text-white  rounded-lg bg-dark-primary">
        <div className="flex flex-row justify-between">
          <div className="text-4xl font-semibold">Users</div>
        </div>

        <div className="flex flex-col justify-start items-start gap-1 p-2 divide-y divide-slate-300 overflow-y-scroll">
          <div className="text-lg font-semibold w-full">Unique Identifier</div>
          {users.map((item, index) => (
            <div
              key={index}
              className="text-lg w-full p-1 duration-150 ease-in-out hover:bg-blue-100"
            >
              <button
                onClick={(e) => {
                  clickHandler(item._id);
                }}
                className="text-blue-500"
              >
                {item._id}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DashboardUser;
