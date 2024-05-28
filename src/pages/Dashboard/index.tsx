import React, { useState } from "react";
import Header from "../../components/Layout/Header";
import DashboardBody from "./DashboardBody";
import DashboardSideBar from "../../components/Layout/Dashboard/DashboardSidebar";

const Dashboard: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="flex">
            <div className="flex bg-gray-200">
                <div className={`left-0 z-30 w-64 overflow-y-auto h-screen transition duration-300 transform bg-gray-900 static lg:translate-x-0 lg:inset-0 ${sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'}`}>
                    <DashboardSideBar />
                </div>
            </div>
            <div className={`flex-1 ${sidebarOpen ? 'fxied' : ''}`}>
                <Header onSidebarOpen={() => setSidebarOpen(true)} />
                <DashboardBody />
            </div>
        </div>
    )
}

export default Dashboard;