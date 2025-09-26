import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-3xl pt-12 text-neutral-600'>
        <p>CONTACT <span className='text-neutral-800 font-bold'>US</span></p>
      </div>

      <div className='my-16 flex flex-col justify-center md:flex-row gap-16 mb-32 text-base bg-white rounded-2xl p-8 shadow-sm'>
        <img className='w-full md:max-w-[400px] rounded-2xl shadow-lg' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-8'>
          <p className='font-bold text-xl text-neutral-800'>OUR OFFICE</p>
          <p className='text-neutral-600 leading-relaxed'>54709 Willms Station <br /> Suite 350, Washington, USA</p>
          <p className='text-neutral-600 leading-relaxed'>Tel: (415) 555-0132 <br /> Email: greatstackdev@gmail.com</p>
          <p className='font-bold text-xl text-neutral-800'>CAREERS AT PRESCRIPTO</p>
          <p className='text-neutral-600 leading-relaxed'>Learn more about our teams and job openings.</p>
          <button className='border border-primary px-10 py-4 text-base font-medium hover:bg-primary hover:text-white transition-all duration-300 rounded-lg shadow-sm'>Explore Jobs</button>
        </div>
      </div>

    </div>
  )
}

export default Contact
