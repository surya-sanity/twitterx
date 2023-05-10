import React from 'react'
import SearchBar from '../SearchBar'

const SearchSidebar = () => {
  return (
    <div className="hidden lg:flex py-3 flex-col gap-y-5 sticky top-0 px-5">
      <SearchBar
        searchFunction={() => { }}
        placeHolder='Search twitter'
      />
    </div>
  )
}

export default SearchSidebar