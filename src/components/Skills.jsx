import { useState } from 'react'
import TechnologyWrapper from './TechnologyWrapper.jsx'
import categoryData from '../content/category.json'

const Skills = () => {
  return (
    <div className='flex flex-row flex-wrap justify-evenly items-center w-full space-y-6'>
        {Object.entries(categoryData).map(([category, skills], index) => (
            <div key={index} className='bg-white dark:bg-gray-700 border-3 border-black shadow-[10px_10px_0px_0px_black] p-2 rounded-lg shadow-gray-400 transform hover:scale-105 transition duration-300 text-center'>
                <h2 className="text-m font-semibold">{category}</h2>
                    <TechnologyWrapper
                        skills={skills}
                    />
                </div>
        ))}
        </div>
  )
}


export default Skills
