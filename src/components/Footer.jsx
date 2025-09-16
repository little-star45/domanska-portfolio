import { useState } from 'react'
import FooterForm from './FooterForm.jsx'
import githubIcon from '../assets/footer/github-logo-6532.png'
import linkedinIcon from '../assets/footer/linkedin-2166.png'
import emailIcon from '../assets/footer/mail-symbol-3003.png' 


const Footer = () => {

  return (
    <div className='text-center space-y-3'>
            <p>Thank you for visiting my portfolio!</p>
            <article className="h-contrast:bg-h-contrast h-contrast:border-yellow-h-contrast h-contrast:border-2 p-4 text-center mx-auto max-w-1/2 bg-gray-200 rounded-lg relative overflow-hidden dark:text-gray-800">

              <p>My profiles on CTF sites, Leetcode, and so on:</p>
              <br />
                <a href="https://www.frontendmentor.io/profile/little-star45" target="_blank" rel="noopener noreferrer" className="hover:underline"><b>frontendmentor.io</b></a>{' '}
                <a href="https://www.codewars.com/users/little-star45" target="_blank" rel="noopener noreferrer" className="hover:underline"><b>codewars.com</b></a>{' '}
                <a href="https://leetcode.com/u/little-star45/" target="_blank" rel="noopener noreferrer" className="hover:underline"><b>leetcode.com</b></a>{' '}
                <a href="https://play.picoctf.org/users/little_star45" target="_blank" rel="noopener noreferrer" className="hover:underline"><b>picoctf.org</b></a>{' '}

            </article>

            <p>See my social media profiles:</p>
            <div className='flex flex-row justify-center list-none gap-8 mb-4'>
              <a className="h-contrast:bg-yellow-h-contrast h-contrast:rounded-full w-8 h-8 h-contrast:outline-2" href="https://www.linkedin.com/in/patrycja-doma%C5%84ska-a45bb4227/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="Linkedin" className="w-8 h-8 mr-2 dark:bg-white dark:rounded-full dark:border-2" />
              </a>
              <a className="h-contrast:bg-yellow-h-contrast h-contrast:rounded-full w-8 h-8 h-contrast:outline-2" href="https://github.com/little-star45" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="Github" className="w-8 h-8 mr-2 dark:bg-white dark:rounded-full dark:border-2" />
 
              </a>
              <a className="h-contrast:bg-yellow-h-contrast h-contrast:rounded-full cursor-default w-8 h-8 h-contrast:outline-2" href="mailto:youremail@example.com">
                <img src={emailIcon} alt="Email" className="w-8 h-8 mr-2 dark:bg-white dark:rounded-full dark:border-2" />
              </a>
            </div>
            <p>If you'd like to get in touch, feel free to reach out via Linkedin.</p>

            {/* <p>If you'd like to get in touch, feel free to reach out via email using the contact form below.</p> */}
            {/* <FooterForm /> */}
    </div>

  )
}


export default Footer