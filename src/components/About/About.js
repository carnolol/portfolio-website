import React, { useEffect, useState } from 'react'
import axios from 'axios'
import design from '../icons/icons8-web-design-50.png'
import phone from '../icons/icons8-augmented-reality-64.png'
import dad from '../../Photos/dad_and_rowan.jpg'
import cool from '../icons/icons8-cool-50.png'
import fluid from '../icons/icons8-water-64.png'
import { Grow } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import cyan from '@material-ui/core/colors/cyan'
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles'
import './About.css'

function About(props) {

    const [grow, setGrow] = useState(false)
    const [aboutGrow, setAboutGrow] = useState(false)
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    // TODO: Add Sweet Alerts so when someone sends an email it looks better.

    useEffect(() => {
        window.addEventListener('scroll', handleGrow)
    }, [name])


    //* THEME PROVIDER FUNCTION
    const theme = createMuiTheme({
        color: "white",
        palette:{
            primary: {
                main: cyan[500]
            }, 
        }
    })

    const inputProps = {
        color: 'white'
    }

    // const styles = theme => ({
    //     input: {
    //         color: 'white'
    //     }
    // });

    function handleGrow() {
        console.log(window.scrollY)
        if (window.scrollY > 1250) {
            setGrow(true)
        } if (window.scrollY > 1050){
            setAboutGrow(true)
        } else {
            setGrow(false) 
            setAboutGrow(false)
        }
    }

    const handleSendEmail = () => {
        alert('Your e-mail has been sent!')
        const body = {
            name: name,
            message: message
        }
        axios.post('/mail', body)
        handleReset()
    }

    function handleReset(){
        setName('')
        setMessage('')
    }

    return (
        <div className='master-about-div'>

            <Grow timeout={1000} in={aboutGrow}>
                <h1 className='about-header'>About</h1>
            </Grow>

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
                        <p className='goal-text'>Designing & building easy to navigate layouts.</p>
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
                    <ul className='list-container'>
                        <li className='dad-list'>
                           I love to design & Engineer projects. There is nothing more rewarding than making something from scratch.
                        </li>
                        <li className='dad-list'>
                            A father & loyal family-man
                        </li>
                        <li className='dad-list'>
                            A level headed & mechanically inclined problem solver
                        </li>
                        <li className='dad-list'>
                            Someone who has great passion for building and designing
                        </li>
                        <li className='dad-list'>
                            Obsessed with perfecting the small details 
                        </li>
                    </ul>
                </div>

                <div className='place'>

                    <div className='work-together-head'>
                        <h1>Lets Work Together!</h1>
                        <p>Send me an email with some details!</p>
                    </div>

                    <div className='work-together-inputs-container'>
                        {/* <input className='work-together-inputs'
                            placeholder='Name'
                            onChange={(e) => setName(e.target.value)} />
                        <input className='work-together-inputs'
                            placeholder='Your Message'
                            onChange={e => setMessage(e.target.value)} /> */}
                        <ThemeProvider theme={theme}>
                            <TextField 
                                id="outlined-basic" 
                                label="Name" 
                                variant="outlined" 
                                color="primary" 
                                size="small"
                                value={name}
                                inputProps={inputProps}
                                required={true}
                                onChange={e => setName(e.target.value)}/>
                        </ThemeProvider>
                        <ThemeProvider theme={theme}>
                            <TextField
                             label="Message"
                             variant="outlined"
                             size="small"
                             required={true}
                             multiline={true}
                             rows="5"
                             value={message}
                             onChange={e => setMessage(e.target.value)}   />
                        </ThemeProvider>
 
                        <div className='work-buttons-container'>
                            <button className='work-buttons'
                                onClick={() => handleReset()}>Cancel</button>
                            <button className='work-buttons'
                                onClick={() => handleSendEmail()}>Submit</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default About