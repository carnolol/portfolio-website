import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Header.css'

const hamburger = 'https://i.ya-webdesign.com/images/hamburger-menu-icon-png-white-6.png'

function Header(props) {

    const [open, setOpen] = useState(false)

    useEffect(() => {

    }, [])

    return (
        <div className='master-header-div'>
            <nav className='navbar'>
                <ul className='nav-list'>
                    <l1 className='nav-item'>Home</l1>
                    <l1 className='nav-item'>About</l1>
                    <l1 className='nav-item'>Portfolio</l1>
                    <l1 className='nav-item'>Contact</l1>
                </ul>
                <img className='hamburger'
                    src={hamburger}
                    onClick={() => setOpen(!open)}
                    alt='hamburger menu' />
                <ul className={`mobile-nav-list ${open ? `mobile-nav-list-open` : null}`}>
                    <l1 className='nav-item2'>Home</l1>
                    <l1 className='nav-item2'>About</l1>
                    <l1 className='nav-item2'>Portfolio</l1>
                    <l1 className='nav-item2'>Contact</l1>
                </ul>
            </nav>
        </div>
    )
}

export default Header