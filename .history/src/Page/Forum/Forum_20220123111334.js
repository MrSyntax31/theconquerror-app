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
                    <Card.Header >
                      <div className="header">
                        <h3  className="text-primary fw-bold mt-5">ConquErroRoom</h3>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>
                      <div className="row">
                        <h5 className="text-primary fw-bold">Forum</h5>
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
            











            
            </>
  );
}


export default Forum;

