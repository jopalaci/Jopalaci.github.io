import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags"></span>

        <Outlet />
        <span className="tags bottom-tags">
          <span className="bottom-tag-html">
            © 2022 Johnny Palacios
          </span>
        </span>
      </div>
    </div>
  )
}

export default Layout
