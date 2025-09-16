import { useState } from 'react'
import Skills from '../content/skills.json'
import TechnologyCard from './TechnologyCard'
import { useTheme } from '../hooks/useTheme.jsx'

const ProjectCard = (props) => {
  const { projectTitle, description, skills, projectName, toggleModal, setSelectedProject, projectThumbnail } = props

  const { isContrastMode} = useTheme()

  return (
    <div className="h-contrast:bg-h-contrast h-contrast:border-yellow-h-contrast dark:bg-dark flex flex-col border-3 border-black shadow-[10px_10px_0px_0px_black] p-2 rounded-lg shadow-gray-400 transform hover:scale-105 transition duration-300 items-center w-96 h-108 text-center">
      <p className="text-xl font-bold">{projectTitle}</p>
      <p className=' overflow-y-auto mt-2'>{description}</p>
      <div className='w-full flex flex-col items-center mt-auto'>
        <img src={projectThumbnail} alt={`${projectTitle} Thumbnail`} className="w-full h-32 object-cover mb-2"/>
        <p className='text-lg font-semibold'>Technologies used:</p>
        <span className="flex flex-row flex-wrap justify-center items-center gap-3 pt-1 mb-4">
          {skills.map((skill, index) => (
          <TechnologyCard
            key={index}
            icon={Skills[skill].icon}
            color={isContrastMode ? "#dacd1a" : Skills[skill].color}
            svgPath={Skills[skill].path}
            viewbox={Skills[skill].viewbox}
            />
          ))}
        </span>
      </div>

        <button
          onClick={() => { 
            toggleModal() 
            setSelectedProject(projectName) 
          }} 
          className='h-contrast:bg-black h-contrast:border-yellow-h-contrast px-4 py-2 border-2 border-button-border bg-button-nohover font-bold text-white rounded-lg hover:bg-button-hover hover:scale-102 w-full'
        >
          See more...
        </button>
    </div>
  )
}


export default ProjectCard
