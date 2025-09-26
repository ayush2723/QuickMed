import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
const RelatedDoctors = ({ speciality, docId }) => {

    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)

    const [relDoc, setRelDoc] = useState([])

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)
            setRelDoc(doctorsData)
        }
    }, [doctors, speciality, docId])

    return (
        <div className='flex flex-col items-center gap-6 my-20 text-neutral-800'>
            <h1 className='text-3xl md:text-4xl font-bold text-center'>Related Doctors</h1>
            <p className='sm:w-1/2 text-center text-base text-neutral-600 leading-relaxed'>Simply browse through our extensive list of trusted doctors.</p>
            <div className='w-full grid grid-cols-auto gap-6 pt-8 gap-y-8 px-3 sm:px-0'>
                {relDoc.map((item, index) => (
                    <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-neutral-200 rounded-2xl overflow-hidden cursor-pointer hover:translate-y-[-8px] hover:shadow-xl transition-all duration-300 bg-white' key={index}>
                        <img className='bg-primary-light w-full h-48 object-cover' src={item.image} alt="" />
                        <div className='p-6'>
                            <div className={`flex items-center gap-2 text-sm mb-3 ${item.available ? 'text-success' : "text-neutral-500"}`}>
                                <p className={`w-3 h-3 rounded-full ${item.available ? 'bg-success' : "bg-neutral-400"}`}></p><p className='font-medium'>{item.available ? 'Available' : "Not Available"}</p>
                            </div>
                            <p className='text-neutral-800 text-lg font-semibold mb-1'>{item.name}</p>
                            <p className='text-neutral-600 text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RelatedDoctors