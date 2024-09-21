import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to My Portfolio!</h1>
      <p>Hi, I’m Son Vu, a passionate developer dedicated to building amazing digital experiences.</p>
      
      <p><strong>Mission:</strong> To create intuitive, user-friendly solutions that meet both the client’s and user’s needs.</p>

      <div className="home-buttons">
        <button><Link to="/about" className="button">Learn More About Me</Link></button>
      </div>
    </div>
  );
}
