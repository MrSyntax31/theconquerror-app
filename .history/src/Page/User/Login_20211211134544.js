import React, {useState, useRef} from 'react'
import { Form, Button, Card, Container , Alert} from 'react-bootstrap'
import { Link , useHistory} from "react-router-dom"
import { Helmet } from "react-helmet";
import {} from "../../firebase/firebase"
import {getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import './Login.css'
import ReCAPTCHA from 'react-google-recaptcha';



export default function Login() {

    //Firebase Auth Service (responsible for anything user related)
    const auth = getAuth();

    const user = auth;

    
    //Routing, used to redirect the user to different pages
    const history = useHistory()

    //errors are thrown here
    const [error, setError] = useState("")

    //for textbox used in the Log-in Popup
    const emailRef = useRef()
    const passwordRef = useRef()
  
    const [sesh, setKey] = useState(true);

    const [recaptchaHandler, setHandler] = useState(false);

    function onChange(value) {

       setHandler(true);
     
     }

     const [validated, setValidated] = useState(false);

     const handleSubmit = (event) => {
       const form = event.currentTarget;
       if (form.checkValidity() === false) {
         event.preventDefault();
         event.stopPropagation();
       }
   
       setValidated(true);
       onLogin();
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
     
     function sessionKey() {

        setKey=(false)

     }

     //send sessionkey between tabs to track session 
     // sessionStorage.setItem('sessionKey',sessionId(23));

           //log in function 
           function onLogin(){
            setError("");
              if (recaptchaHandler === true){

                 // the user is logged-in using the value inside the textboxes emailRef and passwordRef
            signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((userCredential) => {
              // Signed in 
              const verifiedCheck = user.currentUser.emailVerified;
              
              if (verifiedCheck === true){

                sessionStorage.setItem('userCredential',userCredential);
                history.push("/profile")
                //Redirect to Profile Page
              }
              else{
                const url = "https://accounts.google.com/servicelogin";
                signOut(auth).then(() => {
                    setError("Please check your Email to verify your Account!")
                    window.open(url, '_blank', 'noopener,noreferrer')
                }).catch((error) => {
                  setError(error  )
                  });
                
                
              }

            })
            .catch((error) => {
              //if user fails to log-in, an error message is set
              const errorMessage = error.message;
              setError(errorMessage)
            
              
            });

              } else {

                setError("Please verify using Recaptcha")

              }
           
            return
            }
  
              if(setKey === true) {
               sessionStorage.setItem('sessionKey',) sessionId(23)
              }

    return (
        <>
                <div>
                  <Helmet>
                      <title>ConquError | Login</title>
                      <meta name="description" content="ConquError Login page" />
                  </Helmet>
              </div> 
              
              <div className="background-area">
                
                  <div id='stars'></div>
                  <div id='stars2'></div>
                  <div id='stars3'></div>
                

              <Link to="/" style={{ textDecoration: 'none' }}><img to="/home" src="../Assets/white-logo.svg" className="Headerlogo mt-2" alt="logo" style={{width: "190px",paddingLeft: "20px"}}/></Link>
              
                  <Container fluid="md" style={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center"
                  }}>
  
                    <div className="" style={{ maxWidth: "400px"}}>
                      <span className="text-center mb-4 mt-5 fw-bold text-white text3 ">To conquer your error</span>
                          <Card>
                            <Card.Body>
                              <h2 className="text-center mb-4 mt-3 fw-bold text-primary ">Login</h2>
                              {error && <Alert variant="danger">{error}</Alert>}
                                <Form noValidate validated={validated} className="">
                                  <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control ref={emailRef}  name = "email" type="email" required autoComplete="username" placeholder="Email Address"/>
                                    <Form.Control.Feedback type="invalid">
                                    Please double check your email.
                                  </Form.Control.Feedback>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                  </Form.Group>

                                  <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef}  name = "password" autoComplete="current-password" required placeholder="Password"/>
                                      <Form.Control.Feedback type="invalid">
                                    Please enter a password.
                                  </Form.Control.Feedback>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                  </Form.Group>
                              
                            <div className="w-100 mt-2 justify-content-right">
                              <Link to="/forgot-pass" style={{ textDecoration: 'none' }}>Forgot Password</Link>
                            </div>

                            <div className="col-xs-1 mt-3" align="center">
                            <ReCAPTCHA
                            sitekey="6Lf0LR4dAAAAADXK477tFevARCNFk0rY-Z5ouawp"
                            onChange={onChange}
                            />
                            </div>

                            {/* keep me logged in na checkbox */}
                            <div className="form-check mt-3">
                              <input type="checkbox" isClicked={sessionKey} className="form-check-input" id="exampleCheck1"/>
                              <label className="form-check-label"  for="exampleCheck1">Keep me logged in</label>
                            </div>
                            
                            <Button onClick={handleSubmit} className="w-100 mt-3 mb-3"  >Login</Button>
                            <div className="w-100 mt-2 mb-2 text-center text-secondary">
                                Don't have an account? <Link to="/register" style={{ textDecoration: 'none' }}>Register</Link>
                            </div>
                            </Form>
                            </Card.Body>
                          </Card>
                    </div>
                  </Container>
              </div>
        </>

    )
}
