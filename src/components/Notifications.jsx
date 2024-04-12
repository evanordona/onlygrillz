import React from 'react'
import Navbar from './Navbar'
import Posts from './Posts'
import Footer from './Footer'
import Content from './Content'

const Notifications = () => {
  return (
    <div className='h-screen w-screen flex flex-col text-white bg-gradient-to-b from-[#09092a] from-70% via-red-500 to-orange-300'>
      <Navbar title={"Notifications"} />

      <Content />

      <div className='lg:hidden h-screen flex justify-end flex-col mb-5'>
        <Footer />
      </div>
    </div>
  )
}

export default Notifications