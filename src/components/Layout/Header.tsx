import React, { useState } from 'react';
import UserModal from '../Modal/UserModal';

const Header: React.FC = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleToggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleCloseDropdown = () => {
        setDropdownOpen(false);
    };

    return (
        <div className="2xl:container 2xl:mx-auto">
            <div className="bg-white rounded shadow-lg py-3 px-7 relative">
                <nav className="flex justify-between">
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

                    <div className="relative">
                        <div onClick={handleToggleDropdown} className="flex items-center space-x-3 pr-2 ml-1 static">
                            <img src="/img/avatar.png" className='w-14 h-14 shadow rounded-full' alt="" />
                            <div className='absolute' style={{ "marginTop": "40px", "marginLeft": "45px" }}>
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                                </span>
                            </div>
                        </div>
                        {dropdownOpen && (
                            <>
                                <div onClick={handleCloseDropdown} className="fixed inset-0 z-10 w-full h-full"></div>
                                <div className="absolute right-0 z-10 w-36 mt-2 overflow-hidden bg-white rounded-md shadow-xl">
                                    <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0099FF] hover:text-white" onClick={() => setIsModalOpen(true)}>
                                        Profile
                                    </a>
                                    <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0099FF] hover:text-white" >
                                        Logout
                                    </a>
                                </div>
                            </>
                        )}
                    </div>
                </nav>
            </div>
            <UserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(!isModalOpen)}>
                <div></div>
            </UserModal>
        </div>
    );
};

export default Header;