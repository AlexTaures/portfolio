import React from 'react'
import profilePhoto from '../img/profilePhoto.jfif';
import flag from '../img/SV.png';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className='container'>
      <div className='profilePhoto'>
        <img src={profilePhoto}/>
        <p>Alexander Taures</p>
      </div>
     <div className="infoContainer">
      <div className='line'>
          <span className="tag">Name</span>
          <span className="info">Oscar Alexander Taures Diaz</span>
        </div>
        <div className='line'>
          <span className="tag">Grade</span>
          <span className="info">Industrial Engineer</span>
        </div>
        <div className='line'>
          <span className="tag">Developer Speciality</span>
          <span className="info">Full Stack</span>
        </div>
        <div className='line'>
          <span className="tag">Country</span>
          <span className="info">El Salvador <img src={flag} /></span>
        </div>
     </div>
      
      


    </div>
  )
}
