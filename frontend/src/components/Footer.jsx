import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10 bg-white rounded-2xl shadow-sm'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-16 my-12 mt-48 text-sm px-8 py-12'>

        <div>
          <img className='mb-6 w-44' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-neutral-600 leading-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

        <div>
          <p className='text-xl font-semibold mb-6 text-neutral-800'>COMPANY</p>
          <ul className='flex flex-col gap-3 text-neutral-600'>
            <li className='hover:text-primary cursor-pointer transition-colors duration-200'>Home</li>
            <li className='hover:text-primary cursor-pointer transition-colors duration-200'>About us</li>
            <li className='hover:text-primary cursor-pointer transition-colors duration-200'>Delivery</li>
            <li className='hover:text-primary cursor-pointer transition-colors duration-200'>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-semibold mb-6 text-neutral-800'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-3 text-neutral-600'>
            <li>+1-212-456-7890</li>
            <li>greatstackdev@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr className='border-neutral-200' />
        <p className='py-6 text-sm text-center text-neutral-500'>Copyright 2024 @ Prescripto.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
