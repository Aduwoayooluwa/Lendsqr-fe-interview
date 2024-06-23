import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Header from '../layout/header';
import { Toaster } from "react-hot-toast";
import Sidebar from '../layout/sidebar';


export const Route = createRootRoute({
  component: () => (
    <div className="app">
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
  ),
})
