import React, { useState } from "react";

const UploadSideBar: React.FC = () => {

    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="px-8">
            <div className="h-16 w-full flex items-center">
                <h1 className="flex w-full justify-between text-black-300 mt-20 cursor-pointer items-center mb-6 text-3xl font-semibold">アップロード</h1>
            </div>
            <div className="mx-auto mt-10">
                <div className="flex items-center justify-center w-full">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-auto px-2 py-2 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-white-700 hover:gg-gray-300">
                        <div className="flex flex-col items-center justify-center" title="Upload">
                            <svg className="w-8 h-8 text-black-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                </div>
            </div>
            <div className="flex justify-center mt-5 mb-4 w-full">
                <div className="relative">
                    <div className="text-white-300 absolute ml-4 inset-0 m-auto w-4 h-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search"
                            width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" fill="none" strokeLinecap="round"
                            strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <circle cx="10" cy="10" r="7"></circle>
                            <line x1="21" y1="21" x2="15" y2="15"></line>
                        </svg>
                    </div>
                    <input className="bg-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-100 rounded w-full text-sm text-black-300 placeholder-gray-700 pl-10 py-2" type="text" placeholder="検索" />
                </div>
            </div>
            <ul className="mt-5">
                <li tabIndex={0} className="flex w-full justify-between text-black-300 cursor-pointer items-center px-2.5 py-2.5 mb-6 leading-tight hover:bg-gray-200 transition-all hover:bg-gray-300 focus:bg-gray-300 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-black-900 focus:text-gray-900 active:text-gray-900 outline-none">
                    <a className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                        <span className="text-sm ml-2">新規チャット</span>
                    </a>
                    <div className="relative">
                        <svg onClick={toggleDropdown} className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
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
                <li tabIndex={0} className="flex w-full justify-between text-black-300 cursor-pointer items-center px-2.5 py-2.5 mb-6 leading-tight hover:bg-gray-200 transition-all hover:bg-gray-300 focus:bg-gray-300 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-black-900 focus:text-gray-900 active:text-gray-900 outline-none">
                    <a className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                        <span className="text-sm ml-2">新規チャット</span>
                    </a>
                    <div className="relative">
                        <svg onClick={toggleDropdown} className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
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
            </ul>
        </div>
    )
}

export default UploadSideBar;