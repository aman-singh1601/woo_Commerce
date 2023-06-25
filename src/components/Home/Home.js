import React from 'react'
import './Home.css'
import Header from './Header/Header'

import banner from '../../images/bannerv2.jpg'
import Product from '../Products/Product'
import  p1 from '../../images/P1.jpg'

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
            <div className='home_row'>
            <Product
              id='123'
              title='HP 15s,11th Gen Intel Core i3-1115G4 8GB RAM/512GB SSD 15.6-inch(39.6 cm) Micro-Edge Anti-Glare FHD Laptop'
              price={11.96}
              rating={5}
              image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqU-i58AvUS66asD72i1Wrz62FqrkAIGJwWK87AwvpS8N33svs6wMoIveb-7vTRZFvhco&usqp=CAU'
            />
            <Product
              id='1234'
              title='All-New Echo Dot (5th Gen, 2023 release) | Smart speaker with Bigger sound, Motion Detection'
              price={13.27}
              rating={4}
              image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6tXKw-jNbU-qccRh2J99gT9acbDr3KNrn8g&usqp=CAU'
            />
            </div>
            <div className='home_row'>
            <Product
             
              id='12323'
              title='abc'
              price={11.96}
              rating={5}
              image={p1}
            />
            <Product
          
              id='12435434'
              title='def'
              price={13.27}
              rating={4}
              image={p1}
            />
            <Product
           
              id='1245435434'
              title='def'
              price={13.27}
              rating={4}
              image={p1}
            />
            </div>
            <div className='home_row'>
            <Product
              id='432432'
              title='def'
              price={13.27}
              rating={4}
              image={p1}
            />

            </div>
           
        </div>


    </div>
  )
}

export default Home

