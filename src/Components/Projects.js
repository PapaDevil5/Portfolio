import React from 'react'
import project1 from "../assets/img/living.png"
import playstation from '../assets/img/playstation.jpeg'
import vidglimpse from '../assets/img/logo.png'
function Projects() {
    return (
        <section className='projects' id='projects'>

            <div className='head1'><h1>Projects</h1></div>

            
                    {/* <div className='projects-box'>
                    <div className='project-card'>
                        <img src={project1} alt='Project 1'></img>
                        <h3>Living</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ad ipsam iusto deleniti, placeat numquam, voluptate quod eum tempora ullam earum magni maiores laudantium. Sequi illo ducimus quam totam eaque.
                        </p>
                        <button type='button' className='btn'>See Project</button>
                    </div>
                </div> */}
            <div className='project'>    
                <div class="card">
                    <img src={project1} class="card-img-top" alt="Project 2"></img>
                    <h3 class="card-title">Living</h3>
                    <p class="card-text">The mobile application project "CREATE LIVING" is developed with the aim of developing a Hostel/PG management application which will prevent food, resources and time wastage.
                        </p>
                    <div className='button'><a href="" className="btn btn-danger">See Project</a></div>
                </div>
                <div class="card">
                    <img src={playstation} class="card-img-top" alt="Project 3"></img>
                    <h3 class="card-title">PlayStation</h3>
                    <p class="card-text">At PlayStation Clone, we have meticulously crafted a website that mirrors the aesthetics and functionalities of the original PlayStation interface, while embracing modern design principles.</p>
                    <div className='button'><a href="" className="btn btn-danger">See Project</a></div>
                </div>
                <div class="card">
                    <img src={vidglimpse} class="card-img-top" alt="Project 1"></img>
                    <h3 class="card-title">VidGlimpse</h3>
                    <p class="card-text">VidGlimpse introduces an advanced video chat platform developed using WebRTC principles alongside HTML, CSS, and JavaScript technologies. Leveraging WebRTC ensures robust, secure peer-to-peer connections.</p>
                    <div className='button'><a href="" className="btn btn-danger">See Project</a></div>
                </div>
            </div>
               
        </section>
    )
}

export default Projects