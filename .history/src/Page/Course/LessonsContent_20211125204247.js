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
{
 
const openNav = () => {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

}

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
<div id="mySidebar" class="sidebar">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>

<div id="main" style={{marginTop:"5%"}}>
  <button class="openbtn" onclick="openNav()">☰ Open Sidebar</button>  
  <h2>Collapsed Sidebar</h2>
  <p>Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.</p>
</div>
      <Navbar/>
      <div id="main" style={{marginTop: '7rem'}}>
        <div className="" style={{marginTop:'5rem',  marginBottom:'3rem'}}>
     
                    {/* Card Contents */}
                    <Card className="m-2">
                        <section id="intro">
                          <Card.Header >

                          <Container>

                            <Row>
                              <Col className="fw-bold fs-6" style={{textAlign: 'left'}}><AiIcons.AiFillCode/> {lessonid}</Col>
                              <Col className="fw-bold">
                                <label className="shake-little shake-constant shake-constant--hover cursor-pointer fs-6 fw-bold" onClick={handleShow}>
                                  <GiIcons.GiBookmarklet/>Spellbook
                                </label>
                              </Col>
                            </Row>

                          </Container>

                        </Card.Header>
                        </section>
                          <Card.Body>
                            
                              <Container >
                              <Row  xs={2} md={4}>
                                <Col xs={6} md={4}>
                                  <img className="mx-auto " style={{width: '50%', height: 'auto'}} src={courses.Image} alt={courses.Title} />
                                </Col>
                                <Col xs={12} md={8}>
                                  <h2 className="text-primary fw-bold " style={{display: "table-cell",
                                    width: "500px",
                                    height: "10px",
                                    verticalAlign: "middle"}}>{courses.Title}</h2>
                                    <Card.Text className="text-justify mt-3">
                                      {courses.courseoverview}
                                    </Card.Text>
                                  <Button className="mb-5 btn-outline" variant="outline-primary" data-id={courses.Directory} onClick={onView}><FaIcons.FaDownload/> Download</Button>  
                                </Col>
                              </Row>

                              </Container>
                            

                            <section id="vid">
                              <Container>
                                    <Row>
                                      <Col sm={4}>
                                                          <label className="fw-bold fs-3">Introduction Video</label>
                                                          <p>Description here!</p>
                                      </Col>
                                          <div
                                                          className="video"
                                                          style={{
                                                            position: "relative",
                                                            paddingBottom: "56.25%" /* 16:9 */,
                                                            paddingTop: 25,
                                                            height: 0
                                                          }}
                                                          >
                                                          <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} src="https://www.youtube.com/embed/vwzlg-wSDH0" frameBorder="0" title="vid"/>
                                          </div>
                                    
                                    </Row>
                              </Container>                  
                            </section>
                            
                                

                              <br/>
                              See what it looks like!
                              <iframe title="compilerFrame" width="100%" height="850px" src={courses.sampcode} className="mx-auto d-block"></iframe>



                          {/* Assessment Button */}
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
      </div>
                    

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
  