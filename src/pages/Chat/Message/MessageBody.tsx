import React, { useEffect } from "react";
import { Question, Answer } from "./ChatItem";
interface MessageProps {
    messages: { question: string, answer: string }[];
}

const MessageBody: React.FC<MessageProps> = ({ messages }) => {

    useEffect(() => {
        console.log("MessageBody");
    }, [messages])

    return (
<<<<<<< HEAD
        <div className="w-full h-full overflow-y-auto p-8">
            {messages.map((message, index) => (
                <div key={index}>
                    <Question message={message.question} />
                    <Answer message={message.answer} />
                </div>
            ))}
        </div>
=======
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white">
            <div className="flex flex-col">
                <div className="w-full h-[84vh] overflow-y-auto p-8">
                    <div className="w-auto flex justify-start gap-2.5 mt-2">
                        <div className="flex w-auto">
                            <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="Image"></img>
                            <div className="flex flex-col gap-1 w-full max-w-[640px]">
                                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                    <span className="text-sm font-semibold text-gray-900 dark:text-black">Jone</span>
                                    <span className="text-sm font-normal text-black dark:text-black">11:46</span>
                                </div>
                                <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-300">
                                    <p className="text-sm font-normal text-black-900 dark:text-black"> That's awesome. I think our users will really appreciate the improvements.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-auto flex justify-end mt-2 relative">
                        <div className="flex w-auto absolute mr-4">
                            <div className="flex flex-col gap-1 w-full max-w-[640px]">
                                <div className="flex justify-end items-center space-x-2 rtl:space-x-reverse">
                                    <span className="text-sm font-normal text-black dark:text-black justify-end">11:46</span>
                                    <span className="text-sm font-semibold text-gray-900 dark:text-black">Jhon</span>
                                </div>
                                <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-b-xl rounded-tl-xl rounded-es-xl dark:bg-gray-300">
                                    <p className="text-sm font-normal text-black-900 dark:text-black"> That's awesome. I think our users will really appreciate the improvements.</p>
                                </div>
                            </div>
                            <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="Jese image" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
>>>>>>> 3a151f4a12e36474493c4e342e9b5341a4f8c100
    )
}

export default MessageBody;