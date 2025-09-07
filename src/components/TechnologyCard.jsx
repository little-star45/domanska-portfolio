import { useState } from 'react'

const TechnologyCard = ({ title, icon, color, svgPath, viewbox }) => {

  return (
    <div className="justify-center items-center m-2 p-2 flex flex-col">
      <div>
        <svg
          role="img"
          xmlns='http://www.w3.org/2000/svg'
          className="w-8 h-8"
          fill={color}
          stroke="black"
          strokeWidth="0.03"
          viewBox={viewbox}
          >
          <path d={svgPath}></path>
          </svg>
          
      </div>
      {title && <h2 className="text-m font-semibold">{title}</h2>}
    </div>
  );
};


export default TechnologyCard
