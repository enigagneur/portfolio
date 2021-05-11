import "./Home.css"
import React from 'react'
import {
    AiFillGithub,
    AiFillInstagram,
  } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://wallpaper-house.com/data/out/8/wallpaper2you_230462.jpg" alt=""/>
            <div className="elements">
            <h1>Hi There I'm <span className="text">Younes Osman</span> I'm<span className="text"> 22</span>  Years Old And I'm A <div className="text">Cloud Developer.</div>I Also Like To Create
            <span className="text"> Web</span> And <span className="text">Mobile</span> Applications.</h1>
            <h2>FIND ME ON</h2>
            <div className="home__icons">
            <a href="https://github.com/enigagneur" className="home__icon"><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/younes-osman-86874883/" className="home__icon"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/younesosman6/" className="home__icon"><AiFillInstagram /></a>
            </div>
            </div>
            
            
        </div>
        
    )
}

export default Home
