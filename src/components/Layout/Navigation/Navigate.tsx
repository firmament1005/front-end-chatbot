import React from "react";

const Navigation: React.FC = () => {

    //The function that logout the users
    function Logout() {
    }

    return (
        <>
            <div className="navigation navbar border-end py-6" id="navigate" style={{ "height": "100vh" }}>
                <a className="logo d-xl-block mb-9" id="logo" href="#">
                    <img src="/img/logo.png" alt="" />
                </a>
                <ul className="nav nav-pills" role="tablist">
                    <li className="nav-item mb-6" role="presentation">
                        <a className="nav-link active" data-bs-toggle="pill" href="#chats-tab" role="tab" aria-selected="true" title="Chats">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="kt-svg-icon">
                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                    <path d="M5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z" id="Combined-Shape" fill="white" />
                                </g>
                            </svg>
                        </a>
                    </li>
                    <li className="nav-item mb-6" role="presentation">
                        <a className="nav-link" data-bs-toggle="pill" href="#upload" role="tab" aria-selected="false" title="Upload">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="kt-svg-icon">
                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                    <path d="M2,13 C2,12.5 2.5,12 3,12 C3.5,12 4,12.5 4,13 C4,13.3333333 4,15 4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 C2,15 2,13.3333333 2,13 Z" id="Path-57" fill="white" fillRule="nonzero" opacity="0.3" />
                                    <rect id="Rectangle" fill="white" opacity="0.3" x="11" y="2" width="2" height="14" rx="1" />
                                    <path d="M12.0362375,3.37797611 L7.70710678,7.70710678 C7.31658249,8.09763107 6.68341751,8.09763107 6.29289322,7.70710678 C5.90236893,7.31658249 5.90236893,6.68341751 6.29289322,6.29289322 L11.2928932,1.29289322 C11.6689749,0.916811528 12.2736364,0.900910387 12.6689647,1.25670585 L17.6689647,5.75670585 C18.0794748,6.12616487 18.1127532,6.75845471 17.7432941,7.16896473 C17.3738351,7.57947475 16.7415453,7.61275317 16.3310353,7.24329415 L12.0362375,3.37797611 Z" id="Path-102" fill="white" fillRule="nonzero" />
                                </g>
                            </svg>
                        </a>
                    </li>
                    <li className="nav-item mb-6" role="presentation">
                        <a className="nav-link" data-bs-toggle="pill" href="#settings-tab" role="tab" aria-selected="false"
                            title="Settings">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="kt-svg-icon">
                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                    <path d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" id="Combined-Shape" fill="white" />
                                </g>
                            </svg>
                        </a>
                    </li>
                    <li className="nav-item mt-xl-auto" role="presentation">
                        <a className="text-decoration-none" href="#" data-bs-toggle="modal" data-bs-target="#modal-account" title="Account">
                            <div className="avatar avatar-online avatar-sm">
                                <span className="avatar-label bg-soft-success text-success fs-6">JD</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="modal fade" id="modal-account" aria-labelledby="modal-account" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="profile text-center">
                            <div className="profile-img text-primary px-5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" fill="currentColor">
                                    <path d="M300,0v80c0,11-9,20-20,20H20C9,100,0,91,0,80V0H300z" />
                                    <path className="st1" d="M50,71c-16,0-29,13-29,29h10c0-10.5,8.5-19,19-19s19,8.5,19,19h10C79,84,66,71,50,71z" />
                                    <path className="st1" d="M31.6,0H21.3C21.8,1.6,22,3.3,22,5c0,10.5-8.5,19-19,19c-1,0-2-0.1-3-0.2v10.1C1,34,2,34,3,34c16,0,29-13,29-29
                                                                                                C32,3.3,31.8,1.6,31.6,0z" />
                                    <path className="st1" d="M238.5,58C217.3,58,200,75.3,200,96.5c0,1.2,0,2.3,0.2,3.5h10.1c-0.1-1.2-0.2-2.3-0.2-3.5
                                                                                                c0-15.7,12.8-28.5,28.5-28.5S267,80.8,267,96.5c0,1.2-0.1,2.3-0.2,3.5h10.1c0.1-1.2,0.2-2.3,0.2-3.5C277,75.3,259.7,58,238.5,58z" />
                                    <path className="st1" d="M299,22c-11,0-20-9-20-20c0-0.7,0-1.3,0.1-2h-10C269,0.7,269,1.3,269,2c0,16.5,13.5,30,30,30c0.3,0,0.7,0,1,0
                                                                                                V22C299.7,22,299.3,22,299,22z" />
                                </svg>
                            </div>
                            <div className="profile-content">
                                <div className="avatar avatar-lg">
                                    <span className="avatar-label bg-soft-success text-success fs-3">JD</span>
                                </div>

                                <h5 className="m-1">John Davis</h5>

                                <p className="text-muted">Online</p>
                            </div>
                        </div>

                        <div className="modal-body p-0">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item p-4">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <h5 className="mb-1">Name</h5>
                                            <p className="text-muted mb-0">Jhon</p>
                                        </div>
                                        <div className="col-auto">
                                            <button type="button" className="btn btn-icon btn-light rounded-circle">
                                                <i className="fa fa-map-marker"></i>
                                            </button>
                                        </div>
                                    </div>
                                </li>

                                <li className="list-group-item p-4">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <h5 className="mb-1">E-mail</h5>
                                            <p className="text-muted mb-0">john@gmail.com</p>
                                        </div>
                                        <div className="col-auto">
                                            <button type="button" className="btn btn-icon btn-light rounded-circle">
                                                <i className="fa fa-envelope"></i>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => Logout()}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation;