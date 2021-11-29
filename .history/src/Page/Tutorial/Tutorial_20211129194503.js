import React, { Component  } from "react";
import { Helmet } from "react-helmet";
import { Row, Container, Col, Card, Tab, Tabs } from 'react-bootstrap';
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
                                            <h1 className="text-center text-primary fw-bold">Some featured Video Tutorial</h1>
                                        </div>
                                                        <Col style={{width: "200px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                                            <Card style={{ width: '18rem', marginTop: '2rem' }}>
                                                                <div style={{textAlign:"center"}}>
                                                                    <Card.Img variant="top" className="mt-5 w-50 rounded" src="https://scontent.fmnl13-1.fna.fbcdn.net/v/t39.30808-6/236064912_102650292134240_4791421894203825811_n.png?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEXX-bmMCRJl9vXOi84gaWc9Js6cocCjdX0mzpyhwKN1cCgkTxcJBDEakrRzC8__Z1JSXzm2k4Iql9jtESPeRII&_nc_ohc=nXncSmiIFW4AX_auEd5&tn=x6lGwkBQsiZD79dw&_nc_ht=scontent.fmnl13-1.fna&oh=5e70b76fc0a3a983fc2a8346628fc231&oe=61A961B9" />
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
                                                                        <Card.Img variant="top" className="mt-5 w-50 rounded" src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t1.6435-9/162108690_121301806677028_8488807075884298821_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEXydTM3EZ07XqXpezsDpNyw2d9yKe4opDDZ33Ip7iikJ4Mb5hSfrbJs4divK0bsoW4pLl_zqUldxKd-fXV-F1K&_nc_ohc=Deflbtpo54QAX8UoF5R&_nc_ht=scontent.fmnl13-2.fna&oh=8a34d0b958665e1297e6c9b006a9a9e7&oe=61CBC2F9" />
                                                                        </div>           
                                                                        <Card.Body>
                                                                            <Card.Title>Kuya Dev</Card.Title>
                                                                            <Card.Text>Beginner Friendly, <strong>5</strong> Lessons</Card.Text>
                                                                                
                                                                                </Card.Body>
                                                            </Card>            
                                                        </Col>

                                                        <Col style={{width: "200px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                                            <Card style={{ width: '18rem', marginTop: '2rem' }}>
                                                                        <div style={{textAlign:"center"}}>
                                                                        <Card.Img variant="top" className="mt-5 w-50 rounded" src="https://scontent.fmnl13-1.fna.fbcdn.net/v/t1.6435-9/142506784_713464262646294_432244117709991327_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGeJIr6YAHBkJVN1REpNuyKfmbCiC-RHNd-ZsKIL5Ec1x0eIwb-6YsugASGlD0Lohs12fTmpjR57jQbyFmsg-Ec&_nc_ohc=K0v9hfTWhnwAX9bksAx&_nc_ht=scontent.fmnl13-1.fna&oh=e43eefff956661b3f23b3860b3a31284&oe=61C89275" />
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
                                                                        <Card.Img variant="top" className="mt-5 w-50 rounded" src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t1.6435-9/149870072_4438803116146821_814614453010169425_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF7kx9PgpLqkIGIHWFawVBjeeLqseLHov554uqx4sei_hqzZSt_ndDnrRlWKaRH4bXcCit_bVVCti5grm96mMQ-&_nc_ohc=vqBDbHbLINoAX_U1AAY&_nc_ht=scontent.fmnl13-2.fna&oh=ec0d5505a0c0e7c2d6effe778f78bd15&oe=61CB7CFA" />
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
                                                                        <Card.Img variant="top" className="mt-5 w-50 rounded" src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/244521475_188997610021976_6826356423632131771_n.png?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHY6X33_1c8qR3rGB9K-xajuqGhOczd4MG6oaE5zN3gwVfvPdHaakhViWXQISdNPt2yq_9TelEUGbmYGFUsZ-VG&_nc_ohc=TD0fcZsq4BUAX-1uX-1&tn=x6lGwkBQsiZD79dw&_nc_ht=scontent.fmnl13-2.fna&oh=a8c3aa4bdf255ab445d8260f91a05881&oe=61A92910" />
                                                                        </div>           
                                                                        <Card.Body>
                                                                            <Card.Title>Computing</Card.Title>
                                                                            <Card.Text>Beginner Friendly, <strong>5</strong> Lessons</Card.Text>
                                                                                
                                                                                </Card.Body>
                                                            </Card>            
                                                        </Col>
                                    </Row>
                                </Container>

                                {/* Kuya Dev */}
                                <Container className="mt-5" fluid="md" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Card>
                                        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3 p-2 m-2">
                                            <Tab eventKey="home" title="Home">
                                                <Row>
                                                    <Col  className="text-center">
                                                                <img alt="KuyaDev" variant="top" className="mt-2 w-50" src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t1.6435-9/162108690_121301806677028_8488807075884298821_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEXydTM3EZ07XqXpezsDpNyw2d9yKe4opDDZ33Ip7iikJ4Mb5hSfrbJs4divK0bsoW4pLl_zqUldxKd-fXV-F1K&_nc_ohc=Deflbtpo54QAX8UoF5R&_nc_ht=scontent.fmnl13-2.fna&oh=8a34d0b958665e1297e6c9b006a9a9e7&oe=61CBC2F9" />
                                                            <div className="text-center">
                                                                <p><strong>Kuya Dev</strong></p>
                                                                <p>Ako si Rem, ang inyong Kuya Dev.</p>
                                                            </div>
                                                    </Col>
                                                    
                                                    <Col xs={12} md={8}>
                                                        <p className="mt-2 text-justify">
                                                        <strong>Rem Lampa</strong> is Kuya Dev. He is a podcaster, web developer, speaker, and tech community leader.
                                                        <br/>
                                                        Formerly an electrical engineer, he is currently a Senior JS Engineer at Prosple, specialized in ReactJS and ExpressJS.
                                                        <br/>
                                                        He is also a co-founder and community manager of freeCodeCamp.Manila, and part of the core team of ReactJS Philippines.
                                                        <br/>
                                                        * <i className="fw-bold">"Kuya"</i> means "older brother" in Filipino, often used as a term of endearment.
                                                        </p>
                                                        <label className="fw-bold">Socials</label>
                                                        
                                                        <img className="mt-2 w-25" src="https://cdn-icons-png.flaticon.com/512/3763/3763359.png"  alt="facebook"/>

                                                    </Col>
                                                </Row>
                                            </Tab>

                                            <Tab eventKey="profile" title="Profile">
                                                days
                                            </Tab>
                                        </Tabs>
                                    </Card>
                                </Container>
                            </section>

                          
            </section>            
                                
        </>
    )
    }
    
}

export default Tutorial
