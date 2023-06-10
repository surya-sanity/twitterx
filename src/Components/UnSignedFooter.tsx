import { Link, useLocation } from "react-router-dom"

const UnSignedFooter = () => {

  const location = useLocation();

  return (
    <div className='sticky bottom-0 bg-primary w-full flex flex-row gap-x-3 py-2 justify-between px-[5%] lg:pl-[33%] lg:pr-[20%]'>
      <div className=' text-white hidden lg:flex flex-col justify-start items-start '>
        <div className='text-xl lg:text-2xl font-bold'>Don’t miss what’s happening</div>
        <div className='text-sm font-semibold'>People on Twitter are the first to know.</div>
      </div>

      <div className="flex items-center justify-evenly gap-3 w-full lg:w-auto">
        <Link
          className="bg-transparent border-light rounded-full border-[1px] px-4 py-2 text-white font-bold w-full lg:w-auto item-center justify-center flex"
          to="/modal"
          state={{ background: location }}
        >
          Log in
        </Link>
        <Link
          className=" rounded-full bg-light px-4 py-2 text-dark font-bold w-full lg:w-auto item-center justify-center flex"
          to="/signup?modal=signup">
          Sign up
        </Link>
      </div>
    </div>
  )
}

export default UnSignedFooter
