import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

  const navigate = useNavigate()

  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  return (
    <div className='flex items-center justify-between text-sm py-6 mb-8 border-b border-neutral-200 bg-white shadow-sm rounded-lg px-6'>
      <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />
      <ul className='md:flex items-start gap-8 font-medium hidden'>
        <NavLink to='/' >
          <li className='py-2 px-3 rounded-lg hover:bg-primary-light hover:text-primary-dark transition-all duration-200'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/doctors' >
          <li className='py-2 px-3 rounded-lg hover:bg-primary-light hover:text-primary-dark transition-all duration-200'>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about' >
          <li className='py-2 px-3 rounded-lg hover:bg-primary-light hover:text-primary-dark transition-all duration-200'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact' >
          <li className='py-2 px-3 rounded-lg hover:bg-primary-light hover:text-primary-dark transition-all duration-200'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-4 '>
        {
          token && userData
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-10 h-10 rounded-full border-2 border-primary-light shadow-sm' src={userData.image} alt="" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />
              <div className='absolute top-0 right-0 pt-16 text-base font-medium text-neutral-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-white rounded-xl shadow-lg border border-neutral-200 flex flex-col gap-1 p-2'>
                  <p onClick={() => navigate('/my-profile')} className='hover:bg-primary-light hover:text-primary-dark cursor-pointer px-4 py-3 rounded-lg transition-all duration-200'>My Profile</p>
                  <p onClick={() => navigate('/my-appointments')} className='hover:bg-primary-light hover:text-primary-dark cursor-pointer px-4 py-3 rounded-lg transition-all duration-200'>My Appointments</p>
                  <p onClick={logout} className='hover:bg-error hover:text-white cursor-pointer px-4 py-3 rounded-lg transition-all duration-200'>Logout</p>
                </div>
              </div>
            </div>
            : <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-medium hidden md:block hover:bg-primary-dark transition-all duration-200 shadow-sm'>Create account</button>
        }
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />

        {/* ---- Mobile Menu ---- */}
        <div className={`md:hidden ${showMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all shadow-lg`}>
          <div className='flex items-center justify-between px-6 py-8 border-b border-neutral-200'>
            <img src={assets.logo} className='w-36' alt="" />
            <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-7' alt="" />
          </div>
          <ul className='flex flex-col items-center gap-4 mt-8 px-6 text-lg font-medium'>
            <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-6 py-3 rounded-lg inline-block hover:bg-primary-light hover:text-primary-dark transition-all duration-200'>HOME</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/doctors' ><p className='px-6 py-3 rounded-lg inline-block hover:bg-primary-light hover:text-primary-dark transition-all duration-200'>ALL DOCTORS</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about' ><p className='px-6 py-3 rounded-lg inline-block hover:bg-primary-light hover:text-primary-dark transition-all duration-200'>ABOUT</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact' ><p className='px-6 py-3 rounded-lg inline-block hover:bg-primary-light hover:text-primary-dark transition-all duration-200'>CONTACT</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar