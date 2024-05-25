import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of a chat message
interface ChatMessage {
    id: number;
    user: string;
    message: string;
    timestamp: Date;
}

// Define the shape of the context
interface ChatContextType {
    chatHistory: ChatMessage[];
    addMessage: (user: string, message: string) => void;
}

// Create the context
const ChatContext = createContext<ChatContextType | undefined>(undefined);

// Custom hook to use the ChatContext
export const useChat = () => {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error('useChat must be used within a ChatProvider');
    }
    return context;
};

// Provider component
interface ChatProviderProps {
    children: ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);

    const addMessage = (user: string, message: string) => {
        const newMessage: ChatMessage = {
            id: chatHistory.length ? chatHistory[chatHistory.length - 1].id + 1 : 1,
            user,
            message,
            timestamp: new Date(),
        };
        setChatHistory((prevChatHistory) => [...prevChatHistory, newMessage]);
    };

    return (
        <ChatContext.Provider value={{ chatHistory, addMessage }}>
            {children}
        </ChatContext.Provider>
    );
};