import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Projects.css'
import Slider from "react-slick"

function Projects (props) {

    const [dota, setDota] = useState([])
    const [coda, setCoda] = useState([])

    useEffect(() => {
        //TODO: Need to write backend endpoint to get pictures of dotapros & of coda-vida to display as a slider. 
    }, [])

    

    return(
        <div className='master-projects-div'>
            <h1 className='about-h1'>Projects</h1>
        </div>
    )
}

export default Projects