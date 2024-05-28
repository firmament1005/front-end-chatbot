import React, { useState } from "react";
import Header from "../../../components/Layout/Header";
import MessageBody from "./MessageBody";
import Footer from "../../../components/Layout/Footer";

const Message: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="w-full flex item-center flex-col">
            <div className={`flex-1 ${sidebarOpen ? 'ml-64 fxied' : ''}`}>
                <Header />
            </div>
            <MessageBody />
            <Footer />
        </div>
    )
}

export default Message;

// onSidebarOpen={() => setSidebarOpen(true)}