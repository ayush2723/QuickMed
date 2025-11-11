import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'

const Sidebar = () => {

  const { dToken } = useContext(DoctorContext)
  const { aToken } = useContext(AdminContext)

  return (
    <div className='min-h-screen bg-white/80 backdrop-blur-sm border-r border-neutral-200 shadow-sm'>
      {aToken && <ul className='text-neutral-700 mt-8 space-y-2 px-3'>

        <NavLink to={'/admin-dashboard'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-4 md:px-6 md:min-w-64 cursor-pointer rounded-xl transition-all duration-300 group ${isActive ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg' : 'hover:bg-primary/5 hover:translate-x-1'}`}>
          <img className='min-w-5 transition-transform duration-300 group-hover:scale-110' src={assets.home_icon} alt='' />
          <p className='hidden md:block font-medium'>Dashboard</p>
        </NavLink>
        <NavLink to={'/all-appointments'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-4 md:px-6 md:min-w-64 cursor-pointer rounded-xl transition-all duration-300 group ${isActive ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg' : 'hover:bg-primary/5 hover:translate-x-1'}`}>
          <img className='min-w-5 transition-transform duration-300 group-hover:scale-110' src={assets.appointment_icon} alt='' />
          <p className='hidden md:block font-medium'>Appointments</p>
        </NavLink>
        <NavLink to={'/add-doctor'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-4 md:px-6 md:min-w-64 cursor-pointer rounded-xl transition-all duration-300 group ${isActive ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg' : 'hover:bg-primary/5 hover:translate-x-1'}`}>
          <img className='min-w-5 transition-transform duration-300 group-hover:scale-110' src={assets.add_icon} alt='' />
          <p className='hidden md:block font-medium'>Add Doctor</p>
        </NavLink>
        <NavLink to={'/doctor-list'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-4 md:px-6 md:min-w-64 cursor-pointer rounded-xl transition-all duration-300 group ${isActive ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg' : 'hover:bg-primary/5 hover:translate-x-1'}`}>
          <img className='min-w-5 transition-transform duration-300 group-hover:scale-110' src={assets.people_icon} alt='' />
          <p className='hidden md:block font-medium'>Doctors List</p>
        </NavLink>
      </ul>}

      {dToken && <ul className='text-neutral-700 mt-8 space-y-2 px-3'>
        <NavLink to={'/doctor-dashboard'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-4 md:px-6 md:min-w-64 cursor-pointer rounded-xl transition-all duration-300 group ${isActive ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg' : 'hover:bg-primary/5 hover:translate-x-1'}`}>
          <img className='min-w-5 transition-transform duration-300 group-hover:scale-110' src={assets.home_icon} alt='' />
          <p className='hidden md:block font-medium'>Dashboard</p>
        </NavLink>
        <NavLink to={'/doctor-appointments'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-4 md:px-6 md:min-w-64 cursor-pointer rounded-xl transition-all duration-300 group ${isActive ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg' : 'hover:bg-primary/5 hover:translate-x-1'}`}>
          <img className='min-w-5 transition-transform duration-300 group-hover:scale-110' src={assets.appointment_icon} alt='' />
          <p className='hidden md:block font-medium'>Appointments</p>
        </NavLink>
        <NavLink to={'/doctor-profile'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-4 md:px-6 md:min-w-64 cursor-pointer rounded-xl transition-all duration-300 group ${isActive ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg' : 'hover:bg-primary/5 hover:translate-x-1'}`}>
          <img className='min-w-5 transition-transform duration-300 group-hover:scale-110' src={assets.people_icon} alt='' />
          <p className='hidden md:block font-medium'>Profile</p>
        </NavLink>
      </ul>}
    </div>
  )
}

export default Sidebar