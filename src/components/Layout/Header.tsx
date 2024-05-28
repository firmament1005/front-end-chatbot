import React, { useState } from 'react';
import UserModal from '../Modal/UserModal';

const Header: React.FC<{ onSidebarOpen: () => void }> = ({ onSidebarOpen }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow fxied">
            <div className="flex items-center">
                <button onClick={onSidebarOpen} className="text-gray-500 focus:outline-none lg:hidden">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>
                <div className=" flex space-x-5 justify-center items-center pl-2">
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
                    <button onClick={() => setDropdownOpen(!dropdownOpen)} className="relative block w-12 h-12 overflow-hidden rounded-full shadow focus:outline-none">
                        <img className="object-cover w-full h-full" src="/img/dev.jpg" alt="Your avatar" />
                    </button>

                    {dropdownOpen && (
                        <>
                            <div onClick={() => setDropdownOpen(false)} className="fixed inset-0 z-10 w-full h-full"></div>
                            <div className="absolute right-0 z-10 w-36 mt-2 overflow-hidden bg-white rounded-md shadow-xl">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0099FF] hover:text-white" onClick={() => setIsModalOpen(true)}>プロフィール</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0099FF] hover:text-white">ログアウト</a>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <UserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(!isModalOpen)}>
                <div></div>
            </UserModal>
        </header>
    );
};

export default Header;

