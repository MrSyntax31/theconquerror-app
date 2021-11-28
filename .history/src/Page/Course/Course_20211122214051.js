import React, {useEffect,useState} from 'react';
import Helmet from 'react-helmet';
import { onSnapshot,collection,getFirestore, query, orderBy} from 'firebase/firestore';
import {} from '../../firebase/firebase'
import * as FcIcons from 'react-icons/fc';
import Navbar from '../../Components/Navbar/Navbar'
import { Button, Row, Container, Col } from 'react-bootstrap';
import {  useHistory} from "react-router-dom"
import { getAuth } from 'firebase/auth'



const Course = () => {
    //Get Firestore Service from Firebase
    const forumdb = getFirestore();

    const auth = getAuth();

    const currentUser = auth.currentUser;
    //For Routing
    const history = useHistory()

    //declare area to throw list for forum
  const [courses, setCourse] = useState([]);


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
        history.push("/lessons")
      }
};


    const showCourse = courses.map((courses) => (  <div key={courses.id} className="col-lg-4 col-md-6 col-12">
    <div className="single-feature wow fadeInUp m-2 p-5" data-wow-delay=".4s">
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
        <section className="features section bg-light mt-5">
          <Container fluid="md" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
            <Row>
            <Col className="text-center text-secondary">
              <div className="">
                  <h1 className="text-center text-secondary fw-bold">Welcome "Username" to the Courses Section</h1>
                  <h4 className="text-center text-secondary"> Experience new and better way to learn programming</h4>
                </div>
            </Col>
              
                          <p className="mt-4 mb-5 text-center">
                                    ConquError offers various courses which cater the needs of IT and non-IT related professionals, 
                                    and as well as students. In this lessons, you can learn and understand the very basic structures and fundamentals of 
                                    computer programming, from concepts, methods, functions, and many more.</p>
                      
                          {showCourse}     
            </Row>  
          </Container>
        </section>

      <a href="#top" className="scroll-top">
        <i className="fa fa-chevron-up"></i>
      </a>

   
    </>
    )
}

export default Course
