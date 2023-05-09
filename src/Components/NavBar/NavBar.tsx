import { Outlet } from 'react-router-dom'
import NavBarContent from './NavBarContent'

const NavBar = () => {

  return (
    <div className="flex flex-1 flex-col bg-light dark:bg-dark text-dark dark:text-light px-[5%] lg:px-[18%]">
      <NavBarContent />
      <Outlet />
    </div>
  )
}

export default NavBar