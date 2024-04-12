import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Content from './Content'
import supabase from '../supabase'

const Home = () => {

    const [user, setUser] = useState({})

    useEffect(() => {
        async function getUserData() {
            await supabase.auth.getUser().then((value) => {
                // value.data.user
                if (value.data?.user) {
                    console.log(value.data.user)
                    setUser(value.data.user)
                }
            })
        }
        getUserData();
    }, [])

    return (
        <div className='h-screen w-screen flex flex-col text-white bg-gradient-to-b from-[#09092a] from-70% via-red-500/90 to-orange-300/90'>
            <Navbar title={"OnlyGrillz"} home={true} />

            <Content />

            <div className='lg:hidden h-screen flex justify-end flex-col mb-5'>
                <Footer />
            </div>
        </div>
    )
}

export default Home