import React, {  useState } from 'react'
import { Form, Button, Container, Alert, Row, Col, InputGroup } from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom"
import { Helmet } from "react-helmet";
import {} from '../../firebase/firebase';
import {getAuth, createUserWithEmailAndPassword,sendEmailVerification ,onAuthStateChanged} from 'firebase/auth'
import { getDatabase, ref, set} from "firebase/database"
import './Login.css'
import './Register.css'
import ReCAPTCHA from 'react-google-recaptcha';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";


    export default function Register() {

        //declare authentication of firebases
         const auth = getAuth();

    

          //errors are thrown here
    const [error, setError] = useState("")

    const history = useHistory();


       const [occuHide, showHide1] = useState("")
       const [instiHide, showHide2] = useState("")

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
       
          const [validated, setValidated] = useState(false);

          const handleSubmit = (event) => {
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            
            setValidated(true);
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
                      setHandler(false);
                      setError("Email Verification has been sent, please check your email")
                  
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

            <div class="page-wrapper  p-t-100 p-b-50">
        <div class="wrapper wrapper--w900">
            <div class="card card-6">
                <div class="">
                  <Row>
                    <Col><h5 className="text-primary m-3 fw-bold fs-1 mt-5">Welcome!</h5></Col>
                    <Col><img variant="top" className="mt-5 w-25" src="https://cdn-icons-png.flaticon.com/512/3763/3763359.png" alt="img-header" /></Col>
                  </Row>

                </div>
                <div class="card-body">
                <h3 className="text-center mb-4 text-primary fw-bold">Register</h3>
                        {error && <Alert variant="danger">{error}</Alert>}
                    <form>
                      <div class="form-row">
                            <div class="name">Email and Password</div>
                            <div class="value">
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                              <Row className="mb-3">
                                <Form.Group as={Col} md="4" controlId="validationCustom01">
                                  <Form.Label>First name</Form.Label>
                                  <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                    defaultValue="Mark"
                                  />
                                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                
                                <Form.Group as={Col} md="4" controlId="validationCustom02">
                                  <Form.Label>Last name</Form.Label>
                                  <Form.Control
                                    required
                                    value={fname || ''}
                                    onChange={e => setFname(e.target.value)} 
                                    type="text"
                                    placeholder="Last name"
                                    defaultValue="Otto"
                                  />
                                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                  <Form.Label>Username</Form.Label>
                                  <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                    <Form.Control
                                      type="text"
                                      placeholder="Username"
                                      aria-describedby="inputGroupPrepend"
                                      required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      Please choose a username.
                                    </Form.Control.Feedback>
                                  </InputGroup>
                                </Form.Group>
                              </Row>
                              <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationCustom03">
                                  <Form.Label>City</Form.Label>
                                  <Form.Control type="text" placeholder="City" required />
                                  <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                  </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom04">
                                  <Form.Label>State</Form.Label>
                                  <Form.Control type="text" placeholder="State" required />
                                  <Form.Control.Feedback type="invalid">
                                    Please provide a valid state.
                                  </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom05">
                                  <Form.Label>Zip</Form.Label>
                                  <Form.Control type="text" placeholder="Zip" required />
                                  <Form.Control.Feedback type="invalid">
                                    Please provide a valid zip.
                                  </Form.Control.Feedback>
                                </Form.Group>
                              </Row>
                              <Form.Group className="mb-3">
                                <Form.Check
                                  required
                                  label="Agree to terms and conditions"
                                  feedback="You must agree before submitting."
                                  feedbackType="invalid"
                                />
                              </Form.Group>
                              <Button type="submit">Submit form</Button>
                            </Form>

                                <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                  
                                  
                                  <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                  <Form.Label>Email Address</Form.Label>
                                  <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                    <Form.Control
                                      type="text"
                                      placeholder="Username"
                                      aria-describedby="inputGroupPrepend"
                                      required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      Please choose a username.
                                    </Form.Control.Feedback>
                                  </InputGroup>
                                </Form.Group>
                                </Form.Group>

                                <Form.Group as={Col} md="4" controlId="validationCustom01">
                                  <Form.Label>Password</Form.Label>
                                  <Form.Control
                                    required
                                    type="password"
                                    placeholder="First name"
                                    defaultValue=""
                                  />
                                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} md="4" controlId="validationCustom01">
                                  <Form.Label>Confirm Password</Form.Label>
                                  <Form.Control
                                    required
                                    type="password"
                                    placeholder="First name"
                                    defaultValue=""
                                  />
                                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="name">Personal Information</div>
                            <div class="value">
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                  <Form.Label>First name</Form.Label>
                                  <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                    defaultValue="Mark"
                                  />
                                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                              
                                <Form.Group as={Col} md="4" controlId="validationCustom01">
                                  <Form.Label>Last name</Form.Label>
                                  <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                    defaultValue="Mark"
                                  />
                                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                              <Form.Group id="gender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select aria-label="Default select example" value={gender || ''} onChange={e => setGender(e.target.value)}>
                        <option>Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Transgender">Transgender</option>
                        <option value="Non-Binary">Non-Binary</option>
                        <option value="Not Specified">Rather not specify</option>
                        </Form.Select>
                        </Form.Group>
                        
                        <Form.Group id="bday">
                        <Form.Label>Birthday</Form.Label>
                           <DatePicker className="form-control"
                           dateFormat="MMMM d, yyyy"
                          selected={bday}
                          onChange={(date) => setBday(date)}
                          maxDate={Date.now()}
                          placeholderText="Select your Birthday"
                      
                        />
                        <Form.Group id="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control value={address || ''} onChange={e => setAddress(e.target.value)}   name = "address" type="address" placeholder="Address"/>
                        </Form.Group>
                        </Form.Group>
                        <Form.Group id="occu">
                        <Form.Label>Occupation</Form.Label>
                        <Form.Select aria-label="Default select example" value={occu || ''} onChange={e => OccupationValue(e)}>
                        <option>Select Occupation</option>
                        <option value="Student">Student</option>
                        <option value="Professor">Professor</option>
                        <option value="Others">Others.</option>
                        </Form.Select>
                        { occuHide &&  <Form.Control className="mt-2" value={occu } onChange={e => setOccu(e.target.value)}  name = "Occupation" type="text"  required placeholder="Please Specify"/> }
                        </Form.Group>

                        <Form.Group id="inst">
                        <Form.Label>Institution</Form.Label>
                        <Form.Select aria-label="Default select example" value={insti || ''} onChange={e => InstitutionValue(e)}>
                        <option>Select Institution</option>
                        <option value="LSPU">LSPU</option>
                        <option value="PUP">PUP</option>
                        <option value="TUP">TUP</option>
                        <option value="BSIT">BSIT</option>
                        <option value="DICT">DICT</option>
                        <option value="DCET">DCET</option>
                        <option value="Others">Others.</option>
                        </Form.Select>
                        { instiHide &&  <Form.Control className="mt-2" value={insti} onChange={e => setInsti(e.target.value)}  name = "Institution" type="text"  required placeholder="Please Specify"/> }
                        </Form.Group>
                            </div>
                        </div>

                        
                 
                        <div class="form-row">
                            <div class="name"></div>
                            <div class="value">
                            <div className="col-xs-1 mt-3" align="center">
                                    <ReCAPTCHA
                                    sitekey="6Lf0LR4dAAAAADXK477tFevARCNFk0rY-Z5ouawp"
                                    onChange={onChange}
                                    />
                                <div class="label--desc">Prove you're not a robot.</div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                  <p>By Signing-up you have already read and agree to our Terms and Conditions. </p>
                  <p>You can read it here.</p>
                  <strong>Terms and Conditions</strong>
                <Button className="w-100" onClick={onRegister} >Sign Up</Button>
                            <div className="w-100 text-center mt-5 mb-1">
                              Already have an account? <Link to="/login" style={{ textDecoration: 'none' }}>Log In</Link>
                            </div>
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


