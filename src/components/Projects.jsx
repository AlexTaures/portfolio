import React from 'react';
import image from '../img/pkmnapireac.jpg'; 
import "../styles/Projects.css";
import projects from "../resources/ProjectsData.json";
import * as allimages from "../img/index.js"
export default function Projects() {
 

  return (
    
        <div className="componentContainer">
          {
            projects.map((opt, key) => (
          
              <a className='proj_mainContainer' key={key} href={opt.url} target="_blank">
                <div className="proj_container">
                  <div className="tittle">
                  <p>{opt.tittle}</p>
                  </div>
                  <img src={allimages[opt.image]} alt="not image found" />
                  <div className='body'><h5>Summary</h5>{opt.summary}</div>
                </div>
            </a>
    
            ))
          }
        </div>
        
  )
}
