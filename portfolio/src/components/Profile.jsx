import React from 'react'
import { AnimatedTooltip } from "./ui/animated-tooltip";

const Profile = () => {
    const skills = [
    { id: 1, name: 'React Js', image: 'skills/react.png' },
    { id: 2, name: 'Node', image: 'skills/node.png' },
    { id: 3, name: 'Express Js', image: 'skills/express.png' },
    { id: 4, name: 'Mongo DB', image: 'skills/mongodb.png' },
    { id: 5, name: 'Next.js', image: 'skills/next.png' },
    { id: 6, name: 'Flask', image: 'skills/flask.png' },
    { id: 7, name: 'MySQL', image: 'skills/mysql.png' },
    { id: 8, name: 'Tailwind CSS', image: 'skills/tailwind.png' }
  ]

    return (
    <div id="profile" className='page'>
        <div id="image">
          <img src='pfp.jpg' />
        </div>
        <div id="about">
          <h1>Garvit Gupta</h1>
          <p>Passionate developer fueled by caffeine and curiosity. Backed by solid full-stack skills and a mindset that's always ready to learn, adapt, and ship, I aim to grow with innovative teams, solve real-world problems, and leave a mark beyond just writing code — by helping shape products and experiences that matter.</p>
        </div>
        <div className='relative flex justify-center h-min mt-5'>

          <AnimatedTooltip
            items={skills}
          />
        </div>
      </div>
    )
}

export default Profile