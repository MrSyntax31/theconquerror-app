import React, {  useState , useEffect } from 'react';
import Helmet from 'react-helmet';
import {  Modal, Button, Row, Col, Container, Card, Form } from 'react-bootstrap';
import {} from 'firebase/auth'
import { getAuth, updatePassword, reauthenticateWithCredential , EmailAuthProvider, sendPasswordResetEmail } from '@firebase/auth';
import { collection, getFirestore, doc, setDoc, getDoc  } from 'firebase/firestore';
import {

  AreaChart,
  ResponsiveContainer,
  Area,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

import Navbar from '../../Components/Navbar/Navbar'
import { getDatabase, ref, onValue } from "firebase/database";
import {  useHistory} from "react-router-dom"

const Profile = () => {

  const history = useHistory()

  const data = [
    { name: "Facebook", users: 2000000000 },
    { name: "Instagram", users: 1500000000 },
    { name: "Twiter", users: 1000000000 },
    { name: "Telegram", users: 500000000 },
  ];

  const datus = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const feedbackdb = getFirestore();
  const auth = getAuth();
  const db = getDatabase();
 

  const user = auth.currentUser;

  //Change Password
    const [show, setShow] = useState(false);
 //Feedback
    const [show2, setShow2] = useState(false);
 //Update User
    const [show3, setShow3] = useState(false);
    //Upload Files
    const [show4, setShow4] = useState(false);


 //Change Password
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
//Feedback
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
 //Update User
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
 //Update User
 const handleClose4 = () => setShow4(false);
 const handleShow4 = () => setShow4(true);


    //declare text input for change password
  const [currentPass, setPass1] = useState();
  const [newPass1, setPass2] = useState();
  const [newPass2, setPass3] = useState();
  //feedback
  const [feedback, setFeedback] = useState();

  function forgotPass(){

    const email = user.email;
    sendPasswordResetEmail(auth, email)
    .then(() => {
     alert("Password Reset request has been Sent! Please check your Email")
    })
    .catch((error) => {
      alert(error.message);
      // ..
    });
  
  }

  function changePass(){
    if (newPass1 !== newPass2)
    {
        alert("PASSWORDS DO NOT MATCH");
        setPass3("");
        setPass2("");
        setPass1("");
    }
    else {
      var credential = EmailAuthProvider.credential(
        user.email,
        currentPass
      );
        reauthenticateWithCredential(user, credential).then(() => {
        updatePassword(user, newPass2).then(() => {
          setPass3("");
          setPass2("");
          setPass1("");
          alert("Password was successfully Changed");
          }).catch((error) => {
            alert(error.message);
          });

        }).catch((error) => {
          alert(error.message);
        });
            
    }

  }

async  function sendFeedback(){

    // Add a new document with a generated id
const userFeedback = doc(collection(feedbackdb, "feedback"));

//convert date which is timestamp to String
var timestamp = Date.now();
var convertedDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)

// then
var data = {
 Feedback: feedback,
  sender: user.email,
 sent_at: convertedDate
}
await setDoc(userFeedback, data);
setFeedback("");
alert("Feedback Sent! Thank you for Using ConquError!");

  }

  const [profile, setData] = useState([]);
  //Show Profile Data

  async function showProfile() {
        
const userId = auth.currentUser.uid;

return onValue(ref(db, '/users/' + userId), (snapshot) => {

  setData(snapshot.val());

}, {
  onlyOnce: true
});

  }

  //recently opened lesson
  const [courses, setLesson] = useState([]);
  const lessonid = localStorage.getItem('getLesson')

  async function doit(){

    if (lessonid === null)
    {
     setLesson("");
    }
     else{
      const docRef = doc(feedbackdb, "courses", lessonid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
       setLesson(docSnap.data())
  
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
     } 
  
  }
  
  useEffect(() => {

    showProfile();
      doit();
   });

   const handler = function(e){

    history.push("/lessons")
    
    
};
    return (
        <>
        {/* Division for Tab Page and Description*/}
        <div>
            <Helmet>
              <title>ConquError | Profile</title>
              <meta name="description" content="ConquError Homepage" />
            </Helmet>
        </div>

       <Navbar/>

       {/* Container for Card User Profile Information */}
      <Container>
        <Row>
          <Col m={9}>
            <section  className=" section d-flex justify-content-center mt-5">
                <div className="container d-flex justify-content-center">
                    <div className="row gutters d-flex justify-content-center">
                      <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 className="mb-2 text-primary">Personal Details</h6>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label>Full Name</label>
                                            <input type="text" className="form-control mt-2 mb-2" id="First_Name1" value={profile.Name || ''} disabled />
                                        </div>
                                    </div>
                      
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label>Birthday</label>
                                            <input type="text" className="form-control mt-2 mb-2" id="Age1"  value={profile.Birthday || ''} disabled />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label >Occupation</label>
                                            <input type="text" className="form-control mt-2 mb-2" id="Occupation1"  value={profile.Occupation || ''} disabled />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label>Institution</label>
                                            <input type="text" className="form-control mt-2 mb-2" id="Institution1" value={profile.Institution || ''} disabled />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                      <div className="form-group">
                                          <label>Email</label>
                                          <input type="text" className="form-control mt-2 mb-2" id="emailu" value={profile.email || ''} disabled />
                                      </div>
                                  </div>
                                </div>

                                <div className="d-flex justify-content-center mt-3">
                                  <div className="d-flex justify-content-center">
                                    <Row className="d-flex justify-content-center">
                                          <Col xs={6} md={3} className="d-flex justify-content-center">
                                            <Button variant="primary" onClick={handleShow3} className="mb-2"> Update Profile</Button> 
                                          </Col>
                                          <Col xs={6} md={3} className="d-flex justify-content-center">
                                            <Button variant="primary" onClick={handleShow4} className="mb-2"> Upload Files</Button> 
                                          </Col>
                                          <Col xs={6} md={3} className="d-flex justify-content-center">
                                            <Button variant="primary" onClick={handleShow} className="mb-2"> Change Password</Button> 
                                          </Col>
                                          <Col xs={6} md={3} className="d-flex justify-content-center">
                                            <Button variant="primary" onClick={handleShow2} className="mb-2"> Send Feedback</Button> 
                                          </Col>
                                    </Row>
                                  </div>
                                </div>
                                    {/*Change Password*/}
                                    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
                                          <Modal.Header closeButton>
                                            <Modal.Title>Change Password</Modal.Title>
                                          </Modal.Header>
                                          <Modal.Body>
                                            <div className=""> Current Password: <br></br>
                                                <input value={currentPass || ''} onChange={e => setPass1(e.target.value)}  type="password"></input><br></br>
                                                New Password: <br></br>
                                                <input value={newPass1|| ''} onChange={e => setPass2(e.target.value)}  type="password"></input><br></br>
                                                Confirm New Password: <br></br>
                                                <input value={newPass2 || ''} onChange={e => setPass3(e.target.value)}  type="password"></input><br></br>
                                            </div>
                                          </Modal.Body>
                                          <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                              Close
                                            </Button>
                                            <Button variant="primary" onClick={forgotPass }>Forgot-Password</Button>
                                            <Button variant="primary" onClick={changePass }>Confirm</Button>
                                          </Modal.Footer>
                                    </Modal>

                                    {/*Feedback*/}
                                    <Modal show={show2}  onHide={handleClose2} backdrop="static"  keyboard={false}  >
                                          <Modal.Header closeButton>
                                            <Modal.Title>Send Feedback</Modal.Title>
                                          </Modal.Header>
                                          <Modal.Body>
                                            Please Address your Issue so we can further Improve ConquError: <br></br>
                                            <textarea value={feedback || ''} onChange={e => setFeedback(e.target.value)}  type="text" className="form-control"></textarea><br></br>
                                          </Modal.Body>
                                          <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose2}> Close</Button>
                                            <Button variant="primary" onClick={ sendFeedback }> Send</Button>
                                          </Modal.Footer>
                                    </Modal>

                                    {/*Update Profile*/}
                                    <Modal show={show3}  onHide={handleClose3} backdrop="static"  keyboard={false}  >
                                          <Modal.Header closeButton>
                                            <Modal.Title>Update Profile</Modal.Title>
                                          </Modal.Header>
                                          <Modal.Body>
                                            <Form className="">
                                              <Form.Group id="email">
                                              <Form.Label>Email</Form.Label>
                                              <Form.Control   name = "email" type="email" autoComplete="username" required placeholder="Email Address"/>
                                              </Form.Group>
                                              <Form.Group id="password">
                                              <Form.Label>Password</Form.Label>
                                              <Form.Control    name = "password" type="password" autoComplete="new-password" required placeholder="Password"/>
                                              </Form.Group>
                                              <Form.Group id="password2">
                                              <Form.Label>Confirm Password</Form.Label>
                                              <Form.Control  name = "password" type="password" autoComplete="new-password" required placeholder="Password"/>
                                              </Form.Group>
                                              <Form.Group id="fname">
                                              <Form.Label>First Name</Form.Label>
                                              <Form.Control name = "name" type="name" required placeholder="First Name"/>
                                              </Form.Group>
                                              <Form.Group id="lname">
                                              <Form.Label>Last Name</Form.Label>
                                              <Form.Control  name = "name" type="name" placeholder="Last Name"/>
                                              </Form.Group>
                                              <Form.Group id="bday">
                                              <Form.Label>Birthday</Form.Label>
                                              <Form.Control  name = "Birthday" type="date" required />
                                              </Form.Group>
                                              <Form.Group id="occu">
                                              <Form.Label>Occupation</Form.Label>
                                              <Form.Select aria-label="Default select example">
                                              <option>Select Occupation</option>
                                              <option value="1">Student</option>
                                              <option value="2">Professor</option>
                                              <option value="3">Others...</option>
                                              </Form.Select>
                                              </Form.Group>
                                              <Form.Group id="inst">
                                              <Form.Label>Institution</Form.Label>
                                              <Form.Control  name = "Institution" type="text" required placeholder="Institution"/>
                                              </Form.Group>
                                              <Button className="w-100 mt-2">Update</Button>
                                            </Form>
                                          </Modal.Body>
                                          <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose3}> Close</Button>
                                          </Modal.Footer>
                                    </Modal>


                                        {/*Upload Files*/}
                                        <Modal show={show4} onHide={handleClose4} backdrop="static" keyboard={false} >
                                          <Modal.Header closeButton>
                                            <Modal.Title>Upload Files</Modal.Title>
                                          </Modal.Header>
                                          <Modal.Body>
                                           
                                          </Modal.Body>
                                          <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose4}>
                                              Close
                                            </Button>
                                           
                                          </Modal.Footer>
                                    </Modal>
                              </div>
                        </div>
                      </div>
                    </div>
                </div>

        <a href="#top" className="scroll-top">
            <i className="fa fa-chevron-up"></i>
        </a>
            </section>
          </Col>

            <Col sm={4} style={{marginTop:'8rem'}}>
                <div className=" d-flex justify-content-center ">
                      <div className="row gutters d-flex justify-content-center">
                          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                              <div className="w-100 h-100">
                                  <div className="">
                                    <div className="row gutters">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <h6 className="mb-2 text-primary">Recently Opened</h6>
                                        </div>
                                        <Card style={{ width: '20rem', display: 'block', marginLeft: 'auto', marginRight: 'auto'  }}>
                                          <Card.Img variant="top" src={courses.courseimg} alt="photo" style={{display: 'block', width:'50%', position: 'center', marginLeft: 'auto', marginRight: 'auto'}} />
                                            <Card.Body>
                                              <Card.Title>{courses.coursename}</Card.Title>
                                                <Card.Text style={{textAlign: 'justify', textJustify: 'inter-word'}}>
                                                  {courses.coursedesc}
                                                </Card.Text>
                                              <Button  onClick={handler}>Open</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                </div>   
            </Col>
        </Row>
      </Container>
        
      <div style={{ textAlign: "center" }}>
          <h1>My ConquError Status</h1>
          <div className="App">
            <Container>
              <Row>
                <Col>
                  <div style={{ width: '100%', height: 300, marginTop:'4rem', marginBottom:'4rem' }}>
                    <ResponsiveContainer>
                        <AreaChart
                          data={datus}
                          margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="uv" stroke="#42a5f5" fill="#42a5f5" />
                        </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                <div style={{ width: '100%', height: 300, marginTop:'4rem', marginBottom:'4rem' }}>

                  <ResponsiveContainer>
                  <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 80,
                bottom: 5,
              }}
              barSize={20}
            >
              <XAxis
                dataKey="name"
                scale="point"
                padding={{ left: 10, right: 10 }}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar dataKey="users" fill="#42a5f5" background={{ fill: "#eee" }} />
            </BarChart>
                </ResponsiveContainer>
                </div>
              
                
                </Col>
              </Row>
            </Container>
          </div>
      </div>

    </>
    )
}

export default Profile
