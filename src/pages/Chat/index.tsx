import React from 'react';
import Nivigation from '../../components/Layout/Navigation/Navigate';
import Nav from '../../components/Layout/Nav/Nav';
import Message from './Message/Message';

const Chat: React.FC = () => {
    return (
        <div className="layout">
            <Nivigation />
            <Nav />
            <Message />
        </div>
    )
}

export default Chat;