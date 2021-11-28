import React, {useEffect,useState} from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {Card, Button, OverlayTrigger, Popover, Container, Row, Col, Offcanvas} from 'react-bootstrap';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from "react-icons/gi";
import * as FaIcons from "react-icons/fa";
import './Contents.css';
import Navbar from '../../Components/Navbar/Navbar'
import {} from '../../firebase/firebase'
import { getFirestore, doc, getDoc } from "firebase/firestore";
import {  useHistory} from "react-router-dom"
import { getAuth } from '@firebase/auth';
import { getDatabase, ref, onValue } from "firebase/database";
import './sideBar.js'


const LessonsContent = () => {

  //OffCanvas Instructions
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        {/* Helmet */}
            <div>
              <Helmet>
                <title>ConquError | Lessons </title>
                <meta name="description" content="ConquError Homepage" />
              </Helmet>
            </div>  


{/* 
    <div class="sidenav">
  <p>About</p>
  <a href="#intro">Intro</a>
  <a href="#vid">Video</a>
  <a href="#content">Content</a>
  <a href="#code">Code</a>
  <a href="#assess">Quiz</a>
</div>

*/}


      <Navbar/>

q
                    

        {/*Off Canvas Content Instructions */}
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
            <Link to="/lessons" style={{ textDecoration: 'none' }} className="btn fs-5"><FaIcons.FaArrowLeft/></Link>
              <Offcanvas.Title>Spellbook</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Some text as placeholder. In real life you can have the elements you
              have chosen. Like, text, images, lists, etc.

              <div className=" d-grid gap-2 mt-3 mb-3">
                                              
                    <Button variant="primary" className="mb-2"><AiIcons.AiFillFileText/> Upload Files</Button> 
                                              
                    <Button variant="primary" className="mb-2"><AiIcons.AiFillLock/> Change Password</Button> 
                                                                        
                    <Button variant="primary" className="mb-2"><AiIcons.AiOutlineWechat/> Send Feedback</Button> 

                    <Button href="#vid" className="page-scroll" aria-label="Toggle navigation">Features</Button>
                                                                                                  
              </div>
            </Offcanvas.Body>
          </Offcanvas>

        {/* ScrollUp Button */}
        <a href="#top" className="scroll-top">
            <i className="fa fa-chevron-up"></i>
        </a>

        </>
    )
}

export default LessonsContent
