import React from 'react'
import babyholdingbanana from '../assets/4.jpg'
import boyholdingbaby from '../assets/18.jpg'

const AboutImage = () => {
  return (
    <div className='w-full gap-3 h-full grid grid-cols-1 md:grid-cols-2 justify-between items-start p-5'>
      <img src={babyholdingbanana} alt="Baby holding banana" className='grid-cols-1 h-full' />
      <img src={boyholdingbaby} alt="Boy holding a baby" className='grid-cols-1 h-full' />
    </div>
  )
}

export default AboutImage