import React from "react";
import MessageBody from "./MessageBody";
import Header from "../../../components/Layout/Header";
import Footer from "../../../components/Layout/Footer";

const Message: React.FC = () => {
    return (
        <div className="main main-visible overflow-hidden" style={{ "height": "100vh" }}>
            <div className="chat d-flex flex-row h-100">
                <div className="chat-body h-100 w-100 d-flex flex-column">
                    <Header />
                    <MessageBody />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Message;