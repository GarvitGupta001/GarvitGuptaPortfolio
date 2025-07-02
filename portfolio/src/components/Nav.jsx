import React from 'react'
import gsap from 'gsap'
import { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import menu from '../assets/menu.svg'
import profile from '../assets/profile.svg'
import projects from '../assets/projects.svg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedIn.svg'
import instagram from '../assets/instagram.svg'
import resume from '../assets/resume.svg'
import resumePDF from '../assets/My_Resume.pdf'

const Nav = () => {
    const [expanded, setExpanded] = useState(false)
    const nav = useRef(null)
    
    useGSAP(() => {
        if(expanded) {
            gsap.to("nav", {
                duration: 0.5,
                height: 'auto',
            })
        } else {
            gsap.to("nav", {
                duration: 0.5,
                height: 52,
            })
        }
    }, [expanded])

    
    return (
    <nav
    ref={nav} 
    className='fixed top-5 left-5 border-[#cfcfcf] flex flex-col items-center p-1 overflow-y-hidden h-[52px]'
    onMouseEnter={() => setExpanded(true)}
    onMouseLeave={() => setExpanded(false)}>
        <img src={menu} alt="" className='p-[7px]'/>
        <a href="#profile" className="nav-icon">
            <img src={profile} alt="" className='p-[7px]'/>
        </a>
        <a href="#projects" className="nav-icon">
            <img src={projects} alt="" className='p-[7px]'/>
        </a>
        <a href='https://github.com/GarvitGupta001' target='_blank' rel='noopener noreferrer' className="nav-icon">
            <img src={github} alt="" className='p-[7px]'/>
        </a>
        <a href='https://www.linkedin.com/in/garvitgupta001/' target='_blank' rel='noopener noreferrer' className="nav-icon">
            <img src={linkedin} alt="" className='p-[7px]'/>
        </a>
        <a href='https://www.instagram.com/garvit.gupta.01/' target='_blank' rel='noopener noreferrer' className="nav-icon">
            <img src={instagram} alt="" className='p-[7px]'/>
        </a>
        <a href={resumePDF} target='_blank' rel='noopener noreferrer' className="nav-icon">
            <img src={resume} alt="" className='p-[7px]'/>
        </a>
    </nav>
  )
}

export default Nav