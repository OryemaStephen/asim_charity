import React from 'react'
import Welcome from '../components/Welcome'
import Footer from '../components/Footer'

const Gallery = () => {
  return (
    <div className='w-full'>
      <Welcome text='Our gallery' />
      <Footer />
    </div>
  )
}

export default Gallery