import { Outlet, useRouterState } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Toaster } from "react-hot-toast";
import Header from "./layout/header";
import Sidebar from "./layout/sidebar";
import NavigationProvider from "./context/navigation-context";
import AuthProvider from "./context/auth-context";

export const Wrapper = () => {

    const router = useRouterState();

    const location = router.location.pathname;
    console.log(location)

    if (location === "/") return (<Outlet />)

    return (
        <AuthProvider>
            <NavigationProvider>
                <div>
                    <header>
                        <Header />
                    </header>
                    <div>
                        <Sidebar>
                            <Outlet />
                        </Sidebar>
                        <TanStackRouterDevtools />
                        <Toaster />
                    </div>
                </div>
            </NavigationProvider>
        </AuthProvider>
    )
}