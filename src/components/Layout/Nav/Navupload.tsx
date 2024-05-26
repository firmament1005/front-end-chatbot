import React from "react";
import '../../../assets/css/upload.css';

const NavUpload: React.FC = () => {
    return (
        <div className="d-flex flex-column h-100">
            <div className="tab-header d-flex align-items-center border-bottom">
                <ul className="d-flex justify-content-between align-items-center list-unstyled w-100 mx-4 mb-0">
                    <li>
                        <h3 className="mb-0">Upload</h3>
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
            <div className="panel">
                <div className="button_outer">
                    <div className="btn_upload">
                        <input type="file" id="upload_file" name="" />
                        <span>Upload File</span>
                    </div>
                    <div className="processing_bar"></div>
                    <div className="success_box"></div>
                </div>
            </div>
        </div>
    )
}

export default NavUpload;