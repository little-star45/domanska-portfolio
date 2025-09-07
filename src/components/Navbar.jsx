import { useState } from 'react'

const Navbar = () => {

  return (
    <div className='flex flex-row justify-between items-center p-4 shadow-gray-400 shadow-[0_4px_2px_-1px_rgba(0,0,0,0.1)] sticky top-0 bg-white z-10 text-section-title'>
        <h1> Patrycja Domańska - portfolio</h1>
        <ul className='flex flex-row justify-around list-none gap-6'>
                <a href="#section-about-me"><li className="text-black hover:text-black">About me</li></a>
                <a href="#section-skills"><li className="text-black hover:text-black">Skills</li></a>
                <a href="#section-projects"><li className="text-black hover:text-black">Projects</li></a>
                <a href="#section-experience"><li className="text-black hover:text-black">Experience</li></a>
                <a href="#section-contact"><li className="text-black hover:text-black">Contact</li></a>
        </ul>
    </div>

  )
}


export default Navbar