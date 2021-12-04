import React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../../Components/Navbar/Navbar'
import { Row, Container, Col, Card, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import {  Link } from "react-router-dom"




const Course = () => {


//ToolTip for Computing
const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Under Development
  </Tooltip>
);

    return (

<body>

        {/* Division for Tab Page and Description*/}
        <div>
            <Helmet>
            <title>ConquError | Course</title>
            <meta name="description" content="ConquError Course page" />
            </Helmet>
        </div>
        <Navbar/>

      {/* Section for Course List*/}
        <section className="features section bg-light mt-5">
          <Container fluid="md" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Row>
                  <div className="">
                    <h1 className="text-center text-primary fw-bold">Welcome to the Courses Section</h1>
                    <h4 className="text-center text-secondary"> Experience new and better ways to learn computer programming</h4>
                  </div>
                          <p className="mt-4 mb-5 text-center">
                                    ConquError offers various courses which cater the needs of IT and non-IT related professionals, 
                                    and as well as students. In this lessons, you can learn and understand the <strong>basic structures</strong>  and <strong>fundamentals of 
                                    computer programming</strong>, from concepts, methods, functions, and many more.
                          </p>
                      
                                <Col style={{width: "200px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                      <Card style={{ width: '18rem', marginTop: '2rem' }}>
                                          <div style={{textAlign:"center"}}>
                                            <Card.Img variant="top" className="mt-5 w-50" src="https://img.icons8.com/color/144/000000/outline.png" />
                                          </div>
                                        <Card.Body>
                                          <Card.Title>Programming</Card.Title>
                                          <Card.Text>
                                            Beginner Friendly,<strong> 7</strong> Lessons
                                          </Card.Text>
                                          <Link to="/lessons" style={{ textDecoration: 'none' }} className="btn btn-primary mb-4">Get Started</Link>
                                        </Card.Body>
                                      </Card>        
                                </Col>

                                  <Col style={{width: "200px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                      <Card style={{ width: '18rem', marginTop: '2rem' }}>
                                                <div style={{textAlign:"center"}}>
                                                  <Card.Img variant="top" className="mt-5 w-50" src="https://img.icons8.com/color/144/000000/informatics.png" />
                                                </div>           
                                                  <Card.Body>
                                                    <Card.Title>Computing</Card.Title>
                                                      <Card.Text>Beginner Friendly, <strong>5</strong> Lessons</Card.Text>
                                                          <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                                                                <Button style={{ textDecoration: 'none' }} className="btn btn-primary mb-4">Get Started</Button>
                                                          </OverlayTrigger>
                                                          </Card.Body>
                                      </Card>            
                                  </Col>
              </Row>  
          </Container>
        </section>

      <a href="#top" className="scroll-top">
        <i className="fa fa-chevron-up"></i>
      </a>
</body>

   

    )
}

export default Course
