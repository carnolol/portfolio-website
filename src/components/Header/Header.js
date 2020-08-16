import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Header.css'

const hamburger = 'https://i.ya-webdesign.com/images/hamburger-menu-icon-png-white-6.png'

function Header(props) {

    const [open, setOpen] = useState(false)
    const [home, setHome] = useState(true)
    const [skills, setSkills] = useState(false)
    const [about, setAbout] = useState(false)
    const [projects, setProjects] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', checkSkills)
        window.addEventListener('scroll', checkHome)
        window.addEventListener('scroll', checkAbout)
        // window.addEventListener('scroll', checkProjects)
    }, [])

    function checkHome() {
        if (window.scrollY < 600) {
            setHome(true)
        } else {
            setHome(false)
        }
    }

    console.log(window.screen)

    function checkSkills() {
        if (window.scrollY >= 600 && window.scrollY < 1550) {
            setSkills(true)
        } else {
            setSkills(false)
        }
    }

    function checkAbout() {
        if (window.scrollY >= 1550 && window.scrollY < 2750) {
            setAbout(true)
        } else {
            setAbout(false)
        } if (window.scrollY >= 2750) {
            setProjects(true)
        } else {
            setProjects(false)
        }
    }

    // function checkProjects() {
    //     if(window.scrollY >= 2750) {
    //         setProjects(true)
    //     } else {
    //         setProjects(false)
    //     }
    // }

    function scrollTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        setOpen(false)
    }

    function scrollToSkills() {
        window.scrollTo({
            top: 600,
            left: 0,
            behavior: 'smooth'
        })
        setOpen(false)
    }

    function scrollToAbout() {
        window.scrollTo({
            top: 1550,
            left: 0,
            behavior: 'smooth'
        })
        setOpen(false)
    }

    function scrollToProjects() {
        window.scrollTo({
            top: 2570,
            left: 0,
            behavior: 'smooth'
        })
        setOpen(false)
    }

    function scrollToContact() {
        window.scrollTo({
            top: 1960,
            left: 0,
            behavior: 'smooth'
        })
        setOpen(false)
    }

    return (
        <div className='master-header-div'>
            <nav className='navbar'>
                <ul className='nav-list'>
                    <l1
                        className={`nav-item ${home ? 'current-skill' : null}`}
                        onClick={() => scrollTop()}>Home</l1>
                    <l1
                        className={`nav-item ${skills ? 'current-skill' : null}`}
                        onClick={() => scrollToSkills()}>Skills</l1>
                    <li
                        className={`nav-item ${about ? 'current-skill' : null}`}
                        onClick={() => scrollToAbout()}>About</li>
                    <l1 className='nav-item'
                        onClick={() => scrollToContact()}>Contact</l1>
                    <l1 className={`nav-item ${projects ? 'current-skill' : null}`}
                        onClick={() => scrollToProjects()}>Projects</l1>
                </ul>
                <img className='hamburger'
                    src={hamburger}
                    onClick={() => setOpen(!open)}
                    alt='hamburger menu' />
                <ul className={`mobile-nav-list ${open ? `mobile-nav-list-open` : null}`}>
                    <l1 className='nav-item2'
                        onClick={() => scrollTop()}>Home</l1>
                    <l1 className='nav-item2'
                        onClick={() => scrollToSkills()}>Skills</l1>
                    <li className='nav-item2'
                        onClick={() => scrollToAbout()}>About</li>
                    <l1 className='nav-item2'
                        onClick={() => scrollToContact()}>Contact</l1>
                    <l1 className='nav-item2'
                        onClick={() => scrollToProjects()}>Projects</l1>
                </ul>
            </nav>
        </div>
    )
}

export default Header