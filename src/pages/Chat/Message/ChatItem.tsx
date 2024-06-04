import React, { useEffect, useState } from 'react';
import { useChatHistoryContext } from '../../../Context/ChatHistoryContext/ChatHistoryContext';
import { useChatBotListContext } from '../../../Context/ChatListContext/ChatListContext';


type USERDATA = {
    ID: number,
    Username: string,
    Useremail: string,
    Password: string,
    Avatar: string
}

type ChatHistoryDataType = {
    id: number;
    Message: string;
    Date: string;
    Coming: boolean;
    ChatBotID: number | null;
    UserID: number;
}

export const MessageHistory: React.FC = () => {

    const { ChatHistoryData } = useChatHistoryContext();
    const { ActiveChatID } = useChatBotListContext();
    const [Userdata, setUserData] = useState<USERDATA>();

    const ChatHistoryShow = (item: ChatHistoryDataType) => {
        if (item.Coming === true) {
            return (
                <div className="w-auto flex justify-start gap-2.5 mt-2">
                    <div className="flex w-auto">
                        <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="Image"></img>
                        <div className="flex flex-col gap-1 w-full max-w-[640px]">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <span className="text-sm font-semibold text-gray-900 dark:text-black">{Userdata?.Username}</span>
                                <span className="text-sm font-normal text-black dark:text-black">{item.Date}</span>
                            </div>
                            <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-300">
                                <p className="text-sm font-normal text-black-900 dark:text-black">{item.Message}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="w-auto flex justify-end mt-2 relative">
                    <div className="flex w-auto absolute mr-4">
                        <div className="flex flex-col gap-1 w-full max-w-[640px]">
                            <div className="flex justify-end items-center space-x-2 rtl:space-x-reverse">
                                <span className="text-sm font-normal text-black dark:text-black justify-end">{item.Date}</span>
                                <span className="text-sm font-semibold text-gray-900 dark:text-black">ChatBot</span>
                            </div>
                            <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-b-xl rounded-tl-xl rounded-es-xl dark:bg-gray-300">
                                <p className="text-sm font-normal text-black-900 dark:text-black">{item.Message}</p>
                            </div>
                        </div>
                        <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="Jese image" />
                    </div>
                </div>
            )
        }
    }

    useEffect(() => {
        const userData = localStorage.getItem("UserData");
        if (userData != null) {
            const temp = JSON.parse(userData);
            setUserData(temp);
        }
    }, [ChatHistoryData])

    return (
        <>
            {
                ChatHistoryData.filter(item => item.ChatBotID === ActiveChatID && item.UserID === Userdata?.ID).map((item, index) => (
                    ChatHistoryShow(item)
                ))
            }
        </>
    )
}