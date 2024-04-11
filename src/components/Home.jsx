import React from 'react'
import Posts from './Posts'
import Navbar from './Navbar'
import Footer from './Footer'

const Home = () => {
    return (
        <div className='h-screen w-screen flex flex-col text-white bg-[#565656]'>
            <Navbar title={"OnlyGrillz"} />

            <Posts />

            <div className='lg:hidden h-screen flex justify-end flex-col mb-5'>
                <Footer />
            </div>
        </div>
    )
}

export default Home