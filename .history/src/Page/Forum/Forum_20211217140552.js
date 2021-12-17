import React, {useEffect,useState} from 'react';
import { Helmet } from "react-helmet";
import {  Modal, Button, OverlayTrigger, Popover, ProgressBar, Alert, Toast } from 'react-bootstrap';
import { onSnapshot,collection,getFirestore, doc, setDoc, query, orderBy, limit } from 'firebase/firestore';
import {} from '../../firebase/firebase'
import {  Link, useHistory} from "react-router-dom"
import {Container,  Row,Col, Form, FormControl } from 'react-bootstrap'
import { getAuth } from 'firebase/auth'
import * as GoIcons from 'react-icons/go';
import './Forum.css';
import Navbar from '../../Components/Navbar/Navbar'
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

      function Forum() {

        //Modal User Info
        const [smShow, setSmShow] = useState(false);
        
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
        const handleShow = () => setShow(true);

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
            addNew();
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
        
        //Function that adds a new question in the forum
      async function addNew(){
        setError("")
          //If there is no user logged-in, returns the user to Login page to continue
          if (currentUser === null)
          {
            if (window.confirm('You need to be logged-in to continue, Press Yes to Proceed on our Log-in Page')) {
              // Save it!
             history.push("/login")
            } else {
              setQuestion("");
              setDesc("");
              
            }
          }
          else {

    
                if (tagCheck === true) {

                  //if user is logged-in
                
                // Add a new document with a generated id
        const newQuestion = doc(collection(forumdb, "topics"));
  
        //convert date which is timestamp to String
        var timestamp = Date.now();
        var convertedDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)
        
       
          // then create the array with the data to be set inside firestore in collection "topics"
        var data = {
  
          title: question,
          desc: description,
          created_by: currentUser.email,
          userid: currentUser.uid,
          created_at: convertedDate,
          tags: tags,
          sampcodeimg: img
        }
         //puts the document inside the collection "topics" in firestore
        
         await setDoc(newQuestion, data).then(() => { 
    
  
        }).catch((error) =>{
          setError(error.message)
        }).finally(() => {
          setImg("")
          setDesc("");
          setQuestion("");
          setError("")
          setShow(false)
        })
   
  
              }
              else {
                  setError("Select a Tag")
              }
              


              }
          }

          //this is used to fetch the data from Discussion on Topics.MAP on the forum list
        const handler = function(e){
        
         localStorage.setItem('threadID',e.target.getAttribute("data-id"));
         
          history.push("/Thread")
          
      };

        //Maps the data inside firestore collection (topics) so that it can be visible to the user
        const Discussion= topics.map((topic) => (  <div className="Discussion-Board p-3 m-2 border border-primary rounded" key={topic.id} > 
        <p>Uploaded by: <label className="text-primary" onClick={() => setSmShow(true)}>{topic.created_by}</label> on <strong>
          {topic.created_at}</strong></p>  
          
          
        <div className="heading"><ul> <li onClick={ handler}  data-id ={topic.id}>{topic.title}<br></br><strong>Description:</strong> {topic.desc} <br></br><strong>Tags:</strong>{topic.tags}</li></ul></div></div> ))
        
        //For Popup Notice
        const popover = (
          <Popover id="popover-basic">
            <Popover.Header as="h3">Notice!</Popover.Header>
            <Popover.Body>
              This feature is <strong>under development</strong>. Please be patient.
            </Popover.Body>
          </Popover>
        );

        
 
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

            <div className="" style={{marginTop:'6rem'}}>
            {/* Container for Search and Ask Question*/}
            <Container fluid="md" style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
               }}>

              <Row>
                <Col >
                    <h1 className="text-primary fw-bold mt-3">ConquErroRoom</h1>    
                </Col>

                <Col md="auto">
                              <Form className="d-flex mt-4">
                                  <FormControl
                                  type="search"
                                  placeholder="Search"
                                  className="mr-2"
                                  aria-label="Search"
                                />
                                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                <Button variant="btn btn-primary">Search</Button>
                                </OverlayTrigger>
                              </Form>
                </Col>

                <Col xs lg="2">
                  <div className="NoUserMenu mt-4 ml-5">
                    <Button variant="primary" onClick={handleShow} className="mb-2"> ASK A QUESTION</Button> 
                  </div>
                </Col>

              </Row>

            </Container>

            {/* Division for Discussion Board*/}
            <div>
                <Container className="text-center mt-5 mb-5 container">
                  <div>                                  
                        <div className=" text-start">
                          <h3 className="fw-bold fs-m text-start container"><GoIcons.GoCommentDiscussion/> Most Recent Topics </h3>     
                              {Discussion}

                              <Modal size="sm" show={smShow}  onHide={() => setSmShow(false)}  aria-labelledby="example-modal-sizes-title-sm">
                                <Modal.Header closeButton>
                                  <Modal.Title id="example-modal-sizes-title-sm">
                                    User Name
                                  </Modal.Title>
                                  <Modal.Body>
                                    <div className="text-center">
                                      <img src={currentUser.photoURL} className="rounded-circle" alt="User" width="100" height="100"/>
                                      
                                </Modal.Header>
                                <Modal.Body>...</Modal.Body>
                              </Modal>
                        </div>

                        <div className="position-end">
                          <Link to="/alltopics" style={{ textDecoration: 'none',marginLeft: '10px', marginTop: '5px' }} className="mt-5"> Show All</Link> 
                        </div>
                  </div>
                </Container>
            </div>

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
                                    <Form.Label>Question</Form.Label>
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
                        <input type="radio" id="Array" name="Programming" value="Array" className="form-check-input" onChange={handleChange}/>
                        <label for="Array" className="form-check-label">Array</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" id="C++" name="Programming" value="C++"  className="form-check-input" onChange={handleChange}/>
                            <label for="C" className="form-check-label">C++</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" id="CodeBlocks" name="Programming" value="CodeBlocks" className="form-check-input" onChange={handleChange}/>
                            <label for="CodeBlocks" className="form-check-label">CodeBlocks</label>
                        </div>
                        </Col>

                        <Col xs={{ order: 'first' }}>
                        <div className="form-check">
                        <input type="radio" id="Function" name="Programming" value="Function" className="form-check-input" onChange={handleChange}/>
                        <label for="Function" className="form-check-label">Function</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" id="Nested Condition" name="Programming" value="Nested Condition"  className="form-check-input" onChange={handleChange}/>
                            <label for="Nested Condition" className="form-check-label">Nested Condition</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" id="For loops" name="Programming" value="For loops" className="form-check-input" onChange={handleChange}/>
                            <label for="For loops" className="form-check-label">For loops</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" id="Syntaxes" name="Programming" value="Syntaxes" className="form-check-input" onChange={handleChange}/>
                            <label for="Syntaxes" className="form-check-label">Syntaxes</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" id="If Else Condition" name="Programming" value="If Else Condition" className="form-check-input" onChange={handleChange}/>
                            <label for="If Else Condition" className="form-check-label">If Else Condition</label>
                        </div>
                        </Col>
                      </Row>
                    </Container>

                      <Button variant="primary" type="submit" className="mt-4 btn btn-primary w-100">Post</Button>
                    </Form>
                </Modal.Body>
                
                </Modal>

                <a href="#top" className="scroll-top">
                  <i className="fa fa-chevron-up"></i>
                </a>

            </div>
            </>
  );
}


export default Forum;

