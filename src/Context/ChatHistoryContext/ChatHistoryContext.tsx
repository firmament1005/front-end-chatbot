import { createContext, useContext, useState, ReactNode } from "react"

//ChatHistory Data Structure Definition
interface ChatHistory {
    id: number;
    Message: string;
    Date: string;
    Coming: boolean;
    ChatBotID: number | null;
    UserID : number;
}

//ChatHistory Type
interface ChatHistoryContextType {
    ChatHistoryData: ChatHistory[];
    addChatHistory: (chatHistoryData: ChatHistory) => void;
    deleteChatHistory: (id: number) => void;
}

//ChatHistory Context Create
const ChatHistoryContext = createContext<ChatHistoryContextType | undefined>(undefined);

export const useChatHistoryContext = (): ChatHistoryContextType => {
    const context = useContext(ChatHistoryContext);
    if (!context) {
        throw new Error('useChatHistoryContext must be used within a ChatHistoryProvider');
    }
    return context;
};

//ChatHistory Props Definition
interface ChatHistoryProviderProps {
    children: ReactNode;
}

//ChatHistory Provider Definition
export const ChatHistoryProvider: React.FC<ChatHistoryProviderProps> = ({ children }) => {
    const [ChatHistoryData, setChatHistory] = useState<ChatHistory[]>([]);

    const addChatHistory = (chatHistoryData: ChatHistory) => {
        setChatHistory((prevChatHistory) => [...prevChatHistory, chatHistoryData]);
    };


    const deleteChatHistory = (id: number) => {
        setChatHistory(prevChatHistory => prevChatHistory.filter(item => item.id !== id));
    }

    return (
        <ChatHistoryContext.Provider value={{ ChatHistoryData, addChatHistory, deleteChatHistory }}>
            {children}
        </ChatHistoryContext.Provider>
    );
}