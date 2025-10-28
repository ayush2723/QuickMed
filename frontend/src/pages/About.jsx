import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='px-4 md:px-8 pb-20'>

      <div className='text-center pt-16 pb-8 space-y-3'>
        <p className='text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight'>
          ABOUT <span className='bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent'>US</span>
        </p>
        <p className='text-neutral-600 text-base md:text-lg font-light max-w-2xl mx-auto'>
          Discover our mission to revolutionize healthcare accessibility
        </p>
      </div>

      <div className='my-20 flex flex-col md:flex-row gap-16 bg-white rounded-3xl p-10 md:p-14 shadow-xl hover:shadow-2xl transition-all duration-500 group'>
        <div className='relative overflow-hidden rounded-2xl md:max-w-[450px] w-full'>
          <img
            className='w-full h-full object-cover rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105'
            src={assets.about_image}
            alt=""
          />
          <div className='absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl'></div>
        </div>
        <div className='flex flex-col justify-center gap-8 md:w-2/3 text-base md:text-lg text-neutral-600 leading-relaxed'>
          <p className='animate-fade-in font-light'>
            Welcome to <span className='font-semibold text-primary'>Prescripto</span>, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p className='font-light'>
            Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
          </p>
          <div className='space-y-4 pt-4'>
            <h3 className='text-neutral-900 text-2xl md:text-3xl font-bold tracking-tight'>Our Vision</h3>
            <p className='font-light'>
              Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
            </p>
          </div>
        </div>
      </div>

      <div className='text-center my-20 space-y-3'>
        <p className='text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight'>
          WHY <span className='bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent'>CHOOSE US</span>
        </p>
        <p className='text-neutral-600 text-base md:text-lg font-light max-w-2xl mx-auto'>
          Experience healthcare management designed with you in mind
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-24'>
        <div className='border border-neutral-100 px-10 md:px-12 py-16 flex flex-col gap-5 text-base hover:bg-gradient-to-br hover:from-primary hover:to-primary-dark hover:text-white transition-all duration-500 text-neutral-600 cursor-pointer rounded-3xl bg-white shadow-lg hover:shadow-2xl hover:translate-y-[-8px] group'>
          <div className='w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-500'>
            <svg className='w-7 h-7 text-primary group-hover:text-white transition-colors duration-500' fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h4 className='text-xl font-bold text-neutral-900 group-hover:text-white transition-colors duration-500'>EFFICIENCY</h4>
          <p className='leading-relaxed font-light'>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>

        <div className='border border-neutral-100 px-10 md:px-12 py-16 flex flex-col gap-5 text-base hover:bg-gradient-to-br hover:from-primary hover:to-primary-dark hover:text-white transition-all duration-500 text-neutral-600 cursor-pointer rounded-3xl bg-white shadow-lg hover:shadow-2xl hover:translate-y-[-8px] group'>
          <div className='w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-500'>
            <svg className='w-7 h-7 text-primary group-hover:text-white transition-colors duration-500' fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h4 className='text-xl font-bold text-neutral-900 group-hover:text-white transition-colors duration-500'>CONVENIENCE</h4>
          <p className='leading-relaxed font-light'>Access to a network of trusted healthcare professionals in your area.</p>
        </div>

        <div className='border border-neutral-100 px-10 md:px-12 py-16 flex flex-col gap-5 text-base hover:bg-gradient-to-br hover:from-primary hover:to-primary-dark hover:text-white transition-all duration-500 text-neutral-600 cursor-pointer rounded-3xl bg-white shadow-lg hover:shadow-2xl hover:translate-y-[-8px] group'>
          <div className='w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-500'>
            <svg className='w-7 h-7 text-primary group-hover:text-white transition-colors duration-500' fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h4 className='text-xl font-bold text-neutral-900 group-hover:text-white transition-colors duration-500'>PERSONALIZATION</h4>
          <p className='leading-relaxed font-light'>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

    </div>
  )
}

export default About
