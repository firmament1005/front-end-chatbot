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

    return (
        <ChatBotListContext.Provider value={{ Bot, addChatBot }}>
            {children}
        </ChatBotListContext.Provider>
    );
};
