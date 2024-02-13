import React from 'react'
import Typewriter from 'typewriter-effect';
import devintroboy from './../assets/devintroboy.avif';
import './../styles/home.css';
import github from './../assets/github.png';
import linkedin from './../assets/linkedin.webp';
import gmail from './../assets/gmail.png';
import 'animate.css';

const Home = () => {
  return (
    <>
     <div className='container'>
        <div className="right-box">
        <h2>You Want to Learn Web Development</h2>
        <Typewriter options={{
            strings:["A DEVELOPER", "A FULLSTACK DEVELOPER", "A FRONTEND DEVELOPER", "A BACKEND DEVELOPER"],
            autoStart: true,
            loop:true,
            wrapperClassName:"typewriterpara",
        }} 
        />
        <h4>You are on the right place..! Learn Virtualy not therotically.</h4>
        <p>
          Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.
        </p>
        <p>This website created by official@akashsable...!</p>
        <div className='logos'>
          <p>Follow me on:- </p>
          <div className='logo-img'>
            <a href="https://github.com/akashsable6007">
            <img src={github} className='card-logo' />
            </a>
            <a href="www.linkedin.com/in/akash-sable-front-end-developer-9b545a19">
            <img src={linkedin} className='card-logo' />
            </a>
            <a href="mailto:akashsable340@gmail.com">
            <img src={gmail} className='card-logo' />
            </a>
          </div>
        </div>
        </div>
        <div className="left-box">
            <img src={devintroboy} alt="img"  className='animate__animated animate__lightSpeedInRight'/>
        </div> 
     </div>
    </>
  )
}

export default Home;
