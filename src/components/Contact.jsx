import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className='w-full md:grid grid-cols-1 md:grid-cols-2 justify-between items-start px-3 md:px-20 py-10'>
        <ContactForm />
        <div></div>
    </div>
  )
}

export default Contact