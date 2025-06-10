import React from 'react'
import menu from '../assets/menu.svg'
import profile from '../assets/profile.svg'
import projects from '../assets/projects.svg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedIn.svg'
import instagram from '../assets/instagram.svg'
import resume from '../assets/resume.svg'
import resumePDF from '../assets/My_Resume.pdf'

const Nav = () => {
  return (
    <nav className='fixed top-5 left-5 border-[#cfcfcf] flex flex-col items-center justify-center p-1'>
        <img src={menu} alt="" className='p-[7px]'/>
        <a href="">
            <img src={profile} alt="" className='p-[7px]'/>
        </a>
        <a href="">
            <img src={projects} alt="" className='p-[7px]'/>
        </a>
        <a href='https://github.com/GarvitGupta001' target='_blank' rel='noopener noreferrer'>
            <img src={github} alt="" className='p-[7px]'/>
        </a>
        <a href='https://www.linkedin.com/in/garvitgupta001/' target='_blank' rel='noopener noreferrer'>
            <img src={linkedin} alt="" className='p-[7px]'/>
        </a>
        <a href='https://www.instagram.com/garvit.gupta.01/' target='_blank' rel='noopener noreferrer'>
            <img src={instagram} alt="" className='p-[7px]'/>
        </a>
        <a href={resumePDF} target='_blank' rel='noopener noreferrer'>
            <img src={resume} alt="" className='p-[7px]'/>
        </a>
    </nav>
  )
}

export default Nav