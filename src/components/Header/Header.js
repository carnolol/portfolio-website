import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Header.css'

const hamburger = 'https://i.ya-webdesign.com/images/hamburger-menu-icon-png-white-6.png'

function Header(props) {

    const [open, setOpen] = useState(false)

    useEffect(() => {

    }, [])

    function scrollTop(){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
          setOpen(false)
    }

    function scrollToSkills () {
        window.scrollTo({
            top: 600,
            left: 0,
            behavior: 'smooth'
        })
        setOpen(false)
    }

    function scrollToPortfolio () {
        window.scrollTo({
            top: 600,
            left: 0,
            behavior: 'smooth'
        })
        setOpen(false)
    }

    function scrollToContact () {
        window.scrollTo({
            top: 600,
            left: 0,
            behavior: 'smooth'
        })
        setOpen(false)
    }

    return (
        <div className='master-header-div'>
            <nav className='navbar'>
                <ul className='nav-list'>
                    <l1 className='nav-item'
                        onClick={() => scrollTop()}>Home</l1>
                    <l1 className='nav-item'
                        onClick={() => scrollToSkills()}>Skills</l1>
                    <li className='nav-item'>About</li>
                    <l1 className='nav-item'>Portfolio</l1>
                    <l1 className='nav-item'>Contact</l1>
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
                    <li className='nav-item2'>About</li>
                    <l1 className='nav-item2'>Portfolio</l1>
                    <l1 className='nav-item2'>Contact</l1>
                </ul>
            </nav>
        </div>
    )
}

export default Header