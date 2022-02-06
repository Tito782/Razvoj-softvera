import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {

  window.scrollTo(0, 0);

  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1 className='boja'>Digitalizacija Učeničkog Servisa</h1>
      <div className='hero-btns'>
        <Button
          className='btns zapocnite'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
            Započnite
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
