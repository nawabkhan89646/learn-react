import React from 'react';
import './Hero.css';

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
          <img src="/src/assets/google-play.jpg" alt="" />
          <img src="/src/assets/app-store.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <img src="/src/assets/header.jpg" alt="" />
      </div>
    </div>
  );
}

export default Hero;
