import React, {useState, useRef} from 'react'
import { Form, Button, Card, Container , Alert } from 'react-bootstrap'
import { Link , useHistory} from "react-router-dom"
import { Helmet } from "react-helmet";
import {} from "../../firebase/firebase"
import {getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import './Login.css'



export default function Login() {

    //Firebase Auth Service (responsible for anything user related)
    const auth = getAuth();
    //Routing, used to redirect the user to different pages
    const history = useHistory()

    //errors are thrown here
    const [error, setError] = useState("")

    //for textbox used in the Log-in Popup
    const emailRef = useRef()
    const passwordRef = useRef()


           //log in function 
           function onLogin(){

            // the user is logged-in using the value inside the textboxes emailRef and passwordRef
            signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((userCredential) => {
              // Signed in 
              
              console.log(userCredential);
              alert('Successfully Logged in!');
              sessionStorage.setItem('userCredential',userCredential);
              history.push("/profile")
              //Redirect to Profile Page
          
            
            })
            .catch((error) => {
              //if user fails to log-in, an error message is set
              const errorMessage = error.message;
              alert(errorMessage);
              setError("Failed to Log in");
              
            });
            return
            }
  


    return (
        <>
                <div>
                  <Helmet>
                      <title>ConquError | Login</title>
                      <meta name="description" content="ConquError Login page" />
                  </Helmet>
              </div> 
              
              <div className="background-area" id="particles-js">
                
                  <div id='stars'></div>
                  <div id='stars2'></div>
                  <div id='stars3'></div>
                  <div id='title'></div>

              <Link to="/" style={{ textDecoration: 'none' }}><img to="/home" src="../Assets/white-logo.svg" className="Headerlogo mt-2" alt="logo" style={{width: "190px",paddingLeft: "20px"}}/></Link>
              
                  <Container className="d-flex align-items-center justify-content-center mb-5" style={{ minHeight: "100vh"}}>
                    <div className="w-100 m-5" style={{ maxWidth: "400px"}}>
                      <span className="text-center mb-4 mt-5 fw-bold text-white text3 ">To conquer your error</span>
                          <Card>
                            <Card.Body>
                              <h2 className="text-center mb-4 mt-3 fw-bold text-primary ">Login</h2>
                              {error && <Alert variant="danger">{error}</Alert>}
                                <Form className="">
                                <Card.Img variant="top" src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" className="mx-auto d-block" style={{height: '16rem', width: '16rem'}} fluid/>
                                  <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control ref={emailRef}  name = "email" type="email" required autoComplete="username" placeholder="Email Address"/>
                                  </Form.Group>

                                  <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef}  name = "password" autoComplete="current-password" required placeholder="Password"/>
                                  </Form.Group>
                                </Form>
                            <div className="w-100 mt-2 justify-content-right">
                              <Link to="/forgot-pass" style={{ textDecoration: 'none' }}>Forgot Password</Link>
                            </div>
                            <Button className="w-100 mt-3 mb-5" onClick={onLogin} >Login</Button>
                            <div className="w-100 mt-2 mb-2 text-center text-secondary">
                                Don't have an account? <Link to="/register" style={{ textDecoration: 'none' }}>Register</Link>
                            </div>
                            </Card.Body>
                          </Card>
                    </div>
                  </Container>
              </div>
        </>

    )
}
