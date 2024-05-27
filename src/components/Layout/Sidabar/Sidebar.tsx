import React from "react";
import ChatSideBar from "./ChatSideBar";
import UploadSideBar from "./UploadSidebar";
import SettingSideBar from "./SettingSideBar";

type SidebarProps = {
    isChatOpen: string;
    onClose: () => void;
    children?: React.ReactNode; // Optional in case it's not always used
};

const SideBar: React.FC<SidebarProps> = ({ isChatOpen, onClose, children }) => {
    const renderSideBar = () => {
        switch (isChatOpen) {
            case "ChatSideBar":
                return <ChatSideBar/>;
            case "UploadSideBar":
                return <UploadSideBar />;
            case "SettingSideBar":
                return <SettingSideBar />;
            default:
                return null; // Render nothing if no matching sidebar is open
        }
    };

    return (
        <div className="w-64 absolute sm:relative bg-white-800 shadow border-x-2 md:h-full flex-col justify-between hidden sm:flex">
            {renderSideBar()}
            {children}
        </div>
    );
};

export default SideBar;