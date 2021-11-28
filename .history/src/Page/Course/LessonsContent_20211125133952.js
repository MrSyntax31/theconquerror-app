import React, {useEffect,useState} from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {Card, Button, OverlayTrigger, Popover, Container, Row, Col} from 'react-bootstrap';
import * as AiIcons from 'react-icons/ai';
import *  from "react-icons/gi";
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

   //For Popup Notice
const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Notice!</Popover.Header>
    <Popover.Body>
      This feature is <strong>under development</strong> stage. Please be patient.
    </Popover.Body>
  </Popover>
);


    return (
        <>
      <div>
        <Helmet>
          <title>ConquError | Lessons </title>
          <meta name="description" content="ConquError Homepage" />
        </Helmet>
      </div>
      <Navbar/>

<div className="" style={{marginTop:'5rem',  marginBottom:'3rem'}}>

      <Link to="/course" style={{ textDecoration: 'none', marginLeft:'1rem' }} className="btn btn-primary">Back</Link>

            <Card className="m-2">
                <Card.Header className="fw-bold">
                <Container>
                  <Row>
                  <Col md={4}><AiIcons.AiFillCode/> {lessonid}</Col>
                  <Col style={{textAlign: "right"}} ><AiIcons.AiFillCode/>Spellbook</Col>
                  </Row>
              </Container>  
                </Card.Header>
                  <Card.Body>

                    <Container>
                      <Row  xs={2} md={4}>
                        <Col xs={6} md={4}>
                          <img className="mx-auto d-block" style={{width: '50%', height: 'auto'}} src={courses.Image} alt={courses.Title} />
                        </Col>
                        <Col xs={12} md={8}>
                          <h2 className="text-primary fw-bold " style={{display: "table-cell",
                            width: "500px",
                            height: "10px",
                            verticalAlign: "middle"}}>{courses.Title}</h2>
                            <Card.Text className="text-justify mt-3">
                              {courses.courseoverview}
                            </Card.Text>
                        </Col>
                      </Row>
                    </Container>

                      <Button className="mb-5" data-id={courses.Directory} onClick={onView}>View</Button>  

                      <br/>
                      See what it looks like!
                      <iframe title="compilerFrame" width="100%" height="850px" src={courses.sampcode} className="mx-auto d-block"></iframe>


                  <div className="mt-5">
                    {
                      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                        <Button type="button"  variant="primary">Assessment</Button>
                      </OverlayTrigger>
                      }
                  </div>
                    
                  </Card.Body>
                    <Card.Footer className="text-muted mb-5"></Card.Footer>
            </Card>

            </div>         

        <a href="#top" className="scroll-top">
            <i className="fa fa-chevron-up"></i>
        </a>

        </>
    )
}

export default LessonsContent
