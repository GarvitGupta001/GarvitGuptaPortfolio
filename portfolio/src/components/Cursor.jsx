import React, { useEffect } from 'react'
import gsap from 'gsap'

const Cursor = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX
      const y = e.clientY
      gsap.to("#cursor", {
        x,
        y,
        duration: 0.2,
      })
      console.log(e)
    }

    document.getElementById("root").addEventListener("mousemove", handleMouseMove)

    return () => {
      document.getElementById("root").removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <div id="cursor" />
}

export default Cursor
// className="w-4 h-4 bg-white rounded-full fixed top-0 left-0 pointer-events-none z-50" 