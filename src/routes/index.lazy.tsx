import { createLazyFileRoute } from '@tanstack/react-router'
// import Dashboard from '../pages/home/dashboard'
import "../style/index.scss"
import Login from '../pages/auth/login'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="home-page" >
      {/* <Dashboard /> */}
      <Login />
    </div>
  )
}
