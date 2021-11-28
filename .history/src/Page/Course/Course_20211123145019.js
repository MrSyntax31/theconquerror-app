import React, {useEffect,useState} from 'react';
import Helmet from 'react-helmet';
import { onSnapshot,collection,getFirestore, query, orderBy} from 'firebase/firestore';
import {} from 'firebase/auth'
import { getAuth, updatePassword, reauthenticateWithCredential , EmailAuthProvider, sendPasswordResetEmail } from '@firebase/auth';
import { getDatabase, ref, onValue } from "firebase/database";
import * as FcIcons from 'react-icons/fc';
import Navbar from '../../Components/Navbar/Navbar'
import { Button, Row, Container, Col } from 'react-bootstrap';
import {  useHistory} from "react-router-dom"




const Course = () => {

    //Services of Firebase (Authentication, Firestore, and Realtime Database)
    const firestoredb = getFirestore();
    const auth = getAuth();
    const realtimedb = getDatabase();

    //Fetch Data of current Logged-in User 
    const user = auth.currentUser;

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
            <Col className="text-center text-secondary">
              <div className="">
                  <h1 className="text-center text-secondary fw-bold">Welcome {profile.Name || ''} to the Courses Section</h1>
                  <h4 className="text-center text-secondary"> Experience new and better way to learn programming</h4>
                </div>
            </Col>
            <div class="row-fluid" style={{"}}padding-top: 10px;">
    <div class="span4 text-center">
      <span class="tab">
        <a class="tab" href="javascript:void(0)" ng-click="tabSelected('one')">Stuff 1</a>
      </span>
      <span class="badge badge-success" ng-show="currentTab == 'one'">0</span>
    </div>
    <div class="span4 text-center">
      <span class="tab">
        <a class="tab" href="javascript:void(0)" ng-click="tabSelected('two')">Stuff 2</a>
      </span>
      <span class="badge badge-success" ng-show="currentTab == 'two'">0</span>
    </div>
  </div>

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
