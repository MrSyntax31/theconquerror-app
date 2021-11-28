import React, { useState } from 'react'
import { Form, Button, Card, Container} from 'react-bootstrap'
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet";
import {} from '../../firebase/firebase';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import './Login.css'


    export default function ForgotPass() {

        //Firebase service Auth
        const auth = getAuth(); 

        //For Input textbox 
        const [email, setEmail] = useState();

        //Send Request for Password Reset
        async function onResetpass () {

          //sends password request
            sendPasswordResetEmail(auth, email)
            .then(() => {
              // Password reset email sent!
              // ..
              alert('Request for Reset password has been sent!');
              setEmail("");
            })
            .catch((error) => {
          //    const errorCode = error.code;
              const errorMessage = error.message;
              //Alert
              alert(errorMessage);
            });

        }

    return (        
 <>

<div>
      <Helmet>
        <title>ConquError | Forgot Password</title>
        <meta name="description" content="ConquError Forgot password" />
      </Helmet>
    </div> 

    

    <Link to="/" style={{ textDecoration: 'none' }}><img to="/home" src="../Assets/white-logo.svg" className="Headerlogo mt-2" alt="logo" style={{width: "190px",paddingLeft: "20px"}}/></Link>
   
     <Container className="d-flex align-items-center justify-content-center mt-3 mb-5" style={{ minHeight: "100vh"}}>
     <div className="w-100 m-5" style={{ maxWidth: "400px"}}>

                <Card>
            <Card.Body>
            <h5 className="text-center mb-4">ConquError | Forgot Password</h5>
            <Form className="">
            <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control value={email || ''} onChange={e => setEmail(e.target.value)}  name = "email" type="email" autoComplete="username" required placeholder="Email Address"/>
            </Form.Group>

            </Form>
            <Button onClick={onResetpass} className="w-100 mt-2">Send</Button>
            </Card.Body>
            </Card>
            <div className="w-100 mt-2 text-center">
                Come study with us. <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link>
            </div>

     </div>
     </Container>
 </>
     
    )
}


