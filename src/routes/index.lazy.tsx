import { createLazyFileRoute } from '@tanstack/react-router'
// import Dashboard from '../pages/home/dashboard'
import "../style/index.scss"
import Users from '../pages/users/users'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="home-page" >
      {/* <Dashboard /> */}
      <Users />
    </div>
  )
}
