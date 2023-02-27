import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'
import Home from './components/Home';
import Projects from './components/Projects';
import Formation from './components/Formation';


function App() {
  return (
    <div>
   <div class="context">
   <Router>
      <div className='navbar'>
          <NavLink to='/' className='navlink'><i class="fa-sharp fa-solid fa-house-chimney"></i></NavLink>
          <NavLink to='/projects' className='navlink'>Projects</NavLink>
          <a href='http://linkedin.com/in/alex-taures' target='_blank' rel='noreferrer' className='externalLink'><i class="fa-brands fa-linkedin"></i>Linkedin</a>
          <a href='https://github.com/AlexTaures' target='_blank' rel='noreferrer' className='externalLink'><i class="fa-brands fa-github"></i>GitHub</a>
      </div>

      <Routes>
      <Route exact path="/projects" element={
            <Projects/>
          }/>


      <Route exact path="/" element={
            <Home/>
          }/>

      </Routes>
   </Router>
    </div>


<div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
    </div>

    
   
  );
}

export default App;
