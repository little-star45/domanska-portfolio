import { useState } from 'react'

const ExperienceCard = (props) => {
  const { date, position, company, technologies, responsibilities } = props;

  return (
    <div className="flex flex-col  border-3 border-black shadow-[10px_10px_0px_0px_black] p-2 rounded-lg shadow-gray-400 transform hover:scale-105 transition duration-300">
        <p className='font-bold'>{date}: {position} at {company}</p>
        <div className='flex flex-col gap-2'>
          <p><span className='font-semibold'>Used technologies: </span> {technologies.join(', ')}</p>
          <p className='text-wrap'> <span className='font-semibold'>Responsibilities included: </span> {responsibilities.join(', ')}</p>
        </div>
        
    </div>
  )
}

export default ExperienceCard
