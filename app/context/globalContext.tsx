'use client';

import { createContext, useContext, ReactNode, useState } from "react";

type GlobalContextType = {
    username: string;
    setUsername: (name: string) => void;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalProvider({ children }: { children: ReactNode }) {
    const [username, setUsername] = useState<string>('');

    return (
        <GlobalContext.Provider value={{ username, setUsername }}>
            {children}
        </GlobalContext.Provider>
    );
}

export function useSessionCounter() {
    const context = useContext(GlobalContext);
    if (!context) throw new Error("Context needs a Provider");
    return context;
}