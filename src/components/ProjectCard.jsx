import { useState } from 'react'
import Skills from '../content/skills.json';

const ProjectCard = (props) => {
  const { projectTitle, description, skills, projectName, toggleModal, setSelectedProject, projectThumbnail } = props;
  console.log('thumbnail path:', projectThumbnail);
  return (
    <div className=" flex flex-col border-3 border-black shadow-[10px_10px_0px_0px_black] p-2 rounded-lg shadow-gray-400 transform hover:scale-105 transition duration-300 justify-between items-center w-96 h-108 text-center">
      <p className="text-xl font-bold">{projectTitle}</p>
      <p className=' overflow-y-auto'>{description}</p>
      <div className='w-full'>
        <img src={projectThumbnail} alt={`${projectTitle} Thumbnail`} className="w-full h-32 object-cover mt-2 mb-2"/>
        <p className='text-lg font-semibold'>Technologies used:</p>
        <span className="flex flex-row flex-wrap justify-center items-center gap-3 py-2">
          {skills.map((skill, index) => (
            <svg
          role="img"
          xmlns='http://www.w3.org/2000/svg'
          className="w-8 h-8"
          fill={Skills[skill].color}
          stroke="black"
          strokeWidth="0.03"
          viewBox={Skills[skill].viewBox}
          >
          <path d={Skills[skill].path}></path>
          </svg>
          ))}
        </span>
      </div>

        <button onClick={() => { toggleModal(); setSelectedProject(projectName); }} className='mt-2 px-4 py-2 border-2 border-cyan-800 bg-button-nohover font-bold text-white rounded-lg hover:bg-button-hover hover:scale-102 w-full'>See more...</button>
    </div>
  )
}


export default ProjectCard
