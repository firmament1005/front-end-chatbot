import React, { useState } from "react";
import ChatSideBar from "./ChatSideBar";
import UploadSideBar from "./UploadSidebar";
import SettingSideBar from "./SettingSideBar";

interface SidebarType {
    sidebartype : string,
    isChatSideOpen : boolean;
}

const SideBar: React.FC<SidebarType> = ({sidebartype, isChatSideOpen}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    
    const renderSideBar = () => {
        switch (sidebartype) {
            case "ChatSideBar":
                return <ChatSideBar isSideBarOpen={isChatSideOpen} setIsSidebarOpen={setSidebarOpen}/>;
            case "UploadSideBar":
                return <UploadSideBar isUploadSideBarOpen={isChatSideOpen} setIsUploadSidebarOpen={setSidebarOpen}/>
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