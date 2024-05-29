import React, { useState } from "react";
import Header from "../../components/Layout/Header";
import DashboardBody from "./DashboardBody";
import Sidebar from "../../components/Layout/Dashboard/DashboardSidebar";

const Dashboard: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-200">
            <Sidebar sidebarOpen={sidebarOpen} />
            <div className="flex flex-col flex-1 overflow-hidden">
                <Header />
                <DashboardBody />
            </div>
        </div>
    );
};

export default Dashboard;