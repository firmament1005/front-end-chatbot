import React from "react";

const MessageBody: React.FC = () => {
    return (
        <>
            <div className="chat-content hide-scrollbar" id="messagefield" style={{ "height": "100vh" }}>
                <div className="container-fluid g-0 p-4">
                    <div className="message">
                        <div className="message-info">
                            <div className="avatar avatar-sm">
                                <span className="avatar-label bg-soft-primary text-primary fs-6">AM</span>
                            </div>
                            <div>
                                <h6 className="mb-0">You</h6>
                            </div>
                        </div>
                        <div className="message-wrap">
                            <div className="message-item">
                                <div className="message-content">
                                    <span>qwe</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="message self">
                        <div className="message-info">
                            <div className="avatar avatar-sm">
                                <span className="avatar-label bg-soft-primary text-primary fs-6">AM</span>
                            </div>
                            <div>
                                <h6 className="mb-0">ChatBot</h6>
                            </div>
                        </div>
                        <div className="message-wrap">
                            <div className="message-item">
                                <div className="message-content">
                                    <span>Hello</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MessageBody;