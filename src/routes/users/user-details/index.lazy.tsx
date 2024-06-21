import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/users/user-details/')({
  component: () => <div>Hello /users/user-details/!</div>
})