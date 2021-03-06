import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import './Projects.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// TODO: need to change DB string on helo, take screen shots & add to projects list.

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", color: 'black' }}
            onClick={onClick}
        />
    );
}

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
    }, [])

    const settings = {
        // centerMode: true,
        centerPadding: '15px',
        arrows: true,
        infinite: true,
        swipeToSlide: true,
        speed: 750,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />
    }

    const dotaCarousel = projectPictures.map(screenShot => {
        if (screenShot.project_id === 1 && screenShot.name === 'Dota Pros') {
            return (
                <div className='carousel-container'>
                    <img className='project-picture' 
                        alt='need new screen shot'
                        src={screenShot.image} />
                </div>
            )
        }
    })

    const codaCarousel = projectPictures.map(screenShot => {

        if (screenShot.project_id === 2 && screenShot.name === 'Coda-Vida') {
            return (
                <div className='carousel-container'>
                    <img className='project-picture' 
                        alt='need new screen shot'
                        src={screenShot.image} />
                </div>
            )
        }
    })

    const weddingCarousel = projectPictures.map(screenShot => {

        if(screenShot.project_id === 3 && screenShot.name === "The Chadwick's"){
            console.log(screenShot.name, screenShot.image)
            return (
                <div className='carousel-container'>
                    <img className='project-picture' 
                        alt='need new screen shot'
                        src={screenShot.image} />
                </div>
            )
        }
    })

    //!         MAP HERE         //
    const allProjects = projects.map(project => {

        return (
            <div className='each-project'
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}>

                <h1>{project.name}</h1>

                <div className='slider-container'>
                    {/* Ternary that handles displaying the correct slides  */}
                    {project.name === 'Coda-Vida' ? <Slider {...settings} style={{ width: '85%', padding: '0 0 20px' }}>
                        {codaCarousel}
                    </Slider> : project.name === 'Dota Pros' ? <Slider {...settings} style={{width: '85%', padding: '0 0 20px'}}>
                        {dotaCarousel}
                    </Slider> : project.id === 3 ? <Slider {...settings} style={{width: '85%', padding: '0 0 20px'}}> 
                        {weddingCarousel}
                    </Slider> : null}
                </div>

                <p>{project.description}</p>

                <div className='site-links'>
                    <a className='site-button'
                        target='_blank'
                        href={project.site_link}>
                        Visit Site
                        </a>
                    <a className='site-button'
                        target='_blank'
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
        </div>
    )
}

export default withRouter(Projects)