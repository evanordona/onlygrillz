import React from 'react'
import Posts from './Posts'
import Footer from './Footer'

const Profile = () => {
    return (
        <div className='h-screen w-screen flex flex-col text-white bg-[#565656] font-[Araf]'>

            <div className='h-100% flex flex-col'>

                <div className='flex mb-2 border-b-2 border-red-600 py-8 justify-around items-center'>
                    <div className='ml-5 border-2 rounded-full size-[100px]'></div>
                    <button className='h-[40px] px-3 bg-orange-500 rounded-lg '>Edit Profile</button>
                </div>


                <div className='ml-5 text-3xl'>Username</div>
                <div className='ml-5'>@Username</div>
                <div className='ml-5'>Bio</div>

                <div className='mt-2 flex justify-between w-[11rem] ml-5'>
                    <div>0 Following</div>
                    <div>0 Followers</div>
                </div>

                <div className='mt-5 flex justify-evenly py-2 border-b-2 border-red-600'>
                    <div>Posts</div>
                    <div>Favorites</div>
                </div>
            </div>

            <Posts />

            <div className='lg:hidden h-screen flex justify-end flex-col mb-5'>
                <Footer />
            </div>
        </div>
    )
}

export default Profile