import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'
import Home from './components/Home';



function App() {
  return (
   <Router>
      <div className='navbar'>
          <NavLink to='/' className='navlink'><i class="fa-sharp fa-solid fa-house-chimney"></i></NavLink>
          <NavLink to='/projects' className='navlink'>Projects</NavLink>
          <NavLink to='/formation' className='navlink'>Formation</NavLink>
          <a href='http://linkedin.com/in/alex-taures' target='_blank' rel='noreferrer' className='externalLink'><i class="fa-brands fa-linkedin"></i>Linkedin</a>
          <a href='https://github.com/AlexTaures' target='_blank' rel='noreferrer' className='externalLink'><i class="fa-brands fa-github"></i>GitHub</a>
      </div>

      <Routes>
      <Route exact path="/projects" element={
            <div>Projects component</div>
          }/>

      <Route exact path="/formation" element={
            <div>Formation component</div>
          }/>

      <Route exact path="/" element={
            <Home/>
          }/>

      </Routes>
   </Router>
  );
}

export default App;
