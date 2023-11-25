import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import DashboardAnalytics from "../Components/DashboardAnalytics";
import DashboardSingleUser from "../Components/DashboardSingleUser";
import UserContext from "../Contexts/userContext";

const UserDashboard = () => {
    const {uid,setUid} = useContext(UserContext);
    const [user,setUser] = useState(null);
  
    const getUser = async () => {
      try {
        const response = await axios.post("http://localhost:5000/get-user", { uid });
        console.log(response.data);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    useEffect(() => {
        getUser();
      }, []);
  return (
    <div className="px-10 py-5 w-full bg-primary h-screen flex flex-col gap-10">
      <div className="flex flex-row h-full gap-10">
            <DashboardSingleUser user={user}/>
            <DashboardAnalytics forSingleUser={true} user={user}/>
      </div>
    </div>
  );
};

export default UserDashboard;
