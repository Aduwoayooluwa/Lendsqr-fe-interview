import { createLazyFileRoute } from '@tanstack/react-router'
import Dashboard from '../pages/home/dashboard'
import "../style/index.scss"

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="home-page" >
      <Dashboard />
    </div>
  )
}
