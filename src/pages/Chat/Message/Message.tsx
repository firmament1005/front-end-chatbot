import React from "react";
import Header from "../../../components/Layout/Header";
import MessageBody from "./MessageBody";
import Footer from "../../../components/Layout/Footer";

const Message: React.FC = () => {
    return (
        <div className="w-full flex item-center flex-col">
            <Header />
            <MessageBody />
            <Footer />
        </div>
    )
}

export default Message;