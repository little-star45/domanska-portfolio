import { useState } from 'react'
import Skills from '../content/skills.json'
import TechnologyCard from './TechnologyCard'

const ProjectCard = (props) => {
  const { projectTitle, description, skills, projectName, toggleModal, setSelectedProject, projectThumbnail } = props

  return (
    <div className="h-contrast:bg-black h-contrast:border-yellow-300 dark:bg-gray-700 flex flex-col border-3 border-black shadow-[10px_10px_0px_0px_black] p-2 rounded-lg shadow-gray-400 transform hover:scale-105 transition duration-300 justify-between items-center w-96 h-108 text-center">
      <p className="text-xl font-bold">{projectTitle}</p>
      <p className=' overflow-y-auto'>{description}</p>
      <div className='w-full'>
        <img src={projectThumbnail} alt={`${projectTitle} Thumbnail`} className="w-full h-32 object-cover mt-2 mb-2"/>
        <p className='text-lg font-semibold'>Technologies used:</p>
        <span className="flex flex-row flex-wrap justify-center items-center gap-3 py-2">
          {skills.map((skill, index) => (
          <TechnologyCard
            key={index}
            icon={Skills[skill].icon}
            color={document.documentElement.classList.contains("dark") ? "#000000" : Skills[skill].color}
            svgPath={Skills[skill].path}
            viewbox={Skills[skill].viewbox}
            >
            <path d={Skills[skill].path}></path>
          </TechnologyCard>
          ))}
        </span>
      </div>

        <button
          onClick={() => { 
            toggleModal() 
            setSelectedProject(projectName) 
          }} 
          className='mt-2 px-4 py-2 border-2 border-cyan-800 bg-button-nohover font-bold text-white rounded-lg hover:bg-button-hover hover:scale-102 w-full'
        >
          See more...
        </button>
    </div>
  )
}


export default ProjectCard
