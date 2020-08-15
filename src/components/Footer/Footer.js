import React, { useState, useEffect } from 'react'
import './Footer.css'
import inLogo from '../icons/icons8-linkedin-2-64.png'
import gitHub from '../icons/icons8-github-60.png'
import document from '../icons/icons8-shared-document-64.png'

let resume = 'https://docs.google.com/document/d/1f1iLoo4w-FYPjHv3juua0zw-kgrwySCR8vZvpxsxu2U/edit?usp=sharing'

function Footer(props) {

    return (
        <div className='master-footer-div'>

            <div className='logo-container'>

                <a href="https://www.linkedin.com/in/michael-chadwick91/">
                    <img className='logo-links'
                        alt='Linked-in Logo'
                        src={inLogo} />
                </a>
                <a href="https://github.com/carnolol">
                    <img className='logo-links'
                        alt='Linked-in Logo'
                        src={gitHub} />
                </a>
                <a href="https://docs.google.com/document/d/1f1iLoo4w-FYPjHv3juua0zw-kgrwySCR8vZvpxsxu2U/edit?usp=sharing">
                    <img className='logo-links'
                        alt='Linked-in Logo'
                        src={document} />
                </a>

            </div>

            <p>Icons from icons8.com</p>

        </div>
    )

}

export default Footer
