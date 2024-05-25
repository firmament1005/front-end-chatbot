import React from 'react';
import Search from './Search';


const Header: React.FC = () => {
    return (
        <>
            <div className="chat-header d-flex align-items-center border-bottom px-2">
                <div className="container-fluid">
                    <div className="row align-items-center g-0">
                        <div className="col-8 col-sm-5">
                            <div className="d-flex align-items-center">
                                <div className="d-block d-xl-none me-3">
                                    <button className="chat-hide btn btn-icon btn-base btn-sm" type="button">
                                        <i className="fa fa-angle-left"></i>
                                    </button>
                                </div>
                                <div className="avatar avatar-online avatar-sm me-3">
                                    <span className="avatar-label bg-soft-primary text-primary fs-6">AM</span>
                                </div>

                                <div className="flex-grow-1 overflow-hidden">
                                    <h6 className="d-block text-truncate mb-1">Ariel Martinez</h6>
                                    <p className="d-block text-truncate text-success fs-6 mb-0">Online</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 col-sm-7">
                            <ul className="list-inline text-end mb-0">
                                <li className="list-inline-item d-none d-sm-inline-block">
                                    <button className="btn btn-icon btn-base" type="button" title="Search" data-bs-toggle="collapse" data-bs-target="#search-chat" aria-expanded="false">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </li>

                                <li className="list-inline-item d-sm-none">
                                    <div className="dropdown">
                                        <button className="btn btn-icon btn-base" type="button" title="Menu" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fa fa-ellipsis-h"></i>
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li className="d-block d-sm-none">
                                                <a className="dropdown-item d-flex align-items-center justify-content-between" href="#" data-bs-toggle="collapse" title="Search" data-bs-target="#search-chat" aria-expanded="false">Search
                                                    <i className="fa fa-search"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Search />
        </>
    )
}

export default Header;