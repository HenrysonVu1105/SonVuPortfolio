import React from 'react';
import resume from '../src/resume.pdf';

console.log('hello')

export default function Resume(){
    
    return(
        <div className = "App">
          <a href={resume} target="_blank"
                    rel="noreferrer">
                    Open First PDF
                </a>
        </div>
    );
}