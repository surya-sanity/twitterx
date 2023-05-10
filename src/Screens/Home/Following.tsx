import React from 'react'
import ScrollToTop from '../../Components/ScrollToTop'

const Following = () => {
  return (
    <div className='flex flex-col gap-y-2'>
      <ScrollToTop />
      <div className='h-[90vh]  m-3 bg-lightOverlay rounded-lg dark:bg-darkOverlay flex items-center justify-center'>
        Following
      </div>
      <div className='h-[90vh]  m-3 bg-lightOverlay rounded-lg dark:bg-darkOverlay flex items-center justify-center'>
        Following
      </div>
      <div className='h-[90vh]  m-3 bg-lightOverlay rounded-lg dark:bg-darkOverlay flex items-center justify-center'>
        Following
      </div>
    </div>
  )
}

export default Following