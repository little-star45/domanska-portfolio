import { useState } from 'react'
import TechnologyCard from './TechnologyCard'
import Skills from '../content/skills.json'

import { useTheme } from '../hooks/useTheme.jsx'

const TechnologyWrapper = (props) => {
  const { skills } = props

  const skillsList = skills.map(skill => Skills[skill])
  const sortSkills = skillsList.sort((a, b) => b.level - a.level)

  const { isContrastMode } = useTheme()

  return (
    <div className='flex flex-row flex-wrap justify-center items-center'>
      {sortSkills.map((skillData, index) => (
        <TechnologyCard
          key={index}
          title={skillData.skill}
          icon={skillData.icon}
          color={isContrastMode ? "#dacd1a" : skillData.color}
          svgPath={skillData.path}
          viewbox={skillData.viewbox}
          level={skillData.level}
        />
      ))}
    </div>
  )
}

export default TechnologyWrapper
