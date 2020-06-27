import React, { useEffect, useState } from 'react'
import { Grow } from '@material-ui/core'
import './About.css'

function About(props) {

    const [grow, setGrow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleGrow)
    }, [])

    function handleGrow() {
        console.log(window.scrollY)
        if (window.scrollY > 1400) {
            setGrow(true)
        } else {
            setGrow(false)
        }
    }

    return (
        <div className='master-about-div'>
            <h1 className='about-h1'>About</h1>
            <h1>djsdkf</h1>
            <Grow in={grow} timeout={1500}>
                <div className='about-goals-container'>
                    <div className='about-goals'>
                        <h1>1</h1>
                    </div>
                    <div className='about-goals'>
                        2
                    </div>
                    <div className='about-goals'>
                        2
                    </div>
                    <div className='about-goals'>
                        4
                    </div>
                </div>
            </Grow>
        </div>
    )
}

export default About