import React, {useEffect,useState} from 'react';
import Helmet from 'react-helmet';
import { onSnapshot,collection,getFirestore, query, orderBy} from 'firebase/firestore';
import {} from '../../firebase/firebase'
import * as FcIcons from 'react-icons/fc';
import Navbar from '../../Components/Navbar/Navbar'
import { Button, Row, Container, Col, Card, Offcanvas, Tab, Tabs } from 'react-bootstrap';
import {  useHistory} from "react-router-dom"
import { getAuth } from 'firebase/auth'
import {  Link } from "react-router-dom"


const Lessons = () => {
    //Get Firestore Service from Firebase
    const forumdb = getFirestore();

    const auth = getAuth();

    const currentUser = auth.currentUser;
    //For Routing
    const history = useHistory()

    //declare area to throw list for forum
  const [courses, setCourse] = useState([]);


  //Lessons Collection Side Menu
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Automatically Fetches Data from Firestore to show all offered Lessons
  useEffect(
    () => {

      const collectionRef = collection(forumdb, "courses");
      const q = query(collectionRef,orderBy("Difficulty","asc"));
      onSnapshot(q, (snapshot) =>
        setCourse(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        
      )
      
    },[]); // eslint-disable-line react-hooks/exhaustive-deps
 
    


  const enroll = async function(e){

    const listkey = e.target.getAttribute("data-id");
      if (currentUser === null)
      {
        if (window.confirm('You need to be logged-in to continue, Press Yes to Proceed to our Log-in Page')) {
          // Save it!
         history.push("/login")
        } else {
              //nothing
        }
      }
      else
      {
        sessionStorage.setItem('getLesson',listkey)
        history.push("/lessonscontent")
      }
};


    const showCourse = courses.map((courses) => (  <div key={courses.id} className="card mb-5">
    <div className="single-feature wow fadeInUp m-2 p-1" data-wow-delay=".4s">
    <h1 className="text-primary fw-bold">{courses.Difficulty}</h1>
    <img className="w-50 mx-auto d-block" src={courses.Image} alt={courses.Title} />
    <h3>{courses.Title}</h3>
    <p>{courses.Description}</p>
    <p className="mt-3 mb-4"><FcIcons.FcClock/> Duration {courses.Duration} hrs</p>
    <Button onClick={enroll}  data-id={courses.id} >Get Started</Button>
    </div>
    </div>
 ))

    return (
        <>

        {/* Division for Tab Page and Description*/}
        <div>
            <Helmet>
            <title>ConquError | Course</title>
            <meta name="description" content="ConquError Course page" />
            </Helmet>
        </div>
        <Navbar/>

      {/* Section for Course List*/}
        <section className="features section" style={{marginTop:"1rem"}}>
            <Link to="/course" style={{ textDecoration: 'none' }} className="btn mb-4 fw-bold"> Return to Courses</Link>
              <Container fluid="md" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              
                <Row>
                    <Col className="text-center text-secondary">
                      <div className="">
                          <h1 className="text-center text-secondary fw-bold">Welcome to the Programming Course</h1>
                          
                          <Card style={{ width: '18rem', marginTop: '2rem' }} className="container mb-4">
                                            <div style={{textAlign:"center"}}>
                                              <Card.Img variant="top" className="mt-2 w-50" src="https://cdn-icons-png.flaticon.com/512/3763/3763359.png" />
                                            </div>
                              <Card.Body>
                                <Card.Title>My level: <strong>-</strong> </Card.Title>
                                  <Card.Text>Level -: You are about to discover new programming adventures and challenges. </Card.Text>
                                            </Card.Body>
                          </Card>
                          {/*<img src="https://media.giphy.com/media/3ornk57KwDXf81rjWM/giphy.gif" alt="funny GIF" width="480" height="259"></img>*/}
                          <h4 className="text-center text-secondary"> Experience new and better way to learn programming</h4>
                        </div>
                    </Col>
    
                <Card className="mt-5">
                  <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 mt-3">
                    <Tab eventKey="profile" title="Overview">
                    <p className="mt-4 mb-5 text-center">
                                          ConquError offers various courses which cater the needs of IT and non-IT related professionals, 
                                          and as well as students. In this lessons, you can learn and understand the very basic structures and fundamentals of 
                                          computer programming, from concepts, methods, functions, and many more.</p>

                                          <Button variant="primary" onClick={handleShow}> Launch </Button>
                    </Tab>
                    <Tab eventKey="home" title="Home">
                    dgsjhfhsjkdf
                    </Tab>
                    <Tab eventKey="contact" title="Contact" >
                      hfghjgf
                    </Tab>
                  </Tabs>
                </Card>

                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    {showCourse} 
                  </Offcanvas.Body>
                </Offcanvas>
                                        
                </Row>  
              </Container>
        </section>

      <a href="#top" className="scroll-top">
        <i className="fa fa-chevron-up"></i>
      </a>

   
    </>
    )
}

export default Lessons
