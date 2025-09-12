import { useState } from 'react'

const Navbar = () => {

  return (
    <div className='flex flex-row justify-between items-center p-4 shadow-gray-400 shadow-[0_4px_2px_-1px_rgba(0,0,0,0.1)] sticky top-0 bg-white z-10 text-section-title'>
        <h1> Patrycja Domańska - portfolio</h1>
        <ul className='flex flex-row justify-around list-none gap-6'>
          <li><a href="#section-about-me" className="text-black hover:text-black">About me</a></li>
          <li><a href="#section-skills" className="text-black hover:text-black">Skills</a></li>
          <li><a href="#section-projects" className="text-black hover:text-black">Projects</a></li>
          <li><a href="#section-experience" className="text-black hover:text-black">Experience</a></li>
          <li><a href="#section-contact" className="text-black hover:text-black">Contact</a></li>
        </ul>
    </div>

  )
}


export default Navbar