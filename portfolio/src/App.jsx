import React, { useEffect, useRef } from 'react'
import './app.css'
import Nav from './components/Nav'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Cursor from './components/Cursor'
gsap.registerPlugin(ScrollTrigger)

const App = () => {
  const skills = ['React Js','Node','Express Js','Tailwind CSS','Flask','Mongo DB','MySQL','Figma','C','Python','Javascript','REST APIs','JWT Auth','GSAP']
  
  const tl = gsap.timeline()

  useGSAP(() => {
    tl.from('#image', {
      opacity: 0,
      y: 20,
      duration: 0.5,
      delay: 0.2,
    }).from('#about h1', {
      opacity: 0,
      y: 20,
      duration: 0.5,
      delay: -0.3,
    }).from('#about p', {
      opacity: 0,
      y: 20,
      duration: 0.5,
      delay: -0.3,
    }).from('.skill', {
      opacity: 0,
      y: 20,
      duration: 0.3,
      stagger: 0.1,
      delay: -0.3,
    })
  })
  return (
    <>
    <Cursor />
    <Nav />
    <div id="page1" className='page'> 
      <div id="image">
        <img src='pfp.jpg'/>
      </div>
      <div id="about">
        <h1>Garvit Gupta</h1>
        <p>Passionate developer fueled by caffeine and curiosity. Backed by solid full-stack skills and a mindset that's always ready to learn, adapt, and ship, I aim to grow with innovative teams, solve real-world problems, and leave a mark beyond just writing code — by helping shape products and experiences that matter.</p>
      </div>
      <div id="skills">
        {skills.map((skill) => (
          <span className="skill">{skill}</span>
        ))}
      </div>
    </div>
    <div id="page2" className="page">

    </div>
    </>
  )
}

export default App