import React from 'react'
import { FaHome, FaRegBell, FaRegPlusSquare, FaSearch } from 'react-icons/fa'
import { IoPerson } from 'react-icons/io5'
import { LuChefHat } from 'react-icons/lu'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='flex justify-end'>
            <div className='flex flex-col gap-4 mt-5 mr-10 text-2xl font-[Poppins]'>

                <Link to={'/home'} className='flex hover:scale-[115%] transition-transform ease-in-out'><FaHome size={30} className='mr-3' /> Home</Link>
                <Link to={'/explore'} className='flex hover:scale-[115%] transition-transform ease-in-out'><FaSearch size={30} className='mr-3' />Explore</Link>
                <Link to={'/notifications'} className='flex hover:scale-[115%] transition-transform ease-in-out'><FaRegBell size={30} className='mr-3' />Notifications</Link>
                <Link to={'/joeai'} className='flex hover:scale-[115%] transition-transform ease-in-out'><LuChefHat size={30} className='mr-3' />JoeAI</Link>
                <Link to={'/profile'} className='flex hover:scale-[115%] transition-transform ease-in-out'><IoPerson size={30} className='mr-3' />Profile</Link>
                <Link to={'/createpost'} className='py-1 bg-orange-500 rounded-2xl flex hover:scale-[115%] transition-transform ease-in-out'><FaRegPlusSquare size={30} className='mx-5' />Post</Link>
            </div>
        </div>
    )
}

export default Sidebar