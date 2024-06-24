import { useContext } from "react"
import { NavigationContext } from "../context/navigation-context"

export const useLayoutNavigation = () => {
    const layoutContext = useContext(NavigationContext)

    if (!layoutContext) {
        throw new Error("Navigation context not initialized");
    }

    const { isNavBarOpen, setIsNavBarOpen } = layoutContext;

    return {
        isNavBarOpen, setIsNavBarOpen
    }
}