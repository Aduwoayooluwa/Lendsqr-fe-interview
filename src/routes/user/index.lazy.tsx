import { createLazyFileRoute } from '@tanstack/react-router'
import Users from '../../pages/users/users'

export const Route = createLazyFileRoute('/user/')({
  component: Index,
})

function Index() {
  return (
    <div className="home-page" >
      <Users />
    </div>
  )
}