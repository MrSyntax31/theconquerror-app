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

                                                <div className="offset-lg-1 col-lg-5 mt-3">
                                                    <div className="main_title text-left">
                                                        <h2 className="fw-bold">let’s <br/>
                                                            Learn and study  <br/>
                                                            together</h2>
                                                        <p>
                                                            It is easy to study and learn if someone is willing to help you. People that are willing to help you are called tutors. In this tutorial, you will learn how to become an independent leaner  and understand how to conquer your own problems.
                                                        </p>
                                                        <p>
                                                            There's a lot of tutorials on the internet, but they are not very good. This tutorial is designed to help you understand how to become a better learner.
                                                            It is designed to help you understand how to become a better learner. The following tutorial video shows tips, guides, insight and strategies to help you become a better learner and understand how to.
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
                                            <h1 className="text-center text-primary fw-bold">Some featured Content Creator</h1>
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
                                                                            <Card.Title>Josiahdoestech</Card.Title>
                                                                            <Card.Text>Beginner Friendly, <strong>5</strong> Lessons</Card.Text>
                                                                                
                                                                                </Card.Body>
                                                            </Card>            
                                                        </Col>
                                    </Row>
                                </Container>

                                {/* Kuya Dev */}
                                <Container>
                                        <Card className="mt-5">
                                            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3 p-2 m-2">
                                                <Tab eventKey="home" title="Kuya Dev">
                                                    <Row>
                                                        <Col  className="text-center">
                                                                    <img alt="KuyaDev" variant="top" className="mt-2 w-50" src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t1.6435-9/162108690_121301806677028_8488807075884298821_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEXydTM3EZ07XqXpezsDpNyw2d9yKe4opDDZ33Ip7iikJ4Mb5hSfrbJs4divK0bsoW4pLl_zqUldxKd-fXV-F1K&_nc_ohc=Deflbtpo54QAX8UoF5R&_nc_ht=scontent.fmnl13-2.fna&oh=8a34d0b958665e1297e6c9b006a9a9e7&oe=61CBC2F9" />
                                                                <div className="text-center">
                                                                    <p><strong>Kuya Dev</strong></p>
                                                                    <p>Ako si Rem, ang inyong Kuya Dev.</p>
                                                                </div>
                                                        </Col>
                                                        
                                                        <Col xs={12} md={8} className="container mb-5 m-3">
                                                            <p className="mt-2 text-justify">
                                                                <strong>Rem Lampa</strong> is Kuya Dev. He is a podcaster, web developer, speaker, and tech community leader.
                                                            <br/>
                                                            Formerly an electrical engineer, he is currently a Senior JS Engineer at Prosple, specialized in ReactJS and ExpressJS.
                                                            <br/>
                                                            He is also a co-founder and community manager of freeCodeCamp.Manila, and part of the core team of ReactJS Philippines.
                                                            <br/>
                                                            * <i className="fw-bold">"Kuya"</i> means "older brother" in Filipino, often used as a term of endearment.
                                                            </p>
                                                            <label className="fw-bold">Follow and Subscribe to learn more!</label>
                                                            <br/>
                                                            <a href="https://www.facebook.com/Rem.Lampa" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/facebook-new.png"  alt="facebook" /></a>
                                                            <a href="https://twitter.com/RemLampa?fbclid=IwAR2vIoBPC5VwfDY7mOQIpmA3thzEcxh7jV0gMMDtakCCjEfMTuV5Ogtg1Ps" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/twitter--v2.png"  alt="twitter"/></a>
                                                            <a href="https://www.youtube.com/RemLampa" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/youtube-play.png"  alt="youtube"/></a>
                                                            <a href="https://open.spotify.com/show/1w3LK7ABhxOcv5uHppyE0Z?fbclid=IwAR2QNWUbj4MdY70Fcaf-GHt8FzctPYebLmKayxinJ0q_Tv5jigp23S5Eus8" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/spotify--v3.png"  alt="spotify"/></a>
                                                            <a href="https://github.com/RemLampa?fbclid=IwAR0l8U3KlN39PEYtg9aNgTMPu2E6C7823GEy85RXg6oAe6WwvGS8ce5F_Js" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/github.png"  alt="github"/></a>
                                                        </Col>
                                                    </Row>
                                                </Tab>

                                                <Tab eventKey="profile" title="Videos">
                                                    <Container>
                                                        <Card>
                                                            <Card.Body>
                                                                
                                                                    <div
                                                            className="video"
                                                            style={{
                                                                position: "relative",
                                                                paddingBottom: "56.25%" /* 16:9 */,
                                                                paddingTop: 25,
                                                                height: 0
                                                            }}
                                                            >
                                                            <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} src="https://www.youtube.com/embed/vwzlg-wSDH0" frameBorder="0" title="vid"/>
                                                                </div>
                                                                <Container>
                                                                <Row>
                                                                    <Col sm={8}>sm=8</Col>
                                                                    <Col sm={4}>sm=4</Col>
                                                                </Row>
                                                                <Row>
                                                                    <Col sm>sm=true</Col>
                                                                    <Col sm>sm=true</Col>
                                                                    <Col sm>sm=true</Col>
                                                                </Row>
                                                                </Container>
                                                            </Card.Body>
                                                        </Card>
                                                    </Container>
                                                </Tab>
                                            </Tabs>
                                        </Card>   
                                </Container>
                                

                                {/* Josiahdoestech */}
                                <Container>
                                        <Card className="mt-5">
                                        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3 p-2 m-2">
                                            <Tab eventKey="home" title="Home">
                                                <Row>
                                                    <Col  className="text-center m-3">
                                                                <img alt="KuyaDev" variant="top" className="mt-2 w-50" src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/254989341_210506601204410_4824021128279678756_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGaOAneZBO8BzK69vzpP0sKX2fq4l9JUC9fZ-riX0lQL34Z-rMrewMx1Wb0NGyXtleVdZjZErNtZvXumgw56Q06&_nc_ohc=PBJRx_lH5uMAX823eyL&_nc_ht=scontent.fmnl13-2.fna&oh=27e74ab9c0c5a9436c6bd1e73bc17cfa&oe=61ADCDEF" />
                                                            <div className="text-center">
                                                                <p><strong>Josiahdoestech</strong></p>
                                                                <p>Tech reviews, Tech gadgets, Sharing my knowledge about me and what I love doing, Also Gaming.</p>
                                                            </div>
                                                    </Col>
                                                    
                                                    <Col xs={12} md={8} className="container mb-5 m-3">
                                                        <p className="mt-2 text-justify">
                                                        <strong>Josiah Mark Castor</strong>, Hello everyone Josiah here! I am a BSIT student from Technological Institute of the Philippines who loves to create content about Tech, gadgets, Programming, Tips and hacks to help you in your computer needs!

                                                        If you wish to contact me and have a collaboration, please do not hesitate!</p>
                                                        <label className="fw-bold">Follow and Subscribe to learn more!</label>
                                                        <br/>
                                                        <a href="https://www.facebook.com/josiahmcastor.tech917" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/facebook-new.png"  alt="facebook" /></a>
                                                        <a href="https://josiahdoestech.kleap.co/home/?fbclid=IwAR3YyLyips7MhQjsge_C1iiJkkuwkfD2Zmf9R0YI2o0gjEwcpcNl8Llhri0" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/domain.png"  alt="web"/></a>
                                                        <a href="https://www.youtube.com/Josiahdoestech" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/youtube-play.png"  alt="youtube"/></a>
                                                        <a href="https://www.tiktok.com/@josiahmark917?fbclid=IwAR2DinC5FXHESwWxxA5JH0Zg1eMiZOs5Y668dpBmkNBouKCZIJ9EsxjMvjA"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/tiktok.png"  alt="spotify"/></a>
                                                        <a href="https://www.instagram.com/josiahmark917/" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/instagram-new.png"  alt="github"/></a>
                                                    </Col>
                                                </Row>
                                            </Tab>

                                            <Tab eventKey="profile" title="Profile">
                                                days
                                            </Tab>
                                        </Tabs>
                                        </Card>   
                                </Container>

                                {/* SDPTSolutions */}
                                <Container>
                                        <Card className="mt-5">
                                        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3 p-2 m-2">
                                            <Tab eventKey="home" title="Home">
                                                <Row>
                                                    <Col  className="text-center m-3">
                                                                <img alt="KuyaDev" variant="top" className="mt-2 w-50" src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/1a6f7601a64720099b1b96db9a2fb697~c5_720x720.jpeg?x-expires=1638273600&x-signature=f%2FFv3EVOkbeuE%2FjQxmbf0N0TgHc%3D" />
                                                            <div className="text-center">
                                                                <p><strong>Josiahdoestech</strong></p>
                                                                <p>Tech reviews, Tech gadgets, Sharing my knowledge about me and what I love doing, Also Gaming.</p>
                                                            </div>
                                                    </Col>
                                                    
                                                    <Col xs={12} md={8} className="container mb-5 m-3">
                                                        <p className="mt-2 text-justify">
                                                        <strong>Josiah Mark Castor</strong>, Hello everyone Josiah here! I am a BSIT student who loves to create content about Tech, gadgets, Programming, Tips and hacks to help you in your computer needs!

                                                        If you wish to contact me and have a collaboration, please do not hesitate!</p>
                                                        <label className="fw-bold">Follow and Subscribe to learn more!</label>
                                                        <br/>
                                                        <a href="https://www.facebook.com/josiahmcastor.tech917" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/facebook-new.png"  alt="facebook" /></a>
                                                        <a href="https://josiahdoestech.kleap.co/home/?fbclid=IwAR3YyLyips7MhQjsge_C1iiJkkuwkfD2Zmf9R0YI2o0gjEwcpcNl8Llhri0" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/domain.png"  alt="web"/></a>
                                                        <a href="https://www.youtube.com/Josiahdoestech" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/youtube-play.png"  alt="youtube"/></a>
                                                        <a href="https://www.tiktok.com/@josiahmark917?fbclid=IwAR2DinC5FXHESwWxxA5JH0Zg1eMiZOs5Y668dpBmkNBouKCZIJ9EsxjMvjA"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/tiktok.png"  alt="spotify"/></a>
                                                        <a href="https://www.instagram.com/josiahmark917/" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/instagram-new.png"  alt="github"/></a>
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
