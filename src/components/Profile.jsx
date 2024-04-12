import React from 'react'

import Footer from './Footer'
import Content from './Content'
import { createClient } from '@supabase/supabase-js'
import { useNavigate } from 'react-router-dom'
import supabase from '../supabase'


const Profile = () => {

    const navigate = useNavigate()

    const signOutUser = async () => {
        const { error } = await supabase.auth.signOut()

        navigate('/')
    }

    return (
        <div className='flex flex-col h-screen w-screen font-[Poppins] text-white bg-gradient-to-b from-[#09092a] from-70% via-red-500 to-orange-300'>
            <div className='w-screen flex flex-col justify-center items-center border-opacity-0 border-b-[2px] border-red-600'>

                <div className='flex mb-2 w-[30rem] py-8 justify-around items-center'>
                    <div className='ml-5 border-2 rounded-full size-[100px] lg:size-[175px]'></div>

                    <div className='gap-4 flex flex-col'>

                        <div className='ml-5 text-3xl lg:text-5xl'>Evgoat</div>
                        <div className='ml-5'>@evgoat</div>
                        <div className='ml-5'>The founder of OnlyGrillz</div>

                    </div>

                </div>
                <div >
                    <button className='h-[40px] px-3 bg-orange-500 rounded-lg mr-5 '>Edit Profile</button>
                    <button className='h-[40px] px-3 bg-red-500 rounded-lg' onClick={()=>{signOutUser()}}>Logout</button>
                </div>




                <div className='w-[12rem] mt-2 flex justify-between ml-5'>
                    <div>0 Following</div>
                    <div>0 Followers</div>
                </div>

                <div className='w-[10rem] mt-5 flex justify-evenly'>
                    <div className='border-orange-500 border-b-[6px] rounded-lg px-1'>Posts</div>
                    <div className='border-hidden border-orange-500 opacity-65 border-b-[6px] rounded-lg px-1'>Favorites</div>
                </div>
            </div>

            <Content />

            <div className='lg:hidden h-screen flex justify-end flex-col mb-5'>
                <Footer />
            </div>
        </div>
    )
}

export default Profile