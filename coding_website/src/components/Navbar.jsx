import React from 'react'
import './../styles/navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className='navbar'>
        <h1>Learn Development</h1>
        <div className="links">
            <Link to="/html">HTML</Link>
            <Link to="/css">CSS</Link>
            <Link to="/javascript">JAVA-SCRIPT</Link>
            <Link to="/react">REACT.JS</Link>
        </div>
        <button>
            <a href="mailto:akashsable340@gmail.com">Contact Me</a>
        </button>
    </nav>
    
    
    </>
  )
}

export default Navbar;