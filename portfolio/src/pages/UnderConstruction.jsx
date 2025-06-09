import React, { useState } from 'react'
import bulb_on from '../assets/bulb-on.svg'
import bulb_off from '../assets/bulb-off.svg'


const UnderConstruction = () => {
    const [isDark, setIsDark] = useState(true)
    const switchTheme = () => {
        setIsDark(!isDark)
    }
  return (
    <>
    <div className={isDark ?
        'bg-[#11151C] h-screen w-screen' :
        'bg-white h-screen w-screen'}>
        <img src={isDark ? bulb_off : bulb_on} 
        onClick={switchTheme}
        className='h-11 absolute left-1/2 -translate-x-1/2 mt-4'
        ></img>
        <div className={isDark ? 
            'text-4xl font-mono absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white' : 
            'text-4xl font-mono absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black'}>Under Construction...</div>
    </div>
    </>
  )
}

export default UnderConstruction