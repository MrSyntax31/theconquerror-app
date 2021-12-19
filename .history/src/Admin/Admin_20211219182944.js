import React from 'react'

//Taskbar title
import Helmet from 'react-helmet'

//Navbar
import Navbar from './NavBar'

//Bootstrap
import { Button, Row, Container, Col, Card, Offcanvas, Tab, Tabs, Accordion } from 'react-bootstrap';

const Admin = () => {
    return (
        <>
        {/* Tab Bar Title */}
        <Helmet>
            <title>ConquError | Admin</title>
        </Helmet>


        {/* Dashboard */}
        <Navbar/>

        {/* Content */}
        <Container className="mt-3">
            {/* Section for Available Courses*/}
            <section id="overview" className="app-info section" >
               <Container fluid="md" style={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center"
                  }}>
                   <Row>
                      <Col>
                     <div className="info-one" fluid="md" style={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center"
                  }}>
                        <div className="row align-items-center">
                           <div className="col-lg-6 col-md-12 col-12">
                              <div className="info-text wow fadeInLeft" data-wow-delay=".3s">
                                 <div className="main-icon">
                                 </div>
                                    <h2>Basic Programming Course</h2>
                                    <p>Programming is one of the few fundamental components of every IT and non-IT professionals to learn first. It is all around us, from the moment we use our phone to call someone, or even take a pictures, code enables to function those features. With programming you can give meaning and use to every ideas you have, just imagine the possibilities.</p>
                                 <div className=" mt-3">
                                 </div>
                              </div>
                           </div>

                        <div className="col-lg-6 col-md-12 col-12">
                           <div className="info-image wow fadeInRight" data-wow-delay=".5s">
                              <img className="ss1" src="https://drive.google.com/thumbnail?id=1ApseXmyngSBHI1fSYteqsZ0463m-0L4i" alt=" basic programming"/>
                           </div>
                        </div>
                        </div>
                     </div>
                      </Col>

                  <div className="info-one style2" fluid="md" style={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center"
                  }}>
                     <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                           <div className="info-image wow fadeInLeft" data-wow-delay=".3s">
                              <img className="ss1" src="https://drive.google.com/thumbnail?id=1zS5a7hQ1UDFW87Hw18_Q8o-fEjFmVDEs" alt=" intro to computing"/>
                           </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                           <div className="info-text wow fadeInRight" data-wow-delay=".5s">
                              <div className="main-icon">
                              </div>
                              <h2>Intro to Computing Course</h2>
                              <p>They say it's hard to learn IT due to the level of difficulty and involvement of numbers. Worry no more because computing is easy as 1 + 1, and you can learn that from us. Computing is very essential part of being a Data Analysis, Software Engineer, and Programmer. It requires depth understanding of numbers, functions, and value representations.</p>
                              <p>Under Computing Course, you can be able to understand the different forms of numbers from binary set, hexadecimals, decimals, and octal. You can also apply it in conversion, formulate pseudo codes and others.</p>	         		
                              <div className=" mt-3">
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  </Row>
               </Container>
            </section>
        
            
        </Container>
        </>
    )
}

export default Admin
