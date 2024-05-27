import React, { useState } from "react";
import UserModal from "../../Modal/UserModal";
import SideBar from "../Sidabar/Sidebar";

const Navigate: React.FC = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const [isSideBarOpen, setIsSideBarOpen] = useState("ChatSideBar");
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className="flex">
            <aside className="flex flex-col items-center w-auto py-8 space-y-8 transition transform ease-in-out duration-1000 z-50 h-screen bg-white shadow">
                <div className="flex dark:border-[#0099FF] hover:text-white hover:border-white absolute top-2">
                    <img src="/img/logo.png" className="w-full y-full transition transform rounded-lg ease-in-out duration-500" alt="" />
                </div>
                <div className="mini mt-20 flex flex-col space-y-3 w-full h-full relative">
                    <div className="justify-end pr-3 text-gray-600 dark:hover:text-blue-500 w-full bg-white p-3 rounded-full flex cursor-pointer" onClick={() => setIsSideBarOpen("ChatSideBar")}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                            stroke="currentColor" className="w-6 h-6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z" />
                        </svg>
                    </div>
                    <div className="justify-end pr-3 text-gray-600 dark:hover:text-blue-500 w-full bg-white p-3 rounded-full flex cursor-pointer" onClick={() => setIsSideBarOpen("UploadSideBar")}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" className="w-5 h-5">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v9m-5 0H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2M8 9l4-5 4 5m1 8h.01" />
                        </svg>

                    </div>
                    <div className="justify-end pr-3 text-gray-600 dark:hover:text-blue-500 w-full bg-white p-3 rounded-full flex cursor-pointer" onClick={() => setIsSideBarOpen("SettingSideBar")}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M17 10v1.126c.367.095.714.24 1.032.428l.796-.797 1.415 1.415-.797.796c.188.318.333.665.428 1.032H21v2h-1.126c-.095.367-.24.714-.428 1.032l.797.796-1.415 1.415-.796-.797a3.979 3.979 0 0 1-1.032.428V20h-2v-1.126a3.977 3.977 0 0 1-1.032-.428l-.796.797-1.415-1.415.797-.796A3.975 3.975 0 0 1 12.126 16H11v-2h1.126c.095-.367.24-.714.428-1.032l-.797-.796 1.415-1.415.796.797A3.977 3.977 0 0 1 15 11.126V10h2Zm.406 3.578.016.016c.354.358.574.85.578 1.392v.028a2 2 0 0 1-3.409 1.406l-.01-.012a2 2 0 0 1 2.826-2.83ZM5 8a4 4 0 1 1 7.938.703 7.029 7.029 0 0 0-3.235 3.235A4 4 0 0 1 5 8Zm4.29 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h6.101A6.979 6.979 0 0 1 9 15c0-.695.101-1.366.29-2Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="justify-end text-gray w-full p-1 rounded-full flex absolute" style={{ "bottom": "0"}} onClick={openModal}>
                        <button className="rounded-full bg-gray-100">
                            <img className="h-full w-full rounded-full" src="https://avatars.githubusercontent.com/u/35387401?v=4" alt="" />
                        </button>
                    </div>
                </div>
            </aside>
            <SideBar isChatOpen={isSideBarOpen} onClose={() => setIsSideBarOpen("")}>
                <div></div>
            </SideBar>
            <UserModal isOpen={isModalOpen} onClose={closeModal}>
                <h2 className="text-2xl mb-4"></h2>
            </UserModal>
        </div>
    )
}

export default Navigate;