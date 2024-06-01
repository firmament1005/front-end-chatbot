import React from 'react';
import Route from './routes';
import './assets/css/style.css';
import { ChatBotListProvider } from './Context/ChatListContext/ChatListContext';
import { UserProvider } from './Context/AuthContext/AuthContext';

const App: React.FC = () => {
  return (
    <UserProvider>
      <ChatBotListProvider>
        <Route />
      </ChatBotListProvider>
    </UserProvider>
  )
}

export default App;