import React from 'react'
import logo_image from '../../../images/logo_image.png'

import './Header.css'
function Header() {
  return (
   <nav className='header'>
        <img
        className='header_logo'
        src={logo_image}
        alt =''

        />
   </nav>
  )
}

export default Header