import React from "react";

const Loading: React.FC = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>
        </div>
    )
}

export default Loading;