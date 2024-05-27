import React from 'react';
import Navigate from '../../components/Layout/Navigation/Navigation';
import Message from './Message/Message';

const Chat: React.FC = () => {
    return (
        <div className="flex">
            <Navigate />
            <Message />
        </div>
    )
}

export default Chat;