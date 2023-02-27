import React from 'react';
import image from '../img/pkmnapireac.jpg'; 
import "../styles/Projects.css"

export default function Projects() {
  return (
    <a className='proj_mainContainer' href='https://alextaures.github.io/pkmn-project/' target="_blank">
      <div className="proj_container">
        <div className="tittle">
        <p>FETCHING POKEMON API</p>
        </div>
        <img src={image} alt="not image found" />
        <div className='body'><h5>Summary</h5><p>The project uses pokemon data extrated from <a href='https://pokeapi.co/'>pokeapi.co</a>, using React Js for map cards by type.</p></div>
      </div>


    </a>
  )
}
