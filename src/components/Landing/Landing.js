import React, { useState, useEffect } from "react";
import axios from "axios";
import Slide from '@material-ui/core/Slide';
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import photo from '../../Photos/headshot.jpg'
import arrow from '../../Photos/icons8-right-arrow-50.png'
import "./Landing.css";


function Landing(props) {
    const [slideLeft, setSlideLeft] = useState(false)
    const [slideUp, setSlideUp] = useState(false)
    const [skills, setSkills] = useState([])
    const [backend, setBackend] = useState([])
    const [other, setOther] = useState([])



    useEffect(() => {
        window.addEventListener('scroll', handleSlideLeft)
        window.addEventListener('scroll', handleSlideUp)
        axios
            .get('/skills')
            .then(res => {
                setSkills(res.data)
                axios.get('/backend')
                    .then(res => {
                        setBackend(res.data)
                        axios
                            .get('/other')
                            .then(res => {
                                setOther(res.data)
                            })
                    })
            })
    }, []);

    function handleSlideLeft() {
        if (window.scrollY > 360) {
            setSlideLeft(true)
        } else {
            setSlideLeft(false)
        }
    }

    function handleSlideUp() {
        if (window.scrollY > 500) {
            setSlideUp(true)
        } else {
            setSlideUp(false)
        }
    }

    function scrollToAbout() {
        window.scrollTo({
            top: 600,
            left: 0,
            behavior: 'smooth'
        })
        // setOpen(false)
    }

    const useStyles = makeStyles((theme) => ({
        wrapper: {
            width: 100 + theme.spacing(1),
            speed: 500,
            height: 150
        }
    }))

    const classes = useStyles()


    //!!!!!!        MAP HERE        !!!!!

    const mySkills = skills.map(skill => {


        return (
            <div className='skill-container'>
                <img className='skill-img'
                    alt={`${skill.name} picture`}
                    src={skill.img} />
                <h1>{skill.name}</h1>
            </div>
        )
    })

    const myBackend = backend.map(skill => {

        return (
            <div className='skill-container'>
                <img className='skill-img'
                    alt={`${skill.name} picture`}
                    src={skill.img} />
                <h1>{skill.name}</h1>
            </div>
        )
    })

    const otherSkills = other.map(skill => {
        return(
            <div className='skill-container'>
                <img className='skill-img'
                    alt={`${skill.name} picture`}
                    src={skill.img} />
                <h1>{skill.name}</h1>
            </div>
        )
    })

    return (
        <div className='landing-master-div'>

            <div className='hero-image-container'>

                <div className='hero-text'>
                    <div className='hero-text-name'>
                        <h1>Hi, I'm </h1>
                        <h1 className='name'>Mike Chadwick</h1>
                        <h1>.</h1>
                    </div>
                    <h1>I'm a full-stack web developer who's in love with React</h1>
                </div>

                <img className='profile-pic'
                    src={photo}
                    alt='me.jpg' />
                    
                <div className='my-work'
                    onClick={() => scrollToAbout()}>
                    <p>Learn more</p>
                    <img className='arrow'
                        src={arrow}
                        alt='arrow' />
                </div>

            </div>

            <div className='about-div'>
                <Slide direction="left" unmountOnExit mountOnEnter in={slideLeft} timeout={1000}>
                    <h1 className='about-h1'>SKILLS</h1>
                </Slide>
                <Slide direction="right" unmountOnExit mountOnEnter in={slideUp} timeout={1200}>
                    <div className='master-skill-container'>
                        <p className='skill-title'>Front End</p>
                        {mySkills}
                    </div>
                </Slide>
                <Slide unmountOnExit mountOnEnter direction="left" in={slideUp} timeout={1200}>
                    <div className='master-skill-container'>
                        <p className='skill-title'>Backend</p>
                        {myBackend}
                    </div>
                </Slide>
                <Slide unmountOnExit mountOnEnter direction="right" in={slideUp} timeout={1200}>
                    <div className='master-skill-container'>
                        <p className='skill-title'>Other</p>
                        {otherSkills}
                    </div>
                </Slide>
            </div>

        </div>
    );
}

export default withRouter(Landing);
