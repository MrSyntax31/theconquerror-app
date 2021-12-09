import React, { Component  } from "react";
import { Helmet } from "react-helmet";
import { Row, Container, Col, Card, Tab, Tabs, Badge} from 'react-bootstrap';
import * as BsIcons from 'react-icons/bs';
import Navbar from '../../Components/Navbar/Navbar';
import './frame.css'
import './sli'

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
                                                        <h2 className="fw-bold mb-3">let’s <br/>
                                                            Learn and study  <br/>
                                                            together</h2>
                                                        <p>
                                                            It is easy to study and learn if someone is willing to help you. People that are willing to help you are called tutors. In this tutorial, you will learn how to become an independent leaner  and understand how to conquer your own problems.
                                                        </p>
                                                        <p>
                                                            There's a lot of tutorials on the internet, but they are not meant for you. This tutorial is designed to help you understand how to become a better learner.
                                                            It is designed to help you understand how to become a better learner. The following tutorial video shows tips, guides, insight and strategies to help you become a better learner.
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
                                                                    <Card.Img variant="top" className="mt-5 w-50 rounded" src="https://scontent.fmnl13-1.fna.fbcdn.net/v/t39.30808-6/236064912_102650292134240_4791421894203825811_n.png?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEXX-bmMCRJl9vXOi84gaWc9Js6cocCjdX0mzpyhwKN1cCgkTxcJBDEakrRzC8__Z1JSXzm2k4Iql9jtESPeRII&_nc_ohc=N3WXsGM0gZsAX_1uw5S&_nc_ht=scontent.fmnl13-1.fna&oh=6609c495890ee7bc8adf680aa7430c77&oe=61B14AB9" />
                                                                </div>
                                                                <Card.Body>
                                                                <Card.Title>ConquError</Card.Title>
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
                                                                        </Card.Body>
                                                            </Card>            
                                                        </Col>

                                                        <Col style={{width: "200px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                                            <Card style={{ width: '18rem', marginTop: '2rem' }}>
                                                                        <div style={{textAlign:"center"}}>
                                                                        <Card.Img variant="top" className="mt-5 w-50 rounded" src="https://scontent.fmnl13-1.fna.fbcdn.net/v/t1.6435-9/142506784_713464262646294_432244117709991327_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGeJIr6YAHBkJVN1REpNuyKfmbCiC-RHNd-ZsKIL5Ec1x0eIwb-6YsugASGlD0Lohs12fTmpjR57jQbyFmsg-Ec&_nc_ohc=K0v9hfTWhnwAX9bksAx&_nc_ht=scontent.fmnl13-1.fna&oh=e43eefff956661b3f23b3860b3a31284&oe=61C89275" />
                                                                        </div>           
                                                                        <Card.Body>
                                                                            <Card.Title>SDPT Solutions</Card.Title>
                                                                        </Card.Body>
                                                            </Card>            
                                                        </Col>

                                                        <Col style={{width: "200px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                                            <Card style={{ width: '18rem', marginTop: '2rem' }}>
                                                                        <div style={{textAlign:"center"}}>
                                                                        <Card.Img variant="top" className="mt-5 w-50 rounded" src="https://dashboard.kleap.co/wp-content/uploads/sites/139/2021/10/08102021082041_blob.png" />
                                                                        </div>           
                                                                        <Card.Body>
                                                                            <Card.Title>Josiahdoestech</Card.Title>    
                                                                        </Card.Body>
                                                            </Card>            
                                                        </Col>

                                                        <Col style={{width: "200px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                                            <Card style={{ width: '18rem', height:"15rem", marginTop: '2rem' }}>
                                                                        <div style={{textAlign:"center"}}>
                                                                        <Card.Img variant="top" className="mt-5 w-50 rounded mb-3" src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t1.6435-9/149870072_4438803116146821_814614453010169425_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF7kx9PgpLqkIGIHWFawVBjeeLqseLHov554uqx4sei_hqzZSt_ndDnrRlWKaRH4bXcCit_bVVCti5grm96mMQ-&_nc_ohc=vqBDbHbLINoAX_U1AAY&_nc_ht=scontent.fmnl13-2.fna&oh=ec0d5505a0c0e7c2d6effe778f78bd15&oe=61CB7CFA" />
                                                                        </div>           
                                                                        <Card.Body>
                                                                            <Card.Title className="mt-4">John Carlo Franco</Card.Title>
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
                                                            <label className="fw-bold mb-2">Follow and Subscribe to learn more!</label>
                                                            <br/>
                                                            <h5>
                                                            <Badge bg="" text="dark"><BsIcons.BsTags/> Career Hack</Badge>
                                                            <Badge bg="" text="dark"><BsIcons.BsTags/> Podcast</Badge>
                                                            <Badge bg="" text="dark"><BsIcons.BsTags/> IT Tips</Badge>
                                                            <Badge bg="" text="dark"><BsIcons.BsTags/> GraphQL</Badge>
                                                            </h5>
                                                            
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
                                                                
                                                                <h3 className="mt-2 fw-bold">Featured</h3>
                                                            <div
                                                            className="video"
                                                            style={{
                                                                position: "relative",
                                                                paddingBottom: "56.25%" /* 16:9 */,
                                                                paddingTop: 25,
                                                                height: 0
                                                            }}
                                                            >
                                                                <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} src="https://www.youtube.com/embed/vwzlg-wSDH0" frameBorder="0" title="vid" allowFullScreen/>
                                                            
                                                                </div>
                                                                <Container>
                                                                    <h4 className="mt-5 fw-bold">Sub Contents</h4>
                                                                <Row>
                                                                    <Col>
                                                                        <iframe title= "Video1" className="d-flex justify-content-center" width="315" height="315" src="https://www.youtube.com/embed/jcYaWFhV8oY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                                                    </Col>
                                                                    <Col>
                                                                    <iframe title= "Video1" className="d-flex justify-content-center" width="315" height="315" src="https://www.youtube.com/embed/jcYaWFhV8oY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                                                    </Col>
                                                                </Row>
                                                                <Row>
                                                                    <Col sm>sm=true</Col>
                                                                    <Col sm>sm=true</Col>
                                                                    <Col sm>sm=true</Col>
                                                                </Row>
                                                                <div class="w3-content w3-display-container">
  <img class="mySlides" src="img_snowtops.jpg" style="width:100%"/>
  <img class="mySlides" src="img_lights.jpg" style="width:100%"/>
  <img class="mySlides" src="img_mountains.jpg" style="width:100%"/>
  <img class="mySlides" src="img_forest.jpg" style="width:100%"/>

  <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
  <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
</div>
                                                                </Container>
                                                            </Card.Body>
                                                        </Card>
                                                    </Container>
                                                </Tab>
                                            </Tabs>
                                        </Card>   
                                </Container>
                                
                                {/* SDPTSolutions */}
                                <Container>
                                        <Card className="mt-5">
                                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 p-2 m-2">
                                            <Tab eventKey="profile" title="Home">
                                                <Row>
                                                    <Col  className="text-center m-3">
                                                                <img alt="KuyaDev" variant="top" className="mt-2 w-50" src="https://scontent.fmnl13-1.fna.fbcdn.net/v/t1.6435-9/142506784_713464262646294_432244117709991327_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGeJIr6YAHBkJVN1REpNuyKfmbCiC-RHNd-ZsKIL5Ec1x0eIwb-6YsugASGlD0Lohs12fTmpjR57jQbyFmsg-Ec&_nc_ohc=K0v9hfTWhnwAX9bksAx&_nc_ht=scontent.fmnl13-1.fna&oh=e43eefff956661b3f23b3860b3a31284&oe=61C89275" />
                                                            <div className="text-center">
                                                                <p><strong>SDPT Solutions</strong></p>
                                                                <p>SDPT Solutions is an Organization that Creates Video Tutorial for Programmers.</p>
                                                            </div>
                                                    </Col>
                                                    
                                                    <Col xs={12} md={8} className="container mb-5 m-3">
                                                        <p className="mt-2 text-justify">
                                                        <strong>SDPT Solutions</strong>, Is a small non-profit organization created by a Christian Couple that are creating Programming Tutorials for Filipinos to Watch. All of the knowledge you'll find here is solely from God.</p>
                                                        <p className="mt-2 text-justify">
                                                        <strong>How We Started</strong>
                                                            <br/>We Started with a Goal of Teaching Filipinos Computer Programming in the most convenient way possible.
                                                                Starting On May 29, 2019 Using our current knowledge and equipment we created video tutorials on Youtube using Tagalog Language.
                                                        </p>
                                                        <label className="fw-bold mb-2">Follow and Subscribe to learn more!</label>
                                                        <br/>
                                                            <h5>
                                                            <Badge bg="" text="dark"><BsIcons.BsTags/> IT Tips</Badge>
                                                            <Badge bg="" text="dark"><BsIcons.BsTags/> C++ Tutorial</Badge>
                                                            <Badge bg="" text="dark"><BsIcons.BsTags/> Programming</Badge>
                                                            <Badge bg="" text="dark"><BsIcons.BsTags/> Basic Web</Badge>
                                                            </h5>
                                                        <a href="https://www.facebook.com/SDPTSolutionsOfficial/" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/facebook-new.png"  alt="facebook" /></a>
                                                        <a href="https://sdptsolutionswebsite.web.app/" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/domain.png"  alt="web"/></a>
                                                        <a href="https://www.youtube.com/c/SDPTSolutions/featured" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/youtube-play.png"  alt="youtube"/></a>
                                                        <a href="https://www.tiktok.com/@sdptsolutions?"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/tiktok.png"  alt="spotify"/></a>
                                                    </Col>
                                                </Row>
                                            </Tab>

                                            <Tab eventKey="video" title="Videos">
                                                days
                                            </Tab>
                                        </Tabs>
                                        </Card>   
                                </Container>

                                {/* Josiahdoestech */}
                                <Container>
                                        <Card className="mt-5">
                                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 p-2 m-2">
                                            <Tab eventKey="profile" title="Profile">
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
                                                        <label className="fw-bold mb-2">Follow and Subscribe to learn more!</label>
                                                            <br/>
                                                            <h5>
                                                            <Badge bg="" text="dark"><BsIcons.BsTags/> Career Hack</Badge>
                                                            <Badge bg="" text="dark"><BsIcons.BsTags/> Tech Tips</Badge>
                                                            <Badge bg="" text="dark"><BsIcons.BsTags/> IT Tips</Badge>
                                                            <Badge bg="" text="dark"><BsIcons.BsTags/> Games</Badge>
                                                            </h5>

                                                        <a href="https://www.facebook.com/josiahmcastor.tech917" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/facebook-new.png"  alt="facebook" /></a>
                                                        <a href="https://josiahdoestech.kleap.co/home/?fbclid=IwAR3YyLyips7MhQjsge_C1iiJkkuwkfD2Zmf9R0YI2o0gjEwcpcNl8Llhri0" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/domain.png"  alt="web"/></a>
                                                        <a href="https://www.youtube.com/Josiahdoestech" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/youtube-play.png"  alt="youtube"/></a>
                                                        <a href="https://www.tiktok.com/@josiahmark917?fbclid=IwAR2DinC5FXHESwWxxA5JH0Zg1eMiZOs5Y668dpBmkNBouKCZIJ9EsxjMvjA"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/tiktok.png"  alt="spotify"/></a>
                                                        <a href="https://www.instagram.com/josiahmark917/" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/instagram-new.png"  alt="github"/></a>
                                                    </Col>
                                                </Row>
                                            </Tab>

                                            <Tab eventKey="video" title="Videos">
                                                days
                                            </Tab>
                                        </Tabs>
                                        </Card>   
                                </Container>

                                {/* John Carlo Franco */}
                                <Container>
                                        <Card className="mt-5">
                                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 p-2 m-2">
                                            <Tab eventKey="profile" title="Profile">
                                                <Row>
                                                    <Col  className="text-center m-3">
                                                                <img alt="KuyaDev" variant="top" className="mt-2 w-50" src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t1.6435-9/149870072_4438803116146821_814614453010169425_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF7kx9PgpLqkIGIHWFawVBjeeLqseLHov554uqx4sei_hqzZSt_ndDnrRlWKaRH4bXcCit_bVVCti5grm96mMQ-&_nc_ohc=vqBDbHbLINoAX_U1AAY&_nc_ht=scontent.fmnl13-2.fna&oh=ec0d5505a0c0e7c2d6effe778f78bd15&oe=61CB7CFA" />
                                                            <div className="text-center">
                                                                <p><strong>John Carlo Franco</strong></p>
                                                                <p>Web and Mobile App Developer, Entrepreneur</p>
                                                            </div>
                                                    </Col>
                                                    
                                                    <Col xs={12} md={8} className="container mb-5 m-3">
                                                        <p className="mt-2 text-justify">
                                                        <strong>John Carlo Franco</strong>, is a web and mobile app developer, also, an entrepreneur and CEO of Startidea, and founder of facebook group Programmers and Developers.
                                                        He created that group to help others student and developers in country.</p>
                                                        <label className="fw-bold mb-2">Follow and Subscribe to learn more!</label>
                                                            <br/>
                                                            <h5>
                                                            <Badge bg="" text="dark"><BsIcons.BsTags/> Career Hack</Badge>
                                                            <Badge bg="" text="dark"><BsIcons.BsTags/> Tech Tips</Badge>
                                                            <Badge bg="" text="dark"><BsIcons.BsTags/> Mobile Development</Badge>
                                                            <Badge bg="" text="dark"><BsIcons.BsTags/> Entrepreneur</Badge>
                                                            </h5>

                                                        <a href="https://www.facebook.com/francojohncdev" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/facebook-new.png"  alt="facebook" /></a>
                                                        <a href="https://uniregistry.com/market/domain/startidea.co?landerid=startidea61a8be2a5d4047.07543080" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/domain.png"  alt="web"/></a>
                                                        <a href="https://www.youtube.com/c/JohnCarloFranco/playlists" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/youtube-play.png"  alt="youtube"/></a>
                                                    </Col>
                                                </Row>
                                            </Tab>

                                            <Tab eventKey="video" title="Videos">
                                                days
                                            </Tab>
                                        </Tabs>
                                        </Card>   
                                </Container>


                            </section>

                          
            </section>       

        {/* ScrollUp Button */}
        <a href="#top" className="scroll-top">
            <i className="fa fa-chevron-up"></i>
        </a>     
                                
        </>
    )
    }
    
}

export default Tutorial
