import React, { useEffect, useState } from "react";
import Header from "../../../components/Layout/Header";
import MessageBody from "./MessageBody";
import Footer from "../../../components/Layout/Footer";
import axios from "axios";
import { useChatHistoryContext } from "../../../Context/ChatHistoryContext/ChatHistoryContext";

type CHATHISTORY = {
    id: number;
    Message: string;
    Date: string;
    Coming: boolean;
    ChatBotID: number | null;
    UserID: number;
}

const Message: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [newMessage, setNewMessage] = useState<CHATHISTORY>();
    const { ChatHistoryData } = useChatHistoryContext();

    const handleSendQuestion = async (files: File[]) => {
        if (files.length > 0) { }
        try {
            // const config = {
            //     method: 'post',
            //     maxBodyLength: Infinity,
            //     url: 'http://localhost:8080/api/chatgptwithchat',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     data: { "message": text }
            // };
            // const response = await axios.request(config);
            localStorage.setItem("chatHistoryStore", JSON.stringify(ChatHistoryData));
            const chatHistoryStored = localStorage.getItem("chatHistoryStore");
            const chatHistory = chatHistoryStored ? JSON.parse(chatHistoryStored) : [];
            // chatHistory.push({ "question": text, "answer": response.data.msg });
            setNewMessage(chatHistory);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="flex flex-col flex-1 overflow-x-hidden">
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <MessageBody />
            <Footer sendQuestions={handleSendQuestion} />
        </div>
    )
}

export default Message;

