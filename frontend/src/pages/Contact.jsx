import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='px-4 md:px-8 pb-20'>

      <div className='text-center pt-12 pb-6 space-y-2'>
        <p className='text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight'>
          CONTACT <span className='bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent'>US</span>
        </p>
        <p className='text-neutral-600 text-sm md:text-base font-light max-w-xl mx-auto'>
          We're here to help and answer any question you might have
        </p>
      </div>

      <div className='my-12 flex flex-col justify-center md:flex-row gap-12 text-base bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 group max-w-5xl mx-auto'>
        <div className='relative overflow-hidden rounded-2xl md:max-w-[360px] w-full'>
          <img
            className='w-full h-full object-cover rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105'
            src={assets.contact_image}
            alt=""
          />
          <div className='absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl'></div>
        </div>
        <div className='flex flex-col justify-center items-start gap-6 flex-1'>
          <div className='space-y-3 p-5 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl w-full border border-primary/10 hover:border-primary/30 transition-all duration-500'>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center'>
                <svg className='w-5 h-5 text-primary' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className='font-bold text-lg text-neutral-900'>OUR OFFICE</p>
            </div>
            <div className='pl-13 space-y-1'>
              <p className='text-neutral-700 leading-relaxed text-sm font-light'>
                54709 Willms Station<br />Suite 350, Washington, USA
              </p>
            </div>
          </div>

          <div className='space-y-3 p-5 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl w-full border border-primary/10 hover:border-primary/30 transition-all duration-500'>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center'>
                <svg className='w-5 h-5 text-primary' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className='font-bold text-lg text-neutral-900'>GET IN TOUCH</p>
            </div>
            <div className='pl-13 space-y-2'>
              <div className='flex items-center gap-2 text-neutral-700 text-sm font-light'>
                <svg className='w-4 h-4 text-primary' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(415) 555-0132</span>
              </div>
              <div className='flex items-center gap-2 text-neutral-700 text-sm font-light'>
                <svg className='w-4 h-4 text-primary' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <span>greatstackdev@gmail.com</span>
              </div>
            </div>
          </div>

          <div className='space-y-4 p-5 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl w-full border border-accent/10 hover:border-accent/30 transition-all duration-500'>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center'>
                <svg className='w-5 h-5 text-accent' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className='font-bold text-lg text-neutral-900'>CAREERS</p>
            </div>
            <div className='pl-13'>
              <p className='text-neutral-700 leading-relaxed text-sm mb-3 font-light'>
                Learn more about our teams and job openings.
              </p>
              <button className='bg-gradient-to-r from-accent to-secondary text-white px-8 py-3 text-sm font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-500 rounded-full shadow-lg'>
                Explore Jobs
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact
