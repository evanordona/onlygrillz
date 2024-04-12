import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Posts from './Posts'
import Content from './Content'

const CreatePost = () => {
    return (
        <div className='h-screen w-screen flex flex-col text-white bg-gradient-to-b from-[#09092a] from-70% via-red-500 to-orange-300'>
            <Navbar title={"Create Post"} />

            <Content />

            <div className='lg:hidden h-screen flex justify-end flex-col mb-5'>
                <Footer />
            </div>
        </div>
    )
}

export default CreatePost