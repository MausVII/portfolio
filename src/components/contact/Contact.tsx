import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact-group'>
            <button className='contact-btn'><a href="https://www.linkedin.com/in/val-puente-744505226"><img className='contact-icon' alt="LinkedIn" src='/linkedin.svg'></img></a></button>
            <button className='contact-btn'><a href="mailto:valpuentenc31@gmail.com"><img className='contact-icon' alt="Gmail" src='/gmailicon.svg'></img></a></button>
            <button id="contact-me-btn" onClick={() => {
                //@ts-ignore
                document.querySelector('.contact-info')!.style.display = 'flex'
            }}>Contact Me</button>
        </div>
    )
}

export default Contact
