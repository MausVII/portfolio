import React from 'react'
import Showcase from '../components/showcase/Showcase'
import Nav from '../components/nav/Nav'
import SkillData from '../data/SkillData'



const Skills: React.FC = () => {
    return (
        <div className='main'>
            <Nav activeBtn='skills'/>
            <Showcase title="skills" data={<SkillData />}/>
        </div>
    )
}

export default Skills
