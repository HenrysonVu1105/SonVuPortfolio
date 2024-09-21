import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return(
        <nav>
        <button><Link to="/">Home</Link></button>
        <button><Link to="/about">About</Link></button>
        <button><Link to="/service">Service</Link></button>
        <button><Link to="/contact">Contact</Link></button>
        <button><Link to="/project">Project</Link></button>
    </nav>
    );
}