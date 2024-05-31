import React from 'react';
import Route from './routes';
import './assets/css/style.css';
import { ChatBotListProvider } from './Context/ChatListContext/ChatListContext';

const App: React.FC = () => {
  return (
    <ChatBotListProvider>
      <Route />
    </ChatBotListProvider>
  )
}

export default App;