import React from 'react'
import { FaSearch } from 'react-icons/fa'
import Logo from '../assets/onlygrillzicon.png'

const Navbar = ({ title, home }) => {
    return (
        <div className='flex flex-col border-opacity-0 border-b-[2px] border-red-600 pb-3 mt-2 font-[Poppins] items-center'>
            <div className='xl:w-[80rem] md:w-[40rem] w-screen flex flex-col justify-center items-center'>

                <div className='flex xl:w-[80rem] md:w-[40rem] w-screen items-center justify-between'>
                    <img className={`size-[40px] ml-2 lg:size-[100px]`} src={Logo}></img>
                    
                    
                    <div className='font-[Caveat] text-5xl px-2 lg:text-6xl bg-gradient-to-r from-red-500 via-orange-400 to-red-500 bg-clip-text font-bold text-transparent'>{title}</div>
                    
                    
                    <div className='mr-2'><FaSearch size={25} /></div>
                </div>

                <div className='w-[15rem] lg:text-xl'>
                    {
                        home && <div className='flex justify-evenly mt-5'>
                            <button className='border-orange-500 border-b-[6px] rounded-lg px-1'>For You</button>
                            <button className='px-1 border-b-[6px] border-transparent opacity-65'>Following</button>
                        </div>
                    }
                </div>

            </div>
        </div>
    )
}

export default Navbar