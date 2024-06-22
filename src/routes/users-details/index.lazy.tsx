import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/users-details/')({
  component: () => <div>Hello /users/!</div>
})


export const UserDetails = () => {
  return (
    <div></div>

  )
}