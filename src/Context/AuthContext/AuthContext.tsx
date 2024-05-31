import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserData {
    id: number;
    UserName: string;
    Password: string;
    Avatar: string;
}

interface UserContextType {
    User: UserData[];
    addUserData: (ChatBotData: UserData) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useChatBotListContext must be used within a ChatBotListProvider');
    }
    return context;
};

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [User, setUser] = useState<UserData[]>([]);

    const addUserData = (ChatBotData: UserData) => {
        setUser((prevBots) => [...prevBots, ChatBotData]);
    };

    return (
        <UserContext.Provider value={{ User, addUserData }}>
            {children}
        </UserContext.Provider>
    );
};