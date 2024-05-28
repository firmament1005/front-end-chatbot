import React, { useEffect, useState } from "react";
import BotChooseModal from "../../Modal/BotChooseModal";

interface OpenChatSideBarProps {
    isOpen: boolean,
}

const ChatSideBar: React.FC<OpenChatSideBarProps> = ({ isOpen }) => {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [isBotModal, setIsBotModal] = useState<boolean>(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <>
            <div className="flex flex-no-wrap">
                <div className={isOpen ? "z-10 w-64 absolute SideBarHiddenClass sm:relative bg-gray-100 md:h-full flex-col justify-between sm:flex" : ""}>
                    <div className="px-8 h-screen item-center flex flex-col">
                        <div className="h-16 w-full flex items-center">
                            <h1 className="flex w-full justify-between text-[#0099FF] mt-20 cursor-pointer items-center mb-6 text-3xl font-semibold">チャット</h1>
                        </div>
                        <button className="group relative overflow-hidden bg-[#0099FF] cursor-pointer focus:ring-4 focus:ring-gray-300 inline-flex items-center px-4 py-2.5 mt-10 rounded text-white justify-center" onClick={() => setIsBotModal(true)}>
                            <span className="z-40">新規チャット</span>
                            <svg className="z-40 ml-2 -mr-1 w-3 h-3 transition-all duration-300 group-hover:translate-x-1" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"></path>
                            </svg>
                            <div className="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-100 bg-white/30 group-hover:translate-x-[50%] z-20 duration-1000">
                            </div>
                        </button>
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
                        <ul className="mt-1">
                            <li tabIndex={0} className="rounded flex w-full justify-between text-black-300 cursor-pointer items-center px-2.5 py-2.5 mb-6 leading-tight bg-white hover:bg-[#0099FF] transition-all hover:bg-[#0099FF] focus:bg-[#0099FF] active:bg-[#0099FF]-50 hover:text-white focus:text-white active:text-white outline-none">
                                <a className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                                    <span className="text-sm ml-2">新規チャット</span>
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
                        </ul>
                    </div>
                </div>
            </div>
            <BotChooseModal isBotModalOpen={isBotModal} onClose={() => setIsBotModal(false)}>
                <h2 className="text-2xl mb-4"></h2>
            </BotChooseModal>

        </>
    )
}

export default ChatSideBar;