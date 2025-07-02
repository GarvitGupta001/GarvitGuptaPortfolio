import React from 'react'
import { ExpandableCardDemo } from './ExpendableCards'

const Projects = () => {
    return (
        <div className='h-screen py-10 px-4' id='projects'>
            <h1 className='text-5xl font-bold text-center text-white'>Project Work</h1>
            <div className='p-6'>

            <ExpandableCardDemo />
            </div>
        </div>
    )
}

export default Projects