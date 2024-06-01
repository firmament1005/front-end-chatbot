import React, { useEffect, useState } from "react";
import Header from "../../components/Layout/Header";
import DashboardBody from "./DashboardBody";
import DashboardSideBar from "../../components/Layout/Dashboard/DashboardSidebar";
import { useUserContext } from "../../Context/AuthContext/AuthContext";

const Dashboard: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const { User } = useUserContext();

    return (
        <div className="flex h-screen bg-gray-200">
            <DashboardSideBar isSideBarOpen={sidebarOpen} setIsSidebarOpen={setSidebarOpen} />
            <div className="flex flex-col flex-1 overflow-hidden">
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <DashboardBody />
            </div>
        </div>
    );
};

export default Dashboard;