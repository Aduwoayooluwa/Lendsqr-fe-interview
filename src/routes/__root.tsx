import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Toaster } from "react-hot-toast";
//import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import Header from '../layout/header'
import "../style/app.scss"
import Sidebar from '../layout/sidebar'

export const Route = createRootRoute({
  component: () => (
    <div>
      <header>
        <Header />
      </header>

      <Sidebar>

        <Outlet />
        {/* <TanStackRouterDevtools /> */}
        <Toaster />
      </Sidebar>
    </div>
  ),
})
