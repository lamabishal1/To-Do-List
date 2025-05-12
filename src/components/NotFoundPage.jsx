import React from 'react'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <>
  <div className="flex items-center justify-center h-[300px]">
  <div className='flex flex-col items-center text-2xl gap-2'>
        <div>Error</div>  
        <Link to='/'>HomePage</Link>
        </div>
        </div>
        </>
  )
}

export default NotFoundPage;