import React from 'react'
import './Showcase.css'

interface Props {
    title: String
    data: JSX.Element
}

const Showcase: React.FC<Props> = ({title, data}) => {
    return (
        <div id='show-case'>
            {data}
        </div>
    )
}

export default Showcase
