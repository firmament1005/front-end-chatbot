import React, { useState } from 'react';
import UserModal from '../Modal/UserModal';
import DashboardSidebar from './Dashboard/DashboardSidebar';

interface HeaderProps {
    sidebarOpen: boolean;
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [openUserModal, setOpenUserModal] = useState(false);

    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b-2 shadow-xl">
            <div className="flex items-center">
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="text-gray-500 focus:outline-none lg:hidden"
                >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4 6H20M4 12H20M4 18H11"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                <div className="relative mx-4 lg:mx-0 z-0">
                    <div className="relative border flex items-center w-full h-10 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                        <div className="grid place-items-center h-full w-12 text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input className="peer h-auto w-full outline-none text-sm text-gray-700 pr-2"
                            type="text"
                            id="search"
                            placeholder="検索.." />
                    </div>
                </div>
            </div>

            <div className="flex items-center">
                <div className="relative">
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="relative block w-10 h-10 overflow-hidden rounded-full shadow focus:outline-none"
                    >
                        <img
                            className="object-cover w-full h-full"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                            alt="Your avatar"
                        />
                    </button>
                    <div className='flex absolute bottom-0 left-8'>
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                    </div>

                    {dropdownOpen && (
                        <>
                            <div
                                onClick={() => setDropdownOpen(false)}
                                className="fixed inset-0 w-full h-full"
                            ></div>

                            <div className="absolute right-0 w-32 mt-2 overflow-hidden bg-white rounded-md shadow-xl">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0099FF] hover:text-white" onClick={() => setOpenUserModal(true)}>
                                    Profile
                                </a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0099FF] hover:text-white">
                                    Logout
                                </a>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <UserModal isOpen={openUserModal} onClose={() => setOpenUserModal(false)}>
                <div></div>
            </UserModal>
        </header>
    );
};

export default Header;