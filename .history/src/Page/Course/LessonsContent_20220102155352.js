import React, {useEffect,useState} from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {Card, Button, Container, Row, Col, Offcanvas} from 'react-bootstrap';
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
                                <h2 className="fw-bold mb-3 text-primary">{courseinfo.Title1}</h2>    
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle1}</h4>
                                <p className="text-justify mb-3">{courseinfo.Content1}</p>
                                <code className="mt-2 mb-2">{courseinfo.Code1}</code><br/>
                                <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.Img1} alt={courses.Title} />
                                <p className="text-center font-italic mb-3">{courseinfo.Imgdesc1}</p>
                                <p className="text-justify mb-3">{courseinfo.Content2}</p>
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle2}</h4>
                                <p className="text-justify mb-3">{courseinfo.Content3}</p>
                                <p className="text-justify mb-3">{courseinfo.Content4}</p>
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle3}</h4>
                                <p className="text-justify mb-3">{courseinfo.Content5}</p>
                                <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.Img2} alt={courses.Title} />
                                <p className="text-center font-italic mb-3">{courseinfo.Imgdesc2}</p>
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle4}</h4>
                                <p className="text-justify mb-3">{courseinfo.Content6}</p>
                                <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.Img3} alt={courses.Title} />
                                <p className="text-center font-italic mb-3">{courseinfo.Imgdesc3}</p>
                                <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.Img4} alt={courses.Title} />
                                <p className="text-center font-italic mb-3">{courseinfo.Imgdesc4}</p>
                                <code className="mt-2 mb-2">{courseinfo.Code2}</code><br/>
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle5}</h4>
                                <p className="text-justify mb-3">{courseinfo.Content7}</p>
                                <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.Img5} alt={courses.Title} />
                                <p className="text-center font-italic mb-3">{courseinfo.Imgdesc5}</p>
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle6}</h4>
                                <p className="text-justify mb-3">{courseinfo.Content8}</p>
                                <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.Img6} alt={courses.Title} />
                                <p className="text-center font-italic mb-3">{courseinfo.Imgdesc6}</p>
                                <code className="mt-2 mb-2">{courseinfo.Code3}</code><br/>
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle7}</h4>
                                <p className="text-justify mb-3">{courseinfo.Content9}</p>
                                <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.Img7} alt={courses.Title} />
                                <p className="text-center font-italic mb-3">{courseinfo.Imgdesc7}</p>
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle8}</h4>
                                <p className="text-justify mb-3">{courseinfo.Content10}</p>
                                <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.Img8} alt={courses.Title} />
                                <p className="text-center font-italic mb-3">{courseinfo.Imgdesc8}</p>
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle9}</h4>
                                <p className="text-justify mb-3">{courseinfo.Content11}</p>
                                <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.Img9} alt={courses.Title} />
                                <p className="text-center font-italic mb-3">{courseinfo.Imgdesc9}</p>
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle10}</h4>
                                <p className="text-justify mb-3">{courseinfo.Content12}</p>
                                <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.Img10} alt={courses.Title} />
                                <p className="text-center font-italic mb-3">{courseinfo.Imgdesc10}</p>
                                


                                                                
                                
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
                         
                                  <Link to="/assessment" style={{ textDecoration: 'none' }} className="btn btn-primary fs-5">Assessment</Link>

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
  