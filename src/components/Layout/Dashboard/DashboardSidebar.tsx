import React, { useState, useEffect } from 'react';

interface SideBarProps {
    isSideBarOpen: boolean;
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashboardSidebar: React.FC<SideBarProps> = ({ isSideBarOpen, setIsSidebarOpen }) => {
    const [animate, setAnimate] = useState(false);
    const [changeSvg, setChangeSvg] = useState(false);
    const [isSidebarClose, setIsSidebarClose] = useState(true);

    useEffect(() => {
        if (changeSvg) {
            setAnimate(true);
        } else {
            const timer = setTimeout(() => setAnimate(false), 100);
            return () => clearTimeout(timer);
        }
    }, [changeSvg, isSidebarClose]);

    const renderSVGIcon = () => {
        if (changeSvg) {
            return (
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z" clipRule="evenodd" />
                </svg>
            )
        } else {
            return (
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z" clipRule="evenodd" />
                </svg>
            )
        }
    }

    const Go_To_ChatPage = () => {
        window.location.href = "/chat"
    }

    return (
        <div className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0 ${(isSideBarOpen && isSidebarClose) ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'}`}>
            <div className="flex items-center justify-center mt-8 relative">
                <button className="text-gray-500 focus:outline-none lg:hidden absolute bottom-10 right-0" onClick={() => setIsSidebarOpen(false)}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                    </svg>
                </button>
                <div className="flex items-center">
                    <span className="text-2xl font-semibold text-white">ダッシュボード</span>
                </div>
            </div>
            <nav className="text-white mt-10">
                <ul className="space-y-2 flex justify-center flex-col items-center">
                    <li className="opcion-con-desplegable w-[90%] cursor-pointer">
                        <div className="flex items-center justify-between p-2 hover:bg-gray-700" onClick={() => setChangeSvg(changeSvg ? false : true)}>
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clipRule="evenodd" />
                                </svg>
                                <span className='ml-2'>ユーザー</span>
                            </div>
                            {renderSVGIcon()}
                        </div>
                        {
                            animate && (
                                <ul className={changeSvg ? "desplegable ml-4 animate-slide-dropdown-in" : "desplegable ml-4 animate-slide-dropdown-out"}>
                                    <li>
                                        <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                                            <i className="fas fa-chevron-right mr-2 text-xs"></i>
                                            Gestion de citas
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                                            <i className="fas fa-chevron-right mr-2 text-xs"></i>
                                            Polizas
                                        </a>
                                    </li>
                                </ul>
                            )
                        }
                    </li>
                    <li className="opcion-con-desplegable w-[90%] cursor-pointer" onClick={() => Go_To_ChatPage()}>
                        <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z" clipRule="evenodd" />
                                </svg>
                                <span className='ml-2'>チャット</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default DashboardSidebar;