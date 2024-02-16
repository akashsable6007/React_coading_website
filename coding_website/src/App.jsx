import './App.css'
import Css from './components/Css';
import Html from './components/Html';
import Javascript from './components/Javascript';
import Navbar from './components/Navbar'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import React from './components/Reactjs';
import Reactjs from './components/Reactjs';
import Home from './components/Home';


function App() {


  return (
    <Router>
      <Navbar /> 
      <Routes>
      <Route path='' element={<Home />}  />
      <Route path='/html' element={<Html />} />  
      <Route path='/css' element={<Css />} />  
      <Route path='/javascript' element={<Javascript />} />  
      <Route path='/react' element={<Reactjs />} />  
      </Routes>     
    </Router>
    
  )
}

export default App
