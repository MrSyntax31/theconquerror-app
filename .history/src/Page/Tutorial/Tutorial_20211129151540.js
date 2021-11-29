import React, { Component  } from "react";
import { Helmet } from "react-helmet";
import { Row, Container, Col } from 'react-bootstrap';
import Navbar from '../../Components/Navbar/Navbar';

class Tutorial extends Component {
    render(){
        return (
        <>
                <div>
                    <Helmet>
                        <title>ConquError | Tutorial</title>
                        <meta name="description" content="ConquError Register page" />
                    </Helmet>
                </div> 

                <Navbar/>

                <section className="features section bg-light mt-5">
                    <Container>
                        <div className="">
                            <div className="col-sm-12 col-md-12 mb-4">
                                    <h1 className="text-center text-primary fw-bold">Welcome  Tutorials</h1>
                                    
                            </div>
                    
                                
                        </div>
                        
                         <Container fluid="md" style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
  
                                <Row className="d-flex justify-content-center">

                                    <Col className=" mb-2">
                                        <h4 className="text-center text-secondary">Basic Programming Course</h4>
                                    <div className="d-flex justify-content-center" data-wow-delay=".4s">
                                        <iframe title= "Video1" className="d-flex justify-content-center" width="720px" height="315" src="https://www.youtube.com/embed/jcYaWFhV8oY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                    </div>
                                    </Col>

                                    <Col className="mb-2">
                                    <h4 className="text-center text-secondary">Basic Programming Course</h4>
                                    <div className="d-flex justify-content-center" data-wow-delay=".4s">
                                        <iframe title= "Video1" className="d-flex justify-content-center" width="720px" height="315" src="https://www.youtube.com/embed/jcYaWFhV8oY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                    </div>
                                    </Col>

                                    <Col className="mb-2">
                                    <h4 className="text-center text-secondary">Basic Programming Course</h4>
                                    <div className="d-flex justify-content-center" data-wow-delay=".4s">
                                        <iframe title= "Video1" className="d-flex justify-content-center" width="720px" height="315" src="https://www.youtube.com/embed/jcYaWFhV8oY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                    </div>
                                    </Col>

                                    <div className="col-lg-4 col-md-6 col-12 mb-2">
                                    <h4 className="text-center text-secondary">Basic Programming Course</h4>
                                    <div className="d-flex justify-content-center" data-wow-delay=".4s">
                                        <iframe title= "Video1" className="d-flex justify-content-center" width="720px" height="315" src="https://www.youtube.com/embed/jcYaWFhV8oY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                    </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-12 mb-2">
                                    <h4 className="text-center text-secondary">Basic Programming Course</h4>
                                    <div className="d-flex justify-content-center" data-wow-delay=".4s">
                                        <iframe title= "Video1" className="d-flex justify-content-center" width="720px" height="315" src="https://www.youtube.com/embed/jcYaWFhV8oY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                    </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-12 mb-2">
                                    <h4 className="text-center text-secondary">Basic Programming Course</h4>
                                    <div className="d-flex justify-content-center" data-wow-delay=".4s">
                                        <iframe title= "Video1" className="d-flex justify-content-center" width="720px" height="315" src="https://www.youtube.com/embed/jcYaWFhV8oY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                    </div>
                                    </div>


                                </Row>
                            </Container>

                    </Container>

                          
            </section>            

        </>
    )
    }
    
}

export default Tutorial
