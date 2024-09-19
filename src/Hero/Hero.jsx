import React from 'react';
import './Hero.css';
import googlePlay from '../assets/google-play.jpg';
import appStore from '../assets/app-store.jpg';
import headerImage from '../assets/header.jpg';

function Hero() {
  return (
    <div className="main">
      <div className="left">
        <h2>CREATE PLAYLIST & SHARE IT WITH YOUR FRIENDS</h2>
        <h1>MUSIC FOR YOUR CURRENT MOOD</h1>
        <p>
          Discover the perfect soundtrack for every moment with our 'Music for Your Current Mood' section.
          Whether you're feeling upbeat, reflective, or somewhere in between, explore curated playlists and
          tunes tailored to match your mood.
        </p>
        <div className="images">
          <img src={googlePlay} alt="Google Play" />
          <img src={appStore} alt="App Store" />
        </div>
      </div>
      <div className="right">
        <img src={headerImage} alt="Music for your current mood" />
      </div>
    </div>
  );
}

export default Hero;
