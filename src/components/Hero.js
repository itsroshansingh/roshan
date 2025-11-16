import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../App'
import { PiBrainLight } from "react-icons/pi";
import { FaPython } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa6";
import cv from "../assests/cv.pdf"
import { FaComputer } from "react-icons/fa6";
import { IoDownloadOutline } from "react-icons/io5";


const Hero = () => {
  const theme = useContext(ThemeContext);
  // console.log(theme)
  return (
    <>
      <div className='hero' style={theme === "black" ? { backgroundColor: "#1C2826", color: "white" } : { backgroundColor: "#FFF9FB" }}>
        <div id="hero-intro" >
          <h2 style={theme === "black" ? { color: "white" } : { color: "#4E4D5C" }}>Welcome to My Portfolio</h2>
          <h3 style={theme === "black" ? { color: "white" } : { color: "#4E4D5C" }}>Hi! I'm <span>Roshan Kumar</span></h3>
          <div className='hero-bio'>
            <h3>Data Scientist</h3>
            <p>I specialize in transforming raw data into actionable intelligence that accelerates organizational performance. My experience spans statistical modeling, advanced analytics, data visualization, and full-cycle machine-learning development. I bring a structured, insights-driven approach to solving complex business challenges.</p>
            <a href={cv} download="roshan's resume" target="_blank" id="download-cv" rel="noreferrer">Download CV<IoDownloadOutline /></a>
          </div>
        </div>
        <div id="hero-img">
          <img src={require("../assests/hero2.png")} alt=" " />
        </div>
      </div>
      <div className={theme === "black" ? " experience experience-black" : " experience experience-white"}>
        <div className={theme === "black" ? "year-box year-box-black" : "year-box year-box-white"}>
          <p id="years">3+</p>
          <p id="year-txt">Years of experience</p>
          <div id="satisfaction-box">
            <p>Focused on delivering data-driven business value.</p>
          </div>
        </div>
        <div className={theme === "black" ? "myself myself-black" : "myself myself-wnite"}>
          <h2>About Myself</h2>
          <p>AI/ML Data Scientist with hands-on expertise in machine learning, deep learning, and analytics engineering. Proven capability in developing predictive models, optimizing algorithms, and deploying end-to-end data pipelines. Adept at leveraging data to support strategic decision-making across academic and commercial environments. Passionate about turning complex problems into scalable, insight-oriented solutions.</p>
          <div className='cards'>
            <div className={theme === "black" ? "hero-inner-card hero-inner-card-black" : "hero-inner-card hero-inner-card-white"}>
              <div className='card-icon-box' >
                <PiBrainLight className='card-icon' />
              </div>

              <div className='card-txt'>
                <h3>Artifical Intelligence</h3>
                <p>
                  AI enables intelligent automation, enhanced decision-making, and operational efficiency. It continues to reshape industries through adaptive learning and innovation.
                </p>
              </div>




            </div>
            <div className={theme === "black" ? "hero-inner-card hero-inner-card-black" : "hero-inner-card hero-inner-card-white"}>
              <div className='card-icon-box' >
                <FaBusinessTime className='card-icon' />
              </div>

              <div className='card-txt'>
                <h3>Data analysis</h3>
                <p>
                  Data analytics empowers organizations with evidence-based insights, driving strategic choices and operational clarity.
                </p>
              </div>
            </div>
            <div className={theme === "black" ? "hero-inner-card hero-inner-card-black" : "hero-inner-card hero-inner-card-white"}>
              <div className='card-icon-box' >
                <FaComputer className='card-icon' />
              </div>

              <div className='card-txt'>
                <h3>Machine learning</h3>
                <p>
                  A core AI discipline that empowers systems to learn from data, enabling forecasting, automation, and outcome optimization.
                </p>
              </div>


            </div>
            <div className={theme === "black" ? "hero-inner-card hero-inner-card-black" : "hero-inner-card hero-inner-card-white"}>
              <div className='card-icon-box' >
                <FaPython className='card-icon' />
              </div>

              <div className='card-txt'>
                <h3>Python</h3>
                <p>
                  A versatile programming language powering data science, ML engineering, automation, and modern application development.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero