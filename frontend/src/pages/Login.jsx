import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [state, setState] = useState('Sign Up')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const { backendUrl, token, setToken } = useContext(AppContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (state === 'Sign Up') {

      const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })

      if (data.success) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
      } else {
        toast.error(data.message)
      }

    } else {

      const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })

      if (data.success) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
      } else {
        toast.error(data.message)
      }

    }

  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center bg-neutral-50'>
      <div className='flex flex-col gap-6 m-auto items-start p-10 min-w-[340px] sm:min-w-96 border border-neutral-200 rounded-2xl text-neutral-700 text-sm shadow-xl bg-white'>
        <p className='text-3xl font-bold text-neutral-800'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
        <p className='text-neutral-600'>Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book appointment</p>
        {state === 'Sign Up'
          ? <div className='w-full'>
            <p className='font-medium text-neutral-700 mb-2'>Full Name</p>
            <input onChange={(e) => setName(e.target.value)} value={name} className='border border-neutral-300 rounded-lg w-full p-3 mt-1 focus:border-primary focus:ring-2 focus:ring-primary-light outline-none transition-all duration-200' type="text" required />
          </div>
          : null
        }
        <div className='w-full'>
          <p className='font-medium text-neutral-700 mb-2'>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-neutral-300 rounded-lg w-full p-3 mt-1 focus:border-primary focus:ring-2 focus:ring-primary-light outline-none transition-all duration-200' type="email" required />
        </div>
        <div className='w-full'>
          <p className='font-medium text-neutral-700 mb-2'>Password</p>
          <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-neutral-300 rounded-lg w-full p-3 mt-1 focus:border-primary focus:ring-2 focus:ring-primary-light outline-none transition-all duration-200' type="password" required />
        </div>
        <button className='bg-primary text-white w-full py-4 my-2 rounded-lg text-base font-medium hover:bg-primary-dark transition-all duration-200 shadow-sm'>{state === 'Sign Up' ? 'Create account' : 'Login'}</button>
        {state === 'Sign Up'
          ? <p className='text-neutral-600'>Already have an account? <span onClick={() => setState('Login')} className='text-primary font-medium underline cursor-pointer hover:text-primary-dark transition-colors duration-200'>Login here</span></p>
          : <p className='text-neutral-600'>Create an new account? <span onClick={() => setState('Sign Up')} className='text-primary font-medium underline cursor-pointer hover:text-primary-dark transition-colors duration-200'>Click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login