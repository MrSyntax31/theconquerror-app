import React, {  useState } from 'react'
import { Form, Button, Card, Modal, Container, Alert, Row, Col} from 'react-bootstrap'
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet";
import {} from '../../firebase/firebase';
import {getAuth, createUserWithEmailAndPassword,sendEmailVerification, signOut ,onAuthStateChanged} from 'firebase/auth'
import { getDatabase, ref, set} from "firebase/database"
import './Login.css'
import './Register.css'
import ReCAPTCHA from 'react-google-recaptcha';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";


    export default function Register() {

        //declare authentication of firebases
         const auth = getAuth();

        const [show, setShow] = useState(false);

        const [terms, agreeTerms] = useState(false)

          //errors are thrown here
    const [error, setError] = useState("")

    var letters = /^[A-Za-z]+$/;

       const [occuHide, showHide1] = useState("")
       const [instiHide, showHide2] = useState("")

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const [recaptchaHandler, setHandler] = useState(false);

        function onChange(value) {
    
           setHandler(true);
         
         }

        // Register Code
         // Register Code
          const [email, setEmail] = useState();
          const [password, setPass] = useState();
          const [password2, setPass2] = useState();
          const [fname, setFname] = useState();
          const [lname, setLname] = useState();
          const [bday, setBday] = useState();
          const [gender, setGender] = useState();
          const [occu, setOccu] = useState();
          const [insti, setInsti] = useState();
          const [address, setAddress] = useState();
       

          function TandA(){

            agreeTerms(true);
            setShow(false);
          }

          function OccupationValue(e){

            setOccu(e.target.value)
      
            if(e.target.value === "Others"){
              showHide1("show")
      
      
            }
            else{
              showHide1("")
              
            }
          }
      
          function InstitutionValue(e){
      
            setInsti(e.target.value)
      
            if(e.target.value === "Others"){
              showHide2("show")

      
            }
            else{
              showHide2("")
              
            }
          }

  function onRegister  ()
  {
    setError("");
      if(fname.match(letters) && lname.match(letters))
      {
        if (recaptchaHandler === true) {

          if(terms === true){
            if (password !== password2)
            {
            setError("Passwords do not Match");
              return
            }
      
            else {
      
              createUserWithEmailAndPassword(auth,email,password)
              .then(() => {
                //check if user successfully created account in order to continue hehe
                onAuthStateChanged(auth, (user) => {
                  if (user) {
      
                    const uid = user.uid;
        
                    const db = getDatabase();
                    set(ref(db, 'users/' + uid), {
                      Name: fname +" "+ lname,
                      Birthday:bday.toLocaleString("en-IN", {timeZone: "Asia/Kolkata"}).split(',')[0],
                      Gender:gender,
                      Occupation: occu,
                      Address:address,
                        Institution: insti,
                        email: email,
                        level: 1
                    });
                  
                    sendEmailVerification(auth.currentUser)
    
                    .then(() => {
                    setBday("")
                    setEmail("")
                    setFname("")
                    setLname("")
                    setOccu("")
                    setGender("")
                    setInsti("")
                    setPass("")
                    setPass2("")
                    showHide1("")
                    showHide2("")
                    setAddress("")
                    signOut(auth);
                   setError('You have Successfully Registered your Account!, Please Check your Email for Verification');
                      setHandler(false);
                      agreeTerms(false);
  
                  //lagay ng redirect na may timer
    
                              
                   return
                   });
      
                  } else {
                      
                      return
      
                  }
                });
              }).catch((e) => setError(e.message))
                
            }
            return
          } else {
              setError("Please Read and Accept our Terms and Agreement.")
              setHandler(false);
              
          }
         
        } 
        else {
          setError("Please verify using Recaptcha")
  
        }
      }
      else{

        setError("You cannot use Numbers and Special Characters on your Name")
      }
      
    
    
    }
    
  

    return (
     
        
<>

<div>
      <Helmet>
        <title>ConquError | Register</title>
        <meta name="description" content="ConquError Register page" />
      </Helmet>
    </div> 


      <div className="background-area" id="particles-js">
                
                  <div id='stars'></div>
                  <div id='stars2'></div>
                  <div id='stars3'></div>
                  <div id='title'></div>
                  
          <Link to="/" style={{ textDecoration: 'none' }}><img to="/home" src="../Assets/white-logo.svg" className="Headerlogo mt-2" alt="logo" style={{width: "190px",paddingLeft: "20px"}}/></Link>
          
          <Container className="d-flex align-items-center justify-content-center mt-5 mb-5" style={{ minHeight: "100vh"}}>
            <div className="w-100" style={{ maxWidth: "800px"}}>

            <div class="page-wrapper  p-t-100 p-b-50">
        <div class="wrapper wrapper--w900">
            <div class="card card-6">
                <div class="card-heading">
                    <h2 class="title">Become a warrior!</h2>
                </div>
                <div class="card-body">
                <h3 className="text-center mb-4 text-primary fw-bold">Register</h3>
                        {error && <Alert variant="danger">{error}</Alert>}
                    <form>
                        <div class="form-row">
                            <div class="name">Full name</div>
                            <div class="value">
                              <Form.Group id="fname">
                              <Form.Label>First Name</Form.Label>
                              <Form.Control value={fname || ''} onChange={e => setFname(e.target.value)}  name = "name" type="name" required placeholder="First Name"/>
                              </Form.Group>
                              <Form.Group id="lname">
                              <Form.Label>Last Name</Form.Label>
                              <Form.Control value={lname || ''} onChange={e => setLname(e.target.value)}   name = "name" type="name" placeholder="Last Name"/>
                              </Form.Group>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="name">Email address</div>
                            <div class="value">
                                <div class="input-group">
                                <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control value={email || ''} onChange={e => setEmail(e.target.value)}  name = "email" type="email" autoComplete="username" required placeholder="Email Address"/>
                                </Form.Group>
                                <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control value={password || ''} onChange={e => setPass(e.target.value)}   name = "password" type="password" autoComplete="new-password" required placeholder="Password"/>
                                </Form.Group>
                                <Form.Group id="password2">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control value={password2 || ''} onChange={e => setPass2(e.target.value)}   name = "password" type="password" autoComplete="new-password" required placeholder="Password"/>
                                </Form.Group>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="name">Message</div>
                            <div class="value">
                                <div class="input-group">
                                    <textarea class="textarea--style-6" name="message" placeholder="Message sent to the employer"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="name">Upload CV</div>
                            <div class="value">
                                <div class="input-group js-input-file">
                                    <input class="input-file" type="file" name="file_cv" id="file"/>
                                    <label class="label--file" for="file">Choose file</label>
                                    <span class="input-file__info">No file chosen</span>
                                </div>
                                <div class="label--desc">Upload your CV/Resume or any other relevant file. Max file size 50 MB</div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                    <button class="btn btn--radius-2 btn--blue-2" type="submit">Send Application</button>
                </div>
            </div>
        </div>
    </div>

            </div>
          </Container>
          
     </div>
</>
     
    )
}


