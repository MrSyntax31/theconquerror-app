import React, {  useState , useEffect, useRef } from 'react';

//Dependencies
import Helmet from 'react-helmet';
import { Link } from "react-router-dom"

//Styles & Libraries
import {  Modal, Button, Card, Offcanvas, Form, Popover, OverlayTrigger, Table } from 'react-bootstrap';

import * as IoIcons from 'react-icons/io5';
import * as AiIcons from 'react-icons/ai';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";


import './styles.css'
import swal from 'sweetalert';

import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import 'csshake';

import './Footer.css'


//Firebase Database
import { getAuth, updatePassword, reauthenticateWithCredential , EmailAuthProvider, sendPasswordResetEmail } from '@firebase/auth';
import { collection, getFirestore, doc, setDoc,  onSnapshot, query , updateDoc } from 'firebase/firestore';
import { getDatabase, ref, onValue, update } from "firebase/database";

//Charts
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
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
 
  //Fetch Data of current Logged-in User 
  const user = auth.currentUser;

   //fetches the id of the current logged-in user which will be used to reference the data inside the Realtime database
   const userId = auth.currentUser.uid;   

    //MODALS
    //Change Password
    const [show, setShow] = useState(false);
    //Feedback
    const [show2, setShow2] = useState(false);

    //Feedback
    const [showC, setShowC] = useState(false);

    //Upload Files
    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);

    //Change Password
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Feedback
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    //Cerificate
    const handleCloseC = () => setShowC(false);
    const handleShowC = () => setShowC(true);

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
     //setBday(snapshot.val().Birthday)
  })
}
        
        showProfile();
        verificationStatus();
       

      timer();

   
    
       
  },[]); // eslint-disable-line react-hooks/exhaustive-deps
  


 
  function onLoad() {

    const level1 = sessionStorage.getItem("userLevel")

    if(level1 > 15)
    {
      onSnapshot(doc(firestoredb, "warrioravatar", "15"), (doc) => {

        const docdata = (doc.data())

        if (docdata)
        {   
            setAvatar(docdata);
            
          
        }
        else{
            
          swal("Something is Wrong","Cannot Load Avatar","warning");
           
        }

        
    });
    }
    else{
      onSnapshot(doc(firestoredb, "warrioravatar", level1), (doc) => {

        const docdata = (doc.data())

        if (docdata)
        {   
            setAvatar(docdata);
            
          
        }
        else{
            
          swal("Something is Wrong","Cannot Load Avatar","warning");
           
        }

        
    });
    }
 


}
const gender = useRef();
const occu = useRef();
const insti  = useRef();
const address = useRef();
const [bday, setBday] = useState("");

function updateProfile(){ 
  
  if (sessionStorage.getItem('UpdateKey') === null) {

        // A post entry.
    const postData = {  
      Name: profile.Name,
      Birthday: bday.toLocaleString("en-IN", {timeZone: "Asia/Kolkata"}).split(',')[0],
      Gender : gender.current.value,
      Occupation: occu.current.value,
      Address: address.current.value,
      email: profile.email,
      Institution: insti.current.value,
      level: profile.level,
      Permission: profile.Permission
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


useEffect(() =>{

  adventurerTag()

},[])  // eslint-disable-line react-hooks/exhaustive-deps


async function UpdateAdventurerName(value){

  const DbRef = doc(firestoredb, "userdata",userId);

         
  await updateDoc(DbRef, {
    AdventurerName: value

});

swal("Hey There!","Thanks "+value+", If you ever change your mind and want to update your Adventurer Name just send us a ticket on our Discord","info")

}

function adventurerTag(){
  onSnapshot(doc(firestoredb, "userdata", userId), (doc) => {

      const docdata = (doc.data())

      if (docdata)
      {   
    

        if(docdata.AdventurerName){
          console.log("welcome "+docdata.AdventurerName)
        }
        else
        {
          swal("You don't have an Adventurer Name yet:", {
            content: "input",
          })
          .then((value) => {

          if(value === null)
          {
            swal("Later!","You can set your Adventurer Name later.","info")
          }
          else{
            UpdateAdventurerName(value)
          }
           
           
          });
        }

      }
      else{
          
      // Do Nothing
    
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
            history.push("/UploadFile")
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
                  requestVerif()
                }
              
              } else {
                swal("Aw!","Your help is always needed! Come back if you changed your mind.","info");
              }
            });
          }
      
     
       
      }
   
    }


    async function requestVerif(){
      //convert date which is timestamp to String
var timestamp = Date.now();
var convertedDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)

      var data = {
        verifiedstatus: "Pending",
        created_at: convertedDate
        }
      await setDoc(doc(firestoredb, "verifiedteachers", userId), data).then(() => {
        swal("Awesome!, Verification can take up to 1 day Please be Patient!", {
          icon: "success",
      }).catch((error) => {
          alert("Error",error.code,"error")
      })
    })
  }


          const [graphdata, setGraphData] = useState([]);

    function Analytics(){

      const collectionRef = collection(firestoredb, "userdata",userId,"coursesfinished");
    const q = query(collectionRef);
    onSnapshot(q, (snapshot) =>
    setGraphData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

    )
  }

  
  const [certificateData, setCertificate] = useState([]);

  function Certificate(){

    const collectionRef = collection(firestoredb, "userdata",userId,"Certificates");
  const q = query(collectionRef);
  onSnapshot(q, (snapshot) =>
  setCertificate(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

  )
}
  useEffect(() => {
  

    Analytics()
    Certificate()

  },[]); // eslint-disable-line react-hooks/exhaustive-deps
  //For Graphs (Data)
  


  const data =  graphdata.map((analytics) => ( 
    {
    
      name: analytics.CourseName,
      Score: analytics.ScoreOnTest,
      tries: analytics.tries,
    }
  ))

  const dataList = graphdata.map((analytics) => (
  
    <tr key={analytics.id}>
    <th>{analytics.CourseName}</th>
    <th>{analytics.id}</th>
    <th>{analytics.AssessmentStatus}</th>
    <th>{analytics.ScoreOnTest}</th>
    <th>{analytics.finished_at}</th>
    <th>{analytics.tries}</th>
    </tr>
 
  )
  )

  async function DownloadCert(e){

    const certid = e.target.getAttribute("data-id")

    await window.open(certid)

  }

  const cert = certificateData.map((certData) => (
   
    <div key={certData.id}>
    <strong>{certData.id}</strong>
    <Button data-id={certData.Link} onClick={DownloadCert} style={{ textDecoration: 'none', marginLeft:'3px' }} className="mb-4"><IoIcons.IoDownload/>Download</Button>
    </div>
  
  ))

   //For Popup Notice
   const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Heads Up!</Popover.Header>
      <Popover.Body>
        This feature has been temporarily <strong>Disabled</strong>. It may not work as intended.
      </Popover.Body>
    </Popover>
  );


  
    return (
        <>
        {/* Division for Tab Page and Description*/}
        <div>
            <Helmet>
              <title>ConquError | Profile</title>
              <meta name="description" content="This is your user profile description." />
            </Helmet>
        </div>

       <Navbar/>
        
        {/* Container for Card User Profile Information */}
        <div className="main-content mb-5">

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
                          <p onClick={UploadFile} className="btn btn-sm btn-primary mt-4"><AiIcons.AiFillFileText/> Upload Files</p> {''}
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
                  <img className="inline-block align-center h-20 image-center" src="https://firebasestorage.googleapis.com/v0/b/conquerror-development.appspot.com/o/Homepage%2FTJDev.png?alt=media&token=e3f6d151-99c7-4c31-96ad-506b6fff9ff1" alt="logo"/></li>
                </div>
                <p className="d-flex justify-content-center text-light">Technojet.Dev</p>  
              </ul>
          </div>
          <div className="footer__col3 ">
              <ul className="list-unstyled ">
              <h4  className="d-flex justify-content-center text-white">Contacts</h4>
                <li className="mb-2  justify-content-center align-items-center text-light"><FaIcons.FaHome/> Lopez, Quezon </li>
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
              &copy;{new Date().getFullYear()} Technojet.Dev | Design by PSIX | Beta v1.21.012022
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
