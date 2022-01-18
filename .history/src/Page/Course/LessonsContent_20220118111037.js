import React, {useEffect,useState, useRef} from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {Card, Button, Container, Row, Col, Offcanvas, Modal, Form, Alert} from 'react-bootstrap';
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
import { getAuth, signOut, signInWithEmailAndPassword } from '@firebase/auth';
import { getDatabase, ref, onValue } from "firebase/database";
import * as FcIcons from "react-icons/fc";
import swal from 'sweetalert';
import ReCAPTCHA from 'react-google-recaptcha';


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

     //Modal login  const [show, setShow] = useState(false);

     const [showMl, setShowMl] = useState(false);

     const handleCloseMl = () => setShowMl(false);
   
 
      //errors are thrown here
      const [error, setError] = useState("")
 
      //for textbox used in the Log-in Popup
      const emailRef = useRef()
      const passwordRef = useRef()
  
      const [recaptchaHandler, setHandler] = useState(false);
  
      function onChange(value) {
  
        if(value !== null)
        {
          setHandler(true)
        
        }
        else{
          setHandler(false)
        }
        
       }
  
       const [password, PWHandler] = useState("password");
  
       const showPass = (event) => {
  
        if(password === "password"){
          PWHandler("text");
        }
        else {
          PWHandler("password");
        }
  
       };
  
       const [validated, setValidated] = useState(false);
  
       const handleSubmit = (event) => {
         const form = event.currentTarget;
         if (form.checkValidity() === false) {
           event.preventDefault();
           event.stopPropagation();
       }
       else{
           onLogin();
           event.preventDefault();
        }
       setValidated(true);
       event.preventDefault();
       };
  
       //session id
       function sessionId(length){
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
       }
       
  
             //log in function 
             function onLogin(){
              setError("");
                if (recaptchaHandler === true){
  
                   // the user is logged-in using the value inside the textboxes emailRef and passwordRef
              signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
              .then((userCredential) => {
                // Signed in 
                const verifiedCheck = auth.currentUser.emailVerified;
  
                  if (verifiedCheck === true){
                   
                      sessionStorage.setItem('sessionKey',sessionId(23)) 
                  
  
                      setShowMl(false)
                       history.push("/profile")
                  }
                  else{
                
                    signOut(auth).then(() => {
                        setError("Please check your Email to verify your Account!")
        
                    }).catch((error) => {
                      setError(error.code)
                      });
                    
                    
                  }
                
  
              })
              .catch((error) => {
                //if user fails to log-in, an error message is set
                const errorMessage = error.code;
                setError(errorMessage+" If problem persist please contact us!")
              
                
              });
  
                } else {
  
                  setError("Please verify using Recaptcha")
  
                }
             
              return
              }
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



  function verificationStatus(){

    const lesskey = sessionStorage.getItem("getLesson")
    
    onSnapshot(doc(forumdb, "enrollees", userId,"coursesfinished",lesskey), (doc) => {

        const docdata = (doc.data())

        if (docdata)
        {   
         
          swal({
            title: "Do you want to re-run this Dungeon?",
            text: "By pressing Ok, you will enter the battlefield again",
            icon: "info",
            buttons: true
          })
          .then((willHelp) => {
            if (willHelp) {
              
              history.push("/assessment")
            
            } else {
              swal("Aw!","You can always come back!","info");

            }
          });
         
        }
      else
          {
            history.push("/assessment")
          }
     
         
  })
}



  const userLvl = parseInt(sessionStorage.getItem("userLevel"),10)
    

  const enroll =  function(e){
   
    const listkey = e.target.getAttribute("data-id");
    const difficulty = parseInt(e.target.getAttribute("data-difficulty"),10)


      if (currentUser === null)
      {

        setShowMl(true)
        swal("Oops","You need to be a member of the Guild to Enter the Dungeon","error")

      }
      else
      {   
        if( userLvl >= difficulty)
        {

          sessionStorage.setItem('getLesson',listkey)
          
          fetchLesson();
          
        }
        else {
          swal("Oops","You Cannot Enter that Dungeon yet!","error")
         
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
                                  <img className="mx-auto " style={{width: '75%', height: 'auto'}} src={courses.Image} alt={courses.Title} />
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
                                <code className="mt-2 mb-2">{courseinfo.Code2}</code><br/>
                                <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.Img3} alt={courses.Title} />
                                <p className="text-center font-italic mb-3">{courseinfo.Imgdesc3}</p>
                                <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.Img4} alt={courses.Title} />
                                <p className="text-center font-italic mb-3">{courseinfo.Imgdesc4}</p>
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle5}</h4>
                                <p className="text-justify mb-3">{courseinfo.Content7}</p>
                                <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.Img5} alt={courses.Title} />
                                <p className="text-center font-italic mb-3">{courseinfo.Imgdesc5}</p>
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle6}</h4>
                                <p className="text-justify mb-3">{courseinfo.Content8}</p>
                                <code className="mt-2 mb-2">{courseinfo.Code3}</code><br/>
                                <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.Img6} alt={courses.Title} />
                                <p className="text-center font-italic mb-3">{courseinfo.Imgdesc6}</p>
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
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle11}</h4>
                                <p className="text-justify mb-3">{courseinfo.Content13}</p>
                                <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.Img11} alt={courses.Title} />
                                <p className="text-center font-italic mb-3">{courseinfo.Imgdesc11}</p>

                                <h2 className="fw-bold mb-3 mt-2 text-primary">{courseinfo.Title2}</h2>  
                                <p className="text-justify mb-3">{courseinfo.Content14}</p>
                                <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.Img12} alt={courses.Title} />
                                <p className="text-center font-italic mb-3">{courseinfo.Imgdesc12}</p>
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle12}</h4>
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle13}</h4>
                                <p className="text-justify mb-3">{courseinfo.Content15}</p>
                                <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.Img13} alt={courses.Title} />
                                <p className="text-center font-italic mb-3">{courseinfo.Imgdesc13}</p>
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle14}</h4>
                                <p className="text-justify mb-3">{courseinfo.Content16}</p>
                                <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.Img14} alt={courses.Title} />
                                <p className="text-center font-italic mb-3">{courseinfo.Imgdesc14}</p>
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle15}</h4>
                                <p className="text-justify mb-3">{courseinfo.Content17}</p>
                                <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.Img15} alt={courses.Title} />
                                <p className="text-center font-italic mb-3">{courseinfo.Imgdesc15}</p>
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle16}</h4>
                                <p className="text-justify mb-3">{courseinfo.Content18}</p>
                                <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.Img16} alt={courses.Title} />
                                <p className="text-center font-italic mb-3">{courseinfo.Imgdesc16}</p>
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle17}</h4>
                                <p className="text-justify mb-3">{courseinfo.Content19}</p>
                                <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.Img17} alt={courses.Title} />
                                <p className="text-center font-italic mb-3">{courseinfo.Imgdesc17}</p>
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle18}</h4>
                                <p className="text-justify mb-3">{courseinfo.Content20}</p>
                                <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.Img18} alt={courses.Title} />
                                <p className="text-center font-italic mb-3">{courseinfo.Imgdesc18}</p>
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle19}</h4>
                                <p className="text-justify mb-3">{courseinfo.Content21}</p>
                                <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.Img19} alt={courses.Title} />
                                <p className="text-center font-italic mb-3">{courseinfo.Imgdesc19}</p>
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle20}</h4>
                                <p className="text-justify mb-3">{courseinfo.Content22}</p>
                                <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.Img20} alt={courses.Title} />
                                <p className="text-center font-italic mb-3">{courseinfo.Imgdesc20}</p>
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle21}</h4>
                                <p className="text-justify mb-3">{courseinfo.Content23}</p>
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle22}</h4>
                                <p className="text-justify mb-3">{courseinfo.Content24}</p>
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle23}</h4>
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle24}</h4>
                                <p className="text-justify mb-3">{courseinfo.Content25}</p>
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle25}</h4>
                                <p className="text-justify mb-3">{courseinfo.Content26}</p>
                                <a href={courseinfo.weblink} className="mb-5">{courseinfo.linktitle}</a>
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle26}</h4>
                                <p className="text-justify mb-3">{courseinfo.Content27}</p>
                                <p className="text-justify mb-3">{courseinfo.Content28}</p>
                                <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.Img21} alt={courses.Title} />
                                <p className="text-center font-italic mb-3">{courseinfo.Imgdesc21}</p>
                                <p className="text-justify mb-3">{courseinfo.Content29}</p>
                                <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.Img22} alt={courses.Title} />
                                <p className="text-center font-italic mb-3">{courseinfo.Imgdesc22}</p>
                                <p className="text-justify mb-3">{courseinfo.Content30}</p>
                                <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.Img23} alt={courses.Title} />
                                <p className="text-center font-italic mb-3">{courseinfo.Imgdesc23}</p>
                                <p className="text-justify mb-3">{courseinfo.Content31}</p>
                                <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.Img24} alt={courses.Title} />
                                <p className="text-center font-italic mb-3">{courseinfo.Imgdesc24}</p>
                                <p className="text-justify mb-3">{courseinfo.Content32}</p>
                                <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.Img25} alt={courses.Title} />
                                <p className="text-center font-italic mb-3">{courseinfo.Imgdesc25}</p>

                                <h2 className="fw-bold mb-3 mt-2 text-primary">{courseinfo.Title3}</h2>  
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle27}</h4>
                                <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.Img26} alt={courses.Title} />
                                <p className="text-center font-italic mb-3">{courseinfo.Imgdesc26}</p>
                                <p className="text-justify mb-3">{courseinfo.Content33}</p>
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle28}</h4>
                                <p className="text-justify mb-3">{courseinfo.Content34}</p>
                                <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={courseinfo.Img27} alt={courses.Title} />
                                <p className="text-center font-italic mb-3">{courseinfo.Imgdesc27}</p>
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle29}</h4>
                                <p className="text-justify mb-3">{courseinfo.Content35}</p>
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle30}</h4>
                                <p className="text-justify mb-3">{courseinfo.Content36}</p>
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle31}</h4>
                                <p className="text-justify mb-3">{courseinfo.Content37}</p>
                                <h4 className="fw-bold mb-3">{courseinfo.Subtitle32}</h4>
                                <p className="text-justify mb-3">{courseinfo.Content38}</p>
                                                      
                                
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
                         
                                  <Button onClick={verificationStatus} style={{ textDecoration: 'none' }} className="btn btn-primary fs-5">Assessment</Button>

                            </div>
                          </section>
                            
                          </Card.Body>
                            
                    </Card>

                  </div> 
      </div>
                      {/* Modal Login*/}
                <Modal show={showMl} onHide={handleCloseMl}>
                    <Modal.Header closeButton>
                      <Modal.Title>Log-in</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Please Log-in to Continue!
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form noValidate validated={validated} className="">
                                  <Form.Group id="email" className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control ref={emailRef}  name = "email"  type="email" required autoComplete="username" placeholder="Email Address"/>
                                    <Form.Control.Feedback type="invalid">
                                    Please double check your email.
                                  </Form.Control.Feedback>
                                  </Form.Group>

                                  <Form.Group id="password" className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type={password} ref={passwordRef}  name = "password" autoComplete="current-password" required placeholder="Password"/>
                                      <Form.Control.Feedback type="invalid">
                                    Please enter a password.
                                  </Form.Control.Feedback>
                                    <div className="form-group mt-2 text-secondary">
                                    <i onClick={showPass} className="fs-7" style={{cursor:"pointer", fontFamily:"Raleway, sans-serif"}}><AiIcons.AiFillEye/>Show/Hide Password</i>
                                    </div>
                                  
                                  </Form.Group>
                              
                            <div className="w-100 mt-2 justify-content-right">
                              <Link to="/forgot-pass" style={{ textDecoration: 'none' }}>Forgot Password</Link>
                            </div>

                            <div className="col-xs-1 mt-3" align="center">
                            <ReCAPTCHA
                            sitekey={process.env.REACT_APP_SITEKEY}
                            onChange={onChange}
                            />
                            </div>
                            
                            <Button onClick={handleSubmit} className="w-100 mt-3 mb-3"  >Login</Button>
                          
                                </Form>

                    </Modal.Body>
                    <Modal.Footer>
                    <div className="w-100 mt-2 mb-2 text-center text-secondary">
                                Don't have an account? <Link to="/register" style={{ textDecoration: 'none' }}>Register</Link>
                            </div>
                    </Modal.Footer>
                  </Modal>


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
  