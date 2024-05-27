import React, { useState } from "react";

const SettingSideBar: React.FC = () => {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const sidebarHandler = (flag: boolean) => {
        setIsSidebarOpen(flag);
    };

    return (
        <div className="flex flex-no-wrap">
            <div className="w-64 absolute sm:relative bg-gray-100 shadow md:h-full flex-col justify-between hidden sm:flex">
                <div className="px-8 h-screen item-center flex flex-col">
                    <div className="h-16 w-full flex items-center">
                        <h1 className="flex w-full justify-between text-[#0099FF] mt-20 cursor-pointer items-center mb-6 text-3xl font-semibold">設定</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingSideBar;