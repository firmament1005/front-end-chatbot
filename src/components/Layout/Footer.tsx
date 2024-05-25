import React, { useState } from "react";

const Footer: React.FC = () => {

    const [chatContent, setChatContent] = useState("");

    return (
        <div className="chat-footer d-flex align-items-center border-top px-2">
            <div className="container-fluid">
                <div className="row align-items-center g-4">
                    <div className="col">
                        <div className="input-group">
                            <input type="text" id="msgcontent" className="form-control form-control-lg" placeholder="Type message" aria-label="type message" onChange={(e) => setChatContent(e.target.value) } />
                        </div>
                    </div>
                    <div className="col-auto">
                        <ul className="list-inline d-flex align-items-center mb-0">
                            <li className="list-inline-item">
                                <button type="submit" className="btn btn-icon btn-primary btn-lg rounded-circle">
                                    <i className="fa fa-send"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;