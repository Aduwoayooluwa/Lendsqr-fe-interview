import { createLazyFileRoute } from '@tanstack/react-router'
import Login from '../../pages/auth/login'

export const Route = createLazyFileRoute('/auth/')({
  component: () => <div>
    <Login />
  </div>
})