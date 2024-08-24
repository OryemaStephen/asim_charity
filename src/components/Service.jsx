import React from 'react'
import { BiSolidDonateHeart } from 'react-icons/bi'
import { IoIosBulb } from 'react-icons/io'
import { IoPeopleSharp } from 'react-icons/io5'

const Service = () => {
  return (
    <div className='w-full py-10 md:flex justify-between items-start px-5'>
        <div className='md:flex gap-3 justify-between items-start'>
            <div className='text-[#F7CA44] text-4xl'><IoIosBulb /></div>
            <div>
                <h2 className='text-black text-lg'>Our Mission</h2>
                <p className='text-base text-gray-500 py-4'>
                    Giveback to the needy community members and empower them to become self-reliant.
                </p>                
            </div>
        </div>
        <div className='md:flex gap-3 justify-between items-start'>
            <div className='text-[#F7CA44] text-4xl'><IoPeopleSharp /></div>
            <div>
                <h2 className='text-black text-lg'>We need Volunteers</h2>
                <p className='text-base text-gray-500 py-4'>
                    Join our team, and together, we shall make a difference in the lives of others through giving.
                </p>                
            </div>
        </div>
        <div className='md:flex gap-3 justify-between items-start'>
            <div className='text-[#F7CA44] text-4xl'><BiSolidDonateHeart /></div>
            <div>
                <h2 className='text-black text-lg'>We need Sponsors</h2>
                <p className='text-base text-gray-500 py-4'>
                    We need more sponsors to support our activities and we make a great empowered community.
                </p>                
            </div>
        </div>
    </div>
  )
}

export default Service