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

<div class="side-bar">
  <div class="logo-name-wrapper">
    <div class="logo-name">
      <img
        src="./assets/images/logo.png"
        class="logo"
        alt="logo app"
        srcset=""
      />
      <span class="logo-name__name">Lincoln Botosh</span>
    </div>
    <button class="logo-name__button">
      <i
        class="bx bx-arrow-from-right logo-name__icon"
        id="logo-name__icon"
      ></i>
    </button>
  </div>
  <div class="message">
    <i class="message-icon bx bx-message-square-edit"></i>
    <span class="message-text">New Mesage</span>
    <span class="tooltip">New Mesage</span>
  </div>
  <ul class="features-list">
    <li class="features-item inbox active">
      <i class="bx bxs-inbox features-item-icon inbox-icon"
        ><span class="status"></span
      ></i>
      <span class="features-item-text">Inbox</span>
      <span class="inbox-number">99</span>
      <span class="tooltip">Inbox</span>
    </li>
    <li class="features-item draft">
      <i class="bx bx-file-blank features-item-icon"></i>
      <span class="features-item-text">Draft</span>
      <span class="tooltip">Draft</span>
    </li>
    <li class="features-item star">
      <i class="bx bx-star features-item-icon"></i>
      <span class="features-item-text">Starred</span>
      <span class="tooltip">Starred</span>
    </li>
    <li class="features-item sent">
      <i class="bx bx-send features-item-icon"></i>
      <span class="features-item-text">Sent</span>
      <span class="tooltip">Sent</span>
    </li>
    <li class="features-item trash">
      <i class="bx bx-trash features-item-icon"></i>
      <span class="features-item-text">Trash</span>
      <span class="tooltip">Trash</span>
    </li>
    <li class="features-item spam">
      <i class="bx bx-message-square-error features-item-icon"></i>
      <span class="features-item-text">Spam</span>
      <span class="tooltip">Spam</span>
    </li>
  </ul>
  <ul class="category-list">
    <div class="category-header">Message categories</div>
    <li class="category-item">
      <span
        class="category-item-status"
        style="background-color: #79d861"
      ></span
      ><span class="category-item-text">My works</span
      ><span class="category-item-number">9</span>
      <span class="tooltip">My works</span>
    </li>
    <li class="category-item">
      <span
        class="category-item-status"
        style="background-color: #c43c5d"
      ></span
      ><span class="category-item-text">Accountant</span
      ><span class="category-item-number">43</span>
      <span class="tooltip">Accountant</span>
    </li>
    <li class="category-item">
      <span
        class="category-item-status"
        style={{backgroundColor: #ff5050"
      ></span
      ><span class="category-item-text">Works</span
      ><span class="category-item-number">78</span>
      <span class="tooltip">Works</span>
    </li>
    <li class="category-item">
      <span
        class="category-item-status"
        style={{backgroundColor: "#42ffdd"}}
      ></span
      ><span class="category-item-text">Marketing</span
      ><span class="category-item-number">253</span>
      <span class="tooltip">Marketing</span>
    </li>
  </ul>
  <ul class="chat-list">
    <div class="chat-header">recent chats</div>
    <button class="chat-new-btn">
      <i class="bx bxs-plus-circle chat-icon"></i>
      <span class="chat-new-btn-text">Start New Chat</span>
      <span class="tooltip">New Chat</span>
    </button>
    <li class="chat-item">
      <span class="chat-item-avatar-wrapper has-message">
        <img
          src="./assets/images/chris-evans.jpg"
          alt="avatar"
          class="chat-item-avatar"
        />
      </span>
      <span class="chat-item-name">Steve Rogers</span>
      <span class="chat-item-number">53</span>
    </li>
    <li class="chat-item">
      <span class="chat-item-avatar-wrapper">
        <img
          src="./assets/images/tony-stark.jpg"
          alt="avatar"
          class="chat-item-avatar"
        />
      </span>
      <span class="chat-item-name">Tony Stark</span
      ><span
        class="chat-item-status"
        style={{backgroundColor: "#79d861"}}
      ></span>
    </li>
  </ul>
</div>
      <Navbar/>


<div className="">
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
