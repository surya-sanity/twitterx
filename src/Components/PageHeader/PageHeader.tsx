import React from 'react'
import { Outlet } from 'react-router-dom'

interface PageHeaderPropType {
  children: React.ReactNode
  name: string
}

const PageHeader = (props: PageHeaderPropType) => {
  const { children, name } = props;

  return (
    <section className="flex flex-col w-full">
      <div className="flex flex-col gap-y-5">
        <div className="border-[1px] border-lightBorder dark:border-darkBorder border-t-0 border-x-0 sticky top-0 backdrop-blur-lg ">
          <div className="font-semibold text-2xl px-3 py-5">{name}</div>
          <div className="w-full grid grid-cols-2 content-center items-center">
            {children}
          </div>
        </div>
        <Outlet />
      </div>
    </section>
  )
}

export default PageHeader