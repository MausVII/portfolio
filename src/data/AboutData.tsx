import React from 'react'
import "./Data.css"

const AboutData: React.FC = () => {
    return (
            <div className='about-div'>
                <div id='pic-div'>
                    <h1 id="about-name">Val Puente</h1>
                    <img id="self" src='/me.jpg' alt="me"></img>
                </div>
                
                <div className="description-text">
                <p>
                    <span className='commands'>~ education --upper</span><br />
                    I went to college at Texas State University in San Marcos where I graduated with a
                    <span className='vars'> Bachelor's degree in Computer Science and a minor in Mathematics</span>. I took several classes
                    that gave me a head start into Web Development:
                    <ul>
                        <li>Software Development</li>
                        <li>Software Development Project</li>
                        <li>Machine Learning</li>
                        <li>Data Mining</li>
                        <li>Intro To SQL Databases</li>
                    </ul>
                    <span className='commands'>~ ...</span><br />
                </p>
                <br />
                <p>
                    <span className='commands'>~ coding --drive</span><br />
                    I am a <span className='vars'>programmer at heart</span>. There is <span className='vars'>always a VS Code window open</span> in PC and there is always that lingering
                    train of thought in my head about how to tackle the bug I found yesterday, how should I structure my code for
                    this task, how to divide new problems into chunks I can jump into... Developing a program takes a million steps and
                    I love watching <span className='vars'>the results of my work</span> after each step as well as the <span className='vars'>skill expression</span> they require from you; every programmer
                    takes different approaches and I like being able to see a <span className='vars'>little about me in each line of code I write</span>.
                    <br/><span className='commands'>~ ...</span><br />
                </p>
                <br />
                <p>
                <span className='commands'>~ work --ethic</span><br />
                    <span className='vars'>I like solving problems</span>, and I like to think I'm good at it. <span className='vars'>Always collected</span>; I never find it frustrating to find a roadblock because
                    there is always a way around: divide and conquer, visualize, transform into diagrams, debug, take a look at the big picture, at the small picture, StackOverflow, Google, a small walk. Each time
                    you try a new approach you come closer to solving the problem and you've <span className='vars'>learned something new</span>. And grown as a better programmer.
                    <br/><span className='commands'>~ ...</span><br />
                </p>
                <br />
                <p>
                    <span className='commands'>~ webdev --drive</span><br />
                    I decided to delve into Web Development because there is no other fields where you can <span className='vars'>see the resuls of your work</span> as quickly and as strikingly;
                    every line of JavaScript will immediately render itself in the browser. It is also a field where you can <span className='vars'>express yourself</span> visually and artistically; for each
                    line of code written for the backend, you will write a line of code to paint its logic in the frontend. Not only do I get to test and improve my <span className='vars'>logic capabilities</span>, 
                    but also my <span className='vars'>artistic sense</span>. I find Web Development to be a great field to express myself.
                    <br/><span className='commands'>~ ...</span><br />
                </p>
                </div>
                
            </div>
    )
}

export default AboutData
