import React, { useState } from 'react';

const Header: React.FC = () => {
    return (
        <div className="2xl:container 2xl:mx-auto">
            <div className="bg-white rounded shadow-lg py-3 px-7 relative">
                <nav className="flex justify-between">
                    <div className="flex items-center space-x-3 lg:pr-16 pr-6 ml-1 static">
                        <img src="/img/avatar.png" className='w-14 h-14 shadow rounded-full' alt="" />
                        <div className='absolute' style={{ "marginTop": "50px", "marginLeft": "40px" }}>
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                            </span>
                        </div>
                        <h2 className="font-normal text-sm leading-6 text-black-800">Minion</h2>
                    </div>
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
                </nav>
            </div>
        </div>
    );
};

export default Header;