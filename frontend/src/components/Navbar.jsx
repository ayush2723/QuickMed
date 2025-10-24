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
    <nav className='sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-neutral-200/50 shadow-soft'>
      <div className='flex items-center justify-between px-6 py-4 max-w-7xl mx-auto'>
        <img 
          onClick={() => navigate('/')} 
          className='h-12 cursor-pointer transition-transform hover:scale-105' 
          src={assets.logo} 
          alt="HealthCare Logo" 
        />
        
        <ul className='hidden md:flex items-center gap-1'>
          <NavLink to='/' className={({ isActive }) => 
            `px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
              isActive 
                ? 'bg-primary-600 text-white shadow-medium' 
                : 'text-neutral-700 hover:bg-primary-50 hover:text-primary-700'
            }`
          }>
            HOME
          </NavLink>
          <NavLink to='/doctors' className={({ isActive }) => 
            `px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
              isActive 
                ? 'bg-primary-600 text-white shadow-medium' 
                : 'text-neutral-700 hover:bg-primary-50 hover:text-primary-700'
            }`
          }>
            DOCTORS
          </NavLink>
          <NavLink to='/about' className={({ isActive }) => 
            `px-5 py.5 rounded-xl font-medium text-sm transition-all duration-200 ${
              isActive 
                ? 'bg-primary-600 text-white shadow-medium' 
                : 'text-neutral-700 hover:bg-primary-50 hover:text-primary-700'
            }`
          }>
            ABOUT
          </NavLink>
          <NavLink to='/contact' className={({ isActive }) => 
            `px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
              isActive 
                ? 'bg-primary-600 text-white shadow-medium' 
                : 'text-neutral-700 hover:bg-primary-50 hover:text-primary-700'
            }`
          }>
            CONTACT
          </NavLink>
        </ul>

        <div className='flex items-center gap-4'>
          {token && userData ? (
            <div className='relative group'>
              <button className='flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-neutral-50 transition-all duration-200'>
                <img 
                  className='w-10 h-10 rounded-full border-2 border-primary-500 object-cover' 
                  src={userData.image} 
                  alt="Profile" 
                />
                <img 
                  className='w-4 h-4 transition-transform group-hover:rotate-180 duration-300' 
                  src={assets.dropdown_icon} 
                  alt="Dropdown" 
                />
              </button>
              
              <div className='absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-large border border-neutral-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden'>
                <div className='p-2'>
                  <button 
                    onClick={() => navigate('/my-profile')} 
                    className='w-full text-left px-4 py-3 rounded-xl hover:bg-primary-50 hover:text-primary-700 transition-all duration-200 font-medium text-neutral-700'
                  >
                    My Profile
                  </button>
                  <button 
                    onClick={() => navigate('/my-appointments')} 
                    className='w-full text-left px-4 py-3 rounded-xl hover:bg-primary-50 hover:text-primary-700 transition-all duration-200 font-medium text-neutral-700'
                  >
                    My Appointments
                  </button>
                  <hr className='my-2 border-neutral-200' />
                  <button 
                    onClick={logout} 
                    className='w-full text-left px-4 py-3 rounded-xl hover:bg-error hover:text-white transition-all duration-200 font-medium text-error'
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <button 
              onClick={() => navigate('/login')} 
              className='hidden md:block bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-medium hover:shadow-large'
            >
              Sign In
            </button>
          )}
          
          <button 
            onClick={() => setShowMenu(true)} 
            className='md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-all duration-200'
          >
            <img className='w-6 h-6' src={assets.menu_icon} alt="Menu" />
          </button>
        </div>

        {showMenu && (
          <div className='fixed inset-0 z-50 md:hidden'>
            <div 
              className='absolute inset-0 bg-black/50 backdrop-blur-sm'
              onClick={() => setShowMenu(false)}
            />
            <div className='absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl'>
              <div className='flex items-center justify-between px-6 py-6 border-b border-neutral-200'>
                <img src={assets.logo} className='h-10' alt="Logo" />
                <button 
                  onClick={() => setShowMenu(false)}
                  className='p-2 rounded-lg hover:bg-neutral-100 transition-all duration-200'
                >
                  <img src={assets.cross_icon} className='w-6 h-6' alt="Close" />
                </button>
              </div>
              
              <div className='p-6 space-y-2'>
                <NavLink 
                  to='/' 
                  onClick={() => setShowMenu(false)}
                  className={({ isActive }) => 
                    `block px-5 py-4 rounded-xl font-semibold transition-all duration-200 ${
                      isActive 
                        ? 'bg-primary-600 text-white shadow-medium' 
                        : 'text-neutral-700 hover:bg-primary-50 hover:text-primary-700'
                    }`
                  }
                >
                  HOME
                </NavLink>
                <NavLink 
                  to='/doctors' 
                  onClick={() => setShowMenu(false)}
                  className={({ isActive }) => 
                    `block px-5 py-4 rounded-xl font-semibold transition-all duration-200 ${
                      isActive 
                        ? 'bg-primary-600 text-white shadow-medium' 
                        : 'text-neutral-700 hover:bg-primary-50 hover:text-primary-700'
                    }`
                  }
                >
                  ALL DOCTORS
                </NavLink>
                <NavLink 
                  to='/about' 
                  onClick={() => setShowMenu(false)}
                  className={({ isActive }) => 
                    `block px-5 py-4 rounded-xl font-semibold transition-all duration-200 ${
                      isActive 
                        ? 'bg-primary-600 text-white shadow-medium' 
                        : 'text-neutral-700 hover:bg-primary-50 hover:text-primary-700'
                    }`
                  }
                >
                  ABOUT
                </NavLink>
                <NavLink 
                  to='/contact' 
                  onClick={() => setShowMenu(false)}
                  className={({ isActive }) => 
                    `block px-5 py-4 rounded-xl font-semibold transition-all duration-200 ${
                      isActive 
                        ? 'bg-primary-600 text-white shadow-medium' 
                        : 'text-neutral-700 hover:bg-primary-50 hover:text-primary-700'
                    }`
                  }
                >
                  CONTACT
                </NavLink>
                
                {!token && (
                  <button 
                    onClick={() => { setShowMenu(false); navigate('/login'); }} 
                    className='w-full mt-6 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-medium'
                  >
                    Sign In
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
