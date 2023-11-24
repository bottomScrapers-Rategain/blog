import React from "react";
import DashboardAnalytics from "../Components/DashboardAnalytics";
import DashboardSingleUser from "../Components/DashboardSingleUser";

const UserDashboard = () => {
  return (
    <div className="px-10 py-5 w-full bg-primary h-screen flex flex-col gap-10">
      <div className="flex flex-row h-full gap-10">
            <DashboardSingleUser/>
            <DashboardAnalytics/>
      </div>
    </div>
  );
};

export default UserDashboard;
