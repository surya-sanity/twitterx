import React from 'react'
import { NavLink } from 'react-router-dom'
import { ActionsItem } from './ActionsSidebarItems'
import Logo from '../Logo'

interface ActionsSidebarItemPropType {
  item: ActionsItem
}

const ActionsSidebarItem = (props: ActionsSidebarItemPropType) => {
  const { item } = props

  return (
    <NavLink
      className='mr-auto'
      to={item.route}>
      <div className="flex flex-row gap-x-5 p-3 py-3 items hover:bg-lightOverlay  hover:dark:bg-darkOverlay  rounded-full items-center ">
        <Logo className='h-8 w-8' />
        <div className="text-xl hidden lg:block">{item.name}</div>
      </div>
    </NavLink>
  )
}

export default ActionsSidebarItem