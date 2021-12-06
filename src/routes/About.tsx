import React from 'react'
import Showcase from '../components/showcase/Showcase'
import Nav from '../components/nav/Nav'
import AboutData from '../data/AboutData'



const About: React.FC = () => {
    return (
        <div className='main'>
            <Nav activeBtn='about'/>
            <Showcase title='about' data={<AboutData />}/>
        </div>
    )
}

export default About
