import * as React from "react"
import {useState, useEffect} from 'react'

export default function useScroolPosition  ()  {
    const [scrollposition , setScrollPosition] = useState(0)

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset)
        }

        window.addEventListener('scroll' , updatePosition)

        updatePosition()

        return () => window.removeEventListener('scroll',updatePosition)
    }, [])
    return useScroolPosition
}