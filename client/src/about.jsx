import React from 'react';
import { Link } from 'react-router-dom'; 

export default function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                <h1>Hi I'm Son Vu</h1>
                <p>A software engineering student with a focus on developing efficient and scalable software solutions.
                    I’m passionate about front-end development and web technologies, especially using React. 
                    I’m continuously honing my skills to build user-friendly and impactful applications.
                    My goal is to leverage my engineering background to create innovative solutions that solve real-world problems.</p>
                <button><Link to="/project">My Project</Link></button>
                <button><Link to="/resume">My Resume</Link></button>
            </div>
            <div className="about-img">
                <img src="img/boba.jpeg" height="80%" width="80%"></img>
            </div>
        </div>
    );
}
    