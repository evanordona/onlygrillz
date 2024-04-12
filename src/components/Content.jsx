import React from 'react'
import Sidebar from './Sidebar'
import Posts from './Posts'

const Content = () => {
    return (
        <div className='flex w-screen'>
            <div className='hidden lg:block w-[30%] border-opacity-0 border-r-[2px] border-r-red-600 '>
                <Sidebar />
            </div>
            <div className='lg:w-[40%] w-screen border-opacity-0 lg:border-r-[2px] border-r-red-600'>
                <Posts />
            </div>


        </div>
    )
}

export default Content