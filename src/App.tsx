import React from 'react';
import Route from './routes';
import './assets/css/style.css';
import { ChatBotListProvider } from './Context/ChatListContext/ChatListContext';
import { UserProvider } from './Context/AuthContext/AuthContext';
import { ChatHistoryProvider } from './Context/ChatHistoryContext/ChatHistoryContext';

const App: React.FC = () => {
  return (
    <ChatHistoryProvider>
      <UserProvider>
        <ChatBotListProvider>
          <Route />
        </ChatBotListProvider>
      </UserProvider>
    </ChatHistoryProvider>
  )
}

export default App;