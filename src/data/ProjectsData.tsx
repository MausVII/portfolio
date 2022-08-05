import React from 'react'
import BlinkingText from '../components/utils/BlinkingText'
import "./Projects.css"

const ProjectsData: React.FC = () => {
    return (
        <div className='projects'>
        <div className='project-slide description-text' id='slide-3'>
                <div className='title-nav'>
                    <h1 className='project-title'>Bookwalker Redesign</h1>  
                </div>
                <a className='project-link' href='https://master.d1im558cdd1ym1.amplifyapp.com'>Visit Site</a>
                <a className='project-link' href='https://github.com/MausVII/Bookwalker-Redesign'>Visit on Github</a>
                <img className='project-image' src='/bookwalker-redesign-3.jpg' id="bookwalker-1" alt='bookwalker-1'/>
                <p>
                    <span className='commands'>~</span><br/>
                    The Bookwalker Redesign is an ongoing personal project that aims into making a more approachable and modern
                    version of Bookwalker's - an eBook online store - current global website. It is not uncommon for Japanese Websites
                    to be behind in western standard for design and responsiveness, which is the main purpose of this project.
                    However building the website from scratch also entails creating a database and an API that connects it to the
                    front end, as some of this data is hard to come by - specially high quality covers - the initial steps of the project were
                    somewhat slow.
                    <br/><BlinkingText text='...' interval_time={500}/>
                </p>
                <img className='project-image' src='/bookwalker-redesign-4.jpg' id="bookwalker-2" alt='bookwalker-2'/>
                <p>
                    <span className='commands'>~</span><br/>
                    Currently the app connects to a MySQL database containing around 150 documents in two tables as
                    well as a few other tables used to store information like publishers, genres, sales and so on. Since I managed to create a decently
                    sized database recently, I've been able to focus on creating new functionality that makes the project closer to a full website. As of now, there is
                    dynamic generation of pages by clicking through links using React-Router-Dom 6, so that you can see the details of each specific book or get a list
                    of books by genre or publisher as well as keywords search. Soon, I'll implement what I consider are the most important missing factor: user authentication. Once that
                    is done I'll decide what to do with sections that are less clear on purpose or legality: for example, the original website has a preview feature but that
                    is well within what I'm allowed to create, there are also some links that direct to unrelated sites: right now the Follow Us links go directly
                    to the original's social media accounts.
                    <br/><BlinkingText text='...' interval_time={480}/>
                </p>
            </div>
            <div className='project-slide description-text' id='slide-1'>
                <div className='title-nav'>
                    <h1 className='project-title'>Squid Movies</h1>
                </div>
                <a className='project-link' href='https://squid-movies.vercel.app/'>Visit Site</a>
                <a className='project-link' href='https://github.com/MausVII/movie-blog'>Visit on Github</a>
                <div id="first-pic-set">
                    <img className='project-image' src='/squid-movies-1-small.jpg' id="squid-movies-1" alt='squid-movies-1'/>
                    <img className='project-image' src='/squid-movies-2-small.jpg' alt='squid-movies-2' id="squid-movies-2"/>
                </div>
                <p>
                    <span className='commands'>~</span><br/>
                    Squid Movies is a movie review blog built in NextJs and React, styling done with Tailwind CSS and connected to
                    a database through GraphQL. The NextJs framework works upon the foundation set by React but facilitates the process
                    by not having to build a completely independent server back-end and making dynamic page generation easier with slugs
                    based off directory paths. Tailwind allows for very quick styling during development and, in this case, letting me
                    build a responsive website much faster than usual.
                    <br/><BlinkingText text='...' interval_time={490}/>
                </p>

                <div className='split-img-text'>
                    <img className='project-image' src='/squid-movies-3-small.jpg' alt='squid-movies-3' id="squid-movies-3"/>
                    <p id="split-text">
                    <span className='commands'>~</span><br/>
                    Using GraphQl instead of a relational/non-relational database like PostgreSQL or MongoDB was daunting and difficult
                    at times, but still interesting and a learning experience. The queries look very different and can get confusing at times,
                    but they natural after some exposure. Building the blog itself was a lot of fun since it allowed me to connect my work to
                    something I'm very interested in, Movies.
                    <br/><BlinkingText text='...' interval_time={510}/>
                </p>
                </div>
            </div>
            <div className='project-slide description-text active-slide' id='slide-2'>
                <div className='title-nav'>
                    <h1 className='project-title'>LeafWord</h1>
                </div>
                <a className='project-link' href='https://github.com/MausVII/Leaf-Word'>Visit on Github</a>
                <div id="first-pic-set">
                    <img className='project-image' src='/leafword-1-small.jpg' id="leafword-1" alt='leafword-1'/>
                    <img className='project-image' src='/leafword-2-small.jpg' id="leafword-2" alt='leafword-2'/>
                </div>
                
                <p>
                    <span className='commands'>~</span><br/>
                    LeafWord is a flashcard app developed in Electron.js, a framework that allows
                    you to develop native apps for all major platforms using HTML, CSS, and JavaScript.
                    All electron functionality runs on Node.js from which you can create as many windows
                    as needed that work as a regular browser window would. Because of that, using some of 
                    Electron's functionality from the browser requires the use of asynchronous code that connect
                    to the side with access to Node and Electron.
                    Electron allows you to use HTML and CSS to design UI components. Despite many people's
                    dislike for CSS, it allows for very quick and personalizeable design. For anyone that has
                    tried GUI libraries like Python's TkInter, you will know how cumbersome and unpleasant it
                    can be code UI components. 
                    <br/><BlinkingText text='...' interval_time={520}/>
                </p>
                <div id="first-pic-set">
                    <img className='project-image' src='/leafword-3-small.jpg' alt='leafword-3'/>
                    <img className='project-image' src='/leafword-4-small.jpg' alt='leafword-4' id="leafword-4"/>
                </div>
                
                <p>
                    <span className='commands'>~</span><br/>
                    LeafWord is a flashcard app developed specifically for Japanese and the peculiarities of the
                    language. It uses Nedb, a lightweight version of MongoDB to store all the flashcard documents - currently
                    well over 3000 thousand - and Nodemon as a development dependency. It offers an Ui that is intuitive and pleasant to look at.
                    <br/><BlinkingText text='...' interval_time={500}/>
                </p>
            </div>
            
        </div>
    )
}

export default ProjectsData
