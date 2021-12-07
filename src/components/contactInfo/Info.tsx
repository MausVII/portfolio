import React from 'react'
import "./Info.css"

const Info = () => {
    return (
        <div className='contact-info'>
            <div className='card'>
            <h2>Contact Info</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Email</td>
                        <td className='info'>valpuentenc31@gmail.com</td>
                    </tr>
                    <tr>
                        <td>LinkedIn</td>
                        <td className='info'>www.linkedin.com/in/val-puente-744505226</td>
                    </tr>
                    <tr>
                        <td>Phone Number</td>
                        <td className='info'>512-379-9549</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => { 
                //@ts-ignore
                document.querySelector('.contact-info')!.style.display = 'none'}
                }>Close</button>
            </div>
        </div>
    )
}

export default Info
