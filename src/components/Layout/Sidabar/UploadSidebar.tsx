import React, { useState } from 'react';

const UploadSideBar: React.FC<{ sidebarOpen: boolean }> = ({ sidebarOpen }) => {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleSideBarOpen = () => {
        sidebarOpen = false;
    }

    return (
        <div className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-100 lg:translate-x-0 lg:static lg:inset-0 ${sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'}`}>
            <div className="flex items-center justify-center mt-8 relative">
                <button className="text-gray-900 focus:outline-none lg:hidden absolute bottom-10 right-0" onClick={() => handleSideBarOpen()}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                    </svg>
                </button>
                <div className="flex overflow-y-auto items-center">
                    <span className="text-2xl font-semibold text-[#0099FF]">アップロード</span>
                </div>
            </div>
            <div className="px-4 item-center flex flex-col">
                <div className="mx-auto mt-10 w-full">
                    <div className="flex items-center justify-center w-full h-full">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-auto px-8 py-2 border-2 border-[#0099FF] border-dashed rounded cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-white-700 hover:gg-gray-300">
                            <div className="flex flex-col items-center justify-center" title="Upload">
                                <svg className="w-8 h-8 text-[#0099FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div>
                </div>
                <div className="relative mx-4 lg:mx-0 mt-5">
                    <div className="relative border flex items-center w-full h-10 rounded focus-within:shadow-lg bg-white overflow-hidden">
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
                <div className="mt-5">
                    <li tabIndex={0} className="rounded flex w-full justify-between text-black-300 cursor-pointer items-center px-2.5 py-2.5 mb-6 leading-tight bg-white hover:bg-[#0099FF] transition-all hover:bg-[#0099FF] focus:bg-[#0099FF] active:bg-[#0099FF]-50 hover:text-white focus:text-white active:text-white outline-none">
                        <a className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                            <span className="text-sm ml-2">ファイル名</span>
                        </a>
                        <div className="relative">
                            <svg onClick={toggleDropdown} className="w-4 h-4 text-gray-500 hover:text-white focus:text-white active:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                                <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path>
                            </svg>
                            {dropdownOpen && <div onClick={toggleDropdown} className="fixed inset-0 h-full w-full z-10"></div>}
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 py-2 w-36 bg-white rounded-md shadow-xl z-20">
                                    <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-300 hover:text-black">
                                        Rename
                                    </a>
                                    <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-300 hover:text-black">
                                        Delete
                                    </a>
                                </div>
                            )}
                        </div>
                    </li>
                </div>
            </div>
        </div>
    );
};

export default UploadSideBar;