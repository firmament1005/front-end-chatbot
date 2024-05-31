import React, { useState, useRef } from 'react';
import BotChooseModal from '../../Modal/BotChooseModal';
import { useChatBotListContext } from '../../../Context/ChatListContext/ChatListContext';

interface SideBarProps {
    isSideBarOpen: boolean;
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatSideBar: React.FC<SideBarProps> = ({ isSideBarOpen, setIsSidebarOpen }) => {
    const [isOpenBotModal, setIsOpenBotModal] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
    const [chatBotNameInput, setChatBotNameInput] = useState<number | null>(null);
    const [isChatSideBarOpen, setIsChatSideBarOpen] = useState("ChatSideBar");
    const { Bot } = useChatBotListContext();
    const chatBotName = useRef<HTMLDivElement>(null);
    const dropDown = useRef<HTMLDivElement>(null);

    //Hidden ChatSideBar
    const HiddenChatSideBar = () => {
        setIsSidebarOpen(!isSideBarOpen);
        setIsChatSideBarOpen("");
    }

    //Display dropdown
    const toggleDropdown = (index: number) => {
        setDropdownOpen(dropdownOpen === index ? null : index);
    };

    //Change ChatBot Name
    const reName = (index: number) => {
        setChatBotNameInput(chatBotNameInput === index ? null : index);
        if (chatBotName.current && dropDown.current) {
            chatBotName.current.style.display = "none";
            dropDown.current.style.display = "none";
        }
    }

    //Enter Key Event
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            alert(123)
        }
    };

    //ChatBot List Sort
    const sortedChatBotList = Bot.sort((a, b) => b.id - a.id);

    return (
        <>
            <div className={`fixed inset-y-0 left-0 w-60 z-10 overflow-y-auto transition duration-300 transform bg-gray-100 lg:translate-x-0 lg:static lg:inset-0 ${(isSideBarOpen && isChatSideBarOpen) ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'}`}>
                <div className="flex items-center justify-center mt-8 relative">
                    <button className="text-gray-900 focus:outline-none lg:hidden absolute bottom-10 right-0" onClick={() => HiddenChatSideBar()}>
                        <svg className="w-6 h-6 text-gray-900 dark:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                        </svg>
                    </button>
                    <div className="flex overflow-y-auto items-center">
                        <span className="text-2xl font-semibold text-[#0099FF]">チャット</span>
                    </div>
                </div>
                <div className="px-4 item-center flex flex-col">
                    <button className="group relative overflow-hidden bg-[#0099FF] cursor-pointer focus:ring-4 focus:ring-gray-300 inline-flex items-center px-4 py-2.5 mt-10 rounded text-white justify-center" onClick={() => setIsOpenBotModal(true)}>
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
                    <div className="relative lg:mx-0 mt-5">
                        <div className="relative border flex items-center w-full h-10 rounded focus-within:shadow-lg bg-white overflow-hidden">
                            <div className="grid place-items-center h-full w-12 text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input className="h-auto w-full outline-none text-sm text-gray-700"
                                type="text"
                                id="search"
                                placeholder="検索.." />
                        </div>
                    </div>
                    <div className="mt-5">
                        {
                            sortedChatBotList.map((item, index) => (
                                <li tabIndex={0} key={item.id} className="mt-1 rounded flex w-full justify-between text-black-300 cursor-pointer items-center px-2.5 py-2.5 mb-1 leading-tight bg-white hover:bg-[#0099FF] transition-all hover:bg-[#0099FF] focus:bg-[#0099FF] active:bg-[#0099FF]-50 hover:text-white focus:text-white active:text-white outline-none">
                                    <div ref={chatBotName} className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                                        <span className="text-sm ml-2">{item.ChatBotName}</span>
                                    </div>
                                    <div className="relative" ref={dropDown}>
                                        <svg onClick={() => toggleDropdown(index)} className="w-4 h-4 text-gray-500 hover:text-white focus:text-white active:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                                            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path>
                                        </svg>
                                        {dropdownOpen === index && <div onClick={() => toggleDropdown(index)} className="fixed inset-0 h-full w-full z-10"></div>}
                                        {dropdownOpen === index && (
                                            <div className="absolute right-0 mt-2 py-2 w-36 bg-white rounded-md shadow-xl z-20">
                                                <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-300 hover:text-black" onClick={() => reName(index)}>
                                                    Rename
                                                </a>
                                                <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-300 hover:text-black">
                                                    Delete
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                    {
                                        chatBotNameInput === index && (
                                            <input id="name" onKeyDown={handleKeyDown} className="text-gray-600 focus:outline-none font-normal w-full h-9 flex items-center pl-3 text-sm border-gray-300 rounded border"
                                                placeholder="James" />
                                        )
                                    }
                                </li>
                            ))
                        }
                    </div>
                </div>
            </div>
            <BotChooseModal isBotModalOpen={isOpenBotModal} onClose={() => setIsOpenBotModal(false)}>
                <div></div>
            </BotChooseModal>
        </>
    );
};

export default ChatSideBar;