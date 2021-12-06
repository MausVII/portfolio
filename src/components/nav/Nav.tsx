import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

interface Props {
    activeBtn: "projects" | "skills" | "about"
}

const Nav: React.FC<Props> = ({activeBtn}) => {
    const [active, setActive] = useState("")

    useEffect(() => {
        setActive(activeBtn)
    },[activeBtn])
    return (
        <div className='nav-bar'>
            <Link to="/projects" className={`nav-link ${active === "projects" ? "active": ""}`}>Projects</Link>
            <Link to="/skills" className={`nav-link ${active === "skills" ? "active": ""}`}>Skills</Link>
            <Link to="/about" className={`nav-link ${active === "about" ? "active": ""}`}>About Me</Link>
        </div>
    )
}

export default Nav
