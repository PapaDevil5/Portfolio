import React from 'react'
import { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import { Nav, Navbar, Container, NavbarBrand } from 'react-bootstrap'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { BrowserRouter as Router } from "react-router-dom";
// import { HashLink } from 'react-router-hash-link';

export default function NavBar() {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  })
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  return (
    <>
      <Router>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
          <Container className='navbared'>
              <Navbar.Brand className="navbar-brand mx-3 fw-bold text-white" href="/">Alan<span>.is</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-dark navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className="ms-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>Projects</Nav.Link>
                <Nav.Link href="#getintouch" className={activeLink === 'getintouch' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('getintouch')} >Contact Me</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  <a href="#"><img src={navIcon1} alt="" /></a>
                  <a href="https://www.facebook.com/alankrit.gupta.79" target="_blank"><img src={navIcon2} alt="" /></a>
                  <a href="https://www.instagram.com/alankrit__gupta/" target="_blank"><img src={navIcon3} alt="" /></a>
                </div>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Router>
    </>

  )
}