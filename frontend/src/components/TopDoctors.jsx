import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
const TopDoctors = () => {

    const navigate = useNavigate()

    const { doctors } = useContext(AppContext)

    return (
        <div className='flex flex-col items-center gap-8 my-28 text-neutral-800 md:mx-10 px-4'>
            <div className='text-center space-y-4'>
                <h1 className='text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight'>Top Doctors to Book</h1>
                <p className='sm:w-2/3 mx-auto text-center text-base md:text-lg text-neutral-600 leading-relaxed font-light'>Simply browse through our extensive list of trusted doctors.</p>
            </div>
            <div className='w-full grid grid-cols-auto gap-8 pt-12 gap-y-10 px-3 sm:px-0'>
                {doctors.slice(0, 10).map((item, index) => (
                    <div
                        onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }}
                        className='border border-neutral-100 rounded-3xl overflow-hidden cursor-pointer hover:translate-y-[-12px] hover:shadow-2xl transition-all duration-500 bg-white shadow-md group'
                        key={index}
                    >
                        <div className='relative overflow-hidden bg-gradient-to-br from-primary-light to-primary/10'>
                            <img className='w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110' src={item.image} alt="" />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                        </div>
                        <div className='p-6 space-y-3'>
                            <div className={`flex items-center gap-2 text-sm ${item.available ? 'text-success' : "text-neutral-500"}`}>
                                <p className={`w-2.5 h-2.5 rounded-full ${item.available ? 'bg-success animate-pulse' : "bg-neutral-400"}`}></p>
                                <p className='font-semibold'>{item.available ? 'Available' : "Not Available"}</p>
                            </div>
                            <p className='text-neutral-900 text-xl font-bold'>{item.name}</p>
                            <p className='text-neutral-600 text-sm font-medium'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={() => { navigate('/doctors'); scrollTo(0, 0) }}
                className='bg-gradient-to-r from-primary to-primary-dark text-white px-14 py-5 rounded-full mt-16 font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-lg'
            >
                View More
            </button>
        </div>

    )
}

export default TopDoctors