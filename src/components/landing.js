// landing page
import { useEffect, useState } from 'react';
// import jQuery from 'jquery'; // Import jQuery library
import React from 'react';
import '../scss/main.scss';
import Sound from 'react-sound';
import SirenWar from '../media/sirenwar.mp3';

const Landing = ({
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const handlePlayClick = () => {
    setShowTooltip(false);
    setIsPlaying(!isPlaying);
  }
    return (
    
      <div className="landing-page">
            
              
            <h1 className="title">Presley Tieman</h1>

            <p className='title-2'>Software Engineer</p>
                    
            <button className='play-button' onClick={handlePlayClick}>
              <span className='play-button-before'></span>
              <span className='play-button-after'></span>
            </button>
            {/* {showTooltip && (
              <div className="tooltip">
                click the play button to hear music!
              </div>
            )} */}
            <Sound 
              url={SirenWar}
              playStatus={
                isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
              }
              playFromPosition={300}
              onLoading={handleSongLoading}
              onPlaying={handleSongPlaying}
              onFinishedPlaying={handleSongFinishedPlaying}/>
            <ul className="threeD-button-set">
              <li><button>About</button></li>
              <li><button>Projects</button></li>
              <li><button>Contact</button></li>
              <li><button>Blog</button></li>
            </ul>
        </div>
    )
  };

  
  export default Landing;


  {/* <div className='text-box'>
            <div className='text-container'>
            <p className='text'>Software Engineer with a passion for learning and contributing to meaningful projects. Utilizing enterprise-level languages like JavaScript, React, Python, and CSS to develop web applications and deliver solutions with a customer-first approach. </p>
            </div> */}
          {/* </div> */}