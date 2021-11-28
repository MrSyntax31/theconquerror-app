import React, {useEffect,useState} from 'react';
import Helmet from 'react-helmet';
import { onSnapshot,collection,getFirestore, query, orderBy} from 'firebase/firestore';
import {} from '../../firebase/firebase'
import * as FcIcons from 'react-icons/fc';
import Navbar from '../../Components/Navbar/Navbar'
import { Button } from 'react-bootstrap';
import {  useHistory} from "react-router-dom"
import Footer from '../../Components/Footer/Footer';

const Course = () => {
    //Get Firestore Service from Firebase
    const coursedb = getFirestore();
    //For Routing
    const history = useHistory()

    //declare area to throw list for forum
  const [courses, setCourse] = useState([]);

  //Automatically Fetches Data from Firestore to show all offered Lessons
  useEffect(
    () => {

      const collectionRef = collection(coursedb, "courses");
      const q = query(collectionRef,orderBy("courseDifficulty","asc"));
      onSnapshot(q, (snapshot) =>
        setCourse(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

      )
      
    },[coursedb]
    
  );
 

  const handler = function(e){

    const listkey = e.target.getAttribute("data-id");

    localStorage.setItem('getLesson',listkey)

    history.push("/lessons")
    
    
};

    const showCourse = courses.map((courses) => (  <div key={courses.id} className="col-lg-4 col-md-6 col-12">



    <div className="single-feature wow fadeInUp" data-wow-delay=".4s">
    <img className="w-64" src={courses.courseimg} alt={courses.coursename} />
    <h3>{courses.coursename}</h3>
    <p>{courses.coursedesc}</p>
    <p><FcIcons.FcClock/> Duration {courses.courseduration} hrs</p>
    <Button  onClick={handler}  data-id={courses.id} >Get Started</Button>
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
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 mb-4">
                <h3 className="text-center text-secondary fw-bold">Courses</h3>
                <h4 className="text-center text-secondary"> Experience new and better way to learn programming</h4>
              </div>
                    <div className="row">
                          <p className="mt-4 mb-5 text-center fs-6">
                                    ConquError offers various courses which cater the needs of IT and non-IT related professionals, 
                                    and as well as student's. In this lessons, you can learn and understand the very basic structures and fundamentals of 
                                    computer programming, from concepts, methods, functions, and many more.</p>
                          {showCourse}     
                    </div>   
            </div>  
          </div>
        </section>

      <a href="#top" className="scroll-top">
        <i className="fa fa-chevron-up"></i>
      </a>

      <Footer/>
    </>
    )
}

export default Course
