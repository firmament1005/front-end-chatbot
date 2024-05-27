import React from "react";
import ChatSideBar from "./ChatSideBar";
import UploadSideBar from "./UploadSidebar";
import SettingSideBar from "./SettingSideBar";

interface SidebarProps {
    isChatOpen: string;
    onClose: () => void;
    children?: React.ReactNode;
};

const SideBar: React.FC<SidebarProps> = ({ isChatOpen, onClose, children }) => {
    const renderSideBar = () => {
        switch (isChatOpen) {
            case "ChatSideBar":
                return <ChatSideBar isOpen={true} />;
            case "UploadSideBar":
                return <UploadSideBar />;
            case "SettingSideBar":
                return <SettingSideBar />;
            default:
                return null;
        }
    };

    return (
        <>
            {renderSideBar()}
            {children}
        </>
    );
};

export default SideBar;