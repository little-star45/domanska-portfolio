import { useState } from 'react'

const FooterForm = () => {

  return (
    <div className='flex flex-col items-center'>
      <form 
        className='flex flex-col gap-4 mt-4 border-2 border-black p-4 rounded w-1/2' 
        action="https://formspree.io/f/your-form-id" 
        method="POST"
      >

            <input className='border border-gray-300 p-2 rounded' placeholder='Name' type="text" name="name" required />
            <input className='border border-gray-300 p-2 rounded' placeholder='Email' type="email" name="email" required />
            <textarea className='border border-gray-300 p-2 rounded' placeholder='Message' name="message" required></textarea>

          <button className='bg-button-nohover text-white p-2 rounded hover:bg-button-hover' type="submit">Send</button>
      </form>
    </div>
    
  )
}


export default FooterForm