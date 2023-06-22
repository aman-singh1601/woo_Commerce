import React from 'react'
import logo_image from '../../../images/logo_image.png'
import {Link} from 'react-router-dom'
import './Header.css'

//icons
import { Search,ShoppingBasket} from '@mui/icons-material'
import { useStateValue } from '../../StateProvider/StateProvider'


function Header() {

  const [{basket}]=useStateValue();

  return (
   <nav className='header'>
    <Link to='/login'>
        <img
        className='header_logo'
        src={logo_image}
        alt =''
        />
    </Link>   
    <div className='header_search'>
    <input type='text' className='header_searchInput'/>
    <Search className='header_searchIcon'/>    
    </div> 
    <div className='header_nav'>
        <Link to='/login' className='header_link'>
          <div className='header_option'>
           <span className='header_optionLine1'>Hello</span> 
           <span className='header_optionLine2'>Sign In</span> 
          </div>   
        </Link>
        <Link to='/' className='header_link'>
          <div className='header_option'>
           <span className='header_optionLine1'>InReturns</span> 
           <span className='header_optionLine2'>& Orders</span> 
          </div>   
        </Link>
        <Link to='/' className='header_link'>
          <div className='header_option'>
           <span className='header_optionLine1'>Your</span> 
           <span className='header_optionLine2'>Prime</span> 
          </div>   
        </Link>
        <Link to='/checkout' className='header_link'>
            <div className='header_optionBasket'>
                <ShoppingBasket/>
                <span>
                {basket.length}
                </span>
            </div>
        </Link>
        
    </div>
   
   </nav>
  )
}

export default Header