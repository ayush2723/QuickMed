import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10 bg-white rounded-2xl shadow-sm'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-16 my-12 mt-48 text-sm px-8 py-12'>

        <div>
          <img className='mb-6 w-44' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-neutral-600 leading-7'>Welcome to QuickMed, your one-stop platform for effortless healthcare access.
Easily browse and book appointments from a trusted list of doctors, anytime, anywhere.
Patients get quick, reliable care, while doctors connect with more patients seamlessly.
Healthcare made simple, smart, and stress-free with QuickMed.</p>
        </div>

        <div>
          <p className='text-xl font-semibold mb-6 text-neutral-800'>COMPANY</p>
          <ul className='flex flex-col gap-3 text-neutral-600'>
            <li className='hover:text-primary cursor-pointer transition-colors duration-200'><Link to="/">Home</Link></li>
            <li className='hover:text-primary cursor-pointer transition-colors duration-200'><Link to="/about">About us</Link></li>
            <li className='hover:text-primary cursor-pointer transition-colors duration-200'><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-semibold mb-6 text-neutral-800'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-3 text-neutral-600'>
            <li>8219861829</li>
            <li>ayushsharma@gmail.com</li>
          </ul>
        </div>

      </div>

    

    </div>
  )
}

export default Footer
