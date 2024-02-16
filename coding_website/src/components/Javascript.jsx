import React from "react";
import "./../styles/js.css";
import jslogo from "./../assets/jslogo.png";

const Javascript = () => {
  return (
    <>
      <div className="js-container">
        <div className="js-right-box">
          <img
            src={jslogo}
            className="js-img animate__animated animate__zoomInDown"
          />
          <p className="animate__animated animate__zoomInDown">
            JavaScript is a scripting language used to create and control
            dynamic website content, i.e. anything that moves, refreshes, or
            otherwise changes on your screen without requiring you to manually
            reload a web page. Features like: animated graphics. photo
            slideshows.
          </p>
        </div>
        <div className="js-left-box">
          <h1 id="title">LEARN JAVASCRIPT FROM BSICS TO ADVANCE</h1>
          <div className="jscontent">
            <div className="js-first-video">
              <h3>1) JS basic in one shot video in hindi with project</h3>
              <iframe
                width="500"
                height="200"
                src="https://www.youtube.com/embed/cpoXLj24BDY?si=lx2rRn3yW50aiHvO"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <p>
                This is one shot video with good explantion of js. This video is
                availabel on youtube channel name KG CODING.
              </p>
            </div>
          </div>
          <div className="jscontent">
            <div className="js-seconde-video">
              <h3>2) js Todo list Project basic. </h3>
              <iframe
                width="500"
                height="200"
                src="https://www.youtube.com/embed/skFX1mnXuwk?si=CbJaThBCsh3sYXEw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <p>This project helps you to understand better js .</p>
              <a href="https://www.youtube.com/watch?v=np3L1lb-Uvs&list=PLImJ3umGjxdD3ov2lwg0SM5rxz5v9FjOf">
                See More{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Javascript;
