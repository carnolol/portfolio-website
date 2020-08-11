import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import './Projects.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import dotaImg from '../../Photos/Screen Shot 2020-08-05 at 10.43.28 AM.png'

function Projects(props) {

    const [projects, setProjects] = useState([])
    const [projectPictures, setProjectPictures] = useState([])
    const [hover, setHover] = useState(false)

    useEffect(() => {

        axios
            .get('/projects')
            .then(res => {
                setProjects(res.data)
                axios
                    .get(`/projects/pictures`)
                    .then(res => {
                        setProjectPictures(res.data)
                    })
            })
        //TODO: Need to write backend endpoint to get pictures of dotapros & of coda-vida to display as a slider. 
    }, [])

    const settings ={
        // className: "center",
        // centerMode: true,
        // infinite: true,
        // centerPadding: "10px",
        // slidesToShow: 1,
        // slidesToScroll: 1,
        // speed: 55500,
        // dots: true,
        // arrows: true,
        // autoplay: false
        dots: true,
        fade: true, 
        arrows: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'slides'
    }

    const carousel = projectPictures.map(screenShot => {

        return (
            <div className='carousel-container'>
                <img className='project-picture'
                    src={screenShot.image}/>
            </div>
        )
    })
    
    //!         MAP HERE         //
    const allProjects = projects.map(project => {

        return (
            <div className='each-project'
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}>
                <h1>{project.name}</h1>
                <img className='project-picture'
                    src={project.img}
                    alt={`need new ${project.name} picture`} />
                <p>{project.description}</p>
                <div className='site-links'>
                    <a className='site-button'
                        href={project.site_link}>
                        Visit Site
                        </a>
                    <a className='site-button'
                        href={project.site_code}>View Code</a>
                </div>
            </div>
        )
    })

    return (
        <div className='master-projects-div'>

            <h1 className='about-h1'>Projects</h1>

            <div className='all-projects-container'>
                {allProjects}
            </div>
            
            <Slider {...settings}>
                {carousel}
            </Slider>

        </div>
    )
}

export default withRouter(Projects)