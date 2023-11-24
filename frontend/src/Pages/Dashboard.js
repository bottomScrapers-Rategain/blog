import React from "react";
import DashboardAnalytics from "../Components/DashboardAnalytics";
import DashboardUser from "../Components/DashboardUser";

const Dashboard = () => {
  return (
    <div className="px-10 py-5 w-full bg-primary h-screen flex flex-col gap-10">
        <div className="flex flex-row h-full gap-10">
        <DashboardUser />
        <DashboardAnalytics/>
        </div>
      
    </div>
  );
};

export default Dashboard;
