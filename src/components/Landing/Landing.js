import React, { useState, useEffect } from "react";
import axios from "axios";
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Slide from '@material-ui/core/Slide';
import Slider from "react-slick";
import { makeStyles } from '@material-ui/core/styles';
import photo from '../../Photos/Headshot.png'
import arrow from '../../Photos/icons8-right-arrow-50.png'
import "./Landing.css";

const hero =
    "https://i.pinimg.com/originals/1e/3e/9e/1e3e9ebab9ae9154a33fefcf937d2796.jpg";

function Landing(props) {


    useEffect(() => {

    }, []);

    const useStyles = makeStyles((theme) => ({
        wrapper: {
            width: 100 + theme.spacing(1),
            speed: 500,
            height: 150
        }
    }))

    const classes = useStyles()

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
                <div className='my-work'>
                    <p>View my work</p>
                    <img className='arrow'
                        src={arrow}
                        alt='arrow' />
                </div>
            </div>

            <div className='about-div'>
                <Slide direction="left" unmountOnExit  mountOnEnter in={true}>
                    <h1 className='about-h1'>ABOUT</h1>
                </Slide>

            </div>

            <div className='port-div'>
                <div className={classes.wrapper}>
                    <Slide direction="left" unmountOnExit  mountOnEnter in={true}>
                        <h1>PROJECTS</h1>
                    </Slide>
                </div>
            </div>

        </div>
    );
}

export default Landing;
