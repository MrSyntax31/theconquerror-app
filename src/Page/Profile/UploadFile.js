<<<<<<< HEAD
import React, { useEffect, useState } from 'react';


import { Helmet } from "react-helmet";
import { ProgressBar, Form, Col, Row, Container } from 'react-bootstrap';
import { Link , useHistory} from "react-router-dom"
import * as FaIcons from 'react-icons/fa';
import { getAuth } from 'firebase/auth';
import { getFirestore, onSnapshot, doc, collection, addDoc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import './upload.css'
//import './upload.scss'
import swal from 'sweetalert';


const UploadFile = () => {

    const Auth = getAuth()
    const firestoredb = getFirestore()
    const history = useHistory()
    const currentUser = Auth.currentUser
    const storage = getStorage()
    const [progbar, setProgress] = useState(0);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }
    else{
      insertCode();
        event.preventDefault();
     }
    setValidated(true);
    event.preventDefault();
    };


    
useEffect(() =>{

  adventurerTag()

},[])  // eslint-disable-line react-hooks/exhaustive-deps

const [adventurerNametag, setAdventurerName] = useState()

async function UpdateAdventurerName(value){

  const DbRef = doc(firestoredb, "userdata",currentUser.uid);

         
  await updateDoc(DbRef, {
    AdventurerName: value

});

}

function adventurerTag(){
  onSnapshot(doc(firestoredb, "userdata", currentUser.uid), (doc) => {

      const docdata = (doc.data())

      if (docdata)
      {   
        

        if(docdata.AdventurerName){
          console.log("welcome "+docdata.AdventurerName)
          setAdventurerName(docdata.AdventurerName)
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
          
      
    
      }

})
}  


    function verificationStatus(){

        onSnapshot(doc(firestoredb, "verifiedteachers", currentUser.uid), (doc) => {
    
            const docdata = (doc.data())
    
            if (docdata)
            {   
     
              if(docdata.verifiedstatus === "Pending"){
                history.push("/Profile")
                swal("Oops!","Please be patient, Verification can take up to 1 day","info")
              
              }
              else
              {
                 //Do Nothing                
              }
            }

            else{

                history.push("/Profile")
                swal("Oops!","You're not supposed to be there!","info")
            }
    
      })
    }



    useEffect(() => {
        
        if(currentUser)
        {
            verificationStatus()
        }
        else
        {
            history.push("/Profile")
            swal("Oops!","You're not supposed to be there!","info")
        }
        
 
   
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    
    const [file, setFile] = useState()


    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [tag, setTag] = useState("")
    const [filehandler, setLink] = useState()

    const [submit, setSubmitbutton] = useState(true)
    const [submit2, setSubmitbutton2] = useState(true)

    const handleChange = (e) => {
        
      setTag(e.target.getAttribute("value"));
   
   
    };

    const changeHandler = (event) => {

        setFile(event.target.files[0])
        setSubmitbutton2(false)
      }

      function insertCode(){
          // Create the file metadata

/** @type {any} */
const metadata = {
contentType: 'application/pdf'
};

if(title === "")
{
  swal("Oops!","You forgot to put a name for your Precious Materials!","warning")
}
else {
  const storageRef = ref(storage, 'Resources/' + title);
const uploadTask = uploadBytesResumable(storageRef, file, metadata);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on('state_changed',
(snapshot) => {
// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
setProgress(progress);
switch (snapshot.state) {
 case 'paused':
   
    break;
case 'running':
  
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
    setLink(downloadURL)
    setSubmitbutton(false)
    setSubmitbutton2(true)
    setProgress(0)
    swal("One last Step!","Press the Submit button to finish up!","info")
});
}
);
}    }

      async function AddNew() {
        
             //convert date which is timestamp to String
      var timestamp = Date.now();
      var convertedDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)
      
     if(tag === "") {
      swal("Oops!","You forgot to choose a tag","warning")
     }
     else{
                 // Add a new document with a generated id.
                 await addDoc(collection(firestoredb, "docs"), {
                  title: title,
                  description: desc,
                  tags: tag,
                  uploaded_at: convertedDate,
                  fileLink: filehandler,
                  created_by: adventurerNametag
                }).then(() =>{
        
                  swal("Awesome!","Thanks for helping the guild!","success")
                  setTag("")
                  setTitle("")
                  setDesc("")
                  setSubmitbutton(true)
                  setSubmitbutton2(true)

                }).catch((e) => swal("Error",e,"warning"))
     }
         
    
    
      }


=======
import React from 'react';


import { Helmet } from "react-helmet";

import { Link } from "react-router-dom"
import * as FaIcons from 'react-icons/fa';

import './upload.css'
//import './upload.scss'

const UploadFile = () => {
>>>>>>> c6e069f5ada54da2f0ff471bf0d645c18824feb9
  return <div className="backGround">
      {/* Helmet */}
            <div>
              <Helmet>
                <title>ConquError | Upload File </title>
                <meta name="description" content="Welcome to the ConquError Upload file page." />
              </Helmet>
            </div> 
<<<<<<< HEAD
            <Link to="/profile" style={{ textDecoration: 'none', marginLeft: '10px', marginTop: '5rem' }}><FaIcons.FaArrowLeft/> Return</Link>
      
=======


>>>>>>> c6e069f5ada54da2f0ff471bf0d645c18824feb9
            <div className="col-md-6 offset-md-3 mt-5 mb-5 container">

                <div className="mb-3" >
                    <img  className="imgProf" alt="icon" src='https://firebasestorage.googleapis.com/v0/b/conquerror-development.appspot.com/o/Homepage%2Flogo.svg?alt=media&token=274fc263-dba7-4b50-a713-636284493fdc'/>
                </div>

                <br/>
        
<<<<<<< HEAD
                <Form noValidate validated={validated} onSubmit={handleSubmit}  className="card">
                    <h2 className="mt-3 fw-bold text-primary text-center">Upload your Files here!</h2>
                    
    
                    <p className="text-center mt-2">
                        Please upload documents strictly in PDF format.
=======
                <form className="card">
                    <h2 className="mt-3 fw-bold text-primary text-center">Upload your Files here!</h2>

                    <p className="text-center mt-2">
                        Please upload documents only in 'pdf', 'docx', 'rtf', 'jpg', 'jpeg', 'png' & 'text' format.
>>>>>>> c6e069f5ada54da2f0ff471bf0d645c18824feb9
                    </p>

                <div className="form-group m-4">
                    <label htmlFor="exampleInputName">Title</label>
<<<<<<< HEAD
                    <input type="text" name="title" className="form-control"  placeholder="Title" value={title || ""} onChange={e => setTitle(e.target.value)}  required="required"/>
                </div>
                <div className="form-group m-4">
                    <label htmlFor="exampleInputEmail1" required="required">Description</label>
                    <input type="text" name="description" className="form-control"  value={desc || ""} onChange={e => setDesc(e.target.value)}  placeholder="Description" required="required"/>
                </div>
                <div className="form-group m-4">
                <Container>
                            <Row>
                              <Col xs={{ order: 'last' }}>
                              <div className="form-check">
                              <input type="radio" id="Array" name="Programming" value="Array" className="form-check-input" onChange={handleChange}/>
                              <label htmlFor="Array" className="form-check-label">Array</label>
                              </div>
                              <div className="form-check">
                                  <input type="radio" id="C++" name="Programming" value="C++"  className="form-check-input" onChange={handleChange}/>
                                  <label htmlFor="C" className="form-check-label">C++</label>
                              </div>
                              <div className="form-check">
                                  <input type="radio" id="CodeBlocks" name="Programming" value="CodeBlocks" className="form-check-input" onChange={handleChange}/>
                                  <label htmlFor="CodeBlocks" className="form-check-label">CodeBlocks</label>
                              </div>
                              </Col>

                              <Col xs={{ order: 'first' }}>
                              <div className="form-check">
                              <input type="radio" id="Function" name="Programming" value="Function" className="form-check-input" onChange={handleChange}/>
                              <label htmlFor="Function" className="form-check-label">Function</label>
                              </div>
                              <div className="form-check">
                                  <input type="radio" id="Nested Condition" name="Programming" value="Nested Condition"  className="form-check-input" onChange={handleChange}/>
                                  <label htmlFor="Nested Condition" className="form-check-label">Nested Condition</label>
                              </div>
                              <div className="form-check">
                                  <input type="radio" id="For loops" name="Programming" value="For loops" className="form-check-input" onChange={handleChange}/>
                                  <label htmlFor="For loops" className="form-check-label">For loops</label>
                              </div>
                              <div className="form-check">
                                  <input type="radio" id="Syntaxes" name="Programming" value="Syntaxes" className="form-check-input" onChange={handleChange}/>
                                  <label htmlFor="Syntaxes" className="form-check-label">Syntaxes</label>
                              </div>
                              <div className="form-check">
                                  <input type="radio" id="If Else Condition" name="Programming" value="If Else Condition" className="form-check-input" onChange={handleChange}/>
                                  <label htmlFor="If Else Condition" className="form-check-label">If Else Condition</label>
                              </div>
                              </Col>
                            </Row>
                          </Container>
=======
                    <input type="text" name="title" className="form-control" id="exampleInputName" placeholder="Title" required="required"/>
                </div>
                <div className="form-group m-4">
                    <label htmlFor="exampleInputEmail1" required="required">Description</label>
                    <input type="email" name="description" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Description"/>
                </div>
                <div className="form-group m-4">
                    <label htmlFor="exampleInputEmail1" required="required">Owner</label>
                    <input type="email" name="owner" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Owner"/>
                </div>
                <div className="form-group m-4">
                    <label htmlFor="exampleFormControlSelect1">Tags</label>
                    <select className="form-control" id="exampleFormControlSelect1" name="platform" required="required">
                    <option>Programming</option>
                    <option>C++</option>
                    <option>Others</option>
                    </select>
>>>>>>> c6e069f5ada54da2f0ff471bf0d645c18824feb9
                </div>
                <hr/>
                <div className="form-group mt-3 m-4">
                    <label className="mr-2 mb-3">Upload Document</label>
<<<<<<< HEAD
                    <input type="file" name="file" accept='application/pdf' onChange={changeHandler}/>
                </div>
                <ProgressBar animated now={progbar} className="progress"/>
                <button type='submit' disabled={submit2}>Upload File</button>
                <hr/>
                   
                </Form>
                <button  disabled={submit} onClick={AddNew} className="btn btn-primary m-4">Submit</button>

       
              
=======
                    <input type="file" name="file"/>
                </div>
                <hr/>
                    <button type="submit" className="btn btn-primary m-4">Submit</button>
                </form>

                <Link to="/profile" style={{ textDecoration: 'none', marginLeft: '10px', marginTop: '5rem' }}><FaIcons.FaArrowLeft/> Return</Link>
            
>>>>>>> c6e069f5ada54da2f0ff471bf0d645c18824feb9
    </div> 
    
  </div>;
};

export default UploadFile;
