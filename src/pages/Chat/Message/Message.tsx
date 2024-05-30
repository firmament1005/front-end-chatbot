import React, { useState } from "react";
import Header from "../../../components/Layout/Header";
import MessageBody from "./MessageBody";
import Footer from "../../../components/Layout/Footer";
import axios from "axios";

const Message: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [newMessage, setNewMessage] = useState([]);

    const handleSendQuestion = async (text = '', files: File[]) => {
        if (files.length > 0) {
            console.log(files[0].name);
        }
        try {
            const config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://localhost:8080/api/chatgptwithchat',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: { "message": text }
            };
            const response = await axios.request(config);
            const chatHistoryStored = localStorage.getItem("chatHistoryStore");
            const chatHistory = chatHistoryStored ? JSON.parse(chatHistoryStored) : [];
            chatHistory.push({ "question": text, "answer": response.data.msg });
            localStorage.setItem("chatHistoryStore", JSON.stringify(chatHistory));
            setNewMessage(chatHistory);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="w-full flex item-center flex-col">
            <div className={`flex-1 ${sidebarOpen ? 'ml-64 fxied' : ''}`}>
                <Header />
            </div>
            <MessageBody messages={newMessage} />
            <Footer sendQuestions={handleSendQuestion} />
        </div>
    )
}

export default Message;
