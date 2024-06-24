import React, { createContext, useState } from "react";

type NavigationType = {
    isNavBarOpen: boolean
    setIsNavBarOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const NavigationContext = createContext<NavigationType|null>(null);

export default function NavigationProvider({ children }: {
    children: React.ReactNode
}) {
    const [isNavBarOpen, setIsNavBarOpen] = useState(false);

    return (
        <NavigationContext.Provider value={{
            isNavBarOpen,
            setIsNavBarOpen
        }}>
            { children }
        </NavigationContext.Provider>

    )
}

