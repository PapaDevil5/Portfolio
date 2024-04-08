import React, { useState } from 'react'
import 'animate.css';
import { Col, Row } from 'react-bootstrap';
import Contactimg from "../assets/img/contact-img.svg"; 

function Contact() {

  const InitialFormDetail = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(InitialFormDetail);

  return (
    <section className='contact' id='getintouch'>
      <div className='box1'>
        <h1>Get in touch</h1>
        <div className='box2'>
          <Row>
            <Col size={12} sm={6}>
              <img src={Contactimg} alt="Contact Us" />
            </Col>

            <Col size={12} md={6}>
                <form>
              <Row>
                  <Col size={12} sm={6} className='px-1'>
                    <input type="text" value={formDetails.firstName} placeholder='First Name' />
                  </Col>
                  <Col size={12} sm={6} className='px-1'>
                    <input type="text" value={formDetails.lastName} placeholder='Last Name' />
                  </Col>
                  <Col size={12} sm={6} className='px-1'>
                    <input type="email" value={formDetails.email} placeholder='Email' />
                  </Col>
                  <Col size={12} sm={6} className='px-1'>
                    <input type="tel" value={formDetails.phone} placeholder='Phone no.' />
                  </Col>
                  <Col size={12} className='px-2'>
                    <textarea rows='6' value={formDetails.message} placeholder='Message' />
                    <button type='submit'><span>Send</span></button>
                  </Col>
              </Row>
                </form>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  )
}

export default Contact