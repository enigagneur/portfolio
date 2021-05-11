import "./Header.css"
import React from 'react'
import {
    AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
  } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { Link } from "react-router-dom";  
  

function Header() {
    return (
        <nav className="header">
            <h1 className="header__title">Younes Osman</h1>
            <Link to ="/" className="header__link">
                <div className="header__optionHome">
                    <AiOutlineHome />
                    <span className="header__option">Home</span>
                </div>
            </Link>
            <Link to ="/About" className="header__link">
                <div className="header__optionUser">
                    <AiOutlineUser />
                    <span className="header__option">About</span>
                </div>
            </Link>
            <Link to ="/Projects" className="header__link">
                <div className="header__optionProjects">
                    <AiOutlineFundProjectionScreen />
                    <span className="header__option">Projects</span>
                </div>
            </Link>
            <Link to="/Resume" className="header__link">
                <div className="header__optionResume">
                    <CgFileDocument />
                    <span className="header__option">Resume</span>
                </div>
            </Link>
        </nav>
    )
}

export default Header
