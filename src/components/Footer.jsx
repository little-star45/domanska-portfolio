import { useState } from 'react'
import FooterForm from './FooterForm.jsx'
import githubIcon from '../assets/footer/github-logo-6532.png'
import linkedinIcon from '../assets/footer/linkedin-2166.png'
import emailIcon from '../assets/footer/mail-symbol-3003.png' 


const Footer = () => {

  return (
    <div className='text-center space-y-3'>
            <p>Thank you for visiting my portfolio!</p>
            <article className="p-4 text-center mx-auto max-w-1/2 bg-gray-200 rounded-lg relative overflow-hidden">

            My profiles on CTF sites, Leetcode, and so on:
            <br />
              <a href="https://www.frontendmentor.io/profile/little-star45" target="_blank" rel="noopener noreferrer" className="hover:underline"><b>frontendmentor.io</b></a>{' '}
              <a href="https://www.codewars.com/users/little-star45" target="_blank" rel="noopener noreferrer" className="hover:underline"><b>codewars.com</b></a>{' '}
              <a href="https://leetcode.com/u/little-star45/" target="_blank" rel="noopener noreferrer" className="hover:underline"><b>leetcode.com</b></a>{' '}
              <a href="https://play.picoctf.org/users/little_star45" target="_blank" rel="noopener noreferrer" className="hover:underline"><b>picoctf.org</b></a>{' '}

            </article>

            <p>See my social media profiles:</p>
            <div className='flex flex-row justify-center list-none gap-8 mb-4'>
              <a className="flex items-center" href="https://www.linkedin.com/in/patrycja-doma%C5%84ska-a45bb4227/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="Linkedin" className="w-6 h-6 mr-2" />
                <span className="text-black font-bold hover:text-gray-700">Linkedin</span>
              </a>
              <a className="flex items-center" href="https://github.com/little-star45" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="Github" className="w-6 h-6 mr-2" />
                <span className="text-black font-bold hover:text-gray-700">Github</span>
              </a>
              <a className="flex items-center cursor-default" href="mailto:youremail@example.com">
                <img src={emailIcon} alt="Email" className="w-6 h-6 mr-2" />
                <span className="text-gray-700 font-bold hover:text-gray-700 cursor-default">Email</span>
              </a>
            </div>
            <p>If you'd like to get in touch, feel free to reach out via Linkedin.</p>
            <footer className="bg-gray-700 text-gray-200 text-sm text-center py-4">
              © 2025 Patrycja Domanska. Built with React & TailwindCSS.
              <br></br>
              All icons are free to use without attribution and sourced from{' '}
              <a href="https://reshot.com" target="_blank" rel="noopener noreferrer" className="hover:underline">reshot.com</a>,{' '}
              <a href="https://uxwing.com" target="_blank" rel="noopener noreferrer" className="hover:underline">uxwing.com</a>,{' '}
              <a href="https://simpleicons.org" target="_blank" rel="noopener noreferrer" className="hover:underline">simpleicons.org</a>, and{' '}
              <a href="https://iconpacks.net" target="_blank" rel="noopener noreferrer" className="hover:underline">iconpacks.net</a>.
            </footer>

            {/* <p>If you'd like to get in touch, feel free to reach out via email using the contact form below.</p> */}
            {/* <FooterForm /> */}
    </div>

  )
}


export default Footer