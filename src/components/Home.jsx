import React from 'react'
import profilePhoto from '../img/profilePhoto.jfif';
import flag from '../img/SV.png';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className='mainContainer'>
      <div className='container'>
      <div className='profilePhoto'>
        <img src={profilePhoto}/>
        <p>Oscar Alexander Taures Díaz</p>
      </div>
     <div className="subContainer">
      <h2><div className='bar'></div>PERSONAL INFORMATION</h2>
        <div className='line'>
          <p className="tag">Grade</p>
          <p className="info">Industrial Engineer</p>
        </div>
        <div className='line'>
          <p className="tag">Developer Speciality</p>
          <p className="info">Full Stack</p>
        </div>
        <div className='line'>
          <p className="tag">Country</p>
          <p className="info">El Salvador</p>
          <img src={flag} />
        </div>
        <div className='line'>
          <p className="tag">Email</p>
          <p className="info">alextauresdiaz@gmail.com</p>
        </div>
        <div className='line'>
          <p className="tag">Languages</p>
          <p className="info">Spanish {"(Native)"}, English {"(Intermidiate)"}</p>
        </div>
     </div>
      </div>
      
        <div className="headContainer">
            <h2><div className='bar'></div>TECH / DIGITAL SKILLS</h2>
            <div className="level-reference">
              <h3>LEVEL REFERENCE</h3>
              <div className="level_line">
                <p>Basic</p><div className="fill"></div><div className="empty"></div><div className="empty"></div>
              </div>
              <div className="level_line">
                <p>Intermidiate</p><div className="fill"></div><div className="fill"></div><div className="empty"></div>
              </div>
              <div className="level_line">
                <p>Advanced</p><div className="fill"></div><div className="fill"></div><div className="fill"></div>
              </div>
            </div>
        </div>
      
      <div className="skills_container">
        <div className="skill_line">
          <i className="fa-brands fa-html5"></i>
          <p>Html</p>
          <div className="fill"></div><div className="fill"></div><div className="fill"></div>
        </div>
        <div className="skill_line">
          <i className="fa-brands fa-square-js"></i>
          <p>JavaScript</p>
          <div className="fill"></div><div className="fill"></div><div className="fill"></div>
        </div>
        <div className="skill_line">
          <i className="fa-brands fa-css3"></i>
          <p>CSS</p>
          <div className="fill"></div><div className="fill"></div><div className="empty"></div>
        </div>
        <div className="skill_line">
          <i className="fa-brands fa-react"></i>
          <p>React Js</p>
          <div className="fill"></div><div className="fill"></div><div className="empty"></div>
        </div>
        <div className="skill_line">
          <i class="fa-brands fa-laravel"></i>
          <p>Laravel</p>
          <div className="fill"></div><div className="fill"></div><div className="empty"></div>
        </div>
        <div className="skill_line">
          <i className="fa-solid fa-database"></i>
          <p>MySQL</p>
          <div className="fill"></div><div className="fill"></div><div className="empty"></div>
        </div>
        <div className="skill_line">
          <i className="fa-brands fa-python"></i>
          <p>Python</p>
          <div className="fill"></div><div className="fill"></div><div className="empty"></div>
        </div>
        <div className="skill_line">
          <i className="fa-solid fa-file-excel"></i>
          <p>Excel-Macros</p>
          <div className="fill"></div><div className="fill"></div><div className="fill"></div>
        </div>
        <div className="skill_line">
          <i className="fa-solid fa-compass-drafting"></i>
          <p>Tech Drawing</p>
          <div className="fill"></div><div className="fill"></div><div className="empty"></div>
        </div>
        <div className="skill_line">
          <i className="fa-solid fa-cube"></i>
          <p>3D Modeling</p>
          <div className="fill"></div><div className="fill"></div><div className="empty"></div>
        </div>
        <div className="skill_line">
          <i className="fa-sharp fa-solid fa-chart-line"></i>
          <p>Stadistics</p>
          <div className="fill"></div><div className="fill"></div><div className="empty"></div>
        </div>
        <div className="skill_line">
          <i className="fa-solid fa-sitemap"></i>
          <p>Management</p>
          <div className="fill"></div><div className="fill"></div><div className="empty"></div>
        </div>
      </div>
    </div>
  )
}
