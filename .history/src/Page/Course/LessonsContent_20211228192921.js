import React, {useEffect,useState} from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {Card, Button, OverlayTrigger, Popover, Container, Row, Col, Offcanvas} from 'react-bootstrap';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from "react-icons/gi";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as ImIcons from "react-icons/im";
import './Contents.css';
import Navbar from '../../Components/Navbar/Navbar'
import {} from '../../firebase/firebase'
import { getFirestore, doc, getDoc, onSnapshot, orderBy, query, collection } from "firebase/firestore";
import {  useHistory} from "react-router-dom"
import { getAuth } from '@firebase/auth';
import { getDatabase, ref, onValue } from "firebase/database";
import * as FcIcons from "react-icons/fc";
import swal from 'sweetalert';

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

  

  const currentUser = auth.currentUser;

  const userId = auth.currentUser.uid;


    //Function that shows the profile of the user 
    function showProfile() {
   

      //creating reference for realtimedb and fetching data from table users using the userID as reference then setting the data inside the Profile useState above
        const profileData = ref(realtimedb, '/users/' + userId);
        onValue(profileData, (snapshot) => {
          fetchLevel(snapshot.val()); 
      })
    }

    const [courses1, setCourse] = useState([]);

    async function fetchLesson(){

      const lessonid = sessionStorage.getItem('getLesson');

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

  useEffect(() => {

    const collectionRef = collection(forumdb, "courses");
    const q = query(collectionRef,orderBy("Difficulty","asc"));
    onSnapshot(q, (snapshot) =>
      setCourse(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      
    )

 

  
  fetchLesson();
  showProfile();

  
  },[]);// eslint-disable-line react-hooks/exhaustive-deps 

  const userlevel1 = sessionStorage.getItem("userLevel");


  const enroll = async function(e){
   
    const listkey = e.target.getAttribute("data-id");
    const difficulty = e.target.getAttribute("data-difficulty")

    
      if (currentUser === null)
      {
        if (window.swal({type: 'error', icon: 'error', title: 'Oops', text: 'You need to be logged in to continue!'})) {
          // Save it!
         history.push("/login")
        } else {
          //
        }
      }
      else
      { 
        if(userlevel1 < difficulty)
        {
         
          swal("Oops","You Cannot Enter that Dungeon yet!","error")
        
        }
        else {
          
          sessionStorage.setItem('getLesson',listkey)
          
          fetchLesson();
      }
    }
};

  const onView = function(e){
      
    const url = e.target.getAttribute("data-id");

    if (userlevel.level >= courses.Difficulty)
    {
      
      window.open(url);

    }
    else{
      swal("Warning!","You cannot enter the Dungeon!","error")
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

const showCourse = courses1.map((courses1) => (  
  <div key={courses1.id} className="card mb-5">
    <div className="single-feature wow fadeInUp m-2 p-1" data-wow-delay=".4s">
      <h1 className="text-primary fw-bold">{courses1.Difficulty}</h1>
      <img className="w-50 mx-auto d-block" src={courses1.Image} alt={courses1.Title} />
      <h3>{courses1.Title}</h3>
      <p>{courses1.Description}</p>
      <p className="mt-3 mb-4"><FcIcons.FcClock/> Duration {courses1.Duration} hrs</p>
      <Button onClick={enroll} data-difficulty={courses1.Difficulty} data-id={courses1.id} >Get Started</Button>
    </div>
  </div>
))

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



    {/* <Link to="/lessons" style={{ textDecoration: 'none', marginLeft:'1rem' }} className="btn btn-primary mb-4">Return</Link> */}
                    
                    {/* Card Contents */}
                    <Card className="m-2">
                        {/* Overview ID */}
                        <section id="intro">
                          <Card.Header >
                            <Container>
                           
                                  <label style={{textAlign: 'left', fontSize: '16px'}} className="shake-little shake-constant shake-constant--hover cursor-pointer mt-2" onClick={handleShow}>
                                    <GiIcons.GiBookmarklet/>Spellbook
                                  </label>

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
                                <h5 className="fw-bold mb-3">{courseinfo.title1}</h5>    
                                <p>{courseinfo.content1}</p>
                                <p>{courseinfo.content2}</p>
                                <p>{courseinfo.content3}</p>
                                <h6 className="fw-bold mb-3">{courseinfo.title2}</h6>             
                                <p>{courseinfo.content4}</p>
                                <h6 className="fw-bold mb-3">{courseinfo.title3}</h6> 
                                <p>{courseinfo.content5}</p>
                                <h6 className="fw-bold mb-3">{courseinfo.title4}</h6> 
                                <p>{courseinfo.content6}</p>
                                <div className="mt-3 mb-3">
                                  <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.courseimg1} alt={courses.Title} />
                                  <p className="text-center font-italic">{courseinfo.caption1}</p>
                                  <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.courseimg2} alt={courses.Title} />
                                  <p className="text-center font-italic">{courseinfo.caption2}</p>
                                  <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.courseimg3} alt={courses.Title} />
                                  <p className="text-center font-italic">{courseinfo.caption3}</p>
                                </div>
                                
                                {/*PROG-PC101 */}
                                <div>
                                  <br/>
                                  <h5 className="fw-bold mb-3">{courseinfo.pctitle1}</h5>  
                                  <h5 className="fw-bold mb-3">{courseinfo.bpstitle1}</h5> 
                                  <p>{courseinfo.content7}</p>
                                  <p>{courseinfo.bpscontent2}</p>
                                  <p>{courseinfo.bpscontent3}</p>
                                  <p>{courseinfo.bpscontent4}</p>
                                  <p>{courseinfo.bpscontent5}</p>
                                  <p>{courseinfo.bpscontent6}</p>
                                  <p>{courseinfo.content8}</p>
                                  <p>{courseinfo.content9}</p>
                                  <p>{courseinfo.content10}</p>
                                  <p>{courseinfo.content11}</p>
                                  <p>{courseinfo.content12}</p>
                                  <p>{courseinfo.content13}</p>

                                  <br/>
                                  <h5 className="fw-bold mb-3">{courseinfo.pctitle2}</h5> 
                                  <h5 className="fw-bold mb-3">{courseinfo.bpstitle2}</h5> 
                                  <p>{courseinfo.bpscontent7}</p>
                                  <h5 className="fw-bold mb-2">{courseinfo.bpstitle3}</h5> 
                                  <code>{courseinfo.bpscode}</code>
                                  <h5 className="fw-bold mt-2 mb-3">{courseinfo.bpstitle4}</h5> 
                                  <p>{courseinfo.bpscontent8}</p>
                                  
                                  <p>{courseinfo.content14}</p> 
                                  <p>{courseinfo.content15}</p>
                                  <p>{courseinfo.content16}</p>
                                  <p>{courseinfo.content17}</p>
                                  <p>{courseinfo.content18}</p>
                                  <p>{courseinfo.content19}</p>
                                  <p>{courseinfo.content20}</p>
                                  <p>{courseinfo.content21}</p>

                                  <a href={courseinfo.pclink1} >{courseinfo.pctitlelink}</a>

                                  <br/>
                                  <h5 className="fw-bold mb-3 mt-3">{courseinfo.pctitle3}</h5>
                                  <p>{courseinfo.content22}</p>
                                  <p>{courseinfo.content23}</p>
                                  <img className="mx-auto d-block mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.pcimage1} alt={courses.Title} />
                                  <p className="text-center font-italic">{courseinfo.pccaption1}</p>

                                  <br/>
                                  <p>{courseinfo.content24}</p>
                                  <img className="mx-auto d-block mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.pcimage2} alt={courses.Title} />
                                  <p className="text-center font-italic">{courseinfo.pccaption2}</p>

                                  <p>{courseinfo.content25}</p>
                                  <img className="mx-auto d-block mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.pcimage3} alt={courses.Title} />
                                  <p className="text-center font-italic">{courseinfo.pccaption3}</p>

                                  <p>{courseinfo.content26}</p>
                                  <img className="mx-auto d-block mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.pcimage4} alt={courses.Title} />
                                  <p className="text-center font-italic">{courseinfo.pccaption4}</p>
                                  
                                  <h5 className="fw-bold mb-3 mt-3">{courseinfo.title5}</h5>
                                  <h6 className="fw-bold mb-3 mt-2">{courseinfo.title6}</h6>
                                  <p>{courseinfo.content27}</p>
                                  <h5 className="fw-bold mb-3 mt-5">{courseinfo.title7}</h5>
                                  <p>{courseinfo.content28}</p>
                                  <p>{courseinfo.content29}</p>
                                  <p>{courseinfo.content30}</p>
                                  <p>{courseinfo.content31}</p>
                                  <p>{courseinfo.content32}</p>
                                  <p>{courseinfo.content33}</p>
                                  <p>{courseinfo.content34}</p>

                                  <h5 className="fw-bold mb-3 mt-5">{courseinfo.title8}</h5>
                                  <p>{courseinfo.content35}</p>
                                  <h5 className="fw-bold mb-3 mt-5">{courseinfo.title9}</h5>
                                  <p>{courseinfo.content36}</p>
                                  <h5 className="fw-bold mb-3 mt-3">{courseinfo.title10}</h5>
                                  <p>{courseinfo.content37}</p>
                                  <p>{courseinfo.content38}</p>
                                  <p>{courseinfo.content39}</p>
                                  <p>{courseinfo.content40}</p>              
                                </div>
                                
                                
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
              <br/>
              <a href="#intro" data-toggle="tooltip" data-placement="top" title="Course"><ImIcons.ImFileText/></a>
              <a href="#vid" data-toggle="tooltip" data-placement="top" title="Introductory Video"><FaIcons.FaVideo/></a>
              <a href="#content" data-toggle="tooltip" data-placement="top" title="Lesson Content"><GiIcons.GiNotebook/></a>
              <a href="#code" data-toggle="tooltip" data-placement="top" title="Sample Code"><AiIcons.AiFillCode/></a>
              <a href="#assess" data-toggle="tooltip" data-placement="top" title="Assessment"><MdIcons.MdQuiz/></a>
            </Offcanvas.Header>
            <Offcanvas.Body>
            {showCourse} 
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
  