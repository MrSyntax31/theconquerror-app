import React, {useEffect,useState} from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {Card, Button, OverlayTrigger, Popover, Container, Row, Col, Offcanvas} from 'react-bootstrap';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from "react-icons/gi";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
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
  const [courseinfo, setCourseInfo] = useState([]);

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



  useEffect(() => {

    async function fetchLesson(){

      if (lessonid === null)
      {
        history.push("/course")
      }
       else{
        const docRef1 = doc(forumdb, "courses", lessonid);
        const docRef2 = doc(forumdb, "courses", lessonid, "courseinfo", lessonid);
        const docSnap1 = await getDoc(docRef1);
        const docSnap2 = await getDoc(docRef2);

        if (docSnap1.exists() & docSnap2.exists()) {
         setLesson(docSnap1.data())
          setCourseInfo(docSnap2.data())

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
        {/* End of Helmet */}

      <Navbar/>

      
      <div className="main" style={{marginTop: '7rem'}}>
        <div className="" style={{marginTop:'5rem',  marginBottom:'3rem'}}>

    <div className="sidenav">
      <p></p>
      <Link to="/lessons" style={{ textDecoration: 'none'}} data-toggle="tooltip" data-placement="top" title="Back"><FaIcons.FaArrowCircleLeft/></Link>
      <a href="#intro" data-toggle="tooltip" data-placement="top" title="Course"><ImIcons.FaImBooksBook/></a>
      <a href="#intro" data-toggle="tooltip" data-placement="top" title="Overview"><FaIcons.FaBook/></a>
      <a href="#vid" data-toggle="tooltip" data-placement="top" title="Introductory Video"><FaIcons.FaVideo/></a>
      <a href="#content" data-toggle="tooltip" data-placement="top" title="Lesson Content"><GiIcons.GiNotebook/></a>
      <a href="#code" data-toggle="tooltip" data-placement="top" title="Sample Code"><AiIcons.AiFillCode/></a>
      <a href="#assess" data-toggle="tooltip" data-placement="top" title="Assessment"><MdIcons.MdQuiz/></a>
    </div>

    {/* <Link to="/lessons" style={{ textDecoration: 'none', marginLeft:'1rem' }} className="btn btn-primary mb-4">Return</Link> */}
                    
                    {/* Card Contents */}
                    <Card className="m-2">
                        {/* Overview ID */}
                        <section id="intro">
                          <Card.Header >
                            <Container>
                              <Row>
                                <Col sm={8} style={{textAlign: 'left', fontSize: '16px'}}><AiIcons.AiFillCode/> {lessonid}</Col>
                                <Col sm={4} className="fw-bold">
                                  <label style={{textAlign: 'left', fontSize: '16px'}} className="shake-little shake-constant shake-constant--hover cursor-pointer" onClick={handleShow}>
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
                                  <Button className="mb-5 btn-primary btn" data-id={courses.Directory} onClick={onView}><FaIcons.FaDownload/> Download</Button>  
                                </Col>
                              </Row>

                              </Container>
                            
                            {/* Video ID */}
                            <section id="vid">
                              <Container>
                                    <Row>
                                      <Col>
                                          <p>{courseinfo.viddesc}</p>
                                      </Col>
                                          <div className="video"
                                              style={{
                                                position: "relative",
                                                paddingBottom: "56.25%" /* 16:9 */,
                                                paddingTop: 25,
                                                height: 0
                                                    }}>
                                                      <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} src="https://www.youtube.com/embed/vwzlg-wSDH0" frameBorder="0" title="vid" allowFullScreen/>
                                          </div>
                                    </Row>
                              </Container>                  
                            </section>

                            {/* Content ID */}
                            <section id="content" className="mt-5">
                              <Container>                                
                                {/* Contents */}
                                <label className="fw-bold mb-3">{courseinfo.title1}</label>    
                                <p>{courseinfo.content1}</p>
                                  <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.courseimg} alt={courses.Title} />
                                  <p className="text-center font-italic">{courseinfo.caption}</p>
                                <p>{courseinfo.content2}</p>
                                <p>{courseinfo.content3}</p>
                                <p className="fw-bold mb-3">{courseinfo.title2}</p>             
                                <p>{courseinfo.content4}</p>
                                <p className="fw-bold mb-3">{courseinfo.title3}</p> 
                                <p>{courseinfo.content5}</p>
                                <p className="fw-bold mb-3">{courseinfo.title4}</p> 
                                <p>{courseinfo.content6}</p>
                                <div className="mt-3 mb-3">
                                  <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.courseimg1} alt={courses.Title} />
                                  <p className="text-center font-italic">{courseinfo.caption1}</p>
                                  <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.courseimg2} alt={courses.Title} />
                                  <p className="text-center font-italic">{courseinfo.caption2}</p>
                                  <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.courseimg3} alt={courses.Title} />
                                  <p className="text-center font-italic">{courseinfo.caption3}</p>
                                </div>

                                <br/>
                                <iframe src={courseinfo.pptlink} width="350px" height="221px" frameBorder="0" title="ppt">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>                    
                              </Container>
                            </section>

                              
                              {/*Code ID */}
                              <section id="code">
                               <div>
                                <h1 className="fw-bold text-primary mt-5">Sample Code!</h1>
                                  <iframe title="compilerFrame" width="100%" height="850px" src={courses.sampcode} className="mx-auto d-block"></iframe>
                                </div>  
                              </section>



                          {/* Assessment Button */}
                          <section id="assess">
                            <div className="mt-2 mb-2 container">
                              <h3>Take Assessment</h3>
                              {
                                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                  <Button type="button"  variant="primary">Assessment</Button>
                                </OverlayTrigger>
                                }
                            </div>
                          </section>
                            
                          </Card.Body>
                            
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
  