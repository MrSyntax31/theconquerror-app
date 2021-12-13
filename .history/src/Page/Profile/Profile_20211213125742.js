import React, {  useState , useEffect } from 'react';
import Helmet from 'react-helmet';
import {  Modal, Button, Row, Col, Container, Card, Offcanvas, Form } from 'react-bootstrap';
import {} from 'firebase/auth'
import { getAuth, updatePassword, reauthenticateWithCredential , EmailAuthProvider, sendPasswordResetEmail } from '@firebase/auth';
import { collection, getFirestore, doc, setDoc,  onSnapshot   } from 'firebase/firestore';
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
import * as IoIcons from 'react-icons/io5';
import * as AiIcons from 'react-icons/ai';
import { getDatabase, ref, onValue, update } from "firebase/database";
import {  Link } from "react-router-dom"
import './Style.css'
import DatePicker from 'react-datepicker'
import swal from 'sweetalert';

const Profile = () => {


  //Services of Firebase (Authentication, Firestore, and Realtime Database)
  const firestoredb = getFirestore();
  const auth = getAuth();
  const realtimedb = getDatabase();

  //For Graphs (Data and Datus)
  const data = [
    { name: "Arrays", score: 200 },
    { name: "Basic Programming", score: 110 },
    { name: "Functions", score: 100 },
    { name: "HTML", score: 50 },
  ];

  const datus = [
    {
      name: 'Logic',
      uv: 40,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Execution',
      uv: 80,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Analysis',
      uv: 20,
      pv: 9800,
      amt: 2290,
    },
  ];

 
 
  //Fetch Data of current Logged-in User 
  const user = auth.currentUser;

   //fetches the id of the current logged-in user which will be used to reference the data inside the Realtime database
   const userId = auth.currentUser.uid;   

    //MODALS
    //Change Password
    const [show, setShow] = useState(false);
    //Feedback
    const [show2, setShow2] = useState(false);

    //Upload Files
    const [show4, setShow4] = useState(false);
    const handleShow4 = () => setShow4(true);
    const handleClose4 = () => setShow4(false);

    //Change Password
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Feedback
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

  //Offcanvas for setting handlers
  const [showOff, setShowOff] = useState(false);

  const handleCloseOff = () => setShowOff(false);
  const handleShowOff = () => setShowOff(true);

  const [show5, setShow5 ] = useState(false);

  const handleShow5 = ()  => setShow5(true);
  const handleClose5 = () => setShow5(false);

  //For Update
  const [showUpdate, setShowUpdate ] = useState(false);

  const handleShowUpdate = ()  => setShowUpdate(true);
  const handleCloseUpdate = () => setShowUpdate(false);



  const [occuHide, showHide1] = useState("")
  const [instiHide, showHide2] = useState("")

  
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
          else{
              updateProfile();
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


  //declare text input for change password (inside Modal)
  const [currentPass, setPass1] = useState();
  const [newPass1, setPass2] = useState();
  const [newPass2, setPass3] = useState();

  //text input for feedback (inside Modal)
  const [feedback, setFeedback] = useState();

  //Function for Password Reset *sends and password reset email to user
  function forgotPass(){

    //fetch user email from currentUser 
    const email = user.email;
    //send the reset email to the user
    sendPasswordResetEmail(auth, email)
    .then(() => {
      //show a success message
      swal("Email Sent", "Please check your email for a password reset link", "success")
    })
    .catch((error) => {
      alert(error.message);
      // ..
    });
  
  }

  //Function for Password Change
  function changePass(){
    
    //Detect if New Passwords match 
    if (newPass1 !== newPass2)
    {
      //show an error message
      swal("Error", "New Passwords do not match", "error")
        setPass3("");
        setPass2("");
        setPass1("");
    }
    else {
      //Get user Credentials (To be used on ReAuth )
      var credential = EmailAuthProvider.credential(
        user.email,
        currentPass
      );
        //If Passwords match, Proceed to ReAuthenticate (used because you need to be recently logged in to Change passwords)
        reauthenticateWithCredential(user, credential).then(() => {
        updatePassword(user, newPass2).then(() => {
          setPass3("");
          setPass2("");
          setPass1("");
          //show a success message
          swal("Password Changed", "Your password has been changed", "success");

          }).catch((error) => {
            alert(error.message);
          });

        }).catch((error) => {
          alert(error.message);
        });
            
    }

  }     
        //update profile
        //function edit(){
       // }

        //Function for Modal (Send Feedback)
        async  function sendFeedback(){

            // Rederence the Firebase Service for Firestore
        const userFeedback = doc(collection(firestoredb, "feedback"));

        //convert date which is timestamp to String
        var timestamp = Date.now();
        var convertedDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)

        // then create the array with the data to be set inside firestore in collection "feedback"
        var data = {
        Feedback: feedback,
          sender: user.email,
        sent_at: convertedDate
        }
        //puts the document inside the collection "feedback" in firestore
        await setDoc(userFeedback, data).then(() =>{
          setFeedback("");

          //show a success message
          swal("Feedback Sent", "Thank you for your feedback", "success");
        }).catch((error) => {
          alert(error.message);
        }).finally(() =>{
          swal("Feedback Sent", "Thank you for your feedback", "success");
        })
       

          }

    //to be used by showProfile Function to map the data and be visible to users      
  const [profile, setData] = useState([]);
 // const [levelhandler, setHandler] = useState();
  const [avatar , setAvatar] = useState([]);
                 
        function onLoad() {
          const lvl = sessionStorage.getItem('userlvl');
          onSnapshot(doc(firestoredb, "warrioravatar", lvl), (doc) => {

              const docdata = (doc.data())

              if (docdata)
              {   
                  setAvatar(docdata);
               

                
              }
              else{
                  
                  console.log("No Data");
                 
              }

              
          });


      }

      const delay = ms => new Promise(res => setTimeout(res, ms));
    

//Loads the function inside the useEffect when the component renders
  useEffect (() => {
    
  //Function that shows the profile of the user 
  function showProfile() {
   

  //creating reference for realtimedb and fetching data from table users using the userID as reference then setting the data inside the Profile useState above
    const profileData = ref(realtimedb, '/users/' + userId);
    onValue(profileData, (snapshot) => {
      setData(snapshot.val());

     
      
  })
}
        
        showProfile();
   
        const timer = async () => {
          await delay(5000);
          sessionStorage.setItem('userlvl', JSON.stringify(profile.level))
          onLoad();
        };
        timer();
       
  },[]); // eslint-disable-line react-hooks/exhaustive-deps
 

function updateProfile(){ 
  
    // A post entry.
    const postData = {  
      Name: profile.Name,
      Birthday: profile.Birthday,
      Gender : gender,
      Occupation: occu,
      Address: address,
      email: profile.email,
      Institution: insti,
      level: profile.level
    };
  
  

    const updates = {};
    updates['/users/' + userId] = postData;
  
    return update(ref(realtimedb), updates);
  
}

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

        <div className="" style={{marginTop:"8rem", marginLeft:"10%"}}>
          <h2 className="mt-5 text-primary fw-bold">User Dashboard</h2>
        </div>
        
       {/* Container for Card User Profile Information */}
      <Container fluid="md" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
          marginBottom: "40px"
        }}>

        {/* Card for User Profile Information */}
                        <Card>
                            <Card.Body>
                                        <h1 className="text-center text-primary fw-bold">Welcome to ConquError!</h1>
                                       
                                <Row>
                                        <h6 className="mt-3 mb-2 text-primary">Personal Details</h6>
                                       
                                        
                                    <div className="mt-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label>Full Name</label>
                                            <input type="text" className="form-control mt-2 mb-2" id="First_Name1" value={profile.Name || ''} disabled />
                                        </div>
                                    </div>
                      
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-3">
                                        <div className="form-group">
                                            <label>Birthday</label>
                                            <input type="text" className="form-control mt-2 mb-2" id="Age1"  value={profile.Birthday || ''} disabled />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-3">
                                        <div className="form-group">
                                            <label>Gender</label>
                                            <input type="text" className="form-control mt-2 mb-2" id="Age1"  value={profile.Gender || ''} disabled />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-3">
                                        <div className="form-group">
                                            <label >Occupation</label>
                                            <input type="text" className="form-control mt-2 mb-2" id="Occupation1"  value={profile.Occupation || ''} disabled />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-3">
                                        <div className="form-group">
                                            <label >Address</label>
                                            <input type="text" className="form-control mt-2 mb-2" id="Occupation1"  value={profile.Address || ''} disabled />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-3">
                                        <div className="form-group">
                                            <label>Institution</label>
                                            <input type="text" className="form-control mt-2 mb-2" id="Institution1" value={profile.Institution || ''} disabled />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-3">
                                      <div className="form-group">
                                          <label>Email</label>
                                          <input type="text" className="form-control mt-2 mb-2" id="email" value={profile.email || ''} disabled />
                                      </div>
                                  </div>

                                </Row>

                                    <Offcanvas show={showOff} onHide={handleCloseOff}>
                                      <Offcanvas.Header closeButton>
                                        <Offcanvas.Title><IoIcons.IoSettingsSharp/> Settings</Offcanvas.Title>
                                      </Offcanvas.Header>
                                      <Offcanvas.Body>
                                        
                                          <div className=" d-grid gap-2 mt-3 mb-3">
                                            <Button variant="primary" onClick={handleShow5} className="mb-2"><AiIcons.AiFillProfile/> Update Information</Button> 

                                            <Button variant="primary" onClick={handleShow4} className="mb-2"><AiIcons.AiFillFileText/> Upload Files</Button> 
                                            
                                            <Button variant="primary" onClick={handleShow} className="mb-2"><AiIcons.AiFillLock/> Change Password</Button> 
                                          
                                            <Button variant="primary" onClick={handleShow2} className="mb-2"><AiIcons.AiOutlineWechat/> Send Feedback</Button> 
                                            <div className="fs-4 fw-bold">Join our guild !</div>
                                            <iframe src="https://discord.com/widget?id=911369671679283221&theme=dark" title="Discord" width="350" height="500" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                                          </div>
                                      
                                      </Offcanvas.Body>
                                    </Offcanvas>

                                    {/*Change Password*/}
                                    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
                                          <Modal.Header closeButton>
                                            <Modal.Title>Change Password</Modal.Title>
                                          </Modal.Header>
                                          <Modal.Body>
                                            <div className=""> Current Password: <br></br>
                                                <input value={currentPass || ''} onChange={e => setPass1(e.target.value)}  type="password" className="form-control"></input><br></br>
                                                New Password: <br></br>
                                                <input value={newPass1|| ''} onChange={e => setPass2(e.target.value)}  type="password" className="form-control"></input><br></br>
                                                Confirm New Password: <br></br>
                                                <input value={newPass2 || ''} onChange={e => setPass3(e.target.value)}  type="password" className="form-control"></input><br></br>
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


                                        {/*Upload Files*/}
                                        <Modal show={show4} onHide={handleClose4} backdrop="static" keyboard={false} >
                                          <Modal.Header closeButton>
                                            <Modal.Title>Upload Files</Modal.Title>
                                          </Modal.Header>
                                          <Modal.Body>
                                           **COMING SOON**
                                          </Modal.Body>
                                          <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose4}>
                                              Close
                                            </Button>
                                           
                                          </Modal.Footer>
                                    </Modal>


                                         {/*Update Profile*/}
                                    <Modal show={show5}  onHide={handleClose5} backdrop="static"  keyboard={false}  >
                                          <Modal.Header closeButton>
                                            <Modal.Title>Update Profile</Modal.Title>
                                          </Modal.Header>
                                          <Modal.Body>

                                          <Form noValidate validated={validated} onSubmit={handleSubmit}>

                                          <Form.Group id="" className="mb-2">
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control value={ address || "" } onChange={e => setAddress(e.target.value)}  name = "name" type="name" required placeholder={profile.Address}/>
                                          </Form.Group>

                                          <Form.Group id="gender">
                                            <Form.Label>Gender</Form.Label>
                                            <Form.Select aria-label="Default select example" value={ gender || ""  } onChange={e => setGender(e.target.value)} required>
                                            <option value="">Select Gender</option>
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
                                             required
                                        
                                        />
                                        </Form.Group>

                                        <Form.Group id="occu">
                                        <Form.Label>Occupation</Form.Label>
                                        <Form.Select aria-label="Default select example" value={occu || ""} onChange={e => OccupationValue(e)} required>
                                        <option value="">Select Occupation</option>
                                        <option value="Student">Student</option>
                                        <option value="Professor">Professor</option>
                                        <option value="Others">Others.</option>
                                        </Form.Select>
                                        { occuHide &&  <Form.Control  className="mt-2" value={occu } onChange={e => setOccu(e.target.value)}  name = "Occupation" type="text"  required placeholder={profile.Occupation} /> }
                                        </Form.Group>

                                        <Form.Group id="inst">
                                        <Form.Label>Institution</Form.Label>
                                        <Form.Select aria-label="Default select example" value={insti || ""} onChange={e => InstitutionValue(e)} required>
                                        <option value="">Select Institution</option>
                                        <option value="LSPU">LSPU</option>
                                        <option value="PUP">PUP</option>
                                        <option value="TUP">TUP</option>
                                        <option value="BSIT">BSIT</option>
                                        <option value="DICT">DICT</option>
                                        <option value="DCET">DCET</option>
                                        <option value="Others">Others.</option>
                                        </Form.Select>
                                        { instiHide &&  <Form.Control className="mt-2" value={insti} onChange={e => setInsti(e.target.value)}  name = "Institution" type="text"  required placeholder={profile.Institution}/> }
            
                                        </Form.Group>

                                        <Button variant="primary" type="submit" className="btn btn-primary mt-3 w-100" onClick={handleCloseUpdate}> Update </Button>
                                        </Form>

                                          </Modal.Body>
                                          <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose5}> Close</Button>
                                          
                                          </Modal.Footer>
                                    </Modal>

                              </Card.Body>
                        </Card>
      </Container>


                              <Container className="mb-5" fluid="md" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                              { profile &&
                                  <Card style={{ width: '18rem', marginTop: '2rem' }}>
                                    <div style={{textAlign:"center"}}>
                                      <Card.Img variant="top" className="mt-5 w-50" src={avatar.img} />
                                    </div>
                                    <Card.Body>
                                      <Card.Title>My level: <strong>{profile.level}</strong> </Card.Title>
                                      <br/>
                                      <Card.Text>
                                       
                                        <strong>{avatar.levelname}</strong>
                                        <br/>
                                        {avatar.desc}
                                      </Card.Text>
                                      <Link to="/course" style={{ textDecoration: 'none' }} className="btn btn-primary mb-4">Start your Adventure!</Link>
                                    </Card.Body>
                                  </Card>
                                        }
                                  
                              </Container>    

        

      <div style={{ textAlign: "center" }}>
          <h1>My ConquError Status</h1>

          <h5 className="text-primary">This Feature is under development!!!</h5>
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
                <Bar dataKey="score" fill="#42a5f5" background={{ fill: "#eee" }} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                </Col>
              </Row>

            </Container>
          </div>              
                

          <div className="fixButton" id="container-floating">
                  

            <div id="floating-button" data-toggle="tooltip" data-placement="left">
              <p variant="primary" className="text-light fs-3" style={{marginTop: "12px"}} onClick={handleShowOff}><IoIcons.IoSettingsSharp/></p>
           
            </div>
           
          </div>
                
                
          <a href="#top" className="scroll-top">
            <i className="fa fa-chevron-up"></i>
                
        </a>
      </div>
    </>
    )
}

export default Profile
