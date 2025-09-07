import { useState, useEffect, use } from 'react'

import huskyDog from '../assets/reshot-icon-husky-dog-WY4S8KFRCX.svg'

import ProjectModal from '../components/ProjectModal.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import ExperienceCard from '../components/ExperienceCard.jsx'
import Footer from '../components/footer.jsx'
import Navbar from '../components/Navbar.jsx'
import Skills from '../components/Skills.jsx'

import experiences from '../content/experiences.json'
import projectsData from '../content/projectsShorts.json'
import '../styles/main.css'

function Home() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const modalToggle = () => {
        setIsModalOpen(!isModalOpen);
    }

  return (
    <>
    <Navbar/>
    <main className='p-4 space-y-6 max-w-screen-xl mx-auto font-family-fira-code'>
    {isModalOpen && <ProjectModal className="fixed inset-0 z-50 backdrop-blur-sm" description={projectsData.find(project => project.projectName === selectedProject)?.description} isOpen={isModalOpen} setIsOpen={setIsModalOpen} toggleModal={modalToggle} projectName={selectedProject}/>}
    <section className='#section-about-me flex justify-center items-center'>
        <article className='max-w-3/5 text-center space-y-4'>
            <p className="text-section-title">About Me</p>
            <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
                <p className='text-justify max-w-4/5'>Graduated&nbsp;with&nbsp;a master's degree&nbsp;in renewable energy. Awarded an honorable mention at the university's Research Circles conference for her work related to modeling long-term energy forecasts.&nbsp;A&nbsp;programmer by passion. Using my skills,&nbsp;I&nbsp;wrote several hundred lines of code in Python for data processing in my engineering thesis and master's thesis.&nbsp;A&nbsp;former Girl Scout.&nbsp;I&nbsp;have four years of experience in science tutoring.&nbsp;I&nbsp;was a member of the scientific team for clean air at the Faculty of Energy and Fuels at the AGH University of Science and Technology in Krakow. Currently&nbsp;a&nbsp;full-time programmer of data analysis applications in Python and React. After hours&nbsp;I&nbsp;like teaching programming to children and teenagers :). In my free time&nbsp;I&nbsp;love to ride my bike, bake sourdough bread&nbsp;and solve problems on Leetcode ;)</p>
                <div className='hidden md:block w-48 h-48'>
                    <img src={huskyDog} alt="Husky Dog" className="w-full h-full object-cover" />
                </div>
            </div>
             
            <p className='text-left font-semibold'>Some of my hobbies include:</p>
            <ul className='list-disc list-inside text-justify'>
                <li>Bikepacking</li>
                <li>Python programming and electronics</li>
                <li>Baking sourdough bread</li>
                <li>literature: SF, popular science books, a fan of Terry Pratchett</li>
            </ul>
        </article>
        
    </section>
    <hr className='border-1 border-gray-200 shadow-gray-700 shadow-lg' />
    <section id='section-skills' className='space-y-4'>
        <p className="text-section-title text-center">Skills</p>
        <div className="flex flex-row justify-between">
            <Skills/>
        </div>
    </section>
    <hr className='border-1 border-gray-200 shadow-gray-700 shadow-lg'/>
    <section id="section-projects" className='space-y-4'>
        <p className="text-section-title text-center">Projects</p>
        <p className="text-center">Here are some of my recent projects:</p>
        <div className='flex flex-row flex-wrap justify-center space-y-6 space-x-6 items-stretch'>
            {projectsData.map((project, index) => (
            <ProjectCard
                key={index}
                projectTitle={project.projectTitle}
                description={project.description}
                skills={project.skills}
                projectName={project.projectName}
                toggleModal={modalToggle}
                setSelectedProject={setSelectedProject}
            />
            ))}
        </div>
    </section>
    <hr className='border-1 border-gray-200 shadow-gray-700 shadow-lg' />
    <section id='#section-experience' className='space-y-5'>
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
    <section>
        <p className="text-section-title text-center">Contact</p>
    </section>
    <Footer id="#section-contact"/>
    </main>
</>
  )
}

export default Home