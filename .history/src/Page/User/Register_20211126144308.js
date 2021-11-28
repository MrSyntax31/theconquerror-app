import React, {  useState } from 'react'
import { Form, Button, Card, Modal, Container, Alert} from 'react-bootstrap'
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet";
import {} from '../../firebase/firebase';
import {getAuth, createUserWithEmailAndPassword,sendEmailVerification, signOut ,onAuthStateChanged} from 'firebase/auth'
import { getDatabase, ref, set} from "firebase/database"
import './Login.css'
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
            <div className="w-100" style={{ maxWidth: "400px"}}>

                        <Card>
                        <Card.Body>
                        <
                        </Card.Body>
                            <div className="w-100 text-center mt-2 mb-4">
                              Already have an account? <Link to="/login" style={{ textDecoration: 'none' }}>Log In</Link>
                            </div>
                    </Card>

            </div>
          </Container>
          
     </div>
</>
     
    )
}


