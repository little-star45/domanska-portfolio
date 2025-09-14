import { useState } from 'react'

const TechnologyCard = (props) => {
  const { title, icon, color, svgPath, viewbox} = props;

  return (
    <div className={title?"justify-center items-center m-2 p-2 flex flex-col space-y-1":"justify-center items-center"}>
      <div className='dark:bg-gray-100 dark:rounded-full p-2 dark:outline-2 dark:outline-gray-800'>
        <svg
          role="img"
          xmlns='http://www.w3.org/2000/svg'
          className={title?"w-8 h-8":"w-6 h-6"}
          stroke={color}
          fill={color}
          strokeWidth="0.03"
          viewBox={viewbox}
          >
          <path d={svgPath}></path>
          </svg>
          
      </div>
      {title && <h2 className="text-m font-semibold break-words whitespace-normal">{title}</h2>}
    </div>
  );
};


export default TechnologyCard
