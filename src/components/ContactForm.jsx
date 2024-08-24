import React from 'react'

const ContactForm = () => {
  return (
    <div className='w-full'>
        <form >
            <input
                type="text"
                name='name'
                placeholder="Your Name "
                className="w-full px-3 my-3 py-2 text-black placeholder-gray-400 bg-transparent border border-gray-400 outline-none"
            />
            <input
                type="email"
                name='email'
                placeholder="Your Email "
                className="w-full px-3 py-2 text-black placeholder-gray-400 bg-transparent border border-gray-400 outline-none"
            />
            <input
                type="tel"
                name='phone'
                placeholder="Your Phone "
                className="w-full px-3 py-2 my-3 text-black placeholder-gray-400 bg-transparent border border-gray-400 outline-none"
            />
            <input
                type="text"
                name='subject'
                placeholder="Subject "
                className="w-full px-3 py-2 text-black placeholder-gray-400 bg-transparent border border-gray-400 outline-none"
            />
            <textarea
              name="message"
              placeholder="Your message"
              className="w-full px-3 py-1 my-3 text-black outline-none placeholder-gray-400 border border-gray-400 "
            ></textarea>
            <input
              type="submit"
              value="Send Message"
              className="px-5 py-2 text-lg bg-[#F7CA44] border-none text-white shadow-lg cursor-pointer outline-none"
            />
        </form>
    </div>
  )
}

export default ContactForm