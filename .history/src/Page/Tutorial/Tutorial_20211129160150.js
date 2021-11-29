import React, { Component  } from "react";
import { Helmet } from "react-helmet";
import { Row, Container, Col, Card} from 'react-bootstrap';
import Navbar from '../../Components/Navbar/Navbar';
import './frame.css'

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

                <section className="features section bg-light mt-4">

                    
                        <div>
                            <div className="col-sm-12 col-md-12 mb-4">
                                    <h1 className="text-center text-primary fw-bold">Welcome to Tutorial Page</h1>                                   
                            </div>  
                        </div>
                         <Container className="mb-5" fluid="md" style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
  
                                <section className="about_area section_gap">
                                        <div className="container">
                                            <div className="row justify-content-start align-items-center">
                                                <div className="col-lg-5">
                                                    <div className="about_img">
                                                        <img className="" src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Annie Spratt unsplash.com/photos/MChSQHxGZrQ"/>
                                                    </div>
                                                </div>

                                                <div className="offset-lg-1 col-lg-5">
                                                    <div className="main_title text-left">
                                                        <h2>let’s <br/>
                                                            Learn and study  <br/>
                                                            together</h2>
                                                        <p>
                                                            Whose given. Were gathered. There first subdue greater. Bearing you Whales heaven 
                                                            midst their. Beast creepeth. Fish days.
                                                        </p>
                                                        <p>
                                                            Is give may shall likeness made yielding spirit a itself together created after sea 
                                                            is in beast beginning signs open god you're gathering whose gathered cattle let. 
                                                            Creature whales fruit unto meat the life beginning all in under give two.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </section>
                            </Container>

                            <section className="features section bg-light mt-5">
                                <Container fluid="md" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Row>
                                        <div className="">
                                            <h1 className="text-center text-secondary fw-bold">Some featured Video Tutorial</h1>
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
                                                                                
                                                                                </Card.Body>
                                                            </Card>            
                                                        </Col>
                                    </Row>  
                                </Container>
                            </section>

                          
            </section>            
                                
        </>
    )
    }
    
}

export default Tutorial
