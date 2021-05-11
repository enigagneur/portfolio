import "./Projects.css"
import React from 'react'
import Button from "react-bootstrap/Button";

function Projects() {
    return (
        <div>
            <h1>My Recent <span className="text">Works</span></h1>
            <div className="projects__images">
                <div className="projects__box">
                <img className="projects__images1" src="https://learnk8s.io/a/a00824c07c47eacaa1f1d9a988720986.svg" alt=""/>
                <h1 className="text">Kubernetes Automation</h1>
                <p>
                    Kubernetes Automation creates automatically kubernetes clusters on EC2 instances
                    and deploy applications on them like hadoop or spark. We can also monitor those
                    applications. To run This project docker-compose was used.
                </p>
                </div>
                <div className="projects__box">
                <img className="projects__images2" src="https://www.gataka.fr/wp-content/uploads/2019/04/monitoring.jpeg" alt=""/>
                <h1 className="text">Monitoring Mobile App</h1>
                <p>
                    Monitoring Mobile App can monitor all the applications that are running on your mobile.
                </p>
                </div>
                <div className="projects__box">
                <img className="projects__images3" src="https://cdn.pixabay.com/photo/2014/04/05/11/40/diamond-316610_1280.jpg" alt=""/>
                <h1 className="text">Jewelry Website</h1>
                <p>
                    Jewelry Website is inspired from the Amazon Website, It was made using React.
                    A user can login, add products to his baskets and buy them.

                </p>
                <a class="btn btn-primary" href="https://dounia-jowelry-997c7.web.app/" role="button" className="projects__button">View Website</a>

                </div>
            </div>
        </div>

    )
}

export default Projects
