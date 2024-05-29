import React from 'react';

const MainContent: React.FC = () => {
    return (
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div className="container px-4 py-6 mx-auto">
                <h3 className="text-3xl text-gray-700 font-black">ユーザーリスト</h3>
                <div className="flex flex-col mt-8">
                    <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                        <div className="flex justify-end mr-3">
                            <button className="text-[#0099FF] bg-transparent border border-solid border-[#0099FF] hover:bg-[#0099FF] hover:text-white active:bg-[#0099FF] font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                新しいボットの創造
                            </button>
                        </div>
                        <section className="container px-4 mx-auto">
                            <div className="flex flex-col">
                                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                        <div className="overflow-hidden md:rounded-lg">
                                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-200">
                                                <thead className="bg-gray-50 dark:bg-gray-100">
                                                    <tr>
                                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-900 dark:text-gray-900 font-black">
                                                            <div className="flex items-center gap-x-3">
                                                                <button className="flex items-center gap-x-2">
                                                                    <span>番号</span>
                                                                    <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                                                                            fill="currentColor"
                                                                            stroke="currentColor"
                                                                            strokeWidth="0.1"
                                                                        />
                                                                        <path
                                                                            d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                                                                            fill="currentColor"
                                                                            stroke="currentColor"
                                                                            strokeWidth="0.1"
                                                                        />
                                                                        <path
                                                                            d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                                                                            fill="currentColor"
                                                                            stroke="currentColor"
                                                                            strokeWidth="0.3"
                                                                        />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </th>
                                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-900 dark:text-gray-900 font-black">
                                                            名前
                                                        </th>
                                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-900 dark:text-gray-900 font-black">
                                                            ボット
                                                        </th>
                                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-900 dark:text-gray-900 font-black">
                                                            目的
                                                        </th>
                                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-900 dark:text-gray-900 font-black">
                                                            日付
                                                        </th>
                                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-900 dark:text-gray-900 font-black">
                                                            その他
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200 dark:divide-white dark:bg-white">
                                                    <tr>
                                                        <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-900 whitespace-nowrap">
                                                            <div className="inline-flex items-center gap-x-3">
                                                                <span>1</span>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-900 whitespace-nowrap">
                                                            <div className="flex items-center gap-x-2">
                                                                <img
                                                                    className="object-cover w-8 h-8 rounded-full"
                                                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                                                    alt=""
                                                                />
                                                                <div>
                                                                    <h2 className="text-sm font-medium text-gray-900 dark:text-gray-900">Arthur Melo</h2>
                                                                    <p className="text-xs font-normal text-gray-900 dark:text-gray-900">authurmelo@example.com</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-900 whitespace-nowrap">ボットネーム</td>
                                                        <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-900 whitespace-nowrap">建設費 資材見積</td>
                                                        <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-900 whitespace-nowrap">Jan 6, 2022</td>
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                            <svg className="w-6 h-6 text-gray-800 dark:text-gray-900 transition duration-300 ease-in-out hover:translate-y-[-2px] cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                                                            </svg>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-900 whitespace-nowrap">
                                                            <div className="inline-flex items-center gap-x-3">
                                                                <span>2</span>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-900 whitespace-nowrap">
                                                            <div className="flex items-center gap-x-2">
                                                                <img
                                                                    className="object-cover w-8 h-8 rounded-full"
                                                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                                                    alt=""
                                                                />
                                                                <div>
                                                                    <h2 className="text-sm font-medium text-gray-900 dark:text-gray-900">Arthur Melo</h2>
                                                                    <p className="text-xs font-normal text-gray-900 dark:text-gray-900">authurmelo@example.com</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-900 whitespace-nowrap">ボットネーム</td>
                                                        <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-900 whitespace-nowrap">建設費 資材見積</td>
                                                        <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-900 whitespace-nowrap">Jan 6, 2022</td>
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                            <svg className="w-6 h-6 text-gray-800 dark:text-gray-900 transition duration-300 ease-in-out hover:translate-y-[-2px] cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                                                            </svg>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-900 whitespace-nowrap">
                                                            <div className="inline-flex items-center gap-x-3">
                                                                <span>3</span>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-900 whitespace-nowrap">
                                                            <div className="flex items-center gap-x-2">
                                                                <img
                                                                    className="object-cover w-8 h-8 rounded-full"
                                                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                                                    alt=""
                                                                />
                                                                <div>
                                                                    <h2 className="text-sm font-medium text-gray-900 dark:text-gray-900">Arthur Melo</h2>
                                                                    <p className="text-xs font-normal text-gray-900 dark:text-gray-900">authurmelo@example.com</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-900 whitespace-nowrap">ボットネーム</td>
                                                        <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-900 whitespace-nowrap">建設費 資材見積</td>
                                                        <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-900 whitespace-nowrap">Jan 6, 2022</td>
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                            <svg className="w-6 h-6 text-gray-800 dark:text-gray-900 transition duration-300 ease-in-out hover:translate-y-[-2px] cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                                                            </svg>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-900 whitespace-nowrap">
                                                            <div className="inline-flex items-center gap-x-3">
                                                                <span>4</span>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-900 whitespace-nowrap">
                                                            <div className="flex items-center gap-x-2">
                                                                <img
                                                                    className="object-cover w-8 h-8 rounded-full"
                                                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                                                    alt=""
                                                                />
                                                                <div>
                                                                    <h2 className="text-sm font-medium text-gray-900 dark:text-gray-900">Arthur Melo</h2>
                                                                    <p className="text-xs font-normal text-gray-900 dark:text-gray-900">authurmelo@example.com</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-900 whitespace-nowrap">ボットネーム</td>
                                                        <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-900 whitespace-nowrap">建設費 資材見積</td>
                                                        <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-900 whitespace-nowrap">Jan 6, 2022</td>
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                            <svg className="w-6 h-6 text-gray-800 dark:text-gray-900 transition duration-300 ease-in-out hover:translate-y-[-2px] cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                                                            </svg>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MainContent;