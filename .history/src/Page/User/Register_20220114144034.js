import React, {  useState } from 'react'
import { Form, Button, Container, Alert, Row, Col, Modal } from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom"
import { Helmet } from "react-helmet";
import {} from '../../firebase/firebase';
import {getAuth, createUserWithEmailAndPassword,sendEmailVerification ,onAuthStateChanged, signOut} from 'firebase/auth'
import { getDatabase, ref, set} from "firebase/database"
import './Login.css'
import './Register.css'
import ReCAPTCHA from 'react-google-recaptcha';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import * as AiIcons from 'react-icons/ai';
import swal from 'sweetalert';

    export default function Register() {

        //declare authentication of firebases
         const auth = getAuth();

    //Modal handles 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //errors are thrown here
    const [error, setError] = useState("")
    const history = useHistory();


       const [occuHide, showHide1] = useState("")
       const [instiHide, showHide2] = useState("")

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

          const [passwordH, PWHandler] = useState("password");

     const showPass = (event) => {

      if(passwordH === "password"){
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
              onRegister();
              event.preventDefault();
           }
          setValidated(true);
          event.preventDefault();
          };

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

          const delay = ms => new Promise(res => setTimeout(res, ms));
          const timer = async () => {
            await delay(5000);
            signOut(auth);
            history.push('/login')
    
          };
          
  function onRegister  ()
  {
    setError("");
 
     
        if (recaptchaHandler === true) {

            if (password !== password2)
            {
            setError("Passwords do not Match");
              return
            }
      
            else {
             
                  createUserWithEmailAndPassword(auth,email,password)
                  .then(() => {
                    //check if user successfully created account in order to continue
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
                            level: 1,
                            Permission: "User"
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
                          setHandler(false);
                          
                          swal("Email Verification has been sent","Please check your email, you will be redirected to the login page shortly","success")
                          
                          timer();
                        
                      
                       return 
                      
                       });
    
                     
                   
                      } else {
                          
                          return
          
                      }
                    });
                  }).catch((e) => setError(e.message))
                    
                
             
            }
            return
         
        } 
        else {
          
          setError("Please verify using Recaptcha")
  
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
            
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="page-wrapper  p-t-100 p-b-50">
        <div className="wrapper wrapper--w900">
            <div className="card card-6">
                <div className="">
                  <Row>
                    <Col><h5 className="text-light m-3 fw-bold fs-1 mt-5">Welcome!</h5></Col>
                    <Col><img variant="top" className="mt-5 w-25" src="https://cdn-icons-png.flaticon.com/512/3763/3763359.png" alt="img-header" /></Col>
                  </Row>

                </div>
                <div className="card-body">
                <h3 className="text-center mb-4 text-primary fw-bold">Register</h3>
                        {error && <Alert variant="danger">{error}</Alert>}
                    
                      <div className="form-row">
                            <div className="name">Email and Password</div>
                            <div className="value">
                               
                                <Form.Group id="email" className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control  value={email || ''} onChange={e => setEmail(e.target.value)}  name = "email" type="email" autoComplete="username" required placeholder="Email Address"/>
                                <Form.Control.Feedback type="invalid">
                                    Please double check your email.
                                  </Form.Control.Feedback>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group id="password" className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control  value={password || ''} onChange={e => setPass(e.target.value)}  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" name = "password" type={passwordH} autoComplete="new-password" required placeholder="Password"/>
                                <Form.Control.Feedback type="invalid">
                                Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters.
                                  </Form.Control.Feedback>
                                </Form.Group>
                                
                                <Form.Group id="password2" className="mb-3">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control  value={password2 || ''} onChange={e => setPass2(e.target.value)}  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"  name = "password" type={passwordH}  autoComplete="new-password" required placeholder="Password"/>
                                <Form.Control.Feedback type="invalid">
                                Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters.
                                  </Form.Control.Feedback>
                                </Form.Group>
                                <div className="form-group mt-2 text-secondary">
                                  <i onClick={showPass} className="fs-7" style={{cursor:"pointer", fontFamily:"Raleway, sans-serif"}}><AiIcons.AiFillEye/>Show/Hide Password</i>
                                </div>
                            </div>
                        </div>
                    
                        <div className="form-row">
                            <div className="name">Personal Information</div>
                            <div className="value">

                              <Form.Group id="fname" className="mb-3">
                              <Form.Label>First Name</Form.Label>
                                <Form.Control  type="text" id="fname" value={fname || ''} onChange={e => setFname(e.target.value)} name="fname" pattern="[a-zA-Z\s]*" required placeholder="First Name"/>
                                <Form.Control.Feedback type="invalid">
                               Please use a proper First name
                                  </Form.Control.Feedback>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                              </Form.Group>

                              <Form.Group id="lname" className="mb-3">
                              <Form.Label>Last Name</Form.Label>
                                <Form.Control  value={lname || ''} onChange={e => setLname(e.target.value)}   name = "name" type="name" required placeholder="Last Name"/>
                                <Form.Control.Feedback type="invalid">
                               Please use a proper Last name
                                  </Form.Control.Feedback>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                              </Form.Group>

                              <Form.Group id="gender" className="mb-3">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control as='select' value={gender || ''} onChange={e => setGender(e.target.value)} required >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Transgender">Transgender</option>
                                <option value="Non-Binary">Non-Binary</option>
                                <option value="Not Specified">Rather not specify</option>
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">
                               Please choose a gender
                                  </Form.Control.Feedback>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                              </Form.Group>
                          
                              <Form.Group id="bday" className="mb-3">
                              <Form.Label>Birthday</Form.Label>
                                <DatePicker className="form-control"
                                dateFormat="MMMM d, yyyy"
                                selected={bday}
                                onChange={(date) => setBday(date)}
                                maxDate={Date.now()}
                                placeholderText="Select your Birthday"
                                  required
                              />
                              <Form.Group id="address" className="mb-3 mt-3">
                              <Form.Label>Address</Form.Label>
                              <Form.Control  value={address || ''} onChange={e => setAddress(e.target.value)}   name = "address" type="address"  required placeholder="Address"/>
                              <Form.Control.Feedback type="invalid">
                               Please type a proper Address.
                                  </Form.Control.Feedback>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                              </Form.Group>
                              </Form.Group>

                              <Form.Group id="occu" className="mb-3">
                              <Form.Label>Occupation</Form.Label>
                              <Form.Control as='select' value={occu || ''} onChange={e => OccupationValue(e)} required>
                                <option value="">Select Occupation</option>
                                <option value="Student">Student</option>
                                <option value="Professor">Professor</option>
                                <option value="Others">Others.</option>
                              </Form.Control>
                              
                              { occuHide &&  <Form.Control  className="mt-2" value={occu } onChange={e => setOccu(e.target.value)}  name = "Occupation" type="text"  required placeholder="Please Specify"/>  }
                              </Form.Group>

                              <Form.Group id="inst" className="mb-3">
                              <Form.Label>Institution</Form.Label>
                              <Form.Control as='select' value={insti || ''} onChange={e => InstitutionValue(e)} required>
                                <option value="">Select Institution</option>
                                <option value="LSPU">LSPU</option>
                                <option value="PUP">PUP</option>
                                <option value="TUP">TUP</option>
                                <option value="BSIT">BSIT</option>
                                <option value="DICT">DICT</option>
                                <option value="DCET">DCET</option>
                                <option value="Others">Others.</option>
                              </Form.Control>
                              { instiHide &&  <Form.Control className="mt-2" value={insti} onChange={e => setInsti(e.target.value)}  name = "Institution" type="text"  required placeholder="Please Specify"/> }
                              </Form.Group>

                            </div>
                        </div>

                        <div className="form-row">
                            <div className="name"></div>
                            <div className="value">
                            <div className="col-xs-1 mt-3" align="center">
                                    <ReCAPTCHA
                                    sitekey={process.env.REACT_APP_SITEKEY}
                                    onChange={onChange}
                                    />
                                <div className="label--desc">Prove you're not a robot.</div>
                                </div>
                            </div>
                        </div>
               
                </div>

                <div className="card-footer">
                  
                <p>By clicking the Sign-up button, you agree to our <strong variant="primary"  onClick={handleShow} className="text-primary text-decoration-underline mb-3" >Terms and Conditions</strong>.</p>

                {/* Modal */}
                  <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}>
                    <Modal.Header >
                      <Modal.Title>Terms and Conditions</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <p ><strong>ConquError</strong> values and respects your right to privacy. We are committed to protect the privacy of our website visitors. We will only collect, record, store, process, and use your personal information in accordance with the Data Privacy Act of 2012, its Implementing Rules and Regulations, the issuances by the National Privacy Commission, and other pertinent laws.
                        </p>

                        <p>This Privacy Policy informs you of updates in our corporate policies regarding the collection, use, storage, disclosure, and disposal of personal information we receive and collect from our customers, and any individual who communicates, raises inquiries and concerns, as well as transacts with us through our authorized representatives.

                        We will only use your data based on the limitations set by this policy.
                        </p>
                        <br/><br/>
                        <p>We  only once to collect and stored your information, this policy will allow you to be  protected, and any update with regards of your current information will be done via request to the admin. The user will be notified of the changes.</p>
                        <main>
                          <
                        </main>
                    </Modal.Body>
                    <Modal.Footer> 
                      <Button variant="primary" onClick={handleClose}>Understood</Button>
                    </Modal.Footer>
                  </Modal>
                {/* End of Modal */}
                
                  <Button className="btn btn-primary mt-3 w-100" type="submit" >Sign Up</Button>
                            
                            <div className="w-100 text-center mt-5 mb-1">
                              Already have an account? <Link to="/login" style={{ textDecoration: 'none' }}>Log In</Link>
                            </div>
                </div>
            </div>

        </div>
    </div>
            </Form>

            </div>
          
          </Container>
          
     </div>
</>
     
    )
}


