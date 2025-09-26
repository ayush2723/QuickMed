import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const MyProfile = () => {

    const [isEdit, setIsEdit] = useState(false)

    const [image, setImage] = useState(false)

    const { token, backendUrl, userData, setUserData, loadUserProfileData } = useContext(AppContext)

    // Function to update user profile data using API
    const updateUserProfileData = async () => {

        try {

            const formData = new FormData();

            formData.append('name', userData.name)
            formData.append('phone', userData.phone)
            formData.append('address', JSON.stringify(userData.address))
            formData.append('gender', userData.gender)
            formData.append('dob', userData.dob)

            image && formData.append('image', image)

            const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } })

            if (data.success) {
                toast.success(data.message)
                await loadUserProfileData()
                setIsEdit(false)
                setImage(false)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

    return userData ? (
        <div className='max-w-2xl flex flex-col gap-6 text-sm pt-8 bg-white rounded-2xl p-8 shadow-sm'>

            {isEdit
                ? <label htmlFor='image' >
                    <div className='inline-block relative cursor-pointer'>
                        <img className='w-40 rounded-2xl opacity-75 shadow-lg' src={image ? URL.createObjectURL(image) : userData.image} alt="" />
                        <img className='w-12 absolute bottom-14 right-14 bg-white rounded-full p-2 shadow-lg' src={image ? '' : assets.upload_icon} alt="" />
                    </div>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden />
                </label>
                : <img className='w-40 rounded-2xl shadow-lg' src={userData.image} alt="" />
            }

            {isEdit
                ? <input className='bg-neutral-50 text-3xl font-bold max-w-80 p-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary-light outline-none' type="text" onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} value={userData.name} />
                : <p className='font-bold text-3xl text-neutral-800 mt-4'>{userData.name}</p>
            }

            <hr className='bg-neutral-200 h-[1px] border-none my-4' />

            <div>
                <p className='text-neutral-600 font-semibold text-lg mb-4 text-primary'>CONTACT INFORMATION</p>
                <div className='grid grid-cols-[1fr_3fr] gap-y-4 mt-4 text-neutral-700'>
                    <p className='font-semibold'>Email id:</p>
                    <p className='text-primary'>{userData.email}</p>
                    <p className='font-semibold'>Phone:</p>

                    {isEdit
                        ? <input className='bg-neutral-50 max-w-64 p-2 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary-light outline-none' type="text" onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} value={userData.phone} />
                        : <p className='text-primary'>{userData.phone}</p>
                    }

                    <p className='font-semibold'>Address:</p>

                    {isEdit
                        ? <p>
                            <input className='bg-neutral-50 w-full p-2 mb-2 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary-light outline-none' type="text" onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} />
                            <br />
                            <input className='bg-neutral-50 w-full p-2 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary-light outline-none' type="text" onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} /></p>
                        : <p className='text-neutral-600'>{userData.address.line1} <br /> {userData.address.line2}</p>
                    }

                </div>
            </div>
            <div>
                <p className='text-neutral-600 font-semibold text-lg mb-4 mt-8 text-primary'>BASIC INFORMATION</p>
                <div className='grid grid-cols-[1fr_3fr] gap-y-4 mt-4 text-neutral-700'>
                    <p className='font-semibold'>Gender:</p>

                    {isEdit
                        ? <select className='max-w-32 bg-neutral-50 p-2 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary-light outline-none' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender} >
                            <option value="Not Selected">Not Selected</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        : <p className='text-neutral-600'>{userData.gender}</p>
                    }

                    <p className='font-semibold'>Birthday:</p>

                    {isEdit
                        ? <input className='max-w-40 bg-neutral-50 p-2 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary-light outline-none' type='date' onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
                        : <p className='text-neutral-600'>{userData.dob}</p>
                    }

                </div>
            </div>
            <div className='mt-12'>

                {isEdit
                    ? <button onClick={updateUserProfileData} className='border border-primary px-10 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-200 font-medium shadow-sm'>Save information</button>
                    : <button onClick={() => setIsEdit(true)} className='border border-primary px-10 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-200 font-medium shadow-sm'>Edit</button>
                }

            </div>
        </div>
    ) : null
}

export default MyProfile