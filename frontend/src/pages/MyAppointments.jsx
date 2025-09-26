import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const MyAppointments = () => {

    const { backendUrl, token } = useContext(AppContext)
    const navigate = useNavigate()

    const [appointments, setAppointments] = useState([])
    const [payment, setPayment] = useState('')

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Function to format the date eg. ( 20_01_2000 => 20 Jan 2000 )
    const slotDateFormat = (slotDate) => {
        const dateArray = slotDate.split('_')
        return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
    }

    // Getting User Appointments Data Using API
    const getUserAppointments = async () => {
        try {

            const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } })
            setAppointments(data.appointments.reverse())

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    // Function to cancel appointment Using API
    const cancelAppointment = async (appointmentId) => {

        try {

            const { data } = await axios.post(backendUrl + '/api/user/cancel-appointment', { appointmentId }, { headers: { token } })

            if (data.success) {
                toast.success(data.message)
                getUserAppointments()
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

    const initPay = (order) => {
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name: 'Appointment Payment',
            description: "Appointment Payment",
            order_id: order.id,
            receipt: order.receipt,
            handler: async (response) => {

                console.log(response)

                try {
                    const { data } = await axios.post(backendUrl + "/api/user/verifyRazorpay", response, { headers: { token } });
                    if (data.success) {
                        navigate('/my-appointments')
                        getUserAppointments()
                    }
                } catch (error) {
                    console.log(error)
                    toast.error(error.message)
                }
            }
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    // Function to make payment using razorpay
    const appointmentRazorpay = async (appointmentId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/user/payment-razorpay', { appointmentId }, { headers: { token } })
            if (data.success) {
                initPay(data.order)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    // Function to make payment using stripe
    const appointmentStripe = async (appointmentId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/user/payment-stripe', { appointmentId }, { headers: { token } })
            if (data.success) {
                const { session_url } = data
                window.location.replace(session_url)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }



    useEffect(() => {
        if (token) {
            getUserAppointments()
        }
    }, [token])

    return (
        <div>
            <p className='pb-4 mt-12 text-2xl font-bold text-neutral-800 border-b border-neutral-200'>My appointments</p>
            <div className='mt-6'>
                {appointments.map((item, index) => (
                    <div key={index} className='grid grid-cols-[1fr_2fr] gap-6 sm:flex sm:gap-8 py-6 border-b border-neutral-200 bg-white rounded-xl mb-4 p-6 shadow-sm'>
                        <div>
                            <img className='w-40 bg-primary-light rounded-xl' src={item.docData.image} alt="" />
                        </div>
                        <div className='flex-1 text-sm text-neutral-600'>
                            <p className='text-neutral-800 text-lg font-bold mb-1'>{item.docData.name}</p>
                            <p className='text-neutral-600 mb-3'>{item.docData.speciality}</p>
                            <p className='text-neutral-700 font-semibold mt-3 mb-1'>Address:</p>
                            <p className='text-neutral-600'>{item.docData.address.line1}</p>
                            <p className='text-neutral-600'>{item.docData.address.line2}</p>
                            <p className='mt-3 bg-neutral-50 p-3 rounded-lg'><span className='text-sm text-neutral-700 font-semibold'>Date & Time:</span> <span className='font-medium text-neutral-800'>{slotDateFormat(item.slotDate)} | {item.slotTime}</span></p>
                        </div>
                        <div></div>
                        <div className='flex flex-col gap-3 justify-end text-sm text-center'>
                            {!item.cancelled && !item.payment && !item.isCompleted && payment !== item._id && <button onClick={() => setPayment(item._id)} className='text-neutral-700 sm:min-w-48 py-3 border border-neutral-300 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-medium'>Pay Online</button>}
                            {!item.cancelled && !item.payment && !item.isCompleted && payment === item._id && <button onClick={() => appointmentStripe(item._id)} className='text-neutral-700 sm:min-w-48 py-3 border border-neutral-300 rounded-lg hover:bg-neutral-100 transition-all duration-300 flex items-center justify-center'><img className='max-w-20 max-h-5' src={assets.stripe_logo} alt="" /></button>}
                            {!item.cancelled && !item.payment && !item.isCompleted && payment === item._id && <button onClick={() => appointmentRazorpay(item._id)} className='text-neutral-700 sm:min-w-48 py-3 border border-neutral-300 rounded-lg hover:bg-neutral-100 transition-all duration-300 flex items-center justify-center'><img className='max-w-20 max-h-5' src={assets.razorpay_logo} alt="" /></button>}
                            {!item.cancelled && item.payment && !item.isCompleted && <button className='sm:min-w-48 py-3 border border-success rounded-lg text-success bg-secondary-light font-medium'>Paid</button>}

                            {item.isCompleted && <button className='sm:min-w-48 py-3 border border-success rounded-lg text-success font-medium bg-secondary-light'>Completed</button>}

                            {!item.cancelled && !item.isCompleted && <button onClick={() => cancelAppointment(item._id)} className='text-neutral-700 sm:min-w-48 py-3 border border-neutral-300 rounded-lg hover:bg-error hover:text-white transition-all duration-300 font-medium'>Cancel appointment</button>}
                            {item.cancelled && !item.isCompleted && <button className='sm:min-w-48 py-3 border border-error rounded-lg text-error font-medium bg-red-50'>Appointment cancelled</button>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyAppointments