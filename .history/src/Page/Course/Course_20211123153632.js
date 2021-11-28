import React, {useEffect,useState} from 'react';
import Helmet from 'react-helmet';
import {} from 'firebase/auth'
import { getAuth } from '@firebase/auth';
import { getDatabase, ref, onValue } from "firebase/database";
import Navbar from '../../Components/Navbar/Navbar'
import { Row, Container, Col, Card } from 'react-bootstrap';
import {  Link } from "react-router-dom"




const Course = () => {

    //Services of Firebase (Authentication, Firestore, and Realtime Database)
    const auth = getAuth();
    const realtimedb = getDatabase();


    //fetches the id of the current logged-in user which will be used to reference the data inside the Realtime database
    const userId = auth.currentUser.uid;   
    
 //to be used by showProfile Function to map the data and be visible to users      
 const [profile, setData] = useState([]);



 //Loads the function inside the useEffect when the component renders
   useEffect (() => {
     
   //Function that shows the profile of the user 
   function showProfile() {
    
 
   //creating reference for realtimedb and fetching data from table users using the userID as reference then setting the data inside the Profile useState above
     const profileData = ref(realtimedb, '/users/' + userId);
     onValue(profileData, (snapshot) => {
       setData(snapshot.val());
   })
 }
 
         showProfile();
       
   },[]); // eslint-disable-line react-hooks/exhaustive-deps

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
              <div className="">
                  <h1 className="text-center text-secondary fw-bold">Welcome {profile.Name || ''} to the Courses Section</h1>
                  <h4 className="text-center text-secondary"> Experience new and better way to learn programming</h4>
                </div>
            

                          <p className="mt-4 mb-5 text-center">
                                    ConquError offers various courses which cater the needs of IT and non-IT related professionals, 
                                    and as well as students. In this lessons, you can learn and understand the very basic structures and fundamentals of 
                                    computer programming, from concepts, methods, functions, and many more.</p>
                      
            
              <Col style={{width: "959px", margin: "0 auto";}}>
                        <Card style={{ width: '18rem', marginTop: '2rem' }}>
                                    <div style={{textAlign:"center"}}>
                                      <Card.Img variant="top" className="mt-5 w-50" src="https://cdn-icons.flaticon.com/png/512/4674/premium/4674889.png?token=exp=1637653151~hmac=2a5ddce639deb7b7de6f3ec56f5c90c5" />
                                    </div>
                                    <Card.Body>
                                      <Card.Title>Programming</Card.Title>
                                      <Card.Text>
                                        Level 1: You are about to discover new adventures and quest. 
                                      </Card.Text>
                                      <Link to="/course" style={{ textDecoration: 'none' }} className="btn btn-primary mb-4">Level Up</Link>
                                    </Card.Body>
                                  </Card>
                      
                          
             </Col>
             <Col>
             <Card style={{ width: '18rem', marginTop: '2rem' }}>
                                    <div style={{textAlign:"center"}}>
                                      <Card.Img variant="top" className="mt-5 w-50" src="https://cdn-icons.flaticon.com/png/512/3131/premium/3131620.png?token=exp=1637653582~hmac=6b8ffa9485742e88483da2575aecea59" />
                                    </div>
                                    <Card.Body>
                                      <Card.Title>Computing</Card.Title>
                                      <Card.Text>
                                        Level 1: You are about to discover new adventures and quest. 
                                      </Card.Text>
                                      <Link to="/course" style={{ textDecoration: 'none' }} className="btn btn-primary mb-4">Level Up</Link>
                                    </Card.Body>
                                  </Card>
             </Col>
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
