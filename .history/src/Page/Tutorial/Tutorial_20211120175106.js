import React, { Component  } from "react";
import { Helmet } from "react-helmet";
import { Container, Col, Row, Card } from 'react-bootstrap';
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
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 mb-4">
                                    <h3 className="text-center text-secondary fw-bold">Tutorials</h3>
                                    
                            </div>
                    
                                
                        </div>
                        
                         <div className="container">

                         <Container>
                            <Row>
                                <Col sm={4}>
                                <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="../assets/TJDev.png" className="w-50 mx-auto d-block mt-2" />
                                <Card.Body className="bg-light">
                                    <Card.Title>theConquError</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                </Card.Body>
                                    <Card.Header>
                                    <a href="https://www.youtube.com/channel/UCojmF97JXog4ITgDjNtfnqw" className="text-decoration-none text-danger fw-bold"> Open Youtube</a>
                                    </Card.Header>
                                </Card>
                                </Col>
                                <Col sm={8}>
                                <div className="">
                                    <div className="d-flex justify-content-center" data-wow-delay=".4s">
                                        <iframe title= "Video1" className="w-100 Frame" height="320rem" src="https://www.youtube.com/embed/jcYaWFhV8oY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                    </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm>sm=true</Col>
                                <Col sm>sm=true</Col>
                                <Col sm>sm=true</Col>
                            </Row>
                        </Container>

                            <div className="row d-flex justify-content-center">

                                    <div className="col-lg-4 col-md-6 col-12 mb-2">
                                        <h4 className="text-center text-secondary">Basic Programming Course</h4>
                                    <div className="d-flex justify-content-center" data-wow-delay=".4s">
                                        <iframe title= "Video1" className="d-flex justify-content-center" width="1080px" height="315" src="https://www.youtube.com/embed/jcYaWFhV8oY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                    </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-12 mb-2">
                                    <h4 className="text-center text-secondary">Basic Programming Course</h4>
                                    <div className="d-flex justify-content-center" data-wow-delay=".4s">
                                        <iframe title= "Video1" className="d-flex justify-content-center" width="1080px" height="315" src="https://www.youtube.com/embed/jcYaWFhV8oY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                    </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-12 mb-2">
                                    <h4 className="text-center text-secondary">Basic Programming Course</h4>
                                    <div className="d-flex justify-content-center" data-wow-delay=".4s">
                                        <iframe title= "Video1" className="d-flex justify-content-center" width="1080px" height="315" src="https://www.youtube.com/embed/jcYaWFhV8oY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                    </div>
                                    </div>



                                </div>


                                
                            </div>

                    </div>

                          
            </section>            

        </>
    )
    }
    
}

export default Tutorial
