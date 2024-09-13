import React from 'react'
import ContactForm from './ContactForm'
import image from '../assets/6.jpg';

const Contact = () => {
  return (
    <div className='items-start gap-4 justify-between w-full grid-cols-1 px-3 py-10 md:grid md:grid-cols-2 md:px-20'>
        <ContactForm />
         <div className="relative w-full h-full overflow-hidden">
          <img
            className="object-cover object-center w-full h-full rounded-lg"
            src={image}
            alt="Charity tree"
          />
        </div>
    </div>
  )
}

export default Contact