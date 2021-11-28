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


    const showCourse = courses.map((courses) => (  
    <div key={courses.id} className="card mb-5">
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
                          <h1 className="text-center text-secondary fw-bold">Welcome to Programming Course</h1>
                          <Card style={{ width: '18rem', marginTop: '2rem' }} className="container mb-4">
                                <div style={{textAlign:"center"}}>
                                  <Card.Img variant="top" className="mt-2 w-50" src="https://cdn-icons-png.flaticon.com/512/3763/3763359.png" />
                                </div>
                              <Card.Body>
                                <Card.Title>My level: <strong>-</strong></Card.Title>
                                  <Card.Text>Your journey has just begun.</Card.Text>
                              </Card.Body>
                          </Card>
                      </div>
                    </Col>
    
                <Card className="mt-5">
                  <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 mt-3">
                    <Tab eventKey="profile" title="Overview" className="mt-2 mb-5 p-3">
                        <p className="mt-2 text-justify">
                          Hello Warrior, we know you’re new to computer programming, and you want to be ready and prepared to the upcoming battle.  This Course is design to help you and boost your knowledge in basic and fundamentals of C++ programming. 
                        </p>
                        <strong>Why start in this course?</strong>
                        <p>
                          According to Guru99, C++ is a general-purpose, object-oriented programming language. It was created by Bjarne Stroustrup at Bell Labs circa 1980. C++ is very similar to C (invented by Dennis Ritchie in the early 1970s). C++ is so compatible with C that it will probably compile over 99% of C programs without changing a line of source code. Though C++ is a lot of well-structured and safer language than C as its OOPs based.
                        </p>
                        <p>
                          Some computer languages are written for a specific purpose. Like, Java was initially devised to control toasters and some other electronics. C was developed for programming OS. Pascal was conceptualized to teach proper programming techniques. But C++ is a general-purpose language. It well deserves the widely acknowledged nickname “Swiss Pocket Knife of Languages.”
                        </p>

                        <strong>Course Path</strong>
                        <p>
                        The course path is composed of 7 lessons and good for 21hrs, you can learn everything from basics and fundamentals as well as watch video tutorial and programming demo from us ConquError team.
                        </p>
                        <p>
                          This practical C++ course will provide you with everything you need to get started. Then you'll be able to utilize this C++ foundation to learn and work in a variety of fields:
                        </p>
                        <ul>
                          <li>•	Operating system</li>
                          <li>•	Desktop Application</li>
                          <li>•	Video games</li>
                          <li>•	Artificial Intelligence</li>
                          <li>•	Arduino Application</li>
                        </ul>

                        <Button variant="primary" onClick={handleShow}> Explore  </Button>
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
                    <Offcanvas.Title>Programming Course</Offcanvas.Title>
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
