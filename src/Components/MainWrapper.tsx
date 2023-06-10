import { Outlet, useLocation } from 'react-router-dom'
import ActionsSidebar from './ActionsSidebar/ActionsSidebar'
import ScrollToTop from './ScrollToTop'
import SearchSidebar from './SearchSidebar/SearchSidebar'
import UnSignedFooter from './UnSignedFooter'


const MainWrapper = ({ modalOpen }: { modalOpen: boolean }) => {


  return (
    <div className=' flex flex-col'>

      <div className="flex lg:grid grid-cols-4 bg-light dark:bg-dark text-dark dark:text-light pl-3 lg:px-[15%] relative">

        <section>
          <ActionsSidebar />
        </section>

        <section className={`w-full min-h-[100vh] lg:col-span-2 border-lightBorder dark:border-darkBorder border-[1px] border-y-0`}>
          <ScrollToTop />
          {/* {!modalOpen && <Outlet />} */}
          <Outlet />
        </section>

        <section>
          <SearchSidebar />
        </section>
      </div>
      <UnSignedFooter />
    </div>

  )
}

export default MainWrapper