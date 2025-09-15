import { useState, useEffect } from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"

const TechnologyCard = (props) => {
  const { title, icon, color, svgPath, viewbox, level} = props

  var fullStarr = Math.floor(level/16/2)
  var halfStarr = ((level/16/2)-fullStarr) > 0.45 ? 1 : 0
  var emptyStarr = 3 - fullStarr - halfStarr

  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
  const checkTheme = () => {
    setIsDark(document.documentElement.classList.contains('dark'));
  };
  checkTheme(); // sprawdzamy przy mount
  window.addEventListener('themeChange', checkTheme); // jeśli masz custom event
  return () => window.removeEventListener('themeChange', checkTheme);
}, [])

  console.log(isDark)
  console.log(document.documentElement.classList)

  return (
    <div className={title?"justify-center items-center m-2 p-2 flex flex-col space-y-1":"justify-center items-center"}>
      <div className='dark:bg-gray-100 dark:rounded-full p-2 dark:outline-2 dark:outline-gray-800'>
        <svg
          role="img"
          xmlns='http://www.w3.org/2000/svg'
          className={title?"w-8 h-8":"w-6 h-6"}
          stroke={color}
          fill={isDark ? "#f2e308" : color}
          strokeWidth="0.03"
          viewBox={viewbox}
          >
          <path d={svgPath}></path>
          </svg>
          
      </div>
      {title && <h2 className="text-m font-semibold break-words whitespace-pre-line">{title}</h2>}

      {title && level !== undefined && (
        <div className="flex star">

          {Array.from({ length: fullStarr }, (_, i) => (
            <FaStar className='text-yellow-500' key={i} />
          ))}
          {halfStarr ? (
            <FaStarHalfAlt className='text-yellow-500' />
          ) : null}
          {Array.from({ length: emptyStarr }, (_, i) => (
            <FaRegStar className='text-yellow-500' key={i} />
          ))}

        </div>
      )}
    </div>
  )
}


export default TechnologyCard
