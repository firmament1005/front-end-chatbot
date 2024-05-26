import React from "react";

const NavSetting: React.FC = () => {
    return (
        <div className="d-flex flex-column h-100">
            <div className="tab-header d-flex align-items-center border-bottom">
                <ul className="d-flex justify-content-between align-items-center list-unstyled w-100 mx-4 mb-0">
                    <li>
                        <h3 className="mb-0">Settings</h3>
                    </li>
                    <li>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <button type="button" className="navigation-toggle btn btn-secondary btn-icon d-xl-none">
                                    <i className="fa fa-bars"></i>
                                </button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="m-4">
                <div className="input-group">
                    <input type="text" className="form-control form-control-lg form-control-solid" placeholder="Search settings" aria-label="Search settings" aria-describedby="search-settings-button" />
                    <button className="btn btn-secondary btn-lg" type="button" id="search-settings-button">
                        <i className="ri-search-line"></i>
                    </button>
                </div>
            </div>
            <div className="hide-scrollbar h-100">
                <div className="m-4 mt-0">
                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="row align-items-center gx-4">
                                <div className="col-auto">
                                    <div className="avatar avatar-online">
                                        <span className="avatar-label bg-soft-success text-success">JD</span>
                                    </div>
                                </div>

                                <div className="col">
                                    <h5 className="mb-1">John Davis</h5>
                                    <p className="text-muted mb-0">john@gmail.com</p>
                                </div>

                                <button className="btn btn-sm btn-icon btn-base">
                                    <i className="ri-logout-box-line"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="d-flex align-items-center mx-4 mb-3">
                            <small className="text-muted me-auto">Acount</small>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="accordion accordion-flush" id="accordion-account-settings">
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="account-heading-1">
                                            <div className="accordion-button collapsed p-0 pb-4" role="button" data-bs-toggle="collapse" data-bs-target="#account-collapse-1" aria-expanded="false" aria-controls="account-collapse-1">
                                                <div>
                                                    <h5 className="mb-1">Account settings</h5>
                                                    <p className="text-muted mb-0">Update account settings</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="account-collapse-1" className="accordion-collapse collapse" aria-labelledby="account-heading-1">
                                            <div className="accordion-body p-0 pb-4">
                                                <div className="mb-4">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control form-control-lg form-control-solid" placeholder="Name" aria-label="Name" />
                                                    </div>
                                                </div>

                                                <div className="mb-4">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control form-control-lg form-control-solid" placeholder="Email" aria-label="Email" />
                                                    </div>
                                                </div>
                                                <button className="btn btn-lg btn-primary w-100">Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="d-flex align-items-center mx-4 mb-3">
                            <small className="text-muted me-auto">Security</small>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="accordion accordion-flush" id="accordion-security-settings">
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="security-heading-1">
                                            <div className="accordion-button collapsed p-0 pb-4" role="button" data-bs-toggle="collapse" data-bs-target="#security-collapse-1" aria-expanded="false" aria-controls="security-collapse-1">
                                                <div>
                                                    <h5 className="mb-1">Password settings</h5>
                                                    <p className="text-muted mb-0">Manage your password</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="security-collapse-1" className="accordion-collapse collapse" aria-labelledby="security-heading-1">
                                            <div className="accordion-body p-0 pb-4">
                                                <div className="mb-4">
                                                    <div className="input-group">
                                                        <input type="password" className="form-control form-control-lg form-control-solid" placeholder="Current password" aria-label="Current password" />
                                                    </div>
                                                </div>

                                                <div className="mb-4">
                                                    <div className="input-group">
                                                        <input type="password" className="form-control form-control-lg form-control-solid" placeholder="New password" aria-label="New password" />
                                                    </div>
                                                </div>

                                                <div className="mb-4">
                                                    <div className="input-group">
                                                        <input type="password" className="form-control form-control-lg form-control-solid" placeholder="Confirm password" aria-label="Confirm password" />
                                                    </div>
                                                </div>
                                                <button className="btn btn-lg btn-primary w-100">Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavSetting;