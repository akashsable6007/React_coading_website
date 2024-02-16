import React from "react";
import "./../styles/css.css";
import cssfile from "./../assets/css.webp";

const Css = () => {
  return (
    <>
      <div className="css-container">
        <div className="css-right-box">
          <img
            src={cssfile}
            className="css-img animate__animated animate__zoomInDown"
          />
          <p className="animate__animated animate__zoomInDown">
            CSS is the acronym of “Cascading Style Sheets”. CSS is a computer
            language for laying out and structuring web pages (HTML or XML).
            This language contains coding elements and is composed of these
            “cascading style sheets” which are equally called CSS files (. css).
          </p>
        </div>
        <div className="css-left-box">
          <h1 id="title">LEARN CSS FROM BSICS TO ADVANCE</h1>
          <div className="csscontent">
            <div className="css-first-video">
              <h3>1) CSS basic in one shot video in hindi</h3>
              <iframe
                width="500"
                height="200"
                src="https://www.youtube.com/embed/OpWjt_wbV4E?si=Jc-j3fcObbfjh0dS"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <p>
                This is short video with good explantion. This video is
                availabel on youtube channel name KG CODING.{" "}
              </p>
            </div>
          </div>
          <div className="csscontent">
            <div className="css-seconde-video">
              <h3>2) CSS Projects </h3>
              <iframe
                width="500"
                height="200"
                src="https://www.youtube.com/embed/np3L1lb-Uvs?si=IfKJzhlMkGf1yEIM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <p>
                {" "}
                This Is sigle video of css styling below am mentionaning a
                youtube channale to do practice of css.
              </p>
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

export default Css;
