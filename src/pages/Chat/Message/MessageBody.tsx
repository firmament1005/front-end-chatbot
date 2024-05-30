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
        <div className="w-full h-full overflow-y-auto p-8">
            {messages.map((message, index) => (
                <div key={index}>
                    <Question message={message.question} />
                    <Answer message={message.answer} />
                </div>
            ))}
        </div>
    )
}

export default MessageBody;