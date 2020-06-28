import React, { useEffect, useState } from 'react'
import design from '../icons/icons8-web-design-64.png'
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
            <Grow in={grow} timeout={1500}>
                <div className='about-goals-container'>

                    <div className='about-goals'>
                        <img className='goal-img' 
                            src={design}
                            alt='design icon'/>
                        <h3 className='goal-logo'>Design Focused</h3>
                        <p>I take pride in making sure everything looks perfect.</p>
                    </div>

                    <div className='about-goals'>
                        <img className='goal-img'
                            src=''
                            alt=''/>
                        <h3 className='goal-logo'></h3>
                        <p className='goal-text'></p>
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