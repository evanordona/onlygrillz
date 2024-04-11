import React from 'react'
import Navbar from './Navbar'
import Posts from './Posts'
import Footer from './Footer'

const Notifications = () => {
  return (
    <div className='h-screen w-screen flex flex-col text-white bg-gray-600'>
      <Navbar title={"Notifications"} />

      <Posts />

      <div className='h-screen flex justify-end flex-col mb-5'>
        <Footer />
      </div>
    </div>
  )
}

export default Notifications