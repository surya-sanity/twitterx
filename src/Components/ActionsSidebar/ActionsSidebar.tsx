import { NavLink } from "react-router-dom"
import Logo from "../Logo"
import ActionsSidebarItems from "./ActionsSidebarItems"
import DarkModeSwitch from "../DarkModeSwitch"

const ActionsSidebar = () => {
  return (
    <div className="flex py-3 flex-col gap-y-5 sticky top-0">
      <section className="flex flex-col gap-y-3 ">
        <NavLink
          to={"/home"}
          className="p-3 hover:bg-lightOverlay  hover:dark:bg-darkOverlay mr-auto rounded-full">
          <Logo className="h-8 w-8" />
        </NavLink>
        <ActionsSidebarItems />
      </section >
      <DarkModeSwitch className="mr-auto" />
    </div>
  )
}

export default ActionsSidebar