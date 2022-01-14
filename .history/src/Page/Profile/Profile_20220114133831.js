import React, {  useState , useEffect, useRef } from 'react';

//Dependencies
import Helmet from 'react-helmet';

//Styles & Libraries
import {  Modal, Button, Row, Col, Container, Card, Offcanvas, Form, ProgressBar } from 'react-bootstrap';

import * as IoIcons from 'react-icons/io5';
import * as AiIcons from 'react-icons/ai';

import './styles.css'
import swal from 'sweetalert';

import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import 'csshake';

import './Footer.css'

//Firebase Database
import {} from 'firebase/auth'
import { getAuth, updatePassword, reauthenticateWithCredential , EmailAuthProvider, sendPasswordResetEmail } from '@firebase/auth';
import { collection, getFirestore, doc, setDoc,  onSnapshot   } from 'firebase/firestore';
import { getDatabase, ref, onValue, update } from "firebase/database";
import { getStorage, uploadBytesResumable, getDownloadURL} from 'firebase/storage'

//Charts
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

//Navbar
import Navbar from '../../Components/Navbar/Navbar'
import {  useHistory} from "react-router-dom"

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



const Profile = () => {


  //Services of Firebase (Authentication, Firestore, and Realtime Database)
  const firestoredb = getFirestore();
  const auth = getAuth();
  const realtimedb = getDatabase();
  const history = useHistory();
  const storage = getStorage();
 

  //For Graphs (Data)
  const data = [
    {
      name: "Page A",
      pv: 10,
    },
    {
      name: "Page B",
      pv: 7,
    },
    {
      name: "Page C",
      pv: 8,
    },
    {
      name: "Page D",
      pv: 6,
    },
    {
      name: "Page E",
      pv: 9,
    },
    {
      name: "Page F",
      pv: 10,
    },
    {
      name: "Page G",
      pv: 9,
    }
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

 const[show6, setShow6] = useState(false);
 const handleClose6 = () => setShow6(false);


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
      
     
      const [AdminCheck,AdminPermission] = useState(false);
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
        verificationStatus();
       

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

  useEffect(() => {

    if(profile.Permission === "Admin"){
      AdminPermission(true)

    }
    else{
      AdminPermission(false)
  
    }

  }, [profile])
  
  function AdminPanel()  {
    history.push("/admin")
  }


  
  const [verifstat, setStatus] = useState("");
  const [NotVerif, isNotVerified] =useState(false);

  useEffect(() => {
   
      if (profile.Occupation === "Instructor")
      {
        if (verifstat.verifiedstatus === "Approved")
        {
          isNotVerified(true)
       
        }
        else
        {
          isNotVerified(false)
        }

      }
      else{
        isNotVerified(false)
      }
 
  }, [verifstat,profile]) // eslint-disable-line react-hooks/exhaustive-deps

 
  const [Applied, isApplied] = useState(false);
  function verificationStatus(){
    onSnapshot(doc(firestoredb, "verifiedteachers", userId), (doc) => {

        const docdata = (doc.data())

        if (docdata)
        {   
          setStatus(docdata);
 
          if(docdata.verifiedstatus === "Pending"){
            isApplied(true)
          }
          else
          {isApplied(false)}
        }
        else{
            
          setStatus("Unverified")
      
        }

  })
}
  
    
    //Teacher Verification
    function UploadFile(){
      if(profile.Occupation !== "Instructor")
      { 
       
        swal('Denied','This Feature are for Instructors Only',"error")

      }
      else
      { 
          if(verifstat.verifiedstatus === "Approved"){
            setShow4(true);
          }
          else{
            swal({
              title: "Do you want to help the members of the Guild?",
              text: "By pressing Ok, you will send a Verification Request",
              icon: "info",
              buttons: true
            })
            .then((willHelp) => {
              if (willHelp) {
                //OPEN MODAL WITH UPLOAD PICTURE OF ID OR ANY SUPPORTING PAPERS
                if(Applied === true){
                  swal("Oops!","You've already sent a request, Please be patient.","warning")
                }
                else{
                  setShow6(true);
                }
              
              } else {
                swal("Aw!","Your help is always needed! Come back if you changed your mind.","info");
              }
            });
          }
      
     
       
      }
   
    }

    const [file, setFile] = useState();

    const changeHandler = (event) => {

      setFile(event.target.files[0]);
      
    }

    const [progbar, setProgress] = useState(0);
    const [teachcreds, setCredentials] = useState("");

    async function requestVerif(){
      //convert date which is timestamp to String
var timestamp = Date.now();
var convertedDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)

      var data = {
        verifiedstatus: "Pending",
        created_at: convertedDate,
        img: teachcreds
        }
      await setDoc(doc(firestoredb, "verifiedteachers", userId), data).then(() => {
        swal("Awesome!, Verification can take up to 1 day Please be Patient!", {
          icon: "success",
      }).catch((error) => {
          alert("Error",error.code,"error")
      })
    })
  }
    function uploadCred(){
                 // Create the file metadata
/** @type {any} */
const metadata = {
  contentType: "image/png, image/gif, image/jpeg"
}
const storageRef = ref(storage, 'TeacherCredentials/' + userId);
const uploadTask = uploadBytesResumable(storageRef, file,metadata);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on('state_changed',
(snapshot) => {
// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
setProgress(progress);
switch (snapshot.state) {
case 'paused':
  //
  break;
case 'running':
//
  break;
  default:
    // 
}
}, 
(error) => {
// A full list of error codes is available at
// https://firebase.google.com/docs/storage/web/handle-errors
switch (error.code) {
case 'storage/unauthorized':
  swal("Warning!","Un-authorized Upload","error")
  break;
case 'storage/canceled':
  swal("Canceled","Upload Canceled","warning")
  // User canceled the upload
  break;

// ...

case 'storage/unknown':
  // Unknown error occurred, inspect error.serverResponse
  swal("Unknown Error","Inspect error.serverResponse","error")
  break;

  
  default:
    // 
}
}, 
() => {
// Upload completed successfully, now we can get the download URL
getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

  setCredentials(downloadURL);
 
  setShow6(false);

});
}
);
    }


    const [description, setDescription] = useState("");


    function uploadFiles(){
   
      const storageRef = ref(storage, 'TeacherUploads/' + description);
      const uploadTask = uploadBytesResumable(storageRef, file);
      
      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on('state_changed',
      (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(progress);
      switch (snapshot.state) {
      case 'paused':
        //
        break;
      case 'running':
      //
        break;
        default:
          // 
      }
      }, 
      (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
      case 'storage/unauthorized':
        swal("Warning!","Un-authorized Upload","error")
        break;
      case 'storage/canceled':
        swal("Canceled","Upload Canceled","warning")
        // User canceled the upload
        break;
      
      // ...
      
      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        swal("Unknown Error","Inspect error.serverResponse","error")
        break;
      
        
        default:
          // 
      }
      }, 
      () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      
      });
      }
      );
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
        
        {/* Container for Card User Profile Information */}
        <div className="main-content">

              <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" style={{minHeight: "600px", backgroundImage: "url(https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)", backgroundSize: "cover", backgroundPosition: "center top"}}>

                <span className="mask bg-gradient-default opacity-8"></span>

                <div className="container-fluid d-flex align-items-center">
                  <div className="row">
                    <div className="col-lg-7 col-md-10">
                      <h1 className="display-2 text-white">Hello, {profile.Name || ''}</h1>
                      <p className="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your profile information.</p>
                    </div>
                  </div>
                </div>
                
              </div>

              <div className="container-fluid mt--7" fluid="md" style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                <div className="row">

                  <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                    <div className="card card-profile shadow">
                      <div className="row justify-content-center">
                        <div className="col-lg-3 order-lg-2">
                          <div className="card-profile-image">
                            
                              <img src={avatar.img} alt="levelImage" className="rounded-circle m-3"/>

                          </div>
                        </div>
                      </div>
                      <div className=" text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                        
                      </div>
                      <div className="card-body pt-0 pt-md-4">
                        <div className="row">
                        </div>
                          <div className="text-center">
                            <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                              <div>
                                <span className="heading fs-2">{profile.level}</span>
                                <span className="description">My Level</span>
                              </div>                              
                            </div>
                          </div>
                        <div className="text-center">
                          <h3 className="fw-bold">
                          {profile.Name || ''}
                          </h3>
                          <div className="h5 font-weight-500">
                            {avatar.levelname}
                          </div>
                          <div className="h5 mt-4">
                                <Card.Text className="text-center">
                                  {avatar.desc}
                                </Card.Text>
                          </div>
                          <div>
                          {profile.Institution || ''}
                          </div>
                          <p onClick={handleShowOff} className="btn btn-sm btn-primary mt-4"><IoIcons.IoSettingsSharp/> Settings</p> {''}
                         { AdminCheck && <p onClick={AdminPanel} className="btn btn-sm btn-primary mt-4"><IoIcons.IoBarChart/> Admin</p> }
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-8 order-xl-1">
                    <div className="card shadow">
                      <div className="card-header bg-white border-0">
                        <div className="row align-items-center">
                          <div className="col-8">
                            <h3 className="mb-0 mt-4">My account</h3>
                          </div>
                          
                        </div>
                      </div>
                          {NotVerif &&
                          <div className="col-8">
                            <label>Verified Status:</label> <em className="text-primary">{verifstat.verifiedstatus}</em>
                          </div>
                          }
                      <div className="card-body mb-">
                        <form>
                          <h6 className="heading-small text-muted mb-4">User information</h6>
                          <div className="pl-lg-4">
                            <div className="row mb-3">

                              <div className="col-lg-6 mb-2">
                                <div className="form-group focused">
                                  <label className="form-control-label mb-2">Full Name</label>
                                  <input type="text" id="input-username" className="form-control form-control-alternative" placeholder="Username" value={profile.Name || ''} disabled/>
                                </div>
                              </div>

                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label className="form-control-label mb-2">Email address</label>
                                  <input type="email" id="input-email" className="form-control form-control-alternative" value={profile.email || ''} disabled />
                                </div>
                              </div>

                            </div>
                            <div className="row mb-3">
                              <div className="col-lg-6 mb-2">
                                <div className="form-group focused">
                                  <label className="form-control-label mb-2">Birthday</label>
                                  <input type="text" id="input-first-name" className="form-control form-control-alternative" value={profile.Birthday || ''} disabled/>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group focused">
                                  <label className="form-control-label mb-2">Gender</label>
                                  <input type="text" id="input-last-name" className="form-control form-control-alternative" value={profile.Gender || ''} disabled/>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="pl-lg-4">
                            <div className="row mb-3">
                              <div className="col-md-12">
                                <div className="form-group focused">
                                  <label className="form-control-label mb-2">Address</label>
                                  <input id="input-address" className="form-control form-control-alternative" value={profile.Address || ''} disabled type="text"/>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-4 mb-2">
                                <div className="form-group focused">
                                  <label className="form-control-label mb-2">Occupation</label>
                                  <input type="text" id="input-city" className="form-control form-control-alternative" value={profile.Occupation || ''} disabled/>
                                </div>
                              </div>
                              <div className="col-lg-8">
                                <div className="form-group focused">
                                  <label className="form-control-label mb-2">Institution</label>
                                  <input type="text" id="input-country" className="form-control form-control-alternative" value={profile.Institution || ''} disabled/>
                                </div>
                              </div>
                              
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
        </div>

        <div className="mt-5" style={{ textAlign: "center" }}>
            <h1>My ConquError Status</h1>

            <h5 className="text-primary">This Feature is under development!!!</h5>

            <div className="App">
              
              <Container fluid="md" style={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center"
                  }}>
                    <div style={{ width: '100%', height: 300, marginTop:'4rem', marginBottom:'4rem' }}>
                    <BarChart
                                          width={'100%'}
                                          height={'100%'}
                                          data={data}
                                          margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5
                                          }}
                                        >
                                          <CartesianGrid strokeDasharray="3 3" />
                                          <XAxis dataKey="name" />
                                          <YAxis />
                                          <Tooltip />
                                          <Legend />
                                          <Bar dataKey="pv" fill="#3a86ff" />
                                        </BarChart>
                    </div>
                    

              </Container>
            </div>    


            <Offcanvas show={showOff} onHide={handleCloseOff}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title><IoIcons.IoSettingsSharp/> Settings</Offcanvas.Title>
                </Offcanvas.Header>
                    <Offcanvas.Body>
                                          
                      <div className=" d-grid gap-2 mt-3 mb-3">
                          <Button variant="primary" onClick={handleShow5} className="mb-2 w-75 mx-auto d-block"><AiIcons.AiFillProfile/> Update Information</Button> 

                          <Button variant="primary" onClick={UploadFile} className="mb-2 w-75 mx-auto d-block"><AiIcons.AiFillFileText/> Upload Files</Button> 
                                              
                          <Button variant="primary" onClick={handleShow} className="mb-2 w-75 mx-auto d-block"><AiIcons.AiFillLock/> Change Password</Button> 
                                            
                          <Button variant="primary" onClick={handleShow2} className="mb-2 w-75 mx-auto d-block"><AiIcons.AiOutlineWechat/> Send Feedback</Button> 
                                                                  
                          <div className="fs-4 fw-bold mt-3 mb-3">Join our guild !</div>
                            <iframe src="https://discord.com/widget?id=911369671679283221&theme=dark" title="Discord" width="300" height="400" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" className="mx-auto d-block"></iframe>
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
                                                  <input value={currentPass || ''} onChange={e => setPass1(e.target.value)}  type={password} className="form-control"></input><br></br>
                                          
                                                  New Password: <br></br>
                                                  <input value={newPass1|| ''} onChange={e => setPass2(e.target.value)}  type={password} className="form-control"></input><br></br>
                                                  Confirm New Password: <br></br>
                                                  <input value={newPass2 || ''} onChange={e => setPass3(e.target.value)}  type={password} className="form-control"></input><br></br>

                                                  <i onClick={showPass} className={'fas fa-eye'}>Show/Hide Password</i>
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

                                               {/*Upload Cred*/}
                                               <Modal show={show6} onHide={handleClose6} backdrop="static" keyboard={false} >
                                            <Modal.Header closeButton>
                                              <Modal.Title>Upload Credentials</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                              <strong>Please Upload any Picture of Credentials that will Prove that you are Qualified to Provide Learning Materials</strong>
                                           <input type="file" accept="image/png, image/gif, image/jpeg"
                                          onChange={changeHandler}/>
                                               <ProgressBar animated now={progbar} className="progress"/>
                                         
                                            </Modal.Body>
                                            <Modal.Footer>
                                              <Button variant="secondary" onClick={handleClose6}>
                                                Close
                                              </Button>
                                              <Button variant="secondary" onClick={requestVerif}>
                                                Upload
                                              </Button>
                                            </Modal.Footer>
                                          </Modal>



                                          {/*Upload Files*/}
                                          <Modal show={show4} onHide={handleClose4} backdrop="static" keyboard={false} >
                                            <Modal.Header closeButton>
                                              <Modal.Title>Upload Files</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                              <label>File Description</label>
                                            <input type="text" onChange={e => setDescription(e.target.value)}/>
                                           <input type="file" accept=
                                          "application/msword, application/vnd.ms-powerpoint, application/pdf"
                                          onChange={changeHandler}/>
                                               <ProgressBar animated now={progbar} className="progress"/>

                                            </Modal.Body>
                                            <Modal.Footer>
                                              <Button variant="secondary" onClick={handleClose4}>
                                                Close
                                              </Button>
                                              <Button variant="secondary" onClick={uploadFiles}>
                                                Upload
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
                                                    <Form.Control ref={address}  name = "name" type="name" defaultValue={profile.Address} required placeholder="Enter Address"/>
                                                  </Form.Group>

                                                  <Form.Group id="gender">
                                                    <Form.Label>Gender</Form.Label>
                                                    <Form.Select aria-label="Default select example" ref={ gender }  required>
                                                      <option value={profile.Gender}>{profile.Gender}</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Transgender">Transgender</option>
                                                    <option value="Non-Binary">Non-Binary</option>
                                                    <option value="Not Specified">Rather not specify</option>
                                                    </Form.Select>
                                                  </Form.Group>

                                                <Form.Group id="occu">
                                                <Form.Label>Occupation</Form.Label>
                                                <Form.Select aria-label="Default select example"ref={ occu } onChange={e => OccupationValue(e)}required>
                                                <option value={profile.Occupation}>{profile.Occupation}</option>
                                                <option value="Student">Student</option>
                                                <option value="Professor">Professor</option>
                                                <option value="Others">Others.</option>
                                                </Form.Select>
                                                { occuHide &&  <Form.Control  className="mt-2" ref={occu }   name = "Occupation" type="text"  required placeholder="Enter Occupation" /> }
                                                </Form.Group>

                                                <Form.Group id="inst">
                                                <Form.Label>Institution</Form.Label>
                                                <Form.Select aria-label="Default select example" ref={ insti } onChange={e => InstitutionValue(e)} required>
                                                <option value={profile.Institution}>{profile.Institution}</option>
                                                <option value="LSPU">LSPU</option>
                                                <option value="PUP">PUP</option>
                                                <option value="TUP">TUP</option>
                                                <option value="BSIT">BSIT</option>
                                                <option value="DICT">DICT</option>
                                                <option value="DCET">DCET</option>
                                                <option value="Others">Others.</option>
                                                </Form.Select>
                                                { instiHide &&  <Form.Control className="mt-2" ref={insti}  name = "Institution" type="text"  required placeholder="Enter Institution"/> }
                    
                                                </Form.Group>

                                                <Button variant="primary" type="submit" className="btn btn-primary mt-3 w-100" > Update </Button>

                                                </Form>

                                                  </Modal.Body>
                                                  <Modal.Footer>
                                                    <Button variant="secondary" onClick={handleClose5}> Close</Button>
                                                  
                                                  </Modal.Footer>
                                            </Modal>
                  
                  
            <a href="#top" className="scroll-top">
              <i className="fa fa-chevron-up"></i>
                  
          </a>
        </div>

        <footer className="sticky-footer">
        <div>
        <FooterStyle className=" pt-10 text-white footer ">
        <div className="container d-flex align-items-center ">
          <div className="footer__col1">
            <img  src="../Assets/logo.svg" className="w-50 " alt="logo" />
            <ul className="list-unstyled">
            <li  className="mt-3 text-light">
            Learn and Develop your skills.
            </li>
            </ul>
            <div className="footer__col3">
          <h6 className="mt-2 text-white">Follow Us on</h6>
              <ul className="list-unstyled">
                <li className="mb-2 text-light"><FaIcons.FaFacebook/> <a href="https://www.facebook.com/theConquErrorph" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"> theConquErrorph</a> </li>
                <li className="mb-2 text-light"><FaIcons.FaYoutube/> <a href="https://www.youtube.com/channel/UCojmF97JXog4ITgDjNtfnqw" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"> theConquError</a></li>
                <li className="mb-2 text-light"><FaIcons.FaDiscord/> <a href="https://discord.gg/CBHw9cAJYS" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"> ConquError</a></li>
              </ul>
          </div>
          </div>
          <div className="footer__col2 ">
              <ul className="list-unstyled fw-bold ">
              <li><h4 className="text-white align-center mt-4 mb-3">Developed by</h4></li>
                <div className="rotate">
                <li className="d-flex justify-content-center">
                  <img className="inline-block align-center h-20 image-center" src="../assets/TJDev.png" alt="logo"/></li>
                </div>
                <p className="d-flex justify-content-center text-light">Technojet.Dev</p>  
              </ul>
          </div>
          <div className="footer__col3 ">
              <ul className="list-unstyled ">
              <h4  className="d-flex justify-content-center text-white">Contacts</h4>
                <li className="mb-2  justify-content-center align-items-center text-light"><FaIcons.FaHome/> Lopez, Quezon </li>
                <li className="mb-2  justify-content-center align-items-center text-light"><FaIcons.FaGoogle/> technojet.devofficial</li>
                <li className="mb-2  justify-content-center align-items-center text-light"><FaIcons.FaPhoneAlt/> +63 956 528 0371</li>
              </ul>
          </div>
          <div className="footer__col4">
              <ul className="list-unstyled">
              <h4  className="d-flex justify-content-center text-white">Built With</h4>
                <li className="mb-2 text-light"><FaIcons.FaReact/> ReactJS</li>
                <li className="mb-2 text-light"><FaIcons.FaGripfire/> Firebase</li>
                <li className="mb-2 text-light"><FaIcons.FaBootstrap/> Bootstrap 5</li>
              </ul>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            
            <p className="col-sm d-flex justify-content-center text-center text-light">
              &copy;{new Date().getFullYear()} Technojet.Dev | Design by PSIX | Beta v1.19.121521
            </p>
          
          </div>
        </div>
      </FooterStyle>
        </div>
        </footer>
    </>
    )
}

export default Profile
