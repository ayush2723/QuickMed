import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const Doctors = () => {

  const { speciality } = useParams()

  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div>
      <p className='text-neutral-600 text-lg mb-8'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-8 mt-8'>
        <button onClick={() => setShowFilter(!showFilter)} className={`py-3 px-6 border rounded-lg text-sm font-medium transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : 'border-neutral-300 text-neutral-600'}`}>Filters</button>
        <div className={`flex-col gap-3 text-sm text-neutral-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-4 py-3 pr-16 border border-neutral-300 rounded-lg transition-all cursor-pointer font-medium hover:shadow-sm ${speciality === 'General physician' ? 'bg-primary-light text-primary-dark border-primary' : 'hover:bg-neutral-50'}`}>General physician</p>
          <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-4 py-3 pr-16 border border-neutral-300 rounded-lg transition-all cursor-pointer font-medium hover:shadow-sm ${speciality === 'Gynecologist' ? 'bg-primary-light text-primary-dark border-primary' : 'hover:bg-neutral-50'}`}>Gynecologist</p>
          <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-4 py-3 pr-16 border border-neutral-300 rounded-lg transition-all cursor-pointer font-medium hover:shadow-sm ${speciality === 'Dermatologist' ? 'bg-primary-light text-primary-dark border-primary' : 'hover:bg-neutral-50'}`}>Dermatologist</p>
          <p onClick={() => speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-4 py-3 pr-16 border border-neutral-300 rounded-lg transition-all cursor-pointer font-medium hover:shadow-sm ${speciality === 'Pediatricians' ? 'bg-primary-light text-primary-dark border-primary' : 'hover:bg-neutral-50'}`}>Pediatricians</p>
          <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-4 py-3 pr-16 border border-neutral-300 rounded-lg transition-all cursor-pointer font-medium hover:shadow-sm ${speciality === 'Neurologist' ? 'bg-primary-light text-primary-dark border-primary' : 'hover:bg-neutral-50'}`}>Neurologist</p>
          <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-4 py-3 pr-16 border border-neutral-300 rounded-lg transition-all cursor-pointer font-medium hover:shadow-sm ${speciality === 'Gastroenterologist' ? 'bg-primary-light text-primary-dark border-primary' : 'hover:bg-neutral-50'}`}>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-6 gap-y-8'>
          {filterDoc.map((item, index) => (
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
    </div>
  )
}

export default Doctors