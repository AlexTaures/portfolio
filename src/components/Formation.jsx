import React from 'react';
import "../styles/Formation.css";

export default function Formation() {
  return (
    <div className='formation_container'>
        <div className="arrow">
            <div className="arrow_body"></div>
            <div className="arrow_head"></div>
        </div>
        <div className="information">
            <div className="step">
              <h3>{"(2022-2023)"} KODIGO</h3>
              <p>Full Stack Jr Web Development</p>
            </div>
            <div className="step">
              <h3>{"(2022)"} SpeakEnglish</h3>
              <p>Inglés Intermedio</p>
            </div>
            <div className="step">
              <h3>{"(2022)"} UDEMY</h3>
              <p>Python Total - Programador Avanzado en 16 días</p>
            </div>
            <div className="step">
              <h3>{"(2022)"} UDEMY</h3>
              <p>Master en SQL Server: Desde Cero a Nivel Profesional</p>
            </div>
            <div className="step">
              <h3>{"(2022)"} University of El Salvador</h3>
              <p>Industrial Engineer Grade</p>
            </div>
            <div className="step">
              <h3>{"(2021)"} Earn & Excel</h3>
              <p>Microsoft Excel 2019/365</p>
            </div>
            <div className="step">
              <h3>{"(2021)"} InstitutoNacional d</h3>
              <p>Microsoft Excel 2019/365</p>
            </div>
        </div>
    </div>
  )
}
