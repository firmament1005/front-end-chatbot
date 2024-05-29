import React from "react";
import Header from "../../components/Layout/Header";
import DashboardBody from "./DashboardBody";

const Dashboard: React.FC = () => {
    return (
        <div className="h-screen overflow-hidden">
            <DashboardBody/>
        </div>
    )
}

export default Dashboard;