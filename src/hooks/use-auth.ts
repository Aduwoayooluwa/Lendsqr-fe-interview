import { useContext } from "react"
import { AuthContext } from "../context/auth-context"

export function useAuth() {

    const authContext = useContext(AuthContext);

    if (!authContext) {
        console.log("Auth not defined")
    }

    const {
        isUserLoggedIn,
        setIsUserLoggedIn,
        userData,
        setUserData
    } = authContext;

    console.log(isUserLoggedIn)
    // logout function
    const onLogout = () => {
        setUserData(null)
        setIsUserLoggedIn(false)
        localStorage.clear();
        // window.location.assign("/")
    }

    return {
        isUserLoggedIn,
        setIsUserLoggedIn,
        userData,
        setUserData,
        onLogout
    }
}