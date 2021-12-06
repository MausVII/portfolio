import React from 'react'
import Showcase from '../components/showcase/Showcase'
import Nav from '../components/nav/Nav'
import ProjectsData from '../data/ProjectsData'



const Projects: React.FC = () => {
    return (
        <div className='main'>
            <Nav activeBtn='projects'/>
            <Showcase title='projects' data={<ProjectsData />}/>
        </div>
    )
}

export default Projects
