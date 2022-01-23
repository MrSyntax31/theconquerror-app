import React, {useEffect,useState, useRef} from 'react';
import { Helmet } from "react-helmet";
import {  Card, Modal, Button,  ProgressBar, Alert, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { onSnapshot,collection,getFirestore, doc,  query, orderBy, limit, addDoc, setDoc } from 'firebase/firestore';
import {} from '../../firebase/firebase'
import {  Link, useHistory} from "react-router-dom"
import {Container,  Row,Col, Form } from 'react-bootstrap'
import { getAuth, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import * as GoIcons from 'react-icons/go';
import './Forum.css';
import Navbar from '../../Components/Navbar/Navbar'
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import swal from 'sweetalert';
import ReCAPTCHA from 'react-google-recaptcha';
import * as AiIcons from 'react-icons/ai';

      function Forum() {

        //Modal User Info
        const [smShow, setSmShow] = useState(false);

        //Reports
        const [showR, setShowR] = useState(false);

        const handleCloseR = () => setShowR(false);
       
        
        //declare firestore services
        const forumdb = getFirestore();
        const auth = getAuth();
        // Create a root reference
        const storage = getStorage();
         
        //get current logged-in user
        const currentUser = auth.currentUser;

        //used to route the user through various pages of the website
        const history = useHistory()
          
        //Ask Question Modal*
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
 

        //errors are thrown here
        const [error, setError] = useState("")

        const [tagCheck, checkTag] = useState(false);
        //declare text input for new question
        const [question, setQuestion] = useState();
        const [description, setDesc] = useState();

        //declare area to throw list for forum
        const [topics, setDiscussion] = useState([]);

        const [tags, setTags] = useState();

        const [img, setImg] = useState("");
        const [fileupload, setFile] = useState([]);
        const [progbar, setProgress] = useState(0);
        
        const [validated, setValidated] = useState(false);

        const handleSubmit = (event) => {
          const form = event.currentTarget;
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
          AddNew();
           
            event.preventDefault();
         }
        setValidated(true);
        event.preventDefault();
        };

        const handleChange = (e) => {
        
          setTags(e.target.getAttribute("value"));
          checkTag(true);
         
        };
        
        const collectionRef = collection(forumdb, "topics");
 

        useEffect(
          () => {
            const q = query(collectionRef,orderBy("created_at","desc"), limit(5));
        
            onSnapshot(q, (snapshot) =>
              setDiscussion(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

            )
            


          },[]); // eslint-disable-line react-hooks/exhaustive-deps
      
          const changeHandler = (event) => {

            setFile(event.target.files[0]);
        
          }

          function insertCode(){
              // Create the file metadata
/** @type {any} */
const metadata = {
  contentType: 'image/jpeg'
};


const storageRef = ref(storage, 'Forum/' + fileupload.name);
const uploadTask = uploadBytesResumable(storageRef, fileupload, metadata);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
   setProgress(progress);
    switch (snapshot.state) {
     case 'paused':
        setError('Upload is paused');
        break;
    case 'running':
        setError('Upload is running');
        break;
        default:
          // 
    }
  }, 
  (error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;

        
        default:
          // 
    }
  }, 
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setImg(downloadURL);
      setProgress(0)
      setError("File Upload Complete")
    });
  }
);
          }
        
     

          //this is used to fetch the data from Discussion on Topics.MAP on the forum list
        const handler = function(e){
        
         localStorage.setItem('threadID',e.target.getAttribute("data-id"));
         
          history.push("/Thread")
          
      };

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
      
        const [avatar, setAvatar] = useState([]);
    
        const [showUserEmail, setUserEmail] = useState([]);
        const [showUserLevel, setUserLevel] = useState([]);

        const showProfile = function(e) {

          const dataemail = e.target.getAttribute("data-id");
          const datalvl = e.target.getAttribute("data-lvl");

          setUserEmail(dataemail)
          setUserLevel(datalvl)

          onSnapshot(doc(forumdb, "warrioravatar", `${datalvl}`), (doc) => {
      
              const docdata = (doc.data())
      
              if (docdata)
              {   
                  setAvatar(docdata);
               
                  setSmShow(true);  
              }
              else{
                  
                swal("Something is Wrong","No Data Found","warning");
                setSmShow(false);
              }
      
              
          });
            
        };

        //Maps the data inside firestore collection (topics) so that it can be visible to the user
        const Discussion= topics.map((topic) => (  <div className="Discussion-Board p-3 m-2 border border-primary rounded" key={topic.id} > 
        <p>Uploaded by: <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Report User!</Tooltip>}><label className="text-primary" style={{cursor:"pointer"}} data-id ={topic.created_by} data-lvl ={topic.userlvl} onClick={ showProfile }>{topic.created_by}</label></OverlayTrigger> on <strong>
          {topic.created_at}</strong></p>  
          
          
        <div className="heading" style={{cursor:"pointer"}}><ul> <li onClick={ handler}  data-id ={topic.id}>{topic.title}<br></br><strong>Description:</strong> {topic.desc} <br></br><strong>Tags: </strong>{topic.tags}</li></ul><Badge bg="primary">{topic.case_status}</Badge></div></div> ))
        

        
         async function AddNew() {

          setError("")
                if (tagCheck === true) {
                

                  //if user is logged-in
                const userlevel = sessionStorage.getItem("userLevel")
               //convert date which is timestamp to String
        var timestamp = Date.now();
        var convertedDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)
        
       
                      // Add a new document with a generated id.
          const docRef = await addDoc(collection(forumdb, "topics"), {
            title: question,
          desc: description,
          created_by: currentUser.email,
          userid: currentUser.uid,
          created_at: convertedDate,
          tags: tags,
          sampcodeimg: img,
          userlvl: userlevel,
          case_status: "unsolved"
        
          });
        
            setImg("")
            setDesc("");
            setQuestion("");
            setError("")
            setShow(false)
        
            localStorage.setItem('threadID',docRef.id);
         
           history.push("/Thread")
        
          
        }
        else {
          setError("Select a Tag")
        }
      
          
        }


          const [report, ReportUser] = useState();      
            //Function for Modal (Send Feedback)
        async  function sendReport(e){
          
          const userEmail = e.target.getAttribute("data-id");
            //If there is no user logged-in, returns the user to Login page to continue
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
           
           
            //show a success message

            swal("Report Sent", "Thank you for making ConquError a healthy community.", "success");
          

          }).catch((error) => {

            swal("Something is Wrong",error.code,"warning");
          }).finally(() =>{
        
          })
        }
        
  
            }

 
    function AskQuestion(){

      if(currentUser === null)
      {
          
        setShowMl(true)
        swal("Oops","You need to be a member of the Guild to ask for Help","error")
      }
      else
      {
        setShow(true)
      }

    }
      
    function askReport(){

      if(currentUser === null)
      {
        setSmShow(false);
        setShowMl(true)
        swal("Oops","It seems that you're not from this Land","error")
      }
      else
      { 
        setSmShow(false);
        setShowR(true);
       
      }

    }

  return (
            <>
            {/* Division for Tab Name and Description*/}
            <div>
                <Helmet>
                  <title>ConquError | Forum</title>
                  <meta name="description" content="ConquError Forum" />
                </Helmet>
              </div>

            <Navbar/>

            <section className="w-100">
              <div className="container">
                  <Card>
                    <Card.Header>
                      <div className="header mb-2">
                        <h3 className="text-center mb-3">Forum</h3>
                        <h2  className="text-light fw-bold ml-2" style={{marginTop:'4rem'}}>ConquErroRoom</h2>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>
                      <div className="row">
                        <h5 className="text-primary fw-bold">Forum</h5>
                      </div>
                      </Card.Title>

                      <Card.Text>
                     
                        <p>
                          <strong>ConquError</strong> is a community of users who are interested in learning and sharing their knowledge and experience with each other. The forum is open source and is available for everyone to contribute to and learn from the community.
                          If you have any questions or concerns, please feel free to ask them in the forum. Just click on the "Ask Questions" button and fill in the form.

                        </p>
                        
                 
                      </Card.Text>

                      <div className="" style={{marginTop:'6rem'}}>

                        {/* Container for Search and Ask Question*/}
                        <div>

                                {/* Division for Discussion Board*/}
                          
                                    <section className="text-center mt-5 mb-5">
                                      <div>                                  
                                            <div className=" text-start">
                                              <h3 className="fw-bold fs-m text-start"><GoIcons.GoCommentDiscussion/> Most Recent Topics <Button variant="primary" onClick={AskQuestion} className="mt-4 mb-2"> Ask a Question</Button> </h3>     
                                                  {Discussion}

                                                  <Modal size="sm" show={smShow}  onHide={() => setSmShow(false)}  aria-labelledby="example-modal-sizes-title-sm">
                                                    <Modal.Header closeButton>
                                                      <Modal.Title id="example-modal-sizes-title-sm">
                                                        User Information
                                                      </Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <div className="text-center">
                                                          <img src={avatar.img} className="rounded-circle" alt="UserLvl" width="100" height="100"/>
                                                        </div>
                                                        <div className="text-center">
                                                        <strong>Email</strong>
                                                          <h6>{showUserEmail}</h6>
                                                          </div>
                                                        <div className="text-center">
                                                          <strong>User Level on post</strong>
                                                          <h5>{showUserLevel}</h5>
                                                        </div>
                                                        <Button className="btn w-100 text-light"  onClick={askReport}><GoIcons.GoReport/> Report</Button>
                                                    </Modal.Body>
                                                  </Modal>
                                            </div>


                                            <Modal show={showR} onHide={handleCloseR}>
                                              <Modal.Header closeButton>
                                                <Modal.Title>Report User</Modal.Title>
                                              </Modal.Header>
                                              <Modal.Body>
                                                <Form>
                                                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>State your problem.</Form.Label>
                                                    <Form.Control as="textarea" value={report || ""} onChange={e => ReportUser(e.target.value)} rows={3} />
                                                    <Button className="btn w-100 mt-3 text-light" data-id={showUserEmail} onClick={sendReport}><GoIcons.GoReport/> Report</Button>
                                                  </Form.Group>
                                                </Form>
                                              </Modal.Body>
                                            </Modal>


                                            <div className="position-end">
                                            
                                              <em> Click to see more discussions.</em>
                                          
                                              <Link to="/alltopics" style={{ textDecoration: 'none',marginLeft: '10px', marginTop: '5px' }} className="mt-5"> Show All</Link> 
                                            </div>
                                      </div>
                                    </section>
                          

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


                                {/* Modal for Ask Question*/}
                                <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
                                <Modal.Header closeButton>
                                  <Modal.Title>ASK A QUESTION</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                {error && <Alert variant="danger">{error}</Alert>}
                                    <Form noValidate validated={validated} onSubmit={handleSubmit}   className="">

                                                  <Form.Group id="Question" className="mb-3">
                                                    <Form.Label>Question</Form.Label>
                                                    <Form.Control value={question || ''} onChange={e => setQuestion(e.target.value)} name = "text" type="text" required  placeholder="Title"/>
                                                  </Form.Group>
                                                  <Form.Group id="desc" className="mb-3">
                                                    <Form.Label>Description</Form.Label>
                                                    <Form.Control as="textarea" value={description || ''} onChange={e => setDesc(e.target.value)} name = "text" type="text" required  placeholder="Description"/>
                                                  </Form.Group>
                                    <strong>Upload a picture of your code here! (Optional)</strong>

                                
                                    <input type="file" className="form-control  mt-3 mb-3" id="file-input" name="samplecodeimg" accept="image/jpeg" onChange={changeHandler}/> 
                                    
                                    <Button variant="primary" onClick={insertCode}>Upload File</Button>

                                    <p className="mt-2">Upload Progress</p> 
                                    <ProgressBar animated now={progbar} className="progress"/>
                                    <p className="mt-2 fw-bold">Add a Tag</p>

                                    <Container>
                                    
                                      <Row>
                                        <Col xs={{ order: 'last' }}>
                                        <div className="form-check">
                                        <input type="radio" id="Array" name="Programming" value="Array" className="form-check-input"  required onChange={handleChange}/>
                                        <label htmlFor="Array" className="form-check-label">Array</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="radio" id="C++" name="Programming" value="C++"  className="form-check-input"  required onChange={handleChange}/>
                                            <label htmlFor="C" className="form-check-label">C++</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="radio" id="CodeBlocks" name="Programming" value="CodeBlocks" className="form-check-input" required onChange={handleChange}/>
                                            <label htmlFor="CodeBlocks" className="form-check-label">CodeBlocks</label>
                                        </div>
                                        </Col>

                                        <Col xs={{ order: 'first' }}>
                                        <div className="form-check">
                                        <input type="radio" id="Function" name="Programming" value="Function" className="form-check-input" required  onChange={handleChange}/>
                                        <label htmlFor="Function" className="form-check-label">Function</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="radio" id="Nested Condition" name="Programming" value="Nested Condition"  className="form-check-input" required onChange={handleChange}/>
                                            <label htmlFor="Nested Condition" className="form-check-label">Nested Condition</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="radio" id="For loops" name="Programming" value="For loops" className="form-check-input" required onChange={handleChange}/>
                                            <label htmlFor="For loops" className="form-check-label">For loops</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="radio" id="Syntaxes" name="Programming" value="Syntaxes" className="form-check-input" required onChange={handleChange}/>
                                            <label htmlFor="Syntaxes" className="form-check-label">Syntaxes</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="radio" id="If Else Condition" name="Programming" value="If Else Condition" className="form-check-input" required onChange={handleChange}/>
                                            <label htmlFor="If Else Condition" className="form-check-label">If Else Condition</label>
                                        </div>
                                        </Col>
                                      </Row>
                                    </Container>

                                      <Button variant="primary" type="submit" className="mt-4 btn btn-primary w-100">Post</Button>
                                    </Form>
                                </Modal.Body>
                                
                                </Modal>
                        </div>
                <a href="#top" className="scroll-top">
                  <i className="fa fa-chevron-up"></i>
                </a>

                      </div>


                    </Card.Body>
                  </Card>
              </div>
            </section>
            











            
            </>
  );
}


export default Forum;

