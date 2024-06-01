import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ChatBotList {
    id: number;
    ChatBotName: string;
    ChatBotCategory: string;
    ChatHistoryID: number;
}

interface ChatBotListContextType {
    Bot: ChatBotList[];
    addChatBot: (ChatBotData: ChatBotList) => void;
    updateChatBot: (id: number, name: string) => void;
    deleteChatBot: (id: number) => void;
}

const ChatBotListContext = createContext<ChatBotListContextType | undefined>(undefined);

export const useChatBotListContext = (): ChatBotListContextType => {
    const context = useContext(ChatBotListContext);
    if (!context) {
        throw new Error('useChatBotListContext must be used within a ChatBotListProvider');
    }
    return context;
};

interface ChatBotListProviderProps {
    children: ReactNode;
}

export const ChatBotListProvider: React.FC<ChatBotListProviderProps> = ({ children }) => {
    const [Bot, setChatBot] = useState<ChatBotList[]>([]);

    const addChatBot = (ChatBotData: ChatBotList) => {
        setChatBot((prevBots) => [...prevBots, ChatBotData]);
    };

    const updateChatBot = (id: number, ChatBotName: string) => {
        setChatBot(prevItems =>
            prevItems.map(item => (item.id === id ? { ...item, ChatBotName } : item))
        );
    };

    const deleteChatBot = (id: number) => {
        setChatBot(prevItems => prevItems.filter(item => item.id !== id));
    };

    return (
        <ChatBotListContext.Provider value={{ Bot, addChatBot, updateChatBot, deleteChatBot }}>
            {children}
        </ChatBotListContext.Provider>
    );
};
