import React, {useEffect,useState, useRef} from 'react';
import { Helmet } from "react-helmet";
import {  Card, Modal, Button,  ProgressBar, Alert, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { onSnapshot,collection,getFirestore, doc,  query, orderBy, limit, addDoc, setDoc } from 'firebase/firestore';
import {} from '../../firebase/firebase'
import {  Link, useHistory} from "react-router-dom"
import {Container,  Row,Col, Form } from 'react-bootstrap'
import { getAuth, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import * as GoIcons from 'react-icons/go';
import './Forum.css';
import Navbar from '../../Components/Navbar/Navbar'
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import swal from 'sweetalert';
import ReCAPTCHA from 'react-google-recaptcha';
import * as AiIcons from 'react-icons/ai';

      function Forum() {

        //Modal User Info
        const [smShow, setSmShow] = useState(false);

        //Reports
        const [showR, setShowR] = useState(false);

        const handleCloseR = () => setShowR(false);
       
        
        //declare firestore services
        const forumdb = getFirestore();
        const auth = getAuth();
        // Create a root reference
        const storage = getStorage();
         
        //get current logged-in user
        const currentUser = auth.currentUser;

        //used to route the user through various pages of the website
        const history = useHistory()
          
        //Ask Question Modal*
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
 

        //errors are thrown here
        const [error, setError] = useState("")

        const [tagCheck, checkTag] = useState(false);
        //declare text input for new question
        const [question, setQuestion] = useState();
        const [description, setDesc] = useState();

        //declare area to throw list for forum
        const [topics, setDiscussion] = useState([]);

        const [tags, setTags] = useState();

        const [img, setImg] = useState("");
        const [fileupload, setFile] = useState([]);
        const [progbar, setProgress] = useState(0);
        
        const [validated, setValidated] = useState(false);

        const handleSubmit = (event) => {
          const form = event.currentTarget;
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
          AddNew();
           
            event.preventDefault();
         }
        setValidated(true);
        event.preventDefault();
        };

        const handleChange = (e) => {
        
          setTags(e.target.getAttribute("value"));
          checkTag(true);
         
        };
        
        const collectionRef = collection(forumdb, "topics");
 

        useEffect(
          () => {
            const q = query(collectionRef,orderBy("created_at","desc"), limit(5));
        
            onSnapshot(q, (snapshot) =>
              setDiscussion(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

            )
            


          },[]); // eslint-disable-line react-hooks/exhaustive-deps
      
          const changeHandler = (event) => {

            setFile(event.target.files[0]);
        
          }

          function insertCode(){
              // Create the file metadata
/** @type {any} */
const metadata = {
  contentType: 'image/jpeg'
};


const storageRef = ref(storage, 'Forum/' + fileupload.name);
const uploadTask = uploadBytesResumable(storageRef, fileupload, metadata);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
   setProgress(progress);
    switch (snapshot.state) {
     case 'paused':
        setError('Upload is paused');
        break;
    case 'running':
        setError('Upload is running');
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
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;

        
        default:
          // 
    }
  }, 
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setImg(downloadURL);
      setProgress(0)
      setError("File Upload Complete")
    });
  }
);
          }
        
     

          //this is used to fetch the data from Discussion on Topics.MAP on the forum list
        const handler = function(e){
        
         localStorage.setItem('threadID',e.target.getAttribute("data-id"));
         
          history.push("/Thread")
          
      };

          //Modal login  const [show, setShow] = useState(false);

     const [showMl, setShowMl] = useState(false);

     const handleCloseMl = () => setShowMl(false);
   
 
      //errors are thrown here
      const [error1, setError1] = useState("")
 
      //for textbox used in the Log-in Popup
      const emailRef = useRef()
      const passwordRef = useRef()
  
      const [recaptchaHandler, setHandler] = useState(false);
  
      function onChange(value) {
  
        if(value !== null)
        {
          setHandler(true)
        
        }
        else{
          setHandler(false)
        }
        
       }
  
       const [password, PWHandler] = useState("password");
  
       const showPass = (event) => {
  
        if(password === "password"){
          PWHandler("text");
        }
        else {
          PWHandler("password");
        }
  
       };
  
       const [validated1, setValidated1] = useState(false);
  
       const handleSubmitLogin = (event) => {
         const form = event.currentTarget;
         if (form.checkValidity() === false) {
           event.preventDefault();
           event.stopPropagation();
       }
       else{
           onLogin();
           event.preventDefault();
        }
        setValidated1(true);
       event.preventDefault();
       };
  
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
       
  
             //log in function 
             function onLogin(){
              setError1("");
                if (recaptchaHandler === true){
  
                   // the user is logged-in using the value inside the textboxes emailRef and passwordRef
              signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
              .then((userCredential) => {
                // Signed in 
                const verifiedCheck = auth.currentUser.emailVerified;
  
                  if (verifiedCheck === true){
                   
                      sessionStorage.setItem('sessionKey',sessionId(23)) 
                  
  
                      setShowMl(false)
                       history.push("/profile")
                  }
                  else{
                
                    signOut(auth).then(() => {
                        setError1("Please check your Email to verify your Account!")
        
                    }).catch((error) => {
                      setError1(error.code)
                      });
                    
                    
                  }
                
  
              })
              .catch((error) => {
                //if user fails to log-in, an error message is set
                const errorMessage = error.code;
                setError1(errorMessage+" If problem persist please contact us!")
              
                
              });
  
                } else {
  
                  setError1("Please verify using Recaptcha")
  
                }
             
              return
              }
      
        const [avatar, setAvatar] = useState([]);
    
        const [showUserEmail, setUserEmail] = useState([]);
        const [showUserLevel, setUserLevel] = useState([]);

        const showProfile = function(e) {

          const dataemail = e.target.getAttribute("data-id");
          const datalvl = e.target.getAttribute("data-lvl");

          setUserEmail(dataemail)
          setUserLevel(datalvl)

          onSnapshot(doc(forumdb, "warrioravatar", `${datalvl}`), (doc) => {
      
              const docdata = (doc.data())
      
              if (docdata)
              {   
                  setAvatar(docdata);
               
                  setSmShow(true);  
              }
              else{
                  
                swal("Something is Wrong","No Data Found","warning");
                setSmShow(false);
              }
      
              
          });
            
        };

        //Maps the data inside firestore collection (topics) so that it can be visible to the user
        const Discussion= topics.map((topic) => (  <div className="Discussion-Board p-3 m-2 border border-primary rounded" key={topic.id} > 
        <p>Uploaded by: <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Report User!</Tooltip>}><label className="text-primary" style={{cursor:"pointer"}} data-id ={topic.created_by} data-lvl ={topic.userlvl} onClick={ showProfile }>{topic.created_by}</label></OverlayTrigger> on <strong>
          {topic.created_at}</strong></p>  
          
          
        <div className="heading" style={{cursor:"pointer"}}><ul> <li onClick={ handler}  data-id ={topic.id}>{topic.title}<br></br><strong>Description:</strong> {topic.desc} <br></br><strong>Tags: </strong>{topic.tags}</li></ul><Badge bg="primary">{topic.case_status}</Badge></div></div> ))
        

        
         async function AddNew() {

          setError("")
                if (tagCheck === true) {
                

                  //if user is logged-in
                const userlevel = sessionStorage.getItem("userLevel")
               //convert date which is timestamp to String
        var timestamp = Date.now();
        var convertedDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)
        
       
                      // Add a new document with a generated id.
          const docRef = await addDoc(collection(forumdb, "topics"), {
            title: question,
          desc: description,
          created_by: currentUser.email,
          userid: currentUser.uid,
          created_at: convertedDate,
          tags: tags,
          sampcodeimg: img,
          userlvl: userlevel,
          case_status: "unsolved"
        
          });
        
            setImg("")
            setDesc("");
            setQuestion("");
            setError("")
            setShow(false)
        
            localStorage.setItem('threadID',docRef.id);
         
           history.push("/Thread")
        
          
        }
        else {
          setError("Select a Tag")
        }
      
          
        }


          const [report, ReportUser] = useState();      
            //Function for Modal (Send Feedback)
        async  function sendReport(e){
          
          const userEmail = e.target.getAttribute("data-id");
            //If there is no user logged-in, returns the user to Login page to continue
          // Rederence the Firebase Service for Firestore
          const userFeedback = doc(collection(forumdb, "reports"));
  
          //convert date which is timestamp to String
          var timestamp = Date.now();
          var convertedDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)
  
          // then create the array with the data to be set inside firestore in collection "feedback"
          var data = {
          ReportDesc: report,
            Email: userEmail,
          dateofReport: convertedDate
          }
          if (report === "") {
            swal("Error","You cannot send an Empty field","error")
          }
          else{
          //puts the document inside the collection "feedback" in firestore
          await setDoc(userFeedback, data).then(() =>{
           
           
            //show a success message

            swal("Report Sent", "Thank you for making ConquError a healthy community.", "success");
          

          }).catch((error) => {

            swal("Something is Wrong",error.code,"warning");
          }).finally(() =>{
        
          })
        }
        
  
            }

 
    function AskQuestion(){

      if(currentUser === null)
      {
          
        setShowMl(true)
        swal("Oops","You need to be a member of the Guild to ask for Help","error")
      }
      else
      {
        setShow(true)
      }

    }
      
    function askReport(){

      if(currentUser === null)
      {
        setSmShow(false);
        setShowMl(true)
        swal("Oops","It seems that you're not from this Land","error")
      }
      else
      { 
        setSmShow(false);
        setShowR(true);
       
      }

    }

  return (
            <>
            {/* Division for Tab Name and Description*/}
            <div>
                <Helmet>
                  <title>ConquError | Forum</title>
                  <meta name="description" content="ConquError Forum" />
                </Helmet>
              </div>

            <Navbar/>

            <section className="w-100">
              <div className="container">
                  <Card>
                    <Card.Header>
                    <div className="row">
                    <div className="col-md-6">
                    <h3  className="text-primary fw-bold mt-5">ConquErroRoom</h3>
                    <a class="group" id="page-wrap" href="https://pickjb.com/" target="_blank" rel="external noopener"><svg class="logo" xmlns="http://www.w3.org/2000/svg" width="102" height="96" viewBox="0 0 85 80" preserveAspectRatio="xMinYMin meet"><path d="M84.97 49.03c.1 2.14-.06 2.97-.1 3.25-.45 4.7-2.56 8.44-6.6 11-3.98 2.5-8.43 3.3-13.02 3.33-8.38.1-16.75.1-25.13.1h-1.05V1.4c0-.5-.06-.9-.1-1.38H65.1c.24.05.47.13.7.17 1.65.2 3.3.4 4.92.8 3.7.9 7.04 2.5 9.3 5.8 3.55 5.1 2.9 13.1-1.43 18-2.6 2.9-6 4.7-9.5 6.1l-2.6.9c.4.1.7.2.9.3 2.7 1.1 5.6 1.9 8.2 3.3 4.5 2.3 8.2 5.8 8.94 11M52.2 57.2c4.68-.1 9.3.15 13.8-1.4 1.83-.66 3.2-1.9 3.8-3.78 1.17-3.56.78-7-1.7-9.9-4.2-4.9-9.86-5.6-15.9-5.4v20.5zm.03-48v18.65c2.24-.14 4.42-.13 6.56-.45 6-.84 9.6-5.3 9.3-11.1-.2-3.66-1.7-5.5-5.3-6.36-3.5-.83-7.07-.7-10.6-.7zM0 68.53c.43.1.88.14 1.3.28C4.6 70 8 70.6 11.53 70.5c.9-.03 1.8-.12 2.66-.32 2.8-.64 4.3-2.64 4.7-5.37.3-2 .6-4.1.6-6.1V.1h14l-.1 1.25c0 18.4.05 36.8-.04 55.2 0 3.2-.38 6.44-.94 9.6-.7 3.8-2.3 7.25-5.4 9.8-2.6 2.08-5.63 3.13-8.86 3.64-1.54.2-3.12.3-4.7.5h-2.9c-1.14-.14-2.3-.2-3.46-.4-2.36-.38-4.7-.8-7.12-1.2"/></svg><div id="inner-wrap"><svg class="waves" xmlns="http://www.w3.org/2000/svg" width="1440" height="321.75" viewBox="0 0 960 214.5" preserveAspectRatio="xMinYMid meet"><defs><style>.waves>path{-webkit-animation:a 17390ms ease-in-out infinite alternate-reverse both;-moz-animation:a 17390ms ease-in-out infinite alternate-reverse both;-ms-animation:a 17390ms ease-in-out infinite alternate-reverse both;-o-animation:a 17390ms ease-in-out infinite alternate-reverse both;animation:a 17390ms ease-in-out infinite alternate-reverse both;-webkit-animation-timing-function:cubic-bezier(.25,0,.75,1);-moz-animation-timing-function:cubic-bezier(.25,0,.75,1);-ms-animation-timing-function:cubic-bezier(.25,0,.75,1);-o-animation-timing-function:cubic-bezier(.25,0,.75,1);animation-timing-function:cubic-bezier(.25,0,.75,1);-webkit-will-change:transform;-moz-will-change:transform;-ms-will-change:transform;-o-will-change:transform;will-change:transform}.waves>path:nth-of-type(1){-webkit-animation-duration:20580ms;-moz-animation-duration:20580ms;-ms-animation-duration:20580ms;-o-animation-duration:20580ms;animation-duration:20580ms}.waves>path:nth-of-type(2){-webkit-animation-delay:-2690ms;-moz-animation-delay:-2690ms;-ms-animation-delay:-2690ms;-o-animation-delay:-2690ms;animation-delay:-2690ms;-webkit-animation-duration:13580ms;-moz-animation-duration:13580ms;-ms-animation-duration:13580ms;-o-animation-duration:13580ms;animation-duration:13580ms}g>path:nth-of-type(1){-webkit-animation-delay:-820ms;-moz-animation-delay:-820ms;-ms-animation-delay:-820ms;-o-animation-delay:-820ms;animation-delay:-820ms;-webkit-animation-duration:10730ms;-moz-animation-duration:10730ms;-ms-animation-duration:10730ms;-o-animation-duration:10730ms;animation-duration:10730ms}.waves>path:nth-of-type(1),g>path:nth-of-type(2){-webkit-animation-direction:alternate;-moz-animation-direction:alternate;-ms-animation-direction:alternate;-o-animation-direction:alternate;animation-direction:alternate}@-webkit-keyframes a{0%{-webkit-transform:translateX(-750px);transform:translateX(-750px)}100%{-webkit-transform:translateX(-20px);transform:translateX(-20px)}}@-moz-keyframes a{0%{-moz-transform:translateX(-750px);transform:translateX(-750px)}100%{-moz-transform:translateX(-20px);transform:translateX(-20px)}}@-ms-keyframes a{0%{-ms-transform:translateX(-750px);transform:translateX(-750px)}100%{-ms-transform:translateX(-20px);transform:translateX(-20px)}}@-o-keyframes a{0%{-o-transform:translateX(-750px);transform:translateX(-750px)}100%{-o-transform:translateX(-20px);transform:translateX(-20px)}}@keyframes a{0%{-webkit-transform:translateX(-750px);-moz-transform:translateX(-750px);-ms-transform:translateX(-750px);-o-transform:translateX(-750px);transform:translateX(-750px)}100%{-webkit-transform:translateX(-20px);-moz-transform:translateX(-20px);-ms-transform:translateX(-20px);-o-transform:translateX(-20px);transform:translateX(-20px)}}</style><linearGradient id="a"><stop stop-color="#00A8DE"/><stop offset="0.2" stop-color="#333391"/><stop offset="0.4" stop-color="#E91388"/><stop offset="0.6" stop-color="#EB2D2E"/></linearGradient></defs><path fill="url(#a)" d="M2662.6 1S2532 41.2 2435 40.2c-19.6-.2-37.3-1.3-53.5-2.8 0 0-421.3-59.4-541-28.6-119.8 30.6-206.2 75.7-391 73.3-198.8-2-225.3-15-370.2-50-145-35-218 37-373.3 36-19.6 0-37.5-1-53.7-3 0 0-282.7-36-373.4-38C139 26 75 46-1 46v106c17-1.4 20-2.3 37.6-1.2 130.6 8.4 210 56.3 287 62.4 77 6 262-25 329.3-23.6 67 1.4 107 22.6 193 23.4 155 1.5 249-71 380-62.5 130 8.5 209 56.3 287 62.5 77 6 126-18 188-18 61.4 0 247-38 307.4-46 159.3-20 281.2 29 348.4 30 67 2 132.2 6 217.4 7 39.3 0 87-11 87-11V1z"/><path fill="#F2F5F5" d="M2663.6 73.2S2577 92 2529 89c-130.7-8.5-209.5-56.3-286.7-62.4s-125.7 18-188.3 18c-5 0-10-.4-14.5-.7-52-5-149.2-43-220.7-39-31.7 2-64 14-96.4 30-160.4 80-230.2-5.6-340.4-18-110-12-146.6 20-274 36S820.4 0 605.8 0C450.8 0 356 71 225.2 62.2 128 56 60.7 28-.3 11.2V104c22 7.3 46 14.2 70.4 16.7 110 12.3 147-19.3 275-35.5s350 39.8 369 43c27 4.3 59 8 94 10 13 .5 26 1 39 1 156 2 250-70.3 381-62 130.5 8.2 209.5 56.3 286.7 62 77 6.4 125.8-18 188.3-17.5 5 0 10 .2 14.3.6 52 5 145 49.5 220.7 38.2 32-5 64-15 96.6-31 160.5-79.4 230.3 6 340 18.4 110 12 146.3-20 273.7-36l15.5-2V73l1-.5z"/><g fill="none" stroke="#E2E9E9" stroke-width="1"><path d="M0 51.4c3.4.6 7.7 1.4 11 2.3 133.2 34 224.3 34 308.6 34 110.2 0 116.7 36.6 229.8 26 113-11 128.7-44 222-42.6C865 73 889 38 1002 27c113-10.8 119.6 25.6 229.8 25.6 84.4 0 175.4 0 308.6 34 133 34.2 277-73 379.4-84.3 204-22.5 283.6 128.7 283.6 128.7"/><path d="M0 6C115.7-6 198.3 76.6 308 76.6c109.6 0 131.8-20 223-28.3 114.3-10.2 238.2 0 238.2 0s124 10.2 238.3 0c91-8.2 113.2-28 223-28S1425 103 1541 91c115.8-11.8 153.3-69 269.3-84.6 116-15.5 198.4 71 308 71 109.8 0 131.8-20 223-28 114-10.2 237.7 0 237.7 0s37.4 2.4 82.8 3.7"/></g></svg><svg class="text" xmlns="http://www.w3.org/2000/svg" width="1440" height="321.75" viewBox="0 0 1440 321.8" preserveAspectRatio="xMidYMid meet" aria-label="Hello, World!"><path d="M240.8 223h-33v-53.4H151V223h-33.2V88H151v52.5h56.8V88.1h33V223zM363.2 180.7H289c1.3 6 4 10.6 7.8 14.2 4 3.6 8.6 5.3 14 5.3 10 0 17.2-3.9 21.5-11.6l28.6 5.8a48.4 48.4 0 0 1-27.3 27.6 59.7 59.7 0 0 1-43.3.2 49.6 49.6 0 0 1-28.8-28.2 56.2 56.2 0 0 1-4.1-21.6c0-7.6 1.4-14.7 4.1-21.4a49.8 49.8 0 0 1 28.9-28.2 55 55 0 0 1 40.5-.2 49 49 0 0 1 27.8 28 60 60 0 0 1 4.4 21.8v8.3zM298 149.4c-4 2.9-6.8 6.7-8.3 11.6h41.7c-1.5-5.1-4-9-7.8-11.8-3.7-2.8-7.9-4.1-12.6-4.1s-9 1.4-13 4.3zM379.7 223V78h32.2v145h-32.2zM435 223V78h32.3v145H435zM557 121.8c6.2 1.7 12.4 5 18.8 9.8 6.3 4.8 11 11 14.4 18.3a54.9 54.9 0 0 1 .6 44c-3 6.6-7 12.3-12.1 17.1a59 59 0 0 1-56.6 12.3c-6.2-1.7-12.5-5-19-9.8-6.3-4.8-11.1-11-14.4-18.4a55.2 55.2 0 0 1-.6-44c2.9-6.6 6.9-12.2 12-17a54.2 54.2 0 0 1 18-11 61.2 61.2 0 0 1 39-1.3zm-7.2 74.4a26 26 0 0 0 14.3-23.8c0-7.5-2.5-13.7-7.4-18.7s-10.5-7.4-17-7.4c-4 0-8 1-12 3.2-4 2.1-7.2 5.3-9.5 9.6a27.8 27.8 0 0 0 .9 28.2 23 23 0 0 0 10.2 8.9c3.8 1.6 7.3 2.4 10.4 2.4 3 0 6.3-.8 10-2.4zM595 249.6l12-58h35.6v.8l-23.2 57.2h-24.3zM850.1 223h-35.6L792 139.6 769.2 223h-35.4L695.3 88h34l23.6 85 23.2-85h31.6l23.1 85 23.6-85h34.2L850 223zM958.9 121.8c6.1 1.7 12.4 5 18.7 9.8 6.3 4.8 11 11 14.4 18.3a54.9 54.9 0 0 1 .6 44c-3 6.6-7 12.3-12.1 17.1a59 59 0 0 1-56.6 12.3c-6.2-1.7-12.5-5-18.9-9.8s-11.2-11-14.5-18.4a55.6 55.6 0 0 1-.6-44c2.9-6.6 7-12.2 12-17a54.2 54.2 0 0 1 18.1-11 61.2 61.2 0 0 1 38.9-1.3zm-7.3 74.4a26 26 0 0 0 14.3-23.8c0-7.5-2.4-13.7-7.3-18.7-5-5-10.6-7.4-17-7.4-4 0-8.1 1-12.1 3.2-4 2.1-7.2 5.3-9.5 9.6a27.8 27.8 0 0 0 1 28.2 23 23 0 0 0 10 8.9c4 1.6 7.5 2.4 10.5 2.4s6.3-.8 10.1-2.4zM1087.7 121.3l-1.4 32.2h-5.9c-23.2 0-34.8 12.6-34.8 37.9V223h-32.2V122h32.2v19.2c2.8-4.5 6.2-8.5 10-11.8a33 33 0 0 1 12.6-7c4.4-1.2 8.5-1.9 12.2-1.9 2.7 0 5.1.3 7.3.8zM1101.2 223V78h32.2v145h-32.2zM1262.8 223h-32.2v-8a45.1 45.1 0 0 1-31.4 11 48.2 48.2 0 0 1-45.4-32 58.8 58.8 0 0 1-2.6-34 52.4 52.4 0 0 1 14.2-27 46.8 46.8 0 0 1 33.8-14c12.8-.1 23.2 3.6 31.4 11V78h32.2v145zm-46.6-26.8c3.9-1.6 7.2-4.6 10-9s4.4-9.2 4.4-14.7c0-7.6-2.4-13.8-7.3-18.8-5-5-10.7-7.4-17.4-7.4-5.1 0-9.7 1.4-13.7 4.2s-6.8 6.3-8.4 10.4c-1.5 4-2.3 8-2.3 11.6s.8 7.5 2.3 11.6a23.7 23.7 0 0 0 32.4 12zM1317.7 193.7c3.5 3.5 5.3 7.7 5.3 12.6 0 5-1.7 9.1-5.2 12.6a18 18 0 0 1-13 5c-5.5 0-9.9-1.6-13.4-5a17 17 0 0 1-5.2-12.6c0-4.9 1.8-9 5.3-12.6s8-5.3 13.2-5.3c5.1 0 9.4 1.7 13 5.3zm4.5-99.4l-2 82.6h-31.8l-2-82.6v-6.2h35.8v6.2z"/></svg></div></a>
                    </div>
                    <div className="col-md-6">
                    <Button variant="primary" onClick={AskQuestion}>Ask for Help</Button>
                    </div>
                    </div>
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>
                      <div className="row">
                      <div className="col-md-6">
                      <h5 className="text-primary fw-bold">Forum</h5>
                      </div>
                      <div className="col-md-6">
                      <Button variant="primary" onClick={askReport}>Report User</Button>
                      </div>
                      </div>
                      </Card.Title>
                      <Card.Text>
                      <div className="row">
                      <div className="col-md-6">
                      <p>
                      <strong>ConquError</strong> is a community of users who are interested in the latest technological advancements and the latest trends in the world of technology.
                      </p>
                      </div>
                      </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
              </div>
            </section>
            











            <div className="" style={{marginTop:'6rem'}}>
            {/* Container for Search and Ask Question*/}
            <Container fluid="md" style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
               }}>

                    {/* Division for Discussion Board*/}
               
                        <section className="text-center mt-5 mb-5">
                          <div>                                  
                                <div className=" text-start">
                                  <h3 className="fw-bold fs-m text-start"><GoIcons.GoCommentDiscussion/> Most Recent Topics <Button variant="primary" onClick={AskQuestion} className="mt-4 mb-2"> Ask a Question</Button> </h3>     
                                      {Discussion}

                                      <Modal size="sm" show={smShow}  onHide={() => setSmShow(false)}  aria-labelledby="example-modal-sizes-title-sm">
                                        <Modal.Header closeButton>
                                          <Modal.Title id="example-modal-sizes-title-sm">
                                            User Information
                                          </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="text-center">
                                              <img src={avatar.img} className="rounded-circle" alt="UserLvl" width="100" height="100"/>
                                            </div>
                                            <div className="text-center">
                                            <strong>Email</strong>
                                              <h6>{showUserEmail}</h6>
                                              </div>
                                            <div className="text-center">
                                              <strong>User Level on post</strong>
                                              <h5>{showUserLevel}</h5>
                                            </div>
                                            <Button className="btn w-100 text-light"  onClick={askReport}><GoIcons.GoReport/> Report</Button>
                                        </Modal.Body>
                                      </Modal>
                                </div>


                                <Modal show={showR} onHide={handleCloseR}>
                                  <Modal.Header closeButton>
                                    <Modal.Title>Report User</Modal.Title>
                                  </Modal.Header>
                                  <Modal.Body>
                                    <Form>
                                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>State your problem.</Form.Label>
                                        <Form.Control as="textarea" value={report || ""} onChange={e => ReportUser(e.target.value)} rows={3} />
                                        <Button className="btn w-100 mt-3 text-light" data-id={showUserEmail} onClick={sendReport}><GoIcons.GoReport/> Report</Button>
                                      </Form.Group>
                                    </Form>
                                  </Modal.Body>
                                </Modal>


                                <div className="position-end">
                                
                                  <em> Click to see more discussions.</em>
                               
                                  <Link to="/alltopics" style={{ textDecoration: 'none',marginLeft: '10px', marginTop: '5px' }} className="mt-5"> Show All</Link> 
                                </div>
                          </div>
                        </section>
              

                     {/* Modal Login*/}
                    <Modal show={showMl} onHide={handleCloseMl}>
                      <Modal.Header closeButton>
                        <Modal.Title>Log-in</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Please Log-in to Continue!
                      {error1 && <Alert variant="danger">{error1}</Alert>}
                      <Form noValidate validated={validated1} className="">
                                    <Form.Group id="email" className="mb-3">
                                      <Form.Label>Email</Form.Label>
                                      <Form.Control ref={emailRef}  name = "email"  type="email" required autoComplete="username" placeholder="Email Address"/>
                                      <Form.Control.Feedback type="invalid">
                                      Please double check your email.
                                    </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group id="password" className="mb-3">
                                      <Form.Label>Password</Form.Label>
                                      <Form.Control type={password} ref={passwordRef}  name = "password" autoComplete="current-password" required placeholder="Password"/>
                                        <Form.Control.Feedback type="invalid">
                                      Please enter a password.
                                    </Form.Control.Feedback>
                                      <div className="form-group mt-2 text-secondary">
                                      <i onClick={showPass} className="fs-7" style={{cursor:"pointer", fontFamily:"Raleway, sans-serif"}}><AiIcons.AiFillEye/>Show/Hide Password</i>
                                      </div>
                                    
                                    </Form.Group>
                                
                              <div className="w-100 mt-2 justify-content-right">
                                <Link to="/forgot-pass" style={{ textDecoration: 'none' }}>Forgot Password</Link>
                              </div>

                              <div className="col-xs-1 mt-3" align="center">
                              <ReCAPTCHA
                              sitekey={process.env.REACT_APP_SITEKEY}
                              onChange={onChange}
                              />
                              </div>
                              
                              <Button onClick={handleSubmitLogin} className="w-100 mt-3 mb-3"  >Login</Button>
                            
                                  </Form>

                      </Modal.Body>
                      <Modal.Footer>
                      <div className="w-100 mt-2 mb-2 text-center text-secondary">
                                  Don't have an account? <Link to="/register" style={{ textDecoration: 'none' }}>Register</Link>
                              </div>
                      </Modal.Footer>
                    </Modal>


                    {/* Modal for Ask Question*/}
                    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
                    <Modal.Header closeButton>
                      <Modal.Title>ASK A QUESTION</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    {error && <Alert variant="danger">{error}</Alert>}
                        <Form noValidate validated={validated} onSubmit={handleSubmit}   className="">

                                      <Form.Group id="Question" className="mb-3">
                                        <Form.Label>Question</Form.Label>
                                        <Form.Control value={question || ''} onChange={e => setQuestion(e.target.value)} name = "text" type="text" required  placeholder="Title"/>
                                      </Form.Group>
                                      <Form.Group id="desc" className="mb-3">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea" value={description || ''} onChange={e => setDesc(e.target.value)} name = "text" type="text" required  placeholder="Description"/>
                                      </Form.Group>
                        <strong>Upload a picture of your code here! (Optional)</strong>

                    
                        <input type="file" className="form-control  mt-3 mb-3" id="file-input" name="samplecodeimg" accept="image/jpeg" onChange={changeHandler}/> 
                        
                        <Button variant="primary" onClick={insertCode}>Upload File</Button>

                        <p className="mt-2">Upload Progress</p> 
                        <ProgressBar animated now={progbar} className="progress"/>
                        <p className="mt-2 fw-bold">Add a Tag</p>

                        <Container>
                        
                          <Row>
                            <Col xs={{ order: 'last' }}>
                            <div className="form-check">
                            <input type="radio" id="Array" name="Programming" value="Array" className="form-check-input"  required onChange={handleChange}/>
                            <label htmlFor="Array" className="form-check-label">Array</label>
                            </div>
                            <div className="form-check">
                                <input type="radio" id="C++" name="Programming" value="C++"  className="form-check-input"  required onChange={handleChange}/>
                                <label htmlFor="C" className="form-check-label">C++</label>
                            </div>
                            <div className="form-check">
                                <input type="radio" id="CodeBlocks" name="Programming" value="CodeBlocks" className="form-check-input" required onChange={handleChange}/>
                                <label htmlFor="CodeBlocks" className="form-check-label">CodeBlocks</label>
                            </div>
                            </Col>

                            <Col xs={{ order: 'first' }}>
                            <div className="form-check">
                            <input type="radio" id="Function" name="Programming" value="Function" className="form-check-input" required  onChange={handleChange}/>
                            <label htmlFor="Function" className="form-check-label">Function</label>
                            </div>
                            <div className="form-check">
                                <input type="radio" id="Nested Condition" name="Programming" value="Nested Condition"  className="form-check-input" required onChange={handleChange}/>
                                <label htmlFor="Nested Condition" className="form-check-label">Nested Condition</label>
                            </div>
                            <div className="form-check">
                                <input type="radio" id="For loops" name="Programming" value="For loops" className="form-check-input" required onChange={handleChange}/>
                                <label htmlFor="For loops" className="form-check-label">For loops</label>
                            </div>
                            <div className="form-check">
                                <input type="radio" id="Syntaxes" name="Programming" value="Syntaxes" className="form-check-input" required onChange={handleChange}/>
                                <label htmlFor="Syntaxes" className="form-check-label">Syntaxes</label>
                            </div>
                            <div className="form-check">
                                <input type="radio" id="If Else Condition" name="Programming" value="If Else Condition" className="form-check-input" required onChange={handleChange}/>
                                <label htmlFor="If Else Condition" className="form-check-label">If Else Condition</label>
                            </div>
                            </Col>
                          </Row>
                        </Container>

                          <Button variant="primary" type="submit" className="mt-4 btn btn-primary w-100">Post</Button>
                        </Form>
                    </Modal.Body>
                    
                    </Modal>
</Container>
                <a href="#top" className="scroll-top">
                  <i className="fa fa-chevron-up"></i>
                </a>

            </div>
            </>
  );
}


export default Forum;

