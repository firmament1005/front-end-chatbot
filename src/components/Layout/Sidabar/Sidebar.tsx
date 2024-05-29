import React, { useState } from "react";
import ChatSideBar from "./ChatSideBar";
import UploadSideBar from "./UploadSidebar";
import SettingSideBar from "./SettingSideBar";

interface SidebarType {
    sidebartype : string,
}

const SideBar: React.FC<SidebarType> = ({sidebartype}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const renderSideBar = () => {
        switch (sidebartype) {
            case "ChatSideBar":
                return <ChatSideBar sidebarOpen={sidebarOpen} />;
            case "UploadSideBar":
                return <UploadSideBar sidebarOpen={sidebarOpen} />
            case "SettingSideBar":
                return <SettingSideBar />;
            default:
                return null;
        }
    };

    return (
        <>
            <div className="flex h-screen bg-gray-200">
                {renderSideBar()}
            </div>
        </>
    );
};

export default SideBar;