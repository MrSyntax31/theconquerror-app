import React, {useEffect,useState} from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {Card, Button, Row, Col } from 'react-bootstrap';
import * as AiIcons from 'react-icons/ai';
import './Contents.css';
import Navbar from '../../Components/Navbar/Navbar'
import {} from '../../firebase/firebase'
import { getFirestore, doc, getDoc } from "firebase/firestore";
import {  useHistory} from "react-router-dom"
import { getAuth } from '@firebase/auth';
import { getDatabase, ref, onValue } from "firebase/database";

const LessonsContent = () => {

  const history = useHistory()

  const auth = getAuth();

  const realtimedb = getDatabase();

  const forumdb = getFirestore();

  const [courses, setLesson] = useState([]);

  const [userlevel, fetchLevel ]= useState([]);

  const lessonid = sessionStorage.getItem('getLesson')

  const userId = auth.currentUser.uid;


    //Function that shows the profile of the user 
    function showProfile() {
   

      //creating reference for realtimedb and fetching data from table users using the userID as reference then setting the data inside the Profile useState above
        const profileData = ref(realtimedb, '/users/' + userId);
        onValue(profileData, (snapshot) => {
          fetchLevel(snapshot.val()); 
      })
    }

  function assessmentPush(){

    history.push("/course")

  }


  useEffect(() => {

    async function fetchLesson(){

      if (lessonid === null)
      {
        history.push("/course")
      }
       else{
        const docRef = doc(forumdb, "courses", lessonid);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
         setLesson(docSnap.data())

        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
       } 
    
    }
  
  fetchLesson();
  showProfile() ;

  },[]);// eslint-disable-line react-hooks/exhaustive-deps 



  const onView = function(e){
      
    const url = e.target.getAttribute("data-id");

    if (userlevel.level >= courses.Difficulty)
    {
      
      window.open(url);
    }
    else{
      alert("You cannot enter the Dungeon!")
    }

    }

   


    return (
        <>
      <div>
        <Helmet>
          <title>ConquError | Lessons </title>
          <meta name="description" content="ConquError Homepage" />
        </Helmet>
      </div>
      <Navbar/>

<div className="" style={{marginTop:'5rem',  marginBottom:'3rem'}}> </div>

      <Link to="/course" style={{ textDecoration: 'none', marginLeft:'1rem' }} className="btn btn-primary mb-4">Back</Link>

            <Card className="text-center">
                <Card.Header><AiIcons.AiFillCode/> {lessonid}</Card.Header>
                  <Card.Body>
                  
                      <Card.Title> {courses.Title}</Card.Title>
                      <Card.Text>
                        
                      <img height="300" width="300" src={courses.Image} alt={courses.Title} />
                      {courses.courseoverview}
                      <br></br>
                      <Button  data-id={courses.Directory} onClick={onView}>View</Button>  
            
                      </Card.Text>


                        See what it looks like!
                      <iframe title="compilerFrame" width="90%" height="850px" src={courses.sampcode}></iframe>


                  <div className="mt-5">
                    {
                      <Button type="button" onClick={assessmentPush} variant="primary">Assessment</Button>
                      }
                  </div>
                    
                  </Card.Body>
                    <Card.Footer className="text-muted mb-5"></Card.Footer>
            </Card>

                      

        <a href="#top" className="scroll-top">
            <i className="fa fa-chevron-up"></i>
        </a>

        </>
    )
}

export default LessonsContent
