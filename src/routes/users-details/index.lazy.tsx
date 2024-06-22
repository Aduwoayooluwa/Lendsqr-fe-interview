import { createLazyFileRoute } from '@tanstack/react-router'
import UserInfo from '../../pages/users/user-details'

export const Route = createLazyFileRoute('/users-details/')({
  component: () => <div><UserDetails /></div>
})


const UserDetails = () => {
  return (
    <div>
      <UserInfo />
    </div>

  )
}