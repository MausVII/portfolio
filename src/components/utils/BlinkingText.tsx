import React, { useEffect, useState } from "react"

interface BlinkingProps {
    text: string,
    interval_time: number
}

const BlinkingText = ({text, interval_time}: BlinkingProps) => {

    const [visible, setVisible] = useState(true)

    useEffect(() => {
      const interval = setInterval(() => {
        setVisible(!visible)
      }, interval_time)
      return () => {
        clearInterval(interval)
      }
    }, [visible])
    

    return <span className='commands' style={{ opacity: visible ? "100%" : "0%"}}>{text}</span>
}

export default BlinkingText;