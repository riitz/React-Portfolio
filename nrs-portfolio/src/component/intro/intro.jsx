import React from 'react'
import "./intro.css"
import Me from "../../img/image.png"

const intro = () => {
  return (
    <div className="i">
        <div className='i-left'>
            <div className ="i-left-wrapper">
                <h2 className='i-intro'>Hello, My name is</h2>
                <h1 className='i-name'>Naresh Shrestha</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">UI/UX Designer</div>
                        <div className="i-title-item">Photographer</div>
                        <div className="i-title-item">Writer</div>
                        <div className="i-title-item">Content Creator</div>

                    </div>
                </div>
                <p className="i-desc">
                    I am an accomplished, dedicated software engineering professional with 6+ years of development expertise specializing in object-oriented analysis,design and development utilizing Java/J2EE technology stack.
                </p>
            </div>
        </div>
        <div className='i-right'>
            <div className="i-bg">
                
            </div>
            <img src={Me} alt="" className="i-img" />
        </div>
         

    </div>
  )
}

export default intro