import React from 'react'
import Navbar from './Navbar'
import Posts from './Posts'
import Footer from './Footer'
import { BsArrowRightSquare } from "react-icons/bs";
import Content from './Content';

const JoeAi = () => {
    return (
        <div className='h-screen w-screen flex flex-col text-white bg-gradient-to-b from-[#09092a] from-70% via-red-500 to-orange-300'>
            <Navbar title={"JoeAi"} />

            <Content />
            <div className='mx-5 mt-5 font-[Araf] flex flex-col'>
            
                {/* <div>
                    Smokey Joe: Well now, what's this? Someone's in need of some good ol' grill wisdom? You've come to the right place, partner! The name's Smokey Joe, and I'm the grill master these here parts. Been tendin' the fires and slingin' slabs o' meat over the coals since I was knee-high to a jalapeño!
                </div> */}

                {/* <div className='flex justify-center items-center'>

                    <input className='rounded-md p-2 px-14 mr-4'></input>
                    <BsArrowRightSquare size={30}  />
                </div> */}


            </div>

            <div className='lg:hidden h-screen flex justify-end flex-col mb-5'>
                <Footer />
            </div>
        </div>
    )
}

export default JoeAi