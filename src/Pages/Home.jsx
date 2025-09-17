import { useState, useEffect} from 'react'

import huskyDog from '../assets/reshot-icon-husky-dog-WY4S8KFRCX.svg'

import ProjectModal from '../components/ProjectModal.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import ExperienceCard from '../components/ExperienceCard.jsx'
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'
import Skills from '../components/Skills.jsx'
import Credentials from '../components/Credentials.jsx'

import experiences from '../content/experiences.json'
import projectsData from '../content/projectsShorts.json'
import '../styles/main.css'

import { useTheme } from '../hooks/useTheme.jsx'

function Home() {

    const { isDarkMode, updateTheme } = useTheme()

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)

    const [sliderIndex, setSliderIndex] = useState(0);
    
    const projectsPerPage = 3
    const pageCount = Math.ceil(projectsData.length / projectsPerPage)
    const projectsPages = Array.from({ length: pageCount }, (_, i) => i)
    const visibleProjects = projectsData.slice(sliderIndex, sliderIndex + projectsPerPage)

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme')
        const storedContrast = localStorage.getItem('contrast-mode')
        let darkModeActive

        darkModeActive = storedTheme === 'dark' ? true : storedTheme === 'light' ? false : window.matchMedia('(prefers-color-scheme: dark)').matches

        updateTheme(darkModeActive, storedContrast === 'h-contrast')
    }, [])

    const modalToggle = () => {
        setIsModalOpen(!isModalOpen)
    }

  return (
    <>
    <Navbar/>
    <main className='p-4 space-y-6 max-w-screen-xl mx-auto font-family-fira-code scroll-pt-16 dark:bg-gray-800 dark:text-white '>
    {isModalOpen && 
        <ProjectModal className="fixed inset-0 z-50 backdrop-blur-sm" 
            isOpen={isModalOpen} 
            setIsOpen={setIsModalOpen} 
            toggleModal={modalToggle} 
            projectName={selectedProject}
            markdownPath={projectsData.find(project => project.projectName === selectedProject)?.markdownPath}
            />
    }
    <section className='flex justify-center items-center'>
        <article className='max-w-full lg:max-w-3/5 text-center space-y-4'>
            <p id='section-about-me' className="text-section-title scroll-mt-20">About Me</p>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <p className='text-justify lg:max-w-4/5 max-w-full'>
                    Master's degree in renewable energy, honored at the university's Research Circles conference for work on long-term energy forecasts.
                    Passionate programmer with experience in Python and React - currently focusing on AI integrations and&nbsp;Python-based&nbsp;application development.
                    Former Girl Scout with&nbsp;a&nbsp;background in science tutoring and researcher at AGH University of Science and Technology.
                    After hours,&nbsp;I&nbsp;enjoy teaching programming to kids, cycling, baking sourdough bread,&nbsp;and solving challenges on LeetCode.
                </p>
                
                <div className='hidden lg:block w-48 h-48 p-2 ml-2'>
                    <img src={huskyDog} alt="Husky Dog" className="w-full h-full object-cover" />
                </div>
                
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
                <div>
                    <p className='text-left font-semibold'>Some of my hobbies include:</p>
                        <ul className='list-disc list-inside text-justify'>
                            <li>Bikepacking</li>
                            <li>Python programming</li>
                            <li>Baking sourdough bread</li>
                            <li>
                                literature: 
                                <ul className='list-[circle] list-inside ml-5'>
                                    <li>SF, fantasy</li>
                                    <li>T. Pratchett, U. Le Guin</li>
                                    <li>popular science</li>
                    </ul>
                </li>   
            </ul>
                </div>
            
            <img 
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=little-star45&layout=compact&theme=${isDarkMode ? 'dark' : 'grey'}&custom_title=My Tech Stack by Usage`} 
                alt="Top Languages"
            />
             </div>
            
        </article>
        
    </section>
    <hr className='border-1 border-gray-200 shadow-gray-700 shadow-lg' />
    <section id='section-skills' className='space-y-4 scroll-mt-20'>
        <p className="text-section-title text-center">Skills</p>
        <div className="flex flex-row justify-between">
            <Skills/>
        </div>
    </section>
    <hr className='border-1 border-gray-200 shadow-gray-700 shadow-lg'/>
    <section id='section-projects' className='space-y-4 scroll-mt-20'>
        <p className="text-section-title text-center">Projects</p>
        <p className="text-center">Here are some of my recent completed projects - for more, please visit my GitHub:</p>
        <div className='flex flex-wrap justify-center gap-6 items-stretch'>
            {visibleProjects.map((project, index) => (
            <ProjectCard
                key={index}
                projectTitle={project.projectTitle}
                projectThumbnail={project.thumbnail}
                description={project.description}
                skills={project.skills}
                projectName={project.projectName}
                toggleModal={modalToggle}
                setSelectedProject={setSelectedProject}
            />
            ))}
            
        </div>
        <div className="flex justify-center gap-2 mt-6">
            {projectsPages.map((page) => (
                <span
                key={page}
                className={
                    `w-4 h-4 rounded-full cursor-pointer transition-all 
                    ${page === Math.floor(sliderIndex / projectsPerPage)? 'bg-yellow-500 scale-125': 'bg-gray-400'}`
                }
                onClick={() => setSliderIndex(page * projectsPerPage)}
                ></span>
            ))}
            </div>
    </section>
    <hr className='border-1 border-gray-200 shadow-gray-700 shadow-lg' />
    <section id='section-experience' className='space-y-5 mx-0 lg:mx-6 scroll-mt-20'>
        <p className="text-section-title text-center">Experience</p>

            {experiences.map((exp, index) => (
            <div className='flex flex-col items-center gap-4' key={index}>
            <ExperienceCard
                date={exp.date}
                position={exp.position}
                company={exp.company}
                technologies={exp.technologies}
                responsibilities={exp.responsibilities}
            />
            {index < experiences.length - 1 && (
                <svg 
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                // strokeWidth="1"
                viewBox="0 0 24 24"
                >
                <path d="M12 4.83582L5.79291 11.0429L7.20712 12.4571L12 7.66424L16.7929 12.4571L18.2071 11.0429L12 4.83582ZM12 10.4857L5.79291 16.6928L7.20712 18.107L12 13.3141L16.7929 18.107L18.2071 16.6928L12 10.4857Z"></path>
                </svg>
            )}
            </div>
        ))}
    </section>
    <hr className='border-1 border-gray-200 shadow-gray-700 shadow-lg' />
    <section id="section-contact" className='space-y-4 scroll-mt-20'>
        <p className="text-section-title text-center">Contact</p>
    </section>
    <Footer  className="w-full px-0 mx-0 "/>
    </main>
    <Credentials/>    
</>
  )
}

export default Home