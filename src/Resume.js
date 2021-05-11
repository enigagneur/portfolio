import "./Resume.css"
import React from 'react'
import { AiOutlineDownload } from "react-icons/ai";
import Button from "react-bootstrap/Button";

function Resume() {
    return (
        <div className="resume">
            <Button variant="primary" href="Younes_Osman_CV.pdf" target="_blank" className="resume__button">
            <div resume__icon>
            <AiOutlineDownload />
            </div>
            
            &nbsp;Download CV
          </Button>
        </div>
        
        
    )
}

export default Resume
