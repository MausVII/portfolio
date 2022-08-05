import React from 'react'
import BlinkingText from '../components/utils/BlinkingText'
import "./Data.css"

const SkillData = () => {
    return (
        <div id="showcase-container">
            <div className='description-text'>
                <p>
                    <span className='commands important'>~ skills --technical</span>
                </p>  
            </div>
             
            <div id='tech-skills'>
                <div className='tech-div'>
                    <img src='/javascript.svg' alt='javascript' />
                    <p>JavaScript</p>
                </div>

                <div className='tech-div'>
                    <img src='/csharp.svg' alt='c#' />
                    <p>C#</p>
                </div>

                <div className='tech-div'>
                    <img src='/typescript.svg' alt='typescript'/>
                    <p>TypeScript</p>
                </div>

                <div className='tech-div'>
                    <img src='/cpp.svg' alt='cpp'/>
                    <p>C++</p>
                </div>

                <div className='tech-div'>
                    <img src='/rust.svg' alt='rust' />
                    <p>Rust</p>
                </div>
                <div className='tech-div'>
                    <img src='/python.svg' alt='python'/>
                    <p>Python</p>
                </div>

                <div className='tech-div'>
                    <img src='/mysql.svg' alt='mysql'/>
                    <p>MySQL</p>
                </div>

                <div className='tech-div'>
                    <img src='/postgresql.svg' alt='postgresql'/>
                    <p>PostgreSQL</p>
                </div>

                <div className='tech-div'>
                    <img src='/html5.svg' alt='HTML5' />
                    <p>HTML 5</p>
                </div>

                <div className='tech-div'>
                    <img src='/css3.svg' alt='css3' />
                    <p>CSS 3</p>
                </div>


                <div className='tech-div'>
                    <img src='/nodejs.svg' alt='nodejs' className='white-bg'/>
                    <p>Node.js</p>
                </div>

                <div className='tech-div'>
                    <img src='/react.svg' alt='react'/>
                    <p>React</p>
                </div>

                <div className='tech-div'>
                    <img src='/dotnet.webp' alt='.net'/>
                    <p>.NET</p>
                </div>

                <div className='tech-div'>
                    <img src='/aspdotnet.svg' alt='asp.net'/>
                    <p>ASP.NET</p>
                </div>

                <div className='tech-div'>
                    <img src='/mongodb.svg' alt='mongodb'/>
                    <p>MongoDB</p>
                </div>
                
                <div className='tech-div'>
                    <img src='/express.svg' alt='express'/>
                    <p>Express</p>
                </div>

                <div className='tech-div'>
                    <img src='/github.svg' alt='github'/>
                    <p>Github</p>
                </div>

                <div className='tech-div'>
                    <img src='/electron.svg' alt='electron'/>
                    <p>Electron</p>
                </div>

                <div className='tech-div'>
                    <img src='/jest.svg' alt='jest'/>
                    <p>Jest</p>
                </div>

                <div className='tech-div'>
                    <img src='/flask.svg' alt='flask' />
                    <p>Flask</p>
                </div>

                <div className='tech-div'>
                    <img src='/vue.svg' alt='vue' />
                    <p>Vue</p>
                </div>
               
            </div>

            <div className='description-text'>
                <p>
                    <span className='commands important'>~ skills --soft</span>
                </p>
                <br/>
                <p>
                    <span className='commands'>~</span><br/>
                    I consider myself an efficient and fast worker. I prioritize learning skills that allow me to focus on my work and cut redundant tasks to
                    a minimum. I try to never do things half-way: there is nothing more permanent than a temporary solution.
                    <br /><BlinkingText text='...' interval_time={500}/>
                </p>
                <br />
                <p>
                    <span className='commands'>~</span><br/>
                    I can recognize skilled individuals and learn from them. I like to learn new skills by myself or through the mentorship of others because I know that I
                    will never know everything: a true master is an eternal student.
                    <br /><BlinkingText text='...' interval_time={470}/>
                </p>
                <br />
                <p>
                    <span className='commands'>~</span><br/>
                    I am very adaptable. I've moved and lived in different places several times and I am all the better because of it. 
                    <br /><BlinkingText text='...' interval_time={480}/>
                </p>
                <br/>
                <p>
                    <span className='commands'>~</span><br/>
                    I work well with people. I try to understand them and appreciate what makes them tick. I always look for how I can best conduct myself around them
                    to create a pleasant environment and have good relations with them.
                    <br /><BlinkingText text='...' interval_time={510}/>
                </p>  
            </div>

            

        </div>
    )
}

export default SkillData
