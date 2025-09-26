import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    return (
        <div id='speciality' className='flex flex-col items-center gap-6 py-20 text-neutral-800 bg-white rounded-2xl mx-4 shadow-sm'>
            <h1 className='text-3xl md:text-4xl font-bold text-center'>Find by Speciality</h1>
            <p className='sm:w-1/2 text-center text-base text-neutral-600 leading-relaxed'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
            <div className='flex sm:justify-center gap-6 pt-8 w-full overflow-scroll px-4'>
                {specialityData.map((item, index) => (
                    <Link to={`/doctors/${item.speciality}`} onClick={() => scrollTo(0, 0)} className='flex flex-col items-center text-sm cursor-pointer flex-shrink-0 hover:translate-y-[-8px] hover:shadow-lg transition-all duration-300 bg-neutral-50 p-6 rounded-xl border border-neutral-200' key={index}>
                        <img className='w-16 sm:w-20 mb-4' src={item.image} alt="" />
                        <p className='font-medium text-neutral-700'>{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SpecialityMenu