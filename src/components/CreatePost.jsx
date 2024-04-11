import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Posts from './Posts'

const CreatePost = () => {
    return (
        <div className='h-screen w-screen flex flex-col text-white bg-[#565656]'>
            <Navbar title={"Create Post"} />

            <Posts />

            <div className='lg:hidden h-screen flex justify-end flex-col mb-5'>
                <Footer />
            </div>
        </div>
    )
}

export default CreatePost