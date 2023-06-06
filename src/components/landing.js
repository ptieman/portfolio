import { useState } from 'react';
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
  };

  return (
    <div>
    <div className="landing-page">
      <h1 className="title">Presley Tieman</h1>
      <button className="play-button" onClick={handlePlayClick}>
        <span className="play-button-before"></span>
        <span className="play-button-after"></span>
</button>
      <Sound
        url={SirenWar}
        playStatus={
          isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
        }
        playFromPosition={300}
        onLoading={handleSongLoading}
        onPlaying={handleSongPlaying}
        onFinishedPlaying={handleSongFinishedPlaying}
      />
      <ul className="threeD-button-set">
        <li>
          <a href="/about">
            <button>About</button>
          </a>
        </li>
        <li>
          <a href="/projects">
            <button>Projects</button>
          </a>
        </li>
        <li>
          <a href="/blog">
            <button>Blog</button>
          </a>
        </li>
      </ul>
    </div>
    <div className='footer'>
    <ul class="social-media">
                    <li class="social-media-item">
                        <a href="https://www.linkedin.com/in/presley-potter/" class="social-media-link">
                          <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                    <li class="social-media-item">
                        <a href="mailto:presleytieman@outlook.com" class="social-media-link">
                          <i class="fa-regular fa-envelope"></i>
                        </a>
                    </li>
                    <li class="social-media-item">
                        <a href="https://github.com/ptieman" class="social-media-link">
                          <i class="fa-brands fa-square-github"></i>
                        </a>
                    </li>
                </ul>
            </div>
    </div>
  );
};

export default Landing;
