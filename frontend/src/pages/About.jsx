import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-3xl pt-12 text-neutral-600'>
        <p>ABOUT <span className='text-neutral-800 font-bold'>US</span></p>
      </div>

      <div className='my-16 flex flex-col md:flex-row gap-16 bg-white rounded-2xl p-8 shadow-sm'>
        <img className='w-full md:max-w-[400px] rounded-2xl shadow-lg' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-8 md:w-2/4 text-base text-neutral-600 leading-relaxed'>
          <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <b className='text-neutral-800 text-lg'>Our Vision</b>
          <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>

      <div className='text-2xl my-8'>
        <p className='text-neutral-600'>WHY  <span className='text-neutral-800 font-bold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-24 gap-4'>
        <div className='border border-neutral-200 px-12 md:px-20 py-12 sm:py-20 flex flex-col gap-6 text-base hover:bg-primary hover:text-white transition-all duration-300 text-neutral-600 cursor-pointer rounded-2xl bg-white shadow-sm'>
          <b className='text-lg'>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border border-neutral-200 px-12 md:px-20 py-12 sm:py-20 flex flex-col gap-6 text-base hover:bg-primary hover:text-white transition-all duration-300 text-neutral-600 cursor-pointer rounded-2xl bg-white shadow-sm'>
          <b className='text-lg'>CONVENIENCE: </b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border border-neutral-200 px-12 md:px-20 py-12 sm:py-20 flex flex-col gap-6 text-base hover:bg-primary hover:text-white transition-all duration-300 text-neutral-600 cursor-pointer rounded-2xl bg-white shadow-sm'>
          <b className='text-lg'>PERSONALIZATION:</b>
          <p >Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

    </div>
  )
}

export default About
