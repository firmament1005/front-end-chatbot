import React, { useState } from "react";
import Header from "../../components/Layout/Header";
import DashboardBody from "./DashboardBody";
import DashboardSideBar from "../../components/Layout/Dashboard/DashboardSidebar";

const Dashboard: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-200">
            <DashboardSideBar isSideBarOpen={sidebarOpen} />
            <div className="flex flex-col flex-1 overflow-hidden">
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <DashboardBody />
            </div>
        </div>
    );
};

export default Dashboard;