import { NavLink, useLocation } from 'react-router-dom'

interface HeaderTabItemPropType {
  to: string
  name: string
}

const HeaderTabItem = (props: HeaderTabItemPropType) => {
  const { to, name } = props;
  const { pathname } = useLocation()
  const isActive = pathname.endsWith(to)

  return (
    <NavLink
      to={to}
      className={`px-3 items-center flex flex-col gap-y-3 justify-center pt-4 hover:bg-lightOverlay hover:dark:bg-darkOverlay cursor-pointer`}>
      <div className={`${isActive ? "font-bold" : ""} transition-all`}>
        {name}
        <span className={`${isActive ? 'visible' : 'invisible'} block w-full h-[4px] rounded-full  bg-primary m-auto mt-3 transition-all`}></span>
      </div>
    </NavLink>
  )
}

export default HeaderTabItem