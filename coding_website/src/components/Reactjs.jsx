import React from "react";
import "./../styles/reactjs.css";
import reactlogo from "./../assets/reactlogo.png";

const Reactjs = () => {
  return (
    <>
      <div className="reactjs-container">
        <div className="reactjs-right-box">
          <img
            src={reactlogo}
            className="reactjs-img animate__animated animate__zoomInDown"
          />
          <p className="animate__animated animate__zoomInDown">
            React is a free and open-source front-end JavaScript library for
            building user interfaces based on components. It is maintained by
            Meta and a community of individual developers and companies{" "}
          </p>
        </div>
        <div className="reactjs-left-box">
          <h1 id="title">LEARN JAVASCRIPT FROM BSICS TO ADVANCE</h1>
          <div className="reactjscontent">
            <div className="reactjs-first-video">
              <h3>1) React.js in one shot video in hindi with project</h3>
              <iframe
                width="500"
                height="200"
                src="https://www.youtube.com/embed/eILUmCJhl64?si=kiWDesFR39PIZTru"
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
          <div className="reactjscontent">
            <div className="reactjs-seconde-video">
              <h3>2) js Todo list Project basic. </h3>
              <iframe
                width="500"
                height="200"
                src="https://www.youtube.com/embed/edBx-fjgh4k?si=WZsGdtLYmolG6eHT"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>{" "}
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

export default Reactjs;
