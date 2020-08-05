import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Projects.css'
import Slider from "react-slick"
import dotaImg from '../../Photos/Screen Shot 2020-08-05 at 10.43.28 AM.png'

function Projects(props) {

    const [projects, setProjects] = useState([])
    const [dota, setDota] = useState([])
    const [coda, setCoda] = useState([])

    useEffect(() => {

        axios
            .get('/projects')
            .then(res => {
                setProjects(res.data)
            })
        //TODO: Need to write backend endpoint to get pictures of dotapros & of coda-vida to display as a slider. 
    }, [])

    const allProjects = projects.map(project => {

        return (
            <div className='project-picture-container'>
                    <h1>{project.name}</h1>
                    <img className='project-picture'
                        src={project.img}
                        alt={`need new ${project.name} picture`} />
                    <div>
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
            {allProjects}
            {/* <div className='project-picture-container'>
                <div>
                    <img className='project-picture'
                        src={dotaImg}
                        alt='dota screen shot' />
                    <div>
                        <a className='site-button'
                            href='https://followdotapros.com/'>
                            Visit Site
                        </a>
                        <a className='site-button'
                            href='https://github.com/carnolol/follow-the-dota-pros'>View Code</a>
                    </div>
                </div>
            </div> */}

        </div>
    )
}

export default Projects