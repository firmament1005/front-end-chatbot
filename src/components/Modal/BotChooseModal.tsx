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
                <div className="py-12 bg-white-700 transition duration-300 ease-in-out z-50 top-0 right-0 bottom-0 left-0 bg-opacity-20 bg-black fixed x-full y-full">
                    <div role="alert" className={`container mx-auto w-11/12 md:w-2/3 max-w-lg z-50 ${isBotModalOpen ? 'animate-slide-in' : 'animate-slide-out'}`}>
                        <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                            <div className="flex items-center justify-center bg-grey-lighter">
                                <label className="w-auto flex flex-col items-center bg-white text-blue tracking-wide uppercase border-blue">
                                    <h1 className="flex w-full justify-between text-[#0099FF] cursor-pointer items-center mb-6 text-3xl font-semibold">新規チャット</h1>
                                </label>
                            </div>
                            <input id="name" defaultValue="新規チャット" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                                placeholder="James" />
                            <div className="col-span-2 sm:col-span-1">
                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                <select id="category" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border">
                                    <option value="TV">建設費資材見積</option>
                                    <option value="PC">人件費見積もり</option>
                                    <option value="GA">その他の費用</option>
                                </select>
                            </div>
                            <div className="flex items-center justify-end w-full">
                                <button className="focus:outline-none focus:ring-gray-400 ml-3 transition duration-150 text-gray-600 ease-in-out border rounded px-8 py-2 text-sm group relative overflow-hidden bg-[#0099FF] cursor-pointer inline-flex items-center rounded text-white justify-center">
                                    <span className="z-40">確 認</span>
                                    <div className="absolute inset-0 h-[100%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-100 bg-white/30 group-hover:translate-x-[50%] z-20 duration-1000">
                                    </div>
                                </button>
                                <button className="focus:outline-none focus:ring-gray-400 ml-3 transition duration-150 text-gray-600 ease-in-out border rounded px-8 py-2 text-sm group relative overflow-hidden bg-gray-700 cursor-pointer inline-flex items-center rounded text-white justify-center" onClick={onClose}>
                                    <span className="z-40">閉じる</span>
                                    <div className="absolute inset-0 h-[100%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-100 bg-white/30 group-hover:translate-x-[50%] z-20 duration-1000"></div>
                                </button>
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