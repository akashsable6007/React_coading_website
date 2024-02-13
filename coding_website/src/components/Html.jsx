import React from 'react'
import html from './../assets/html.png';
import './../styles/html.css';

const Html = () => {
  return (
    <>
    <div className="html-container">
    <div className="html-right-box">
      <img src={html} className='html-img animate__animated animate__zoomInDown' />
    </div>
    <div className='html-left-box'>
      <h1 id='title'>LEARN HTML FROM BSICS TO ADVANCE</h1>
      <div className="htmlcontent">
        <div className='html-first-video'>
        <h3>1) HTML basic in one shot video in hindi</h3>
        <iframe width="500px" height="200px" src="https://www.youtube.com/embed/HcOc7P5BMi4?si=_9N7o1lAWouVJCl9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
        <p>This is short video with good explantion. This video is availabel on youtube channel name Apna College by shradha Khapra. </p>
        </div>
      </div>
      <div className="htmlcontent">
        <div className="html-seconde-video">
           <h3>2) HTML basic to advance video in hindi with Projects</h3>
        <iframe width="500px" height="200px" src="https://www.youtube.com/embed/rklidcZ-aLU?si=ndV9rFxYD2XXP-D-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p> This video is availabel on Kg coading by Prashant sir. This is also good video to learn Html from scratch. </p>
        </div>
        <div className="html-third-video">
           <h3>3) Resume Website Only using HTML Project.</h3>
           <iframe width="500" height="200" src="https://www.youtube.com/embed/-mWTE75dBVo?si=F5vdY4iuwBSX1qdD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p> From this project you will understand the full html concept this video is taken from coding shuttle by anuj bhayya. </p>
        </div>
      </div>
    </div>



    </div>
    
    </>
  )
}

export default Html;