import React, { useState } from "react";
import UserModal from "../../Modal/UserModal";
import SideBar from "../Sidabar/Sidebar";

const Navigate: React.FC = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const [isSideBarType, setIsSideBarType] = useState("ChatSideBar");
    const [isChatSideBarOpen, setIsChatSideBarOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const handleChatSideBarOpen = () => {
        setIsSideBarType("ChatSideBar");
        setIsChatSideBarOpen(!isChatSideBarOpen);
    }

    const handleUploadSideBarOpen = () => {
        setIsSideBarType("UploadSideBar");
        setIsChatSideBarOpen(!isChatSideBarOpen);
    }


    const Go_To_Dashboard = () => {
        window.location.href = "/dashboard";
    }

    return (
        <div className="flex h-screen">
            <aside className="flex flex-col items-center w-auto py-8 space-y-8 transition transform ease-in-out duration-1000 h-screen bg-white shadow">
                <div className="flex dark:border-[#0099FF] hover:text-white hover:border-white absolute top-2">
                    <img src="/img/logo.png" className="w-full y-full transition transform rounded-lg ease-in-out duration-500" alt="" />
                </div>
                <div className="mini mt-20 flex flex-col space-y-3 w-full h-full relative">
                    <div className="justify-end pr-3 text-gray-600 dark:hover:text-blue-500 w-full bg-white p-3 rounded-full flex cursor-pointer" onClick={() => handleChatSideBarOpen()}>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M3 5.983C3 4.888 3.895 4 5 4h14c1.105 0 2 .888 2 1.983v8.923a1.992 1.992 0 0 1-2 1.983h-6.6l-2.867 2.7c-.955.899-2.533.228-2.533-1.08v-1.62H5c-1.105 0-2-.888-2-1.983V5.983Zm5.706 3.809a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Zm2.585.002a1 1 0 1 1 .003 1.414 1 1 0 0 1-.003-1.414Zm5.415-.002a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="justify-end pr-3 text-gray-600 dark:hover:text-blue-500 w-full bg-white p-3 rounded-full flex cursor-pointer" onClick={() => handleUploadSideBarOpen()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" className="w-5 h-5">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v9m-5 0H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2M8 9l4-5 4 5m1 8h.01" />
                        </svg>
                    </div>
                    {/* <div className="justify-end pr-3 text-gray-600 dark:hover:text-blue-500 w-full bg-white p-3 rounded-full flex cursor-pointer" onClick={() => handleSettingSideBarOpen()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M17 10v1.126c.367.095.714.24 1.032.428l.796-.797 1.415 1.415-.797.796c.188.318.333.665.428 1.032H21v2h-1.126c-.095.367-.24.714-.428 1.032l.797.796-1.415 1.415-.796-.797a3.979 3.979 0 0 1-1.032.428V20h-2v-1.126a3.977 3.977 0 0 1-1.032-.428l-.796.797-1.415-1.415.797-.796A3.975 3.975 0 0 1 12.126 16H11v-2h1.126c.095-.367.24-.714.428-1.032l-.797-.796 1.415-1.415.796.797A3.977 3.977 0 0 1 15 11.126V10h2Zm.406 3.578.016.016c.354.358.574.85.578 1.392v.028a2 2 0 0 1-3.409 1.406l-.01-.012a2 2 0 0 1 2.826-2.83ZM5 8a4 4 0 1 1 7.938.703 7.029 7.029 0 0 0-3.235 3.235A4 4 0 0 1 5 8Zm4.29 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h6.101A6.979 6.979 0 0 1 9 15c0-.695.101-1.366.29-2Z" clipRule="evenodd" />
                        </svg>
                    </div> */}
                    <div className="justify-end pr-3 text-gray-600 dark:hover:text-blue-500 w-full bg-white p-3 rounded-full flex cursor-pointer" onClick={() => Go_To_Dashboard()}>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 10l4 4 4-4 5 5m0 0h-3.207M20 15v-3.207" />
                        </svg>
                    </div>
                    <div className="justify-end text-gray w-full p-1 rounded-full flex absolute" style={{ "bottom": "0" }} onClick={openModal}>
                        <button className="rounded-full bg-gray-100">
                            <img className="h-full w-full rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                        </button>
                    </div>
                </div>
            </aside>
            <SideBar sidebartype={isSideBarType} isChatSideOpen={isChatSideBarOpen}/>
            <UserModal isOpen={isModalOpen} onClose={closeModal}>
                <h2 className="text-2xl mb-4"></h2>
            </UserModal>
        </div>
    )
}

export default Navigate;