import React from 'react'
import { Helmet } from "react-helmet";
import '../../Assets/css/bootstrap.min.css';
import '../../Assets/css/animate.css';
import '../../Assets/css/tiny-slider.css';
import '../../Assets/css/main.css';
import { Carousel, Accordion, Row, Col, Container, Card } from 'react-bootstrap';
import image1 from '../../Assets/images/0.jpg';
import image2 from '../../Assets/images/2.jpg';
import image3 from '../../Assets/images/3.jpg';
import image4 from '../../Assets/images/4.jpg';
import image5 from '../../Assets/images/5.jpg';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import { Link } from "react-router-dom"
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar'

import styled from 'styled-components';
import 'csshake';
import './Footer.css';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 1.8rem;
  .container {
    display: flex;
    gap: 1.5rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 3rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 3.5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;


const HomeUser = () => {


    return (
        <>
            {/* Division for Tab Page and Description*/}
            <div>
                <Helmet>
                <title>ConquError | Home</title>
                <meta name="description" content="ConquError Homepage" />
                </Helmet>
            </div>
    
            <Navbar/>

            <div className="bg-light"style={{marginTop:'4rem'}}>

               {/* Section for Homepage Background*/}
               <section id="home" className="hero-area">
                  <Container fluid="md" style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                     }}>
                     <Row className=" align-items-center">
                           <Col>
                              <div className="hero-content">
                                 <h1 className="wow fadeInLeft" data-wow-delay=".4s">Welcome to ConquError! where we Conquer Errors</h1>
                                 <p className="wow fadeInLeft" data-wow-delay=".6s">Be Part of our Learning Community, Join our Forums and Enroll on our Courses.</p>
                                 <div className="button wow fadeInLeft" data-wow-delay=".8s">
                                    <Link to="/course" className="btn" style={{ textDecoration: 'none' }}>Enroll!</Link>
                                    <Link to="/forum" className="btn" style={{ textDecoration: 'none' }}>Ask Questions!</Link>
                                 </div>
                              </div>
                           </Col>
                        <div className="col-lg-7 col-md-12 col-12">
                           <div className="hero-image wow fadeInRight" data-wow-delay=".4s">
                              <img src="https://images.unsplash.com/photo-1516886635086-2b3c423c0947?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" alt="imag"/>
                           </div>
                        </div>
                     </Row>
                  </Container>
               </section>
   
               {/* Section for Image Carousel*/}
               <section className="">
                  <Carousel fade={true} pause={false} className="">
                           <Carousel.Item interval={2000}>
                           <img
                           className="d-block w-100"
                           src={image1}
                           alt="First slide"
                           />
                           <Carousel.Caption>
                           </Carousel.Caption>
                           </Carousel.Item>

                           <Carousel.Item interval={2000} className="">
                           <img
                           className="d-block w-100  "
                           src={image2}
                           alt="Third slide"
                           />
                           <Carousel.Caption>
                           </Carousel.Caption>
                           </Carousel.Item>

                           <Carousel.Item interval={2000} className="">
                           <img
                           className="d-block w-100 "
                           src={image3}
                           alt="Third slide"
                           />
                           <Carousel.Caption>
                           </Carousel.Caption>
                           </Carousel.Item>

                           <Carousel.Item interval={2000} className="">
                           <img
                           className="d-block w-100 "
                           src={image4}
                           alt="Third slide"
                           />
                           <Carousel.Caption>
                           </Carousel.Caption>
                           </Carousel.Item>

                           <Carousel.Item interval={2000} className="">
                           <img
                           className="d-block w-100 "
                           src={image5}
                           alt="Third slide"
                           />
                           <Carousel.Caption>
                           </Carousel.Caption>
                           </Carousel.Item>
                  </Carousel>
               </section>   

               {/* Section for About Us*/}
               <section className="bg-light" id="about" >
                  <Container fluid="md" style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                     }}>
                     <Row>
                        <Col>
                           <h3 className="text-center mt-4 text-secondary">Know about us</h3>
                        </Col>
                  
               
                        <p className="mt-4 mb-5 text-center fs-6">At <strong>ConquError</strong>, we believe everyone deserves to learn computer programming and other IT related courses for free. Innovation and simplicity makes us happy and contented: Our mission is to provide a better way of learning technology related courses,
                        we exist to assist learner's who keeps on struggling in learning IT, through ConquError,
                        we both face and conquer all the problems. We help you to communicate and reach to other, because we believed that we are on this together, as one community.
                        <br/>ConquError was develop by five young IT students with the dream of helping and changing the generations through educating and inspiring them of what they are capable of with technology in their hands.
                           ConquError was developed by Technojet.Dev, it is designed to assist the students in their study in IT problems and to provide them with additional knowledge with regards to computer programming.
                        </p>
                     
                     </Row>   
                  </Container>   
               </section>   

               {/* Section for Courses*/}
               <section className="" id="destinations">   
                  <Container fluid="md" style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                     }}>
         
                     <Row>          
                        <div className="mt-5">
                           <h3 className="text-center mt-4 text-secondary">Available Courses</h3>
                        </div>

                        <div className="col-sm-4 mb-5">
                           <div className="card mt-4">
                              <img className="card-img-top" src="../../../assets/Programmer-rafiki.png" alt=""/>
                                 <div className="card-body">
                                    <h4 className="card-title text-secondary fw-bold">Programming</h4>
                                    <p className="card-text text-secondary">Getting started with basic and fundamentals of computer programming. Learn basic C++ structures, functions, arrays, and many more.</p>
                                 </div>
                           </div>
                        </div>

                        <div className="col-sm-4 mb-5">
                           <div className="card mt-4">
                              <img className="card-img-top" src="../assets/Control Panel-rafiki.webp" alt=""/>
                                 <div className="card-body">
                                    <h4 className="card-title text-secondary fw-bold">Computing</h4>
                                    <p className="card-text text-secondary">Try to understand the fundamentals of computing and their relationship in IT course.
                                    Unfold your computing skills and try to solve binary problems.
                                    </p>
                                 </div>
                           </div>
                        </div>

                        <div className="col-sm-4 mb-5">
                           <div className="card mt-4">
                              <img className="card-img-top" src="../assets/See you soon-pana.webp" alt=""/>
                                 <div className="card-body">
                                    <h4 className="card-title text-secondary">Coming Soon</h4>
                                    <p className="card-text text-secondary">In the coming months the ConquError will soon to offer other learning material for web design, data structures and algorithm, and database.</p>
                                 </div>
                           </div>
                        </div>
                     </Row>
                  </Container>
               </section>  

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

               {/* Section for Features*/}
               <section id="" className="features ">
                  <Container fluid="md" style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                     }}>
                  
               
                  <Row>
                        <div className="col-sm-12 col-md-12 ">
                           <h3 className="text-center text-secondary">Features</h3>
                           <h4 className="text-center text-secondary mt-4">Your Experience Gets Better And Better Over Time.</h4>
                        </div>
                           <div className="row">
                              <p className="mt-4 mb-5 text-center fs-6">ConquError delivers various courses which cater the needs of IT and non-IT related professionals, and as well as student's. It is designed to assist and help learners to motivate and enhance their skills in IT, furthermore as a Learning Management System, we're here to assist and support the learner's interest in many aspects of IT courses, such as programming, computing, database, web design, and other more courses.</p>
                           </div>   
                        <Col>
                           <div className="single-feature wow fadeInUp" data-wow-delay=".2s">
                              <i className="fa fa-book"></i>
                              <h3>Programming Lessons</h3>
                              <p>Inside Basic Programming Course, you can learn, and identify different basic structures of programming, understand basic problem concepts and formulate your own set of codes.</p>
                           </div>
                        </Col>

                        <div className="col-lg-4 col-md-6 col-12">
                           <div className="single-feature wow fadeInUp" data-wow-delay=".4s">
                              <i className="fa fa-certificate"></i>
                              <h3>Certificates</h3>
                              <p>You can earn multiple certificates from taking assessments and quizzes from different lessons available in ConquError. This will help you to motivate to learn more.</p>
                           </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                           <div className="single-feature wow fadeInUp" data-wow-delay=".6s">
                              <i className="fa fa-comments"></i>
                              <h3>Forums</h3>
                              <p>Do you need someone to talk, or get to ask a certain questions, we have forum for that. Now you can be able to ask questions, or even participate in a discussion with other people. </p>
                           </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                           <div className="single-feature wow fadeInUp" data-wow-delay=".2s">
                              <i className="far fa-chart-bar"></i>
                              <h3>Analytics</h3>
                              <p>Wanted to see your progress? in ConquError, we offer a self-based analytics that you can view your progress in every courses and activities that you've been enrolled.</p>
                           </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                           <div className="single-feature wow fadeInUp" data-wow-delay=".4s">
                              <i className="fa fa-gamepad"></i>
                              <h3>Games</h3>
                              <p>ConquError offers various games that assess your knowledge in many aspects of IT, also, it entertain you whenever you wan to pause for a while on your study.</p>
                           </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                           <div className="single-feature wow fadeInUp" data-wow-delay=".6s">
                              <i className="fa fa-users"></i>
                              <h3>Community</h3>
                              <p>ConquError values the users privacy, to monitor the communities actions, we always look up to the reports and guidelines of the community to have a user friendly environment. </p>
                           </div>
                        </div>
                     </Row>
                  </Container>
               </section>

               {/* Section for Video Tutorial*/}
               <Container fluid="md" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} className="mt-5 mb-5">
                  <Row>
                     <div>
                     <h4 className="text-center text-secondary fw-bold">Some featured Content Creator</h4>
                  </div>
                        <Col style={{width: "200px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                           <Card style={{ width: '18rem', marginTop: '2rem' }}>
                              <div style={{textAlign:"center"}}>
                                 <Card.Img variant="top" className="mt-5 w-50 rounded" src="../assets/WhiteLogo.png" />
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

               {/* Section for Chart*/}
               <section className="our-achievement section">
                  <Container fluid="md" style={{
                           display: "flex",
                           justifyContent: "center",
                           alignItems: "center"
                        }}>  
                  <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-md-12 col-12">
                           <div className="title text-center">
                              <h1 className="text-white">Be a ConquError Warrior, Register Now!</h1>
                           </div>
                        </div>
                     </div>
                  <Row>
                     <Col>
                        <div className="single-achievement wow fadeInUp" data-wow-delay=".2s">
                           <h2 className="counter fw-bold text-white"><span id="secondo1" className="countup" cup-end="100">100</span>%</h2>
                           <p>Satisfied</p>
                        </div>
                     </Col>

                     <Col>
                        <div className="single-achievement wow fadeInUp" data-wow-delay=".6s">
                           <h2 className="counter fw-bold text-white"><span id="secondo2" className="countup" cup-end="100">100</span>%</h2>
                           <p>Free</p> 
                        </div>
                     </Col>
                  </Row>

                  </Container>

               </section>

               {/* Section for Technojet.Dev Team*/}
               <section className="bg-light mt-5" id="tourist">    
                  <Container fluid="md" style={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center"
                  }}>
                     <div className="row text-center">
                        <div className="col-sm-12 col-md-12 mb-4">
                           <h2 className="wow fadeInUp text-secondary" data-wow-delay=".4s">Meet our team <strong>Technojet.Dev</strong></h2>
                        </div>

                        <div class="jumbotron jumbotron-fluid">

<video autoplay muted loop poster="https://dummyimage.com/900x400/000/fff">    
    <source src="" data-src="https://upload.wikimedia.org/wikipedia/commons/7/79/Big_Buck_Bunny_small.mp4" type="video/mp4">
    <source src="" data-src="https://upload.wikimedia.org/wikipedia/commons/7/79/Big_Buck_Bunny_small.webm" type="video/webm">
    <source src="" data-src="https://upload.wikimedia.org/wikipedia/commons/7/79/Big_Buck_Bunny_small.ogv" type="video/ogg">
</video>

  <div class="container text-white">

    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>

  </div>

</div>

                        <div className="col-md-4">
                           <div className="testimonial mb-5">
                              <div className="avatar mx-auto">
                                 <img src="../assets/user-05.png" className="rounded-circle z-depth-1 img-fluid" alt="developer"/>
                              </div>
                                 <h4 className="font-weight-bold dark-grey-text mt-4">Arllan Del Espiritu Santo</h4>
                                 <h6 className="font-weight-bold blue-text my-3">Project Manager</h6>
                                 <p className="font-weight-normal dark-grey-text">Software undergoes beta testing shortly before it’s released. Beta is Latin for still doesn’t work.</p>
                           </div>
                        </div>

                        <div className="col-md-4">
                           <div className="testimonial mb-5">
                              <div className="avatar mx-auto">
                                 <img src="../assets/user-03.jpg" className="rounded-circle z-depth-1 img-fluid" alt="developer"/>
                              </div>
                                 <h4 className="font-weight-bold dark-grey-text mt-4">Denmark Louie Irog</h4>
                                 <h6 className="font-weight-bold blue-text my-3">Lead Programmer</h6>
                                 <p className="font-weight-normal dark-grey-text">Stuck? Quit.</p>
                           </div>
                        </div>

                        <div className="col-md-4">
                           <div className="testimonial mb-5">
                              <div className="avatar mx-auto">
                                 <img src="../assets/user-06.jpg" className="rounded-circle z-depth-1 img-fluid" alt="developer"/>
                              </div>
                                 <h4 className="font-weight-bold dark-grey-text mt-4">Reginald King Barawid</h4>
                                 <h6 className="font-weight-bold blue-text my-3">Programmer</h6>
                                 <p className="font-weight-normal dark-grey-text">Think outside the box.</p>
                           </div>
                        </div>

                        <div className="col-md-4">
                           <div className="testimonial mb-5">
                              <div className="avatar mx-auto">
                                 <img src="../assets/user-01.jpg" className="rounded-circle z-depth-1 img-fluid" alt="developer"/>
                              </div>
                                 <h4 className="font-weight-bold dark-grey-text mt-4">Paul Lemuel Niverio</h4>
                                 <h6 className="font-weight-bold blue-text my-3">Researcher</h6>
                                 <p className="font-weight-normal dark-grey-text">As an IT student, you must continue to leverage and grow your base of mission-critical information and telecommunications technologies in order to reach your objectives. Information technology must be a crucial tool for administrators, staff, instructors, and students in their job and academic endeavors</p>
                           </div>
                        </div>

                        <div className="col-md-4">
                           <div className="testimonial mb-5">
                              <div className="avatar mx-auto">
                                 <img src="../assets/user-02.jpg" className="rounded-circle z-depth-1 img-fluid" alt="developer"/>
                              </div>
                                 <h4 className="font-weight-bold dark-grey-text mt-4">Christeel Ann Yambot</h4>
                                 <h6 className="font-weight-bold blue-text my-3">Researcher</h6>
                                 <p className="font-weight-normal dark-grey-text">Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.</p>
                           </div>
                        </div>

                        <div className="col-md-4">
                           <div className="testimonial mb-5">
                              <div className="avatar mx-auto">
                                 <img src="../assets/TJDev.png" className="rotate rounded-circle z-depth-1 img-fluid" alt="developer" id=""/>
                              </div>
                                 <h4 className="font-weight-bold dark-grey-text mt-4">Technojet.Dev</h4>
                                 <h6 className="font-weight-bold blue-text my-3">Organization</h6>
                                 <p className="font-weight-normal dark-grey-text">A move that can change your life! </p>
                           </div>
                        </div>
                     </div>
                  </Container> 
               </section> 

               {/* Section for Technology*/}
               <section className="section call-action">
                  <Container fluid="md" style={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center"
                     }}>
                        <Row>
                           <Col>
                              <div className="cta-content">
                              <h2 className="wow fadeInUp" data-wow-delay=".2s">Technology</h2>
                                 <div className="button wow fadeInUp" data-wow-delay=".6s">
                                    <a href="https://getbootstrap.com/" className="btn mb-1"><FaIcons.FaBootstrap/>Bootstrap 5</a>
                                    <a href="https://www.javascript.com/" className="btn  mb-1"><SiIcons.SiJavascript/> JavaScript</a>
                                    <a href="https://html.com/html5/" className="btn mb-1"><SiIcons.SiHtml5/> HTML5</a>
                                    <a href="https://www.w3.org/TR/CSS/#css" className="btn mb-1"><SiIcons.SiCss3/> CSS3</a>
                                    <a href="https://firebase.google.com/" className="btn mb-1"><SiIcons.SiFirebase/> Firebase</a>
                                    <a href="https://reactjs.org/" className="btn mb-1"><SiIcons.SiReact/> ReactJs</a>
                                    <a href="https://unsplash.com/" className="btn mb-1"><SiIcons.SiUnsplash/> Unsplash</a>
                                    <a href="https://github.com/" className="btn mb-1"><SiIcons.SiGithub/> Github</a>
                                    <a href="https://www.netlify.com/" className="btn mb-1"><SiIcons.SiNetlify/> Netlify</a>
                                    <a href="https://www.freepik.com" className="btn mb-1"><SiIcons.SiFreebsd/> Freepik</a>
                                    <a href="https://storyset.com/online" className="btn mb-1"><img src="../../../assets/letter-s.png" alt="img"/> Storyset</a>
                                 </div>
                              </div>
                           </Col>
                        </Row>
                  </Container>
               </section>

               <a href="#top" className="scroll-top">
                  <i className="fa fa-chevron-up"></i>
               </a>

               {/* Section for FAQ*/}
               <section id="faq" className="faq mb-5">
                  <Container fluid="md" style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                     }}>
                        <Row>
                           <div className="col-12 mt-5 ">
                              <div className="section-title">
                                 <h2 className="wow fadeInUp text-secondary" data-wow-delay=".4s">Frequently Asked Questions</h2>
                              </div>
                           </div>
                     <Accordion>
                        <Accordion.Item eventKey="0">
                           <Accordion.Header>What if I have Questions?</Accordion.Header>
                           <Accordion.Body>
                           If you have any concern or questions, please do contact ConquError and we will get in touch with you.
                           <p className="h05">Email Us At.</p>
                                          <ul className="list-links">
                                             <li><a href="https://mail.google.com/mail/u/0/?tab=om#inbox">technojet.devofficial@gmail.com</a></li>
                                          </ul>
                           </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                           <Accordion.Header>What is ConquError?</Accordion.Header>
                           <Accordion.Body>
                           <strong>ConquError</strong> is a digital learning platform developed by Technojet.Dev. We are composed of creative designers, programmers, and researchers which aim to help students, professionals, and researchers in learning IT related courses.
                                       ConquError is a learning platform and community that help students and learners to nurture by being an alternative method of understanding all about IT.          
                           </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                           <Accordion.Header>How to enroll in ConquError?</Accordion.Header>
                           <Accordion.Body>
                           You can Enroll by Creating an Account first. <Link to="/register" style={{ textDecoration: 'none' }}>Register Here!</Link> Having an Account can give you access to all of ConquError. Oh! i forget to tell you, It's All FREE.
                           </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                           <Accordion.Header>Is ConquError free?</Accordion.Header>
                           <Accordion.Body>
                           Yes, you heard me right. ConquError offers its platform to its users with full time free subscriptions. ConquError let's you study without worrying from any type of payment. 
                           </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                           <Accordion.Header>What are my rights as a user?</Accordion.Header>
                           <Accordion.Body>
                           <strong>ConquError</strong> values and respects your right to privacy. We are committed to protect the privacy of our website visitors. We will only collect, record, store, process, and use your personal information in accordance with the Data Privacy Act of 2012, its Implementing Rules and Regulations, the issuances by the National Privacy Commission, and other pertinent laws.  
                                       
                                    
                                       This Privacy Policy informs you of updates in our corporate policies regarding the collection, use, storage, disclosure, and disposal of personal information we receive and collect from our customers, and any individual who communicates, raises inquiries and concerns, as well as transacts with us through our authorized representatives. 
                                       
                                       We will only use your data based on the limitations set by this policy. The outline below provides the manner by which we manage the personal information that we will obtain from you if you visit our website.
                                       
                                       Republic Act 10173 – Data Privacy Act of 2012. Under the Data Privacy Act of 2012, you have the following rights: 
                                       <br/>
                                          - Right to be informed 
                                          <br/>
                                          - Right to access
                                          <br/>
                                          - Right to data erasure 
                                          <br/>
                                          - Right to secure data portability 
                                          <br/>
                                          - Right to be indemnified for damages
                                          <br/>
                                          - Right to file a complaint  
                           </Accordion.Body>
                        </Accordion.Item>
                     </Accordion>
                        </Row>
                  </Container>
               </section>
            </div>

            <footer className="sticky-footer">
               <div>
                  <FooterStyle className=" pt-10 text-white footer ">

                     <div className="container d-flex align-items-center ">
                        <div className="footer__col1">
                           <img  src="../Assets/logo.svg" className="w-50 " alt="logo" />
                           <ul className="list-unstyled">
                           <li  className="mt-3">
                           Learn and Develop your skills.
                           </li>
                           </ul>
                           <div className="footer__col3">
                        <h6 className="mt-2 text-white">Follow Us on</h6>
                              <ul className="list-unstyled">
                              <li className="mb-2"><FaIcons.FaFacebook/> <a href="https://www.facebook.com/theConquErrorph" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"> theConquErrorph</a> </li>
                              <li className="mb-2"><FaIcons.FaYoutube/> <a href="https://www.youtube.com/channel/UCojmF97JXog4ITgDjNtfnqw" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"> theConquError</a></li>
                              <li className="mb-2"><FaIcons.FaDiscord/> <a href="https://discord.gg/CBHw9cAJYS" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"> ConquError</a></li>
                              </ul>
                        </div>
                        </div>

                        <div className="footer__col2 ">
                              <ul className="list-unstyled fw-bold ">
                              <li><h4 className="text-white align-center mt-4 mb-3">Developed by</h4></li>
                              <div className="rotate">
                              <li className="d-flex justify-content-center">
                                 <img className="inline-block align-center h-20 image-center" src="../assets/TJDev.png" alt="logo"/></li>
                              </div>
                              <p className="d-flex justify-content-center">Technojet.Dev</p>  
                              </ul>
                        </div>

                        <div className="footer__col3 ">
                              <ul className="list-unstyled ">
                              <h4  className="d-flex justify-content-center text-white">Contacts</h4>
                              <li className="mb-2  justify-content-center align-items-center"><FaIcons.FaHome/> Lopez, Quezon </li>
                              <li className="mb-2  justify-content-center align-items-center"><FaIcons.FaGoogle/> technojet.devofficial</li>
                              <li className="mb-2  justify-content-center align-items-center"><FaIcons.FaPhoneAlt/> +63 956 528 0371</li>
                              </ul>
                        </div>

                        <div className="footer__col4">
                              <ul className="list-unstyled">
                              <h4  className="d-flex justify-content-center text-white">Built With</h4>
                              <li className="mb-2"><FaIcons.FaReact/> ReactJS</li>
                              <li className="mb-2"><FaIcons.FaGripfire/> Firebase</li>
                              <li className="mb-2"><FaIcons.FaBootstrap/> Bootstrap 5</li>
                              </ul>
                        </div>
                     </div>

                     <div className="copyright">
                     <div className="container">
                        
                        <p className="col-sm d-flex justify-content-center text-center">
                           &copy;{new Date().getFullYear()} Technojet.Dev | Design by PSIX | Beta v1.19.121521
                        </p>
                        
                     </div>
                     </div>

                  </FooterStyle>
               </div>
            </footer>
         </>
    )
}

export default HomeUser
