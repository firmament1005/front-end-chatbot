import React from "react";
import ChatSideBar from "./ChatSideBar";
import UploadSideBar from "./UploadSidebar";

const SideBar = () => {

    return (
        <div className="w-64 absolute sm:relative bg-white-800 shadow border-x-2 md:h-full flex-col justify-between hidden sm:flex">
            <UploadSideBar />
        </div>
    )
}

export default SideBar;