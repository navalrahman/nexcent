import React from 'react'

import './Header.css'

// importing logo here
import logo from '../../images/logo.png'

// import right-arrow
import right from '../../images/back.png'

const Header = () => {
  return (
    <div className='heading-container'>
        <div className='container-one'>
            <div>
                <img src={logo} alt="logo" className='logo-image' />
            </div>
        </div>
        <div className='container-two'>
            <ul>
                <li>Home</li>
                <li>Features</li>
                <li>Community</li>
                <li>Blog</li>
                <li>Pricing</li>
                <button className='container-two-button'>Register Now <img src={right} alt="right" /> </button>
            </ul>
        </div>
    </div>
  )
}

export default Header