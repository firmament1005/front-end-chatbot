import React, { useState } from "react";
import DashboardSideBar from "../../components/Layout/Dashboard/DashboardSidebar";
import Header from "../../components/Layout/Header";

const DashboardBody: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="flex h-screen bg-gray-200">
            <div className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0 ${sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'}`}>
                <DashboardSideBar />
            </div>
            <div className={`flex-1 ${sidebarOpen ? 'fxied' : ''}`}>
                <Header onSidebarOpen={() => setSidebarOpen(true)} />
            </div>
        </div>
    )
}

export default DashboardBody;