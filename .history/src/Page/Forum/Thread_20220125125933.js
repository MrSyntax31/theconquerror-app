import React, { useEffect, useState, useRef } from 'react'

import { Link } from "react-router-dom"
import * as FaIcons from 'react-icons/fa';
import Helmet from 'react-helmet';
import Navbar from '../../Components/Navbar/Navbar'
import {Container, Form, Row, Col, Dropdown, Modal, Button , Alert, OverlayTrigger, Tooltip} from 'react-bootstrap'
import './Forum.css';
import { getAuth , signOut, signInWithEmailAndPassword} from '@firebase/auth';
import { getFirestore, doc, onSnapshot, addDoc, collection, query, orderBy , deleteDoc, updateDoc, setDoc} from '@firebase/firestore';
import { useHistory } from 'react-router';
import { getDatabase, ref, onValue } from "firebase/database";
import swal from 'sweetalert';
import * as BiIcons from 'react-icons/bi';
import * as GoIcons from 'react-icons/go';
import ReCAPTCHA from 'react-google-recaptcha';
import * as AiIcons from 'react-icons/ai';


const Thread = () => {

    const auth = getAuth();

    const forumdb = getFirestore();
    
    const user = auth.currentUser;

    const realtimedb = getDatabase();

    const history = useHistory();
    
    const threadId = localStorage.getItem('threadID');
  
    const [topic, setTopic] = useState([]);

    const [reply, setReply] = useState();
    
    const [threadList, setReplies] = useState([]);

    const [Empty, checkEmpty] = useState(false);
      
    const [userlevel, fetchLevel ]= useState([]);

    //Reports
    const [showR, setShowR] = useState(false);

    const handleCloseR = () => setShowR(false);

    
    //Function that shows the profile of the user 
    function showProfile() {
   

        //creating reference for realtimedb and fetching data from table users using the userID as reference then setting the data inside the Profile useState above
          const profileData = ref(realtimedb, '/users/' + user.uid);
          onValue(profileData, (snapshot) => {
            fetchLevel(snapshot.val()); 
        })
      }
  
         //convert date which is timestamp to String
         var timestamp = Date.now();
         var convertedDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)
   
   async function addComment(){

        if (user === null){

            if (window.swal({type: 'error', icon: 'error', title: 'You need to be logged in to comment', text: 'Please login to comment'})){
                // Save it!
               history.push("/login")
              } else {
                    //nothing
              }
        }
        else {
            
            // Add a new document with a generated id.
            await addDoc(collection(forumdb, "topics",threadId,"replies"), {
                reply: reply,
                created_at: convertedDate,
                user_id : user.uid,
                 email : user.email,
                 level: userlevel.level
                }).then(() =>{
                    setReply("");
               swal({icon: "success", title: "Success", text: "Comment has been posted!"});
              
            
             }).catch((error) => {
                       alert(error.message)
               })
        }

    }



    useEffect(() => {

        const collectionRef = (collection(forumdb, "topics",threadId,"replies"));
        const q = query(collectionRef,orderBy("created_at","asc"));

        onSnapshot(q, (snapshot) =>
          setReplies(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
        
          if (user !== null) {
            showProfile();  
          }
          else {
              //do Nothing
          }

    },[])  // eslint-disable-line react-hooks/exhaustive-deps


 

    const [closed, setClosed] = useState(false)
    const [hider, setHide] = useState(false)

    useEffect (() => {

        function onLoad() {
            onSnapshot(doc(forumdb, "topics", threadId), (doc) => {
                const docdata = (doc.data())
                if (docdata)
                {   
                    setTopic(docdata);
                    if(docdata.case_status === "solved")
                    {
                        setClosed(true)
                    }
                    else
                    {
                        setClosed(false)
                    }
                    checkEmpty(false);
                    if(user){
                        if (user.email === docdata.created_by ){
                            setHide(true)
                      }
                      else{
                        setHide(false)
                      } 
                    }
                    else{
                        setHide(false)
                    }
                
                  
                }
                else{
                    
                    checkEmpty(true);
                   
                }

                
            });

       
        }
        if(threadId)
        {
  onLoad();}
  else{
    checkEmpty(true);
  }
    



},[]) // eslint-disable-line react-hooks/exhaustive-deps


    const showRep= threadList.map((threadList) =>  <div key={threadList.id}>  <br></br> {threadList.reply} <br></br><OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Report User!</Tooltip>}><p className="text-primary d-inline-block" data-email={threadList.email} onClick={askReport} style={{cursor:"pointer"}}>{threadList.email}</p></OverlayTrigger> <br></br> Level: <strong>{threadList.level}</strong></div> )

  async function DeletePost(e) {

    const postemail = topic.created_by
 
    if(user === null){
        swal('User','User not Found','warning')
    }
    else{
        if (user.email === postemail){

            await deleteDoc(doc(forumdb, "topics", threadId)).then(()=>{
                
                history.push("/forum")
               swal('Success',"Post is now Deleted", 'success')
        
          
        
           }).catch((error) =>{
                   swal('Delete',error.code, 'warning')
           })
          }
          else{
           swal('Error',"You can't Delete this post!", 'warning')
          }
           
    }
  

  }
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 async function caseClosed() {
    
    const postemail = topic.created_by
    const checkStatus = topic.case_status

    if(user === null){
        swal('User','User not Found','warning')
    }
    else{
        if (user.email === postemail){

            if(checkStatus === "unsolved") {
                const dbref = doc(forumdb, "topics", threadId);

    
                await updateDoc(dbref, {
                    case_status: "solved"
                    
                }).then(()=>{
                    swal('Congratulations!',"Post is now Closed", 'success')
                }).catch((error) =>{
                    swal('Close',error.code, 'warning')
            })
            }

            else {
                swal('Error', "Post already Closed", 'warning')
            }

  
   }
   else{
    swal('Error',"You can't Close this post!", 'warning')
   }
    
}


  }

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
  }
  else{
      addComment();
      event.preventDefault();
   }
  setValidated(true);
  event.preventDefault();
  };

    const [userEmail, setUserEmail] = useState();
    const [report, ReportUser] = useState();      

//Function for Modal (Send Feedback)
async  function sendReport(){

// Rederence the Firebase Service for Firestore
const userFeedback = doc(collection(forumdb, "reports"));

//convert date which is timestamp to String
var timestamp = Date.now();
var convertedDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)

// then create the array with the data to be set inside firestore in collection "feedback"
var data = {
ReportDesc: report,
Email: userEmail,
dateofReport: convertedDate
}
if (report === "") {
swal("Error","You cannot send an Empty field","error")
}
else{
//puts the document inside the collection "feedback" in firestore
await setDoc(userFeedback, data).then(() =>{

setShowR(false)
//show a success message
swal("Report Sent", "Thank you for making ConquError a healthy community.", "success");


}).catch((error) => {

swal("Something is Wrong",error.code,"warning");
}).finally(() =>{

})

}

}


      //Modal login  const [show, setShow] = useState(false);

      const [showMl, setShowMl] = useState(false);

      const handleCloseMl = () => setShowMl(false);
    
  
       //errors are thrown here
       const [error1, setError1] = useState("")
  
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
   
        const [validated1, setValidated1] = useState(false);
   
        const handleSubmitLogin = (event) => {
          const form = event.currentTarget;
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            onLogin();
            event.preventDefault();
         }
         setValidated1(true);
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
               setError1("");
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
                         setError1("Please check your Email to verify your Account!")
         
                     }).catch((error) => {
                       setError1(error.code)
                       });
                     
                     
                   }
                 
   
               })
               .catch((error) => {
                 //if user fails to log-in, an error message is set
                 const errorMessage = error.code;
                 setError1(errorMessage+" If problem persist please contact us!")
               
                 
               });
   
                 } else {
   
                   setError1("Please verify using Recaptcha")
   
                 }
              
               return
               } 


               function askReport(e){

                if(user === null)
                {
                    
                  setShowMl(true)
                  swal("Oops","It seems that you're not from this Land","error")
                }
                else
                { 
                  setUserEmail(e.target.getAttribute("data-email"))
                  setShowR(true);
                 
                }
          
              }

    return <div className="commentSection">

        <div>
            <Helmet>
            <title>ConquError | Thread </title>
            <meta name="description" content="ConquError Games page" />
            </Helmet>
        </div>

        <Navbar/>        
        
        <section className="mb-5 card rounded m-3 p-5">

          <div className="mt-5 mb-5">
              <Link to="/forum" style={{ textDecoration: 'none',marginLeft: '10px', marginTop: '5px' }} className="mt-5"><FaIcons.FaArrowLeft/> Back</Link>
          </div>

        {/* Option Menu*/}

        { hider && 
        <div className="topnav-right">
          <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  <BiIcons.BiMenuAltRight/>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                  <Dropdown.Item onClick={DeletePost}>Delete</Dropdown.Item>
                  <Dropdown.Item onClick={caseClosed}>Case Close</Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
        </div>
        }

        { Empty && <h1>The Post probably went on a journey.</h1>  } 
        <strong>{topic.title}</strong><br></br>
        {topic.desc}<br></br>
        <p className="text-primary">{topic.created_by}</p><br></br>
        {topic.created_at}<br></br>
        <div className="border border-primary mt-3">

        { topic.sampcodeimg &&  <img className="mx-auto d-block img-fluid mt-3 mb-3 image-preview image-preview-js" style={{width: '25%', height: 'auto'}} src={topic.sampcodeimg} alt={topic.title} onClick={handleShow}/>  }


        </div>

        <Modal size="lg" show={show} onHide={handleClose} keyboard={false}>
            <Modal.Header closeButton>
            <Modal.Title><strong>{topic.title}</strong></Modal.Title>
            <br/>
            </Modal.Header>
            
            <Modal.Body>
                <img className="mx-auto d-block img-fluid mt-3 mb-3 image-preview image-preview-js" style={{width: '100%', height: 'auto'}} src={topic.sampcodeimg} alt={topic.title} />
            </Modal.Body>
        </Modal>

           {/* Modal Login*/}
            <Modal show={showMl} onHide={handleCloseMl}>
                    <Modal.Header closeButton>
                      <Modal.Title>Log-in</Modal.Title>
                    </Modal.Header>
                    
                    <Modal.Body>Please Log-in to Continue!
                    {error1 && <Alert variant="danger">{error1}</Alert>}

                              <Form noValidate validated={validated1} className="">
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
                            
                                  <Button onClick={handleSubmitLogin} className="w-100 mt-3 mb-3"  >Login</Button>
                              </Form>

                    </Modal.Body>

                    <Modal.Footer>
                        <div className="w-100 mt-2 mb-2 text-center text-secondary">
                          Don't have an account? <Link to="/register" style={{ textDecoration: 'none' }}>Register</Link>
                        </div>
                    </Modal.Footer>
            </Modal>                    


        {showRep}
        
            { Empty ? '' :
                   <Form noValidate validated={validated} onSubmit={handleSubmit}   className="">

                        <Row>
                            <Col l="auto">
                               
                                <p className="mt-3">Comment</p>
                                <div className="d-flex">
                                  <input type="textarea"  value={reply || ''} disabled={closed}  onChange={e => setReply(e.target.value)} className="form-control w-100 m-1" required/>
                                    <button type="submit" disabled={closed}  className="btn btn-primary m-1 text-right pull-right">Reply</button>   
                                </div>
                                <div className=" text-right">
                                </div> 
                            </Col>
                            <Col sm lg="2">
                            </Col>
                        </Row>
                    </Form>
                    } 
        </section>
        <Modal show={showR} onHide={handleCloseR}>
                          <Modal.Header closeButton>
                            <Modal.Title>Report User</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <Form>
                              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>State your problem.</Form.Label>
                                <Form.Control as="textarea" value={report || ""} onChange={e => ReportUser(e.target.value)} rows={3} />
                                <Button className="btn w-100 mt-3 text-light"  onClick={sendReport}><GoIcons.GoReport/> Report</Button>
                              </Form.Group>
                            </Form>
                          </Modal.Body>
                        </Modal>

        </div>
    
  }

  export default Thread