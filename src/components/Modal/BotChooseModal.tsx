import React, { ReactNode, useState, useEffect } from 'react';

interface BotChooseModalProps {
    isBotModalOpen: boolean,
    onClose: any,
    children: ReactNode;
}

const BotChooseModal: React.FC<BotChooseModalProps> = ({ isBotModalOpen, onClose }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (isBotModalOpen) {
            setAnimate(true);
        } else {
            const timer = setTimeout(() => setAnimate(false), 500);
            return () => clearTimeout(timer);
        }
    }, [isBotModalOpen]);

    return (
        <>
            {animate && (
                <div className="py-12 bg-white-700 transition duration-300 ease-in-out z-50 absolute top-0 right-0 bottom-0 left-0 bg-opacity-20 bg-black fixed w-screen y-screen" style={{"border" : "1px solid red"}}>
                    <div role="alert" className={`container mx-auto w-11/12 md:w-2/3 max-w-lg z-50 ${isBotModalOpen ? 'animate-slide-in' : 'animate-slide-out'}`}>
                        <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                            <div className="flex items-center justify-center bg-grey-lighter">
                                <label className="w-auto flex flex-col items-center px-5 py-5 bg-white text-blue rounded-full shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                                    <img src="/img/avatar.png" className="w-20 h-20" alt="" />
                                    <input type='file' className="hidden" />
                                </label>
                            </div>
                            <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">ユーザー名</label>
                            <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                                placeholder="James" />
                            <label htmlFor="email2" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">カード番号</label>
                            <div className="relative mb-5 mt-2">
                                <div className="absolute text-gray-600 flex items-center px-4 border-r h-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-credit-card"
                                        width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                        fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <rect x="3" y="5" width="18" height="14" rx="3" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                        <line x1="7" y1="15" x2="7.01" y2="15" />
                                        <line x1="11" y1="15" x2="13" y2="15" />
                                    </svg>
                                </div>
                                <input id="email2" className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border"
                                    placeholder="XXXX - XXXX - XXXX - XXXX" />
                            </div>
                            <label htmlFor="expiry" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">満了日</label>
                            <div className="relative mb-5 mt-2">
                                <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event"
                                        width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                        fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <rect x="4" y="5" width="16" height="16" rx="2" />
                                        <line x1="16" y1="3" x2="16" y2="7" />
                                        <line x1="8" y1="3" x2="8" y2="7" />
                                        <line x1="4" y1="11" x2="20" y2="11" />
                                        <rect x="8" y="15" width="2" height="2" />
                                    </svg>
                                </div>
                                <input id="expiry" className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="MM/YY" />
                            </div>
                            <div className="flex items-center justify-start w-full">
                                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">確 認</button>
                                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" onClick={onClose}>閉じる</button>
                            </div>
                            <button className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                                aria-label="close modal" role="button">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="20"
                                    height="20" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default BotChooseModal;