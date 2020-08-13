import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import './Projects.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import dotaImg from '../../Photos/Screen Shot 2020-08-05 at 10.43.28 AM.png'


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
        //TODO: Need to write backend endpoint to get pictures of dotapros & of coda-vida to display as a slider. 
    }, [])

    const settings = {
        // className: "center",
        // centerMode: true,
        // centerPadding: "25px",
        // infinite: true,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        // speed: 55500,
        // dots: true,
        // arrows: true,
        // autoplay: false
        dots: true,
        centerPadding:'15px',
        arrows: true,
        infinite: true,
        swipeToSlide: true,
        speed: 750,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />
    }

    const carousel = projectPictures.map(screenShot => {

        if (screenShot.project_id === 1) {
            return (
                <div className='carousel-container'>
                    <img className='project-picture' alt='need new screen shot'
                        src={screenShot.image} />
                </div>
            )
        } else if (screenShot.project_id === 2) {

        }

        // return (
        //     <div className='carousel-container'>
        //         <img className='project-picture' alt='need new screen shot'
        //             src={screenShot.image} />
        //     </div>
        // )
    })

    //!         MAP HERE         //
    const allProjects = projects.map(project => {


        // function handleSlideshow(){
        //     if(project.project_id === 1){
        //        return <Slider {...settings} style={{width: '90%'}}>
        //             {carousel}
        //         </Slider>
        //     } else if (project.project_id === 2){

        //     }
        // }

        return (
            <div className='each-project'
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}>
                <h1>{project.name}</h1>
                {/* {handleSlideshow()} */}
                <div className='slider-container'>
                    <Slider {...settings} style={{ width: '80%' , padding: ' 0 0 20px'}}>
                        {carousel}
                    </Slider>
                </div>
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

        </div>
    )
}

export default withRouter(Projects)