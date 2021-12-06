import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact-group'>
            <button className='contact-btn'><img className='contact-icon' alt="LinkedIn" src='/linkedin.svg'></img></button>
            <button className='contact-btn'><img className='contact-icon' alt="Gmail" src='/gmailicon.svg'></img></button>
            <button id="contact-me-btn">Contact Me</button>
        </div>
    )
}

export default Contact
