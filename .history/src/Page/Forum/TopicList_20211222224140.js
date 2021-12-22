import React, {useEffect,useState} from 'react';
import { Helmet } from "react-helmet";
import {  Modal, Button,  OverlayTrigger, Popover, Offcanvas, Alert, ProgressBar} from 'react-bootstrap';
import { getFirestore, collection, onSnapshot, query, orderBy, startAfter, limit, getDocs, doc,setDoc, where } from 'firebase/firestore';
import {} from '../../firebase/firebase'
import {Container,  Row,Col, Form, FormControl, ButtonGroup} from 'react-bootstrap'
import { getAuth } from 'firebase/auth'
import * as GoIcons from 'react-icons/go';
import * as IoIcons from 'react-icons/io5';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';
import './Forum.css';
import Navbar from '../../Components/Navbar/Navbar'
import {  Link, useHistory} from "react-router-dom"
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import swal from 'sweetalert';

export default function TopicList() {

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

        //New and popular*
        const [shows, setShows] = useState(false);
        const handleClosed = () => setShows(false);
        const handleShowed = () => setShows(true);

        //declare text input for new question
        const [question, setQuestion] = useState();
        const [description, setDesc] = useState();



        //Function for User Information
        const [showP, setShowP] = useState(false);


        //declare area to throw list for forum
        const [topics, setDiscussion] = useState([]);
        const [lastpage, setLastPage] = useState([]);
        const [page, setPage] = useState(1);

        const [endLine, checkEnd] = useState(false);
        const [tagCheck, checkTag] = useState(false);
        
        const [tags, setTags] = useState();

        const [img, setImg] = useState("");
        const [fileupload, setFile] = useState([]);
        const [progbar, setProgress] = useState(0);
        const [collRef, setRef] = useState(q);
        
        const handleChange = (e) => {
        
          setTags(e.target.getAttribute("value"));
          checkTag(true);
       
        };
      
      
     

        const q = collection(forumdb, "topics");

    

        const first = query(collRef, orderBy("created_at","desc"), limit(5));
        
        
        const handleChangeTag = (e) => {
        
          const tagsForQuery = e.target.getAttribute("value")
          

          const tagQ = query(collection(forumdb, "topics"), where("tags", "==", tagsForQuery));

          setRef(tagQ)
          fetch();
            
       
            
    
        };

        function tagReset() {
          
          setRef(q)
          fetch();
        }

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

            // Query the first page of docs
            async function fetch(){
              //query data
             try{
              const documentSnapshots = await getDocs(first);
             
              //Pagination

            //throw data to useState
           const map =  documentSnapshots.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
           setDiscussion(map);

           // Get the last visible document
           setLastPage(documentSnapshots.docs[documentSnapshots.docs.length-1]) ;
               

             }
             catch(error){
            alert(error.message)
            };
          
              
          }


          const [fetching, isFetching] = useState(false);
            
            // Construct a new query starting at the last visible document,
            // get the next set of data
           async function getMore(){

              if (topics.length === 0){
                    
              checkEnd(true);

              } else{
                try {   
                  isFetching(true);       
                  const next =
                  query(collRef,
                  orderBy("created_at","desc"),
                  startAfter(lastpage),
                  limit(5));
    
                  const nextDocs =  await getDocs(next)
                  
                  const isEmpty = nextDocs.size === 0;
                  if(!isEmpty){
                    const map =  nextDocs.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

                    
                    setDiscussion((topics) =>[...topics, ...map]);

                   
                      setLastPage(nextDocs.docs[nextDocs.docs.length-1]);
                    
                
                      setPage(page + 1)
                    isFetching(false)
                    checkEnd(false);
                  }
                  else{
                    swal("Sorry","There are no more Data left to show you","warning")
                    isFetching(false)
                  }
                   
                 
              
           
              }
              catch (error) {
                swal('Error!',error.message,'error')
              }
              }
             
            }
            
          

        useEffect(
          () => {
           
         
         fetch();

          
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


const storageRef = ref(storage, 'Forum/' + question);
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
              if (window.swal({type: 'error', icon: 'error', title: 'Oops', text: 'You need to be logged in to continue!'})) {
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
                  const userlevel = sessionStorage.getItem("userLevel")
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
            sampcodeimg: img,
            userlvl: userlevel,
            case_status: "unsolved"
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
                 
                    setShowP(true);  
                }
                else{
                    
                  swal("Something is Wrong","No Data Found","warning");
                  setShowP(false);
                }
        
                
            });
              
          };
  
          //Maps the data inside firestore collection (topics) so that it can be visible to the user
          const Discussion= topics.map((topic) => (  <div className="Discussion-Board p-3 m-2 border border-primary rounded" key={topic.id} > 
          <p>Uploaded by: <label className="text-primary" data-id ={topic.created_by} data-lvl ={topic.userlvl} onClick={ showProfile }>{topic.created_by}</label> on <strong>
            {topic.created_at}</strong></p>  
            
            
          <div className="heading"><ul> <li onClick={ handler}  data-id ={topic.id}>{topic.title}<br></br><strong>Description:</strong> {topic.desc} <br></br><strong>Tags: </strong>{topic.tags}</li></ul></div></div> ))
          
    //For Popup Notice
const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Notice!</Popover.Header>
    <Popover.Body>
      This feature is <strong>under development</strong> stage. Please be patient.
    </Popover.Body>
  </Popover>
);



 

    return (
        <div>
               {/* Division for Tab Name and Description*/}
            <div>
                <Helmet>
                  <title>ConquError | All Topics </title>
                  <meta name="description" content="ConquError Forum" />
                </Helmet>
              </div>

            <Navbar/>

             <div style={{marginTop:'6rem'}}>
            {/* Container for Search and Ask Question*/}
              <Container>

                <Link to="/forum" style={{ textDecoration: 'none', marginLeft:'3px' }} className="mb-4"><IoIcons.IoArrowBack/> Back</Link>
              
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

            

              {/* Division for User Modal Info*/}
          
              <Modal size="sm" show={showP}  onHide={() => setShowP(false)}  aria-labelledby="example-modal-sizes-title-sm">
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
                                
                                </Modal.Body>
                              </Modal>



            {/* Division for Discussion Board*/}

              <div>
                  <Container className="text-center mt-5 mb-5">
                    <div>
                            <div className="text-start">
                              <h3 className="fw-bold fs-m text-start container mb-3"><GoIcons.GoCommentDiscussion/> All Topics </h3>

                                <Button variant="" className="text-primary" onClick={handleShowed}><BsIcons.BsTags/> Tags</Button>

                                <Offcanvas show={shows} onHide={handleClosed}>
                                  
                                  <Offcanvas.Header closeButton>
                                    <Offcanvas.Title><MdIcons.MdOutlineTipsAndUpdates/> Latest Updates</Offcanvas.Title>
                                  </Offcanvas.Header>

                                  <Offcanvas.Body>
                                  A tag is a term or label that associates your question with other, comparable queries. Using the appropriate tags makes it simpler for others to discover and answer your question.
                                  <br/><br/>
                                  Please note that tags are important for the forum to work properly!
                            
                                  <Container className="mt-3">
                      
                                    <div className="form-check">
                                    <input type="radio" id="Array" name="Programming" className="form-check-input" onClick={handleChangeTag} value="Array" />
                                    <label htmlFor="Array" className="form-check-label">Array</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" id="C++" name="Programming"  className="form-check-input" onClick={handleChangeTag} value="C++" />
                                        <label htmlFor="C" className="form-check-label">C++</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" id="CodeBlocks" name="Programming"  className="form-check-input" onClick={handleChangeTag} value="CodeBlocks"/>
                                        <label htmlFor="CodeBlocks" className="form-check-label">CodeBlocks</label>
                                    </div>   
                                  
                                    <div className="form-check">
                                    <input type="radio" id="Function" name="Programming"  className="form-check-input" onClick={handleChangeTag} value="Function"/>
                                    <label htmlFor="Function" className="form-check-label">Function</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" id="Nested Condition" name="Programming"   className="form-check-input" onClick={handleChangeTag} value="Nested Condition"/>
                                        <label htmlFor="Nested Condition" className="form-check-label">Nested Condition</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" id="For loops" name="Programming"  className="form-check-input" onClick={handleChangeTag} value="For loops"/>
                                        <label htmlFor="For loops" className="form-check-label">For loops</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" id="Syntaxes" name="Programming"  className="form-check-input" onClick={handleChangeTag} value="Syntaxes"/>
                                        <label htmlFor="Syntaxes" className="form-check-label">Syntaxes</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" id="If Else Condition" name="Programming"  className="form-check-input" onClick={handleChangeTag} value="If Else Condition"/>
                                        <label htmlFor="If Else Condition" className="form-check-label">If Else Condition</label>
                                    </div>

                                    <Button onClick={tagReset}>Reset Tags</Button>

                                  </Container>
                                
                                  </Offcanvas.Body>
                                </Offcanvas>
  
                              { endLine && <h1>End of the line Warrior.</h1>  }
                            
                              {Discussion} 
                            </div>
                            <ButtonGroup>

               {fetching && <strong>Fetching more Problems.....</strong>}

             {!fetching && 
                  <Button onClick={() => getMore()}>Show More</Button>
              }
              </ButtonGroup>
                  <div className="position-end">            
                  </div>
            
                        </div>
                  </Container>
              </div>

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

                      <Button variant="primary" type="submit" className="mt-4 btn btn-primary w-100">Post</Button>
                    </Form>
                </Modal.Body>
                
                </Modal>

            <a href="#top" className="scroll-top">
                  <i className="fa fa-chevron-up"></i>
                </a>
        </div>
    )
}
