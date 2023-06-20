import React from 'react'
import './Home.css'
import Header from './Header/Header'

import banner from '../../images/bannerv2.jpg'

function Home() {
  return (
    <div>
        <Header/>
        <div className='home'>
            <img
              className='home_image'
              src={banner}
              alt=''
            />
        </div>

    </div>
  )
}

export default Home