import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className='items-start justify-between w-full grid-cols-1 px-3 py-10 md:grid md:grid-cols-2 md:px-20'>
        <ContactForm />
    </div>
  )
}

export default Contact