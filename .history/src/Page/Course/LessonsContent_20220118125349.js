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
  