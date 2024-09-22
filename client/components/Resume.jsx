/*
// File name: Resume.jsx
// Student name: Vu Huy Hoang Son
// Student ID: 301366093
// Date: 21 Sep 2024
*/
import React from 'react';
import resume from '../src/resume.pdf';

console.log('hello')

export default function Resume(){
    //pdf link
    return(
        <div className = "App">
          <a href={resume} target="_blank"
                    rel="noreferrer">
                    Open First PDF
                </a>
        </div>
    );
}