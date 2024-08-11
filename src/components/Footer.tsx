import React from 'react'
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='mt-12 text-white/80 mx-auto border-t border-gray-700 p-8 fleex justify-between items-center'>
      <h1 className='text-2xl font-semibold'>Contact me on:</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-10 justify-evenly p-4'>
        <a href="#" className='hover:text-green-400 text-xl flex gap-2'>LinkedIn <FaLinkedin size={24}/></a>
        <a href="#" className='hover:text-green-400 text-xl flex gap-2'>Facebook <FaFacebook size={24}/></a>
        <a href="#" className='hover:text-green-400 text-xl flex gap-2'>Instagram <FaInstagram size={24}/></a>
        <a href="#" className='hover:text-green-400 text-xl flex gap-2'>Twitter <FaTwitter size={24}/></a>
      </div>
    </div>
  )
}

export default Footer
