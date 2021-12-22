import React, {  useState , useEffect, useRef } from 'react';
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

  const [occuHide, showHide1] = useState("")
  const [instiHide, showHide2] = useState("")

 


  const [validated, setValidated] = useState(false);

       
  function OccupationValue(e){

    const occuval = occu.current.value
    console.log(occuval)
    if(occuval === "Others"){
      showHide1("show")


    }
    else{
      showHide1("")
      
    }
  }

  function InstitutionValue(e){

    const instival = insti.current.value
    
    if(instival === "Others"){

      showHide2("show")


    }
    else{
      showHide2("")
      
    }
  }

 //session id
 function sessionId(length){
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
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
      swal("Something is Wrong",error.code,"warning");
      // ..
    });
  
  }

  
  //Function for Password Change
  function changePass(){

    if (sessionStorage.getItem('changePassKey') === null) {
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
          swal("Change Password", "Your password has been changed", "success");
          sessionStorage.setItem('changePassKey', sessionId(23))

          }).catch((error) => {
            swal("Something is Wrong",error.code,"warning");
          });

        }).catch((error) => {
          swal("Something is Wrong",error.code,"warning");
        });
            
    }
    }
    else {
      swal("Change Password", "You just changed your password, Try Again Later", "warning");
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
          swal("Something is Wrong",error.code,"warning");
        }).finally(() =>{
      
        })
       

          }

    //to be used by showProfile Function to map the data and be visible to users      
  const [profile, setData] = useState([]);
 // const [levelhandler, setHandler] = useState();

 const [avatar, setAvatar] = useState([]);
                 
 
      const delay = ms => new Promise(res => setTimeout(res, ms));
        
      const timer = async () => {

        await delay(1000);
        
        const userlvl = sessionStorage.getItem("userLevel");
        if(userlvl){

          onLoad();
        }
       else{
          //do nothing
       }

      };

//Loads the function inside the useEffect when the component renders
  useEffect (() => {
    
  //Function that shows the profile of the user 
  function showProfile() {
   

  //creating reference for realtimedb and fetching data from table users using the userID as reference then setting the data inside the Profile useState above
    const profileData = ref(realtimedb, '/users/' + userId);
    onValue(profileData, (snapshot) => {
      setData(snapshot.val());
      sessionStorage.setItem("userLevel",(JSON.stringify(snapshot.val().level)))
     
      
  })
}
        
        showProfile();

      timer();
    
     
       
  },[]); // eslint-disable-line react-hooks/exhaustive-deps
 
  function onLoad() {

    const level = sessionStorage.getItem("userLevel")

    onSnapshot(doc(firestoredb, "warrioravatar", level), (doc) => {

        const docdata = (doc.data())

        if (docdata)
        {   
            setAvatar(docdata);
        
          
        }
        else{
            
          swal("Something is Wrong","No Data Found","warning");
           
        }

        
    });


}

const gender = useRef();
const occu = useRef();
const insti  = useRef();
const address = useRef();

function updateProfile(){ 
  
  if (sessionStorage.getItem('UpdateKey') === null) {

        // A post entry.
    const postData = {  
      Name: profile.Name,
      Birthday: profile.Birthday,
      Gender : gender.current.value,
      Occupation: occu.current.value,
      Address: address.current.value,
      email: profile.email,
      Institution: insti.current.value,
      level: profile.level
    };
  
    const updates = {};
    updates['/users/' + userId] = postData;


    return update(ref(realtimedb), updates).then(() => {

      swal("Success", "Data Updated!", "success")
  
      sessionStorage.setItem('UpdateKey',sessionId(23))

    }).catch((error) => {
        swal("Update Fail", error.code, "warning")
    }).finally(() => {
     //
    })

  } 
  else {

    swal("Profile Update", "You recently updated your Profile, Try Again Later", "warning");

  }

  }

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

  const [password, PWHandler] = useState("password");

  const showPass = (event) => {

   if(password === "password"){
     PWHandler("text");
   }
   else {
     PWHandler("password");
   }

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
        

        <div class="main-content">

<nav class="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
  <div class="container-fluid">

    <a class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="https://www.creative-tim.com/product/argon-dashboard" target="_blank">User profile</a>

    <form class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
      <div class="form-group mb-0">
        <div class="input-group input-group-alternative">
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="fas fa-search"></i></span>
          </div>
          <input class="form-control" placeholder="Search" type="text"/>
        </div>
      </div>
    </form>

    <ul class="navbar-nav align-items-center d-none d-md-flex">
      <li class="nav-item dropdown">
        <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <div class="media align-items-center">
            <span class="avatar avatar-sm rounded-circle">
              <img className="w-50" src={avatar.img} alt="levelImage"/>
            </span>
            <div class="media-body ml-2 d-none d-lg-block">
              <span class="mb-0 text-sm  font-weight-bold">Jessica Jones</span>
            </div>
          </div>
        </a>
        <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
          <div class=" dropdown-header noti-title">
            <h6 class="text-overflow m-0">Welcome!</h6>
          </div>
          <a href="../examples/profile.html" class="dropdown-item">
            <i class="ni ni-single-02"></i>
            <span>My profile</span>
          </a>
          <a href="../examples/profile.html" class="dropdown-item">
            <i class="ni ni-settings-gear-65"></i>
            <span>Settings</span>
          </a>
          <a href="../examples/profile.html" class="dropdown-item">
            <i class="ni ni-calendar-grid-58"></i>
            <span>Activity</span>
          </a>
          <a href="../examples/profile.html" class="dropdown-item">
            <i class="ni ni-support-16"></i>
            <span>Support</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#!" class="dropdown-item">
            <i class="ni ni-user-run"></i>
            <span>Logout</span>
          </a>
        </div>
      </li>
    </ul>
  </div>
</nav>

<div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" style={{minHeight: "600px", backgroundImage: "url(https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)", backgroundSize: "cover", backgroundPosition: "center top"}}>

  <span class="mask bg-gradient-default opacity-8"></span>

  <div class="container-fluid d-flex align-items-center">
    <div class="row">
      <div class="col-lg-7 col-md-10">
        <h1 class="display-2 text-white">Hello {profile.Name || ''}</h1>
        <p class="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
      </div>
    </div>
  </div>
</div>

<div class="container-fluid mt--7">
  <div class="row">
    <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
      <div class="card card-profile shadow">
        <div class="row justify-content-center">
          <div class="col-lg-3 order-lg-2">
            <div class="card-profile-image">
              <a href="#">
                <img src={avatar.img} alt="levelImage" className="rounded-circle"/>
              </a>
            </div>
          </div>
        </div>

        <div class="card-body pt-0 pt-md-4">
          <div class="row">
            <div class="col">
              <div class="card-profile-stats d-flex justify-content-center mt-md-5">
                <div>
                  <span class="heading">{profile.level}/15</span>
                  <span class="description">Level</span>
                </div>
                <div>
                  <span class="heading">10</span>
                  <span class="description">Question</span>
                </div>
                <div>
                  <span class="heading">89</span>
                  <span class="description">Comments</span>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center">
            <h3>
            {profile.Name || ''}
            </h3>
            <div class="h5 font-weight-500">
              {avatar.levelname}
            </div>
            <div class="h5 mt-4">
                  <Card.Text className="text-center">
                    {avatar.desc}
                  </Card.Text>
            </div>
            <div>
              University of Computer Science
            </div>
            <hr class="my-4"/>
            <p>Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music.</p>

          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-8 order-xl-1">
      <div class="card shadow">
        <div class="card-header bg-white border-0">
          <div class="row align-items-center">
            <div class="col-8">
              <h3 class="mb-0">My account</h3>
            </div>
            <div class="col-4 text-right">
              <p onClick={handleShowOff} class="btn btn-sm btn-primary">Settings</p>
            </div>
          </div>
        </div>
        <div class="card-body">
          <form>
            <h6 class="heading-small text-muted mb-4">User information</h6>
            <div class="pl-lg-4">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group focused">
                    <label class="form-control-label text-white" for="input-username">Full Name</label>
                    <input type="text" id="input-username" class="form-control form-control-alternative" placeholder="Username" value={profile.Name || ''} disabled/>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label class="form-control-label" for="input-email">Email address</label>
                    <input type="email" id="input-email" class="form-control form-control-alternative" value={profile.email || ''} disabled />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group focused">
                    <label class="form-control-label" for="input-first-name">Birthday</label>
                    <input type="text" id="input-first-name" class="form-control form-control-alternative" value={profile.Birthday || ''} disabled/>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group focused">
                    <label class="form-control-label" for="input-last-name">Gender</label>
                    <input type="text" id="input-last-name" class="form-control form-control-alternative" value={profile.Gender || ''} disabled/>
                  </div>
                </div>
              </div>
            </div>
            <hr class="my-4"/>

            <h6 class="heading-small text-muted mb-4">Contact information</h6>
            <div class="pl-lg-4">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group focused">
                    <label class="form-control-label" for="input-address">Address</label>
                    <input id="input-address" class="form-control form-control-alternative" value={profile.Address || ''} disabled type="text"/>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4">
                  <div class="form-group focused">
                    <label class="form-control-label" for="input-city">Occupation</label>
                    <input type="text" id="input-city" class="form-control form-control-alternative" value={profile.Occupation || ''} disabled/>
                  </div>
                </div>
                <div class="col-lg-8">
                  <div class="form-group focused">
                    <label class="form-control-label" for="input-country">Institution</label>
                    <input type="text" id="input-country" class="form-control form-control-alternative" value={profile.Institution || ''} disabled/>
                  </div>
                </div>
                
              </div>
            </div>
            <hr class="my-4"/>

            <h6 class="heading-small text-muted mb-4">About me</h6>
            <div class="pl-lg-4">
              <div class="form-group focused">
                <label>About Me</label>
                <textarea rows="4" class="form-control form-control-alternative" disabled="disabled">A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>



       {/* Container for Card User Profile Information */}

      <div className="mt-5" style={{ textAlign: "center" }}>
          <h1>My ConquError Status</h1>

          <h5 className="text-primary">This Feature is under development!!!</h5>
          <div className="App">
            
            <Container>

              <Row>
                <Col>
                  <div style={{ width: '100%', height: 300, marginTop:'4rem', marginBottom:'4rem' }}>
                    <ResponsiveContainer className="textStyle">
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
                  <ResponsiveContainer className="textStyle">
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


      <footer class="sticky-footer">
      <div class="container">
        <div class="text-center">
          <small>Copyright © Your Website 2018</small>
        </div>
      </div>
    </footer>
    </>
    )
}

export default Profile
