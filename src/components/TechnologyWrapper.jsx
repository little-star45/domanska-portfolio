import { useState } from 'react'
import TechnologyCard from './TechnologyCard'
import Skills from '../content/skills.json'

const TechnologyWrapper = (props) => {
  const { skills } = props

  return (
    <div className='flex flex-row flex-wrap justify-center items-center'>
      {skills.map((skill, index) => (
        <TechnologyCard
          key={index}
          title={skill}
          icon={Skills[skill].icon}
          color={Skills[skill].color}
          svgPath={Skills[skill].path}
          viewbox={Skills[skill].viewbox}
          level={Skills[skill].level}
        />
      ))}
    </div>
  )
}

export default TechnologyWrapper
