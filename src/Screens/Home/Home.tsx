import { useEffect } from "react"
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom"


const Home = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isForYou = pathname.endsWith('foryou')
  const isFollowing = pathname.endsWith('following')

  useEffect(() => {
    if (pathname.endsWith('/home')) {
      navigate("/home/foryou")
    }
  }, [pathname, navigate])

  return (
    <section className="flex flex-col w-full relative ">
      <div className="flex flex-col gap-y-5 flex-1">
        <div className="border-[1px] border-lightBorder dark:border-darkBorder border-t-0 border-x-0 sticky top-0 backdrop-blur-lg ">
          <div className="font-semibold text-2xl px-3 py-5">Home</div>
          <div className="w-full grid grid-cols-2 content-center items-center">
            <NavLink
              to={'/home/foryou'}
              className={() => `px-3 items-center flex flex-col gap-y-3 justify-center pt-4 hover:bg-lightOverlay hover:dark:bg-darkOverlay cursor-pointer`}>
              <div className={`${isForYou ? "font-bold" : ""} transition-all`}>
                For you
                <span className={`${isForYou ? 'visible' : 'invisible'} block w-full h-[4px] rounded-full  bg-primary m-auto mt-3 transition-all`}></span>
              </div>
            </NavLink>

            <NavLink
              to={'/home/following'}
              className={() => `px-3 items-center flex flex-col gap-y-3 justify-center pt-4 hover:bg-lightOverlay hover:dark:bg-darkOverlay cursor-pointer `}>
              <div className={`${isFollowing ? "font-bold" : ""} transition-all`}>
                Following
                <span className={`${isFollowing ? 'visible' : 'invisible'} block w-full h-[4px] rounded-full  bg-primary m-auto mt-3 transition-all`}></span>
              </div>
            </NavLink>

          </div>
        </div>
        <Outlet />
      </div>
    </section>
  )
}

export default Home