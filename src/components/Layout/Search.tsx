import React from "react";

const Search: React.FC = () => {
    return (
        <div className="border-bottom collapse" id="search-chat">
            <div className="px-1 py-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="input-group">
                                <input type="text" className="form-control form-control-lg" placeholder="Search in chat" aria-label="Search in chat" />
                                <button className="btn btn-white btn-lg border" type="button" id="search-in-chat-button"><i className="fa fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;