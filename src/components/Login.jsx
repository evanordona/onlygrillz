import React, { useEffect } from 'react'
import Logo from '../assets/onlygrillzicon.png'
import { useNavigate } from 'react-router-dom'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import supabase from '../supabase'


const Login = () => {

    const navigate = useNavigate();

    
    supabase.auth.onAuthStateChange(async (event) => {
        if (event == "SIGNED_IN") {
            // forward to home page
            navigate('/home')
        } else if (event == 'SIGNED_OUT') {
            //forward to login page
            navigate('/')
        }
    })

    return (
        <div className='h-screen w-screen flex flex-col text-white bg-gradient-to-b from-[#09092a] from-70% via-red-500/90 to-orange-300/90'>

            <div className='flex justify-center items-center'>
                <div className='px-2 text-6xl lg:text-8xl mt-5 lg:mt-12 font-[Caveat] bg-gradient-to-r from-red-500 via-orange-400 to-red-500  bg-clip-text font-bold text-transparent'>OnlyGrillz</div>
            </div>

            <section>
                <div className="container px-6 pt-24">
                    <div className="flex flex-wrap items-center justify-evenly">
                        {/* <!-- Left column container with background--> */}
                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12 flex justify-center">
                            <img
                                src={Logo}
                                className="lg:w-[300px] w-[180px]"
                                alt="Phone image"
                            />
                        </div>

                        <Auth
                            supabaseClient={supabase}
                            appearance={{ theme: ThemeSupa }}
                            theme="dark"
                            providers={["google"]}

                        />

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login