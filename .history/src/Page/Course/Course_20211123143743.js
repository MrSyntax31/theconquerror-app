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
