import React from "react";

const NavChat: React.FC = () => {
    return (
        <div className="tab-pane h-100 fade active show" id="chats-tab" role="tabpanel">
            <div className="d-flex flex-column h-100">
                <div className="tab-header d-flex align-items-center border-bottom">
                    <ul className="d-flex justify-content-between align-items-center list-unstyled w-100 mx-4 mb-0">
                        <li>
                            <h3 className="mb-0">Chat</h3>
                        </li>
                        <li>
                            <ul className="list-inline">
                                <li className="list-inline-item" >
                                    <a type="button" className="navigation-toggle btn btn-secondary btn-icon d-xl-none" style={{ "width": "30px", "height": "40px" }}>
                                        <i className="fa fa-angle-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="m-4">
                    <div className="input-group">
                        <input type="text" className="form-control form-control-lg form-control-solid" placeholder="Search message" aria-label="Search message" aria-describedby="search-friends-button" />
                        <button className="btn btn-secondary btn-lg" type="button" id="search-friends-button"><i className="fa fa-search"></i></button>
                    </div>
                </div>
                <div className="text-center mb-3">
                    <ul className="nav nav-pills nav-segmented" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="pills-direct-tab" data-bs-toggle="pill" href="#direct-tab" role="tab" aria-controls="pills-direct-tab" aria-selected="true">New Chat</a>
                        </li>
                    </ul>
                </div>
                <div className="hide-scrollbar h-100">
                    <div className="m-4 active">
                        <ul className="list-unstyled">
                            <li className="card contact-item">
                                <div className="card-body" style={{ "cursor": "pointer" }}>
                                    <div className="d-flex align-items-center" >
                                        <div className="flex-grow-1 overflow-hidden">
                                            <h5 className="text-truncate mb-0 me-auto">New Chat</h5>
                                        </div>
                                        <div style={{ "display": "none", "width": "100%" }} id="renameInput">
                                            <div className="input-group">
                                                <input type="text" className="form-control form-control-lg form-control-solid" style={{ "border": "2px solid #656e83" }} placeholder="Rename" aria-label="Rename" aria-describedby="Rename" />
                                                <button className="btn btn-secondary btn-lg" type="button" style={{ "border": "2px solid #656e83" }} id="search-button">OK</button>
                                            </div>
                                        </div>
                                        <div className="dropdown" id="dropdown">
                                            <button className="btn btn-icon btn-base btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="fa fa-ellipsis-h"></i>
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-right">
                                                <li>
                                                    <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Rename<i className="fa fa-pencil"></i></a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete<i className="fa fa-trash"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavChat;