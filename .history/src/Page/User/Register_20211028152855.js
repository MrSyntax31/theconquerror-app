import React, {  useState } from 'react'
import { Form, Button, Card, Modal, Container} from 'react-bootstrap'
import { Link ,  useHistory} from "react-router-dom"
import { Helmet } from "react-helmet";
import {} from '../../firebase/firebase';
import {getAuth, createUserWithEmailAndPassword,sendEmailVerification,  onAuthStateChanged} from 'firebase/auth'
import { getDatabase, ref, set} from "firebase/database";
import Footer from '../../Components/Footer/Footer';
import './Login.css'
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import 'csshake';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 1.8rem;
  .container {
    display: flex;
    gap: 1.5rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 3rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 3.5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;



    export default function Register() {
      const history = useHistory()
        //declare authentication of firebases
         const auth = getAuth();

        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);


        // Register Code
         // Register Code
         const [email, setEmail] = useState();
         const [password, setPass] = useState();
         const [password2, setPass2] = useState();
           const [fname, setFname] = useState();
       const [lname, setLname] = useState();
      const [bday, setBday] = useState();
       const [occu, setOccu] = useState();
         //const [insti, setInsti] = useState();


  function onRegister  ()
  {

      if (password !== password2)
      {
      alert("Passwords do not Match");
        return
      }

      else {

        createUserWithEmailAndPassword(auth,email,password)
        .then(() => {
          //check if user succesfully created account in order to continue hehe
          onAuthStateChanged(auth, (user) => {
            if (user) {

              const uid = user.uid;
  
              const db = getDatabase();
              set(ref(db, 'users/' + uid), {
                Name: fname +" "+ lname,
                Birthday:bday,
                Occupation: occu,
                  //Institution: insti,
                  email: email
  
              });
            
              sendEmailVerification(auth.currentUser)
  
              .then(() => {
  
             alert('You have Succesfully Registered your Account!, Please Check your Email for Verification');
             
             history.push("/")
             return
             });

            } else {

                alert('No User Signed in, if error proceeds please contact an Admin');
                return

            }
          });
        }).catch((e) => alert(e.message))
          
      }
      return
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

            <Container className="d-flex align-items-center justify-content-center mb-5 mt-2" style={{ minHeight: "100vh"}}>
                <div className="w-100 mb-5" style={{ maxWidth: "400px"}}>

                            <Card>
                            <Card.Body>
                            <h3 className="text-center mb-2 text-primary fw-bold">Register</h3>
                            <Form className="">
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
                            <Form.Group id="fname">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control value={fname || ''} onChange={e => setFname(e.target.value)}  name = "name" type="name" required placeholder="First Name"/>
                            </Form.Group>
                            <Form.Group id="lname">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control value={lname || ''} onChange={e => setLname(e.target.value)}   name = "name" type="name" placeholder="Last Name"/>
                            </Form.Group>
                            <Form.Group id="bday">
                            <Form.Label>Birthday</Form.Label>
                            <Form.Control  value={bday || ''} onChange={e => setBday(e.target.value)}   name = "Birthday" type="date" required />
                            </Form.Group>

                            <Form.Group id="occu">
                            <Form.Label>Occupation</Form.Label>
                            <Form.Select aria-label="Default select example" value={occu || ''} onChange={e => setOccu(e.target.value)}>
                            <option>Select Occupation</option>
                            <option value="1">Student</option>
                            <option value="2">Professor</option>
                            <option value="3">Others...</option>
                            </Form.Select>
                            </Form.Group>

                            <Form.Group id="occu">
                            <Form.Label>Institution</Form.Label>
                            <Form.Select aria-label="Default select example" value={occu || ''} onChange={e => setOccu(e.target.value)}>
                            <option>Select Institution</option>
                            <option value="1">LSPU</option>
                            <option value="2">PUP</option>
                            <option value="3">TUP</option>
                            </Form.Select>
                            </Form.Group>

                            {/*    <Form.Group id="inst">
                            <Form.Label>Institution</Form.Label>
                            <Form.Control value={insti || ''} onChange={e => setInsti(e.target.value)}   name = "Institution" type="text" required placeholder="Institution"/>
                            </Form.Group>*/}

                            <Form.Group id="checkAgree" className="mt-3" required>
                      
                            <label onClick={handleShow} className="text-primary">Terms and Conditions</label>

                            </Form.Group>

                            <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                            >
                            <Modal.Header closeButton>
                            <Modal.Title>Terms and Conditions</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <div className="modal-body text-justify">

                            <p className=""><strong>ConquError</strong> values and respects your right to privacy. We are committed to protect the privacy of our website visitors. We will only collect, record, store, process, and use your personal information in accordance with the Data Privacy Act of 2012, its Implementing Rules and Regulations, the issuances by the National Privacy Commission, and other pertinent laws.
                            </p>

                            <p>This Privacy Policy informs you of updates in our corporate policies regarding the collection, use, storage, disclosure, and disposal of personal information we receive and collect from our customers, and any individual who communicates, raises inquiries and concerns, as well as transacts with us through our authorized representatives.

                            We will only use your data based on the limitations set by this policy.
                            </p>

                            <p>We  only once to collect and stored your information, this policy will allow you to be  protected, and any update with regards of your current information will be done via request to the admin. The user will be notified of the changes.</p>
                            
                            <Button className="w-100 mt-2" >Agree</Button>

                            </div>
                            </Modal.Body>
                            <Modal.Footer>

                            </Modal.Footer>
                            </Modal>
                            <Button className="w-100 mt-1" onClick={onRegister} >Sign Up</Button>
                            
                            </Form>
                            </Card.Body>
                        <div className="w-100 text-center mt-1 mb-3">
                          Already have an account? <Link to="/login" style={{ textDecoration: 'none' }}>Log In</Link>
                        </div>
                        </Card>
                </div>
            </Container>

            <FooterStyle className=" pt-10 text-white"  style={{background:"#181818"}}>
      <div className="container d-flex align-items-center ">
        <div className="footer__col1">
          <img  src="../Assets/logo.svg" className="w-50 " alt="logo" />
          <ul className="list-unstyled">
          <li  className="mt-3">
          Learn and Develop your skills for free by Technojet.Dev
          </li>
          </ul>
          <div className="footer__col3">
        <h6 className="mt-2 text-white">Follow Us on</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><FaIcons.FaFacebook/> <a href="https://www.facebook.com/theConquErrorph" className="text-decoration-none text-white"> theConquErrorph</a> </li>
              <li className="mb-2"><FaIcons.FaInstagram/> theconquerrorph</li>
              <li className="mb-2"><FaIcons.FaYoutube/> <a href="https://www.youtube.com/channel/UCojmF97JXog4ITgDjNtfnqw" className="text-decoration-none text-white"> theConquError</a></li>
            </ul>
        </div>
        </div>
        <div className="footer__col2 ">
            <ul className="list-unstyled fw-bold ">
            <li><h4 className="text-white align-center mt-4">Developed by</h4></li>
              <div className="shake-slow shake-constant shake-constant--hover">
              <li className="d-flex justify-content-center">
                <img className="inline-block align-center h-20 image-center" src="../assets/TJDev.png" alt="logo"/></li>
              </div>
              <li className="d-flex justify-content-center">Technojet.Dev</li>  
            </ul>
        </div>
        <div className="footer__col3 ">
            <ul className="list-unstyled ">
            <h4  className="d-flex justify-content-center text-white">Contacts</h4>
              <li className="mb-2  justify-content-center align-items-center"><FaIcons.FaHome/> Lopez, Quezon </li>
              <li className="mb-2  justify-content-center align-items-center"><FaIcons.FaGoogle/> technojet.devofficial</li>
              <li className="mb-2  justify-content-center align-items-center"><FaIcons.FaPhoneAlt/> +63 956 528 0371</li>
            </ul>
        </div>
        <div className="footer__col4">
            <ul className="list-unstyled">
             <h4  className="d-flex justify-content-center text-white">Built With</h4>
              <li className="mb-2"><FaIcons.FaReact/> ReactJS</li>
              <li className="mb-2"><FaIcons.FaGripfire/> Firebase</li>
              <li className="mb-2"><FaIcons.FaBootstrap/> Bootstrap 5</li>
            </ul>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          
          <p className="col-sm d-flex justify-content-center">
            &copy;{new Date().getFullYear()} Technojet.Dev | Design by <img  src="../Assets/PSIXs.ico" className="" style={{width:'1.5rem'}} alt="logo" /><strong><a href="https://technojetdev.netlify.app/" className="text-decoration-none text-white">PSIX </a></strong> 
          </p>
         
        </div>
      </div>
    </FooterStyle>
     
    
</div>

</>
     
    )
}


