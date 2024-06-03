import React from "react";
import { MessageHistory } from "./ChatItem";

const MessageBody: React.FC = () => {

    return (
        <>
            <main className="flex overflow-x-hidden overflow-y-auto bg-white">
                <div className="flex flex-col w-full">
                    <div className="w-full h-[84vh] overflow-y-auto p-8">
                        <MessageHistory />
                    </div>
                </div>
            </main>
        </>
    )
}

export default MessageBody;