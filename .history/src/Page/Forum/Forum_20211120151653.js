import React, {useEffect,useState} from 'react';
import { Helmet } from "react-helmet";
import {  Modal, Button, OverlayTrigger, Popover } from 'react-bootstrap';
import { onSnapshot,collection,getFirestore, doc, setDoc, query, orderBy, limit } from 'firebase/firestore';
import {} from '../../firebase/firebase'
import {  Link, useHistory} from "react-router-dom"
import {Container,  Row,Col, Form, FormControl, Card } from 'react-bootstrap'
import { getAuth } from 'firebase/auth'
import * as GoIcons from 'react-icons/go';
import './Forum.css';
import Navbar from '../../Components/Navbar/Navbar'




      function Forum() {

        //declare firestore services
        const forumdb = getFirestore();
        const auth = getAuth();

         
        //get current logged-in user
        const currentUser = auth.currentUser;

        //used to route the user through various pages of the website
        const history = useHistory()
          
        //Ask Question Modal*
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

   

        //declare text input for new question
        const [question, setQuestion] = useState();
        const [description, setDesc] = useState();

        //declare area to throw list for forum
        const [topics, setDiscussion] = useState([]);

        const collectionRef = collection(forumdb, "topics");

        useEffect(
          () => {
            const q = query(collectionRef,orderBy("created_at","desc"), limit(5));
        
            onSnapshot(q, (snapshot) =>
              setDiscussion(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            
            )
            
          },[]); // eslint-disable-line react-hooks/exhaustive-deps
      
        
        //Function that adds a new question in the forum
      async function addNew(){
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
        created_at: convertedDate
      }
       //puts the document inside the collection "topics" in firestore

      await setDoc(newQuestion, data).then(() => {
        
        alert("Question Posted!");
      }).catch((error) =>{
        alert(error.message)
      }).finally(() => {

        setDesc("");
        setQuestion("");

      })
    

              }
          }

          //this is used to fetch the data from Discussion on Topics.MAP on the forum list
        const handler = function(e){
        
         localStorage.setItem('threadID',e.target.getAttribute("data-id"));
         
          history.push("/Thread")
          
      };

        //Maps the data inside firestore collection (topics) so that it can be visible to the user
        const Discussion= topics.map((topic) => (  <div className="Discussion-Board p-3 m-3" key={topic.id} > <p>Uploaded by: <strong>{topic.created_by}</strong> on <strong>
          {topic.created_at}</strong></p>  <div className="heading"><ul> <li onClick={ handler}  data-id ={topic.id}>{topic.title}<br></br><strong>Description:</strong> {topic.desc} </li></ul></div></div> ))
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
              <Container>
              <Row>
                <Col></Col>
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
            <div className="p-2">
                <Card className="text-center mt-5 mb-5 container">
                  <Card.Body>
                      <Card.Title> <div className="fw-bold fs-1 text-secondary">
                        ConquErroRoom
                        </div>
                        </Card.Title>
                      <Card.Text>
                      
                      </Card.Text>
                            <div className=" text-start p-4 container">
                              <h3 className="fw-bold fs-m text-start container"><GoIcons.GoCommentDiscussion/> Most Recent Topics </h3>     
                         
                              {Discussion}
                          </div>
                <div className="position-end">
                 
               <Link to="/alltopics" style={{ textDecoration: 'none',marginLeft: '10px', marginTop: '5px' }} className="mt-5"> Show All</Link> 
                  
                </div>
                      </Card.Body>
                  </Card>
            </div>


              {/* Modal for Ask Question*/}
              <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
                <Modal.Header closeButton>
                  <Modal.Title>ASK A QUESTION</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Question <br></br>
                    <input value={question || ''} onChange={e => setQuestion(e.target.value)}  type="text"  className="form-control" required></input><br></br>
                    Description <br></br>
                    <textarea value={description || ''} onChange={e => setDesc(e.target.value)} type="text" className="form-control mb-2" required></textarea>

                    <p>Add Tags</p>
                    <Form className="mt-3">
                        {['checkbox'].map((type) => (
                          <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                              inline
                              label="Array"
                              name="group1"
                              type={type}
                              id={`inline-${type}-1`}
                            />
                            <Form.Check
                              inline
                              label="C++"
                              name="group1"
                              type={type}
                              id={`inline-${type}-2`}
                            />
                            <Form.Check
                              inline
                              label="Function"
                              name="group1"
                              type={type}
                              id={`inline-${type}-3`}
                            />
                          </div>
                        ))}
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>Close</Button>
                  <Button variant="primary" onClick={addNew}>Post</Button>
                </Modal.Footer>
              </Modal>
              
           
            

          

                <a href="#top" className="scroll-top">
                  <i className="fa fa-chevron-up"></i>
                </a>

            </div>
            </>
  );
}


export default Forum;

