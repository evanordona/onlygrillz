import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Navbar = ({ title }) => {
    return (
        <div className='flex flex-col border-b-2 border-red-600 pb-3 mt-2 font-[Araf]'>
            <div className='flex items-center justify-between mx-5'>
                <div className='size-[40px] rounded-full border-2'></div>
                <div className='font-[Caveat] text-4xl bg-gradient-to-r from-red-500 via-orange-400 to-red-500 bg-clip-text font-bold text-transparent'>{title}</div>
                <div><FaSearch size={25} /></div>
            </div>

            {
                title == "OnlyGrillz" && <div className='flex justify-evenly mt-5'>
                    <div>For You</div>
                    <div>Following</div>
                </div>
            }

        </div>
    )
}

export default Navbar