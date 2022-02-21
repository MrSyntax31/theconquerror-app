import React, { useState } from 'react'
import { Form, Button, Card, Container} from 'react-bootstrap'
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet";
import {} from '../../firebase/firebase';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import './Login.css'
import ReCAPTCHA from 'react-google-recaptcha';
import swal from 'sweetalert';


    export default function ForgotPass() {

  

        

    return (        
 <>

<div>
      <Helmet>
        <title>ConquError | Leader</title>
        <meta name="description" content="Welcome to the ConquError Forgot password page. " />
      </Helmet>
    </div> 

    <div className="background-area" id="particles-js">
                  <div id='stars'></div>
                  <div id='stars2'></div>
                  <div id='stars3'></div>
                  <div id='title'></div>

        <Link to="/" style={{ textDecoration: 'none' }}><img to="/home" src="../Assets/white-logo.svg" className="Headerlogo mt-2" alt="logo" style={{width: "190px",paddingLeft: "20px"}}/></Link>
   
       
        
    </div>
 </>
     
    )
}


