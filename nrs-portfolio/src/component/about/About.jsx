import React from 'react';
import "./about.css";
import Img from "../../img/nrs.jpg";
import University from "../../img/regis.png";

const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={Img} alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <h1 className='a-title'>About Me</h1>
            <p className='a-sub'>
            I am an accomplished, dedicated software engineering professional with 6+ years of development expertise specializing in object-oriented analysis,design and development utilizing Java/J2EE technology stack.
            </p>
            <p className='a-desc'>
            I am an accomplished, dedicated software engineering professional with 6+ years of development expertise specializing in object-oriented analysis,design and development utilizing Java/J2EE technology stack.
            </p>
            <div className="a-study">
                <img src={University} alt="" className="a-study-img" />
                <div className="a-study-texts">
                    <h4 className='a-study-title'>Regis University 2015</h4>
                     <p className='a-study-desc'>
                        Master of Science in Software Engineering
                     </p>   
                </div>
            </div>
        </div>

    </div>
  )
}

export default About