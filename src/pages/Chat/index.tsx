import React, { useEffect, useState } from 'react';
import Navigate from '../../components/Layout/Navigation/Navigation';
import Message from './Message/Message';

const Chat: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const [sideBarType, setSideBarType] = useState("");

    useEffect(() => {
    }, [sidebarOpen, sideBarType])

    return (
        <div className="flex h-screen bg-gray-200">
            <Navigate/>
            <Message />
        </div>
    )
}

export default Chat;