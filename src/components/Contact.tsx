import React from 'react'
import { MdEmail, MdPhone } from "react-icons/md";
import Image from "next/image";

const Contact = () => {
  return (
    <div className='flex flex-auto flex-col lg:flex-row text-white/80 rounded-lg p-8 lg:space-y-0 space-y-8 lg:space-x-8 justify-center bg-[linear-gradient(to_top,#000,#381a5f_80%)]' id='contact'>
      <div className='flex justify-center items-center'>
        <ul className='space-y-4'>
          <li className='flex items-center'>
            <MdPhone className='h-[110px] w-auto mr-6'/>
            <p className='text-xl'>+91 9876543210</p>
          </li>
          <li className='flex items-center'>
            <MdEmail className='h-[110px] w-auto mr-6'/>
            <p className='text-xl'>mitesh@test.com</p>
          </li>
        </ul>
      </div>

      <div className='rounded-xl p-6 bg-white/15'>
        <h2 className='text-5xl font-bold text-green-400 mb-4'>Contact Me</h2>
        <p className='text-white/80 mb-6'>You can message me by filling this form</p>
        <form className='space-y-4' action="https://getform.io/f/azylrjzb" method="POST">
          <div className='grid md:grid-cols-2 gap-4'>
            <input type="text" name="firstName" placeholder='First name' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400' required/>
            <input type="text" name="lastName" placeholder='Last name' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400' />
            <input type="text" name="email" placeholder='e-mail' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400' required/>
            <input type="text" name="phone" placeholder='phone' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400' />
          </div>
          <textarea name="message" placeholder='Your message' className='bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400' required />
          <button className='bg-green-700 hover:bg-green-500 text-white px-6 py-2 font-semibold text-xl rounded-xl'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
