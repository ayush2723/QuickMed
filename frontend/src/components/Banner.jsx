import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()

    return (
        <div className='flex bg-gradient-to-r from-accent to-secondary rounded-2xl px-8 sm:px-12 md:px-16 lg:px-16 my-24 md:mx-10 shadow-lg'>

            {/* ------- Left Side ------- */}
            <div className='flex-1 py-10 sm:py-12 md:py-20 lg:py-28 lg:pl-8'>
                <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight'>
                    <p>Book Appointment</p>
                    <p className='mt-2'>With 100+ Trusted Doctors</p>
                </div>
                <button onClick={() => { navigate('/login'); scrollTo(0, 0) }} className='bg-white text-sm sm:text-base text-neutral-700 font-medium px-10 py-4 rounded-full mt-8 hover:scale-105 hover:shadow-lg transition-all duration-300'>Create account</button>
            </div>

            {/* ------- Right Side ------- */}
            <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
                <img className='w-full absolute bottom-0 right-0 max-w-md rounded-2xl' src={assets.appointment_img} alt="" />
            </div>
        </div>
    )
}

export default Banner