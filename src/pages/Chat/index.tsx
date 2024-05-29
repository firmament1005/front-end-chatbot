import React from 'react';
import Navigate from '../../components/Layout/Navigation/Navigation';
import Message from './Message/Message';

const Chat: React.FC = () => {
    return (
        <div className="flex h-screen bg-gray-200">
            <Navigate />
            <Message />
        </div>
    )
}

export default Chat;