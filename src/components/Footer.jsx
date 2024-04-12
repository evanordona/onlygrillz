import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaRegPlusSquare, FaSearch } from 'react-icons/fa'
import { LuChefHat } from "react-icons/lu";
import { IoPerson } from "react-icons/io5";

const Footer = () => {
    return (
        <div className='flex justify-evenly w-screen border-opacity-0 border-t-[2px] border-red-600 pt-2'>
            <Link to={'/home'}><FaHome size={30} /></Link>
            <Link to={'/explore'} ><FaSearch size={30}/></Link>
            <Link to={'/createpost'} ><FaRegPlusSquare size={30} /></Link>
            <Link to={'/joeai'} ><LuChefHat size={30}/></Link>
            <Link to={'/profile'} ><IoPerson size={30}/></Link>

        </div>
    )
}

export default Footer