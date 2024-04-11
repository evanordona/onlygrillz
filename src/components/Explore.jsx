import React from 'react'
import Navbar from './Navbar'
import Posts from './Posts'
import Footer from './Footer'

const Explore = () => {
    return (
        <div className='h-screen w-screen flex flex-col text-white bg-[#565656]'>
            <Navbar title={"Explore"} />

            <Posts />

            <div className='lg:hidden h-screen flex justify-end flex-col mb-5'>
                <Footer />
            </div>
        </div>
    )
}

export default Explore