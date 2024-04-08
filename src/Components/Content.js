import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useTypewriter } from "react-simple-typewriter";
import TrackVisibility from 'react-on-screen';
import 'animate.css';


function Content() {
    const [typeEffect] = useTypewriter({
        words: ["Web Developer", "App Developer"],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 60,
    })

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={6}>
                        <TrackVisibility once>
                            {({isVisible})=>
                                <div className={isVisible ? 'whatRu animate__animated animate__fadeIn':'whatRu'}>
                                        <div>
                                            <h2>Welcome to my Portfolio, </h2>
                                            <h1>I'm Alankrit Gupta a <span className='typeEff'>{typeEffect}</span></h1>
                                            <p>I recently graduated with a degree in Computer Science and Engineering. During my studies, I gained a strong understanding of Web Development and App Development. . I'm a quick learner with excellent communication and problem-solving skills, and I'm eager to apply my knowledge in a professional setting.</p>
                                        </div>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
} 

export default Content