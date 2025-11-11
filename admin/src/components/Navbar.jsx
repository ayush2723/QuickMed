import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const { dToken, setDToken } = useContext(DoctorContext)
  const { aToken, setAToken } = useContext(AdminContext)

  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
    dToken && setDToken('')
    dToken && localStorage.removeItem('dToken')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
  }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-4 border-b border-neutral-200 bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50'>
      <div className='flex items-center gap-3 text-xs'>
        <img onClick={() => navigate('/')} className='w-36 sm:w-40 cursor-pointer transition-transform duration-300 hover:scale-105' src={assets.admin_logo} alt="" />
        <span className='px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-primary-dark/10 border border-primary/20 text-primary font-semibold text-xs'>
          {aToken ? 'Admin' : 'Doctor'}
        </span>
      </div>
      <button
        onClick={() => logout()}
        className='bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-semibold px-8 py-2.5 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-md'
      >
        Logout
      </button>
    </div>
  )
}

export default Navbar