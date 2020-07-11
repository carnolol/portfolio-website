import React, { useEffect, useState } from 'react'
import design from '../icons/icons8-web-design-50.png'
import phone from '../icons/icons8-augmented-reality-64.png'
// import speed from '../icons/icons8-speed-100.png'
import dad from '../../Photos/dad_and_rowan.jpg'
import cool from '../icons/icons8-cool-50.png'
import fluid from '../icons/icons8-water-64.png'
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
            {/* <Grow in={grow} timeout={1500}> */}
            <div className='about-goals-container'>

                <Grow in={grow} timeout={1000}>
                    <div className='about-goals'>
                        <div className='goal-img-background'>
                            <img className='goal-img'
                                src={design}
                                alt='design icon' />
                        </div>
                        <h3 className='goal-logo'>Design Focused</h3>
                        <p className='goal-text'>I take pride in making sure everything looks perfect. On all screen sizes.</p>
                    </div>
                </Grow>

                <Grow in={grow} timeout={1750}>
                    <div className='about-goals'>
                        <div className='goal-img-background'>
                            <img className='goal-img'
                                src={phone}
                                alt='phone icon' />
                        </div>
                        <h3 className='goal-logo'>Interactive</h3>
                        <p className='goal-text'>Webpages shouldn't be static, its the little things that hold our attention.</p>
                    </div>
                </Grow>

                <Grow in={grow} timeout={2500}>
                    <div className='about-goals'>
                        <div className='goal-img-background'>
                            <img className='goal-img'
                                src={fluid}
                                alt='water icon' />
                        </div>
                        <h3 className='goal-logo'>Fluid</h3>
                        <p className='goal-text'>Easy to navigate layouts.</p>
                    </div>
                </Grow>

                <Grow in={grow} timeout={3250}>
                    <div className='about-goals'>
                        <div className='goal-img-background'>
                            <img className='goal-img'
                                src={cool}
                                alt='water icon' />
                        </div>
                        <h3 className='goal-logo'>Satisfaction</h3>
                        <p className='goal-text'>I aim to please, Making sure all design & functionality elements are complete</p>
                    </div>
                </Grow>

            </div>

            <div className='dad-container'>

                <div className='dad-info'>
                    <img className='dad-and-row'
                        src={dad}
                        alt='dad and rowan' />
                    <h1>Who am I?</h1>
                </div>

            </div>
            {/* </Grow> */}
        </div>
    )
}

export default About