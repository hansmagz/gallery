import React from 'react';
import { Stack, Typography, Button, Box, Grid } from '@mui/material';
import Pic1 from '../assets/Pic1.jpg';
import Pic2 from '../assets/Pic2.jpg';
import Pic3 from '../assets/Pic3.jpg';
import Pic4 from '../assets/Pic4.jpg';
import Pic5 from '../assets/Pic5.jpg';
import '../styles/fonts.css';
import '../styles/styles.css'
import '../scripts/script.js'

const Hero = () => {
  return (
    <>
      <nav>
        <div className='logo'>
          <a href='#'>Noir Wood</a>
        </div>
        <div className='pages'>
          <a href='#'>Films</a>
          <a href='#'>Production</a>
          <a href='#'>Info</a>
          <a href='#'>Contact</a>
        </div>
        <div className='shop'>
          <a href='#'>Search</a>
          <a href='#'>Account</a>
          <a href='#'>Cart</a>
        </div>
      </nav>
      <footer>
        <p>Showreel 2.0</p>
        <p>2024 / 2025</p>
      </footer>
      <div className='container'>
        <div className='slider'>
          <div className='card'>
            <img src={Pic1} alt='' />
            <div className='copy'>
              <h1>Lorem, ipsum.</h1>
            </div>
          </div>
          <div className='card'>
            <img src={Pic2} alt='' />
            <div className='copy'>
              <h1>Lorem, ipsum.</h1>
            </div>
          </div>
          <div className='card'>
            <img src={Pic3} alt='' />
            <div className='copy'>
              <h1>Lorem, ipsum.</h1>
            </div>
          </div>
          <div className='card'>
            <img src={Pic4} alt='' />
            <div className='copy'>
              <h1>Lorem, ipsum.</h1>
            </div>
          </div>
          <div className='card'>
            <img src={Pic5} alt='' />
            <div className='copy'>
              <h1>Lorem, ipsum.</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;