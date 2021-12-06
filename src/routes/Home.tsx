import React from 'react'
import Showcase from '../components/showcase/Showcase'
import Nav from '../components/nav/Nav'
import SkillData from '../data/SkillData'



const Home: React.FC = () => {
    return (
        <div className='main'>
            <Nav activeBtn='skills'/>
            <Showcase title="home" data={<SkillData />}/>
        </div>
    )
}

export default Home
