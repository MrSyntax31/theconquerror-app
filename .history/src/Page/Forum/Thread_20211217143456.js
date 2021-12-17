import React, { useEffect, useState } from 'react'

import { Link } from "react-router-dom"
import * as FaIcons from 'react-icons/fa';
import Helmet from 'react-helmet';
import Navbar from '../../Components/Navbar/Navbar'
import {Container, Form, Row, Col} from 'react-bootstrap'
import './Forum.css';
import { getAuth } from '@firebase/auth';
import { getFirestore, doc, onSnapshot, addDoc, collection,query,orderBy } from '@firebase/firestore';
import { useHistory } from 'react-router';
import { getDatabase, ref, onValue } from "firebase/database";
import swal from 'sweetalert';
import * as BiIcons from 'react-icons/bi';


const Thread = () => {

    //
    
    const auth = getAuth();
    const forumdb = getFirestore();
    
    const user = auth.currentUser;

    const realtimedb = getDatabase();

    const history = useHistory();
    
    const threadId = localStorage.getItem('threadID');
  
    const [topic, setTopic] = useState([]);

    const [reply, setReply] = useState();
    
    const [threadList, setReplies] = useState([]);

    const [Empty, checkEmpty] = useState(false);
      
    const [userlevel, fetchLevel ]= useState([]);

    
    //Function that shows the profile of the user 
    function showProfile() {
   

        //creating reference for realtimedb and fetching data from table users using the userID as reference then setting the data inside the Profile useState above
          const profileData = ref(realtimedb, '/users/' + user.uid);
          onValue(profileData, (snapshot) => {
            fetchLevel(snapshot.val()); 
        })
      }
  
         //convert date which is timestamp to String
         var timestamp = Date.now();
         var convertedDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)
   
   async function addComment(){

        if (user === null){

            if (window.swal({type: 'error', icon: 'error', title: 'You need to be logged in to comment', text: 'Please login to comment'})){
                // Save it!
               history.push("/login")
              } else {
                    //nothing
              }
        }
        else {
         
            // Add a new document with a generated id.
            await addDoc(collection(forumdb, "topics",threadId,"replies"), {
                reply: reply,
                created_at: convertedDate,
                user_id : user.uid,
                 email : user.email,
                 level: userlevel.level
                }).then(() =>{
                    setReply("");
               swal({icon: "success", title: "Success", text: "Comment has been posted!"});
              
            
             }).catch((error) => {
                       alert(error.message)
               })
        }

    }

    useEffect(() => {

        const collectionRef = (collection(forumdb, "topics",threadId,"replies"));
        const q = query(collectionRef,orderBy("created_at","asc"));

        onSnapshot(q, (snapshot) =>
          setReplies(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
        
          if (user !== null) {
            showProfile();  
          }
          else {
              //do Nothing
          }

    },[])  // eslint-disable-line react-hooks/exhaustive-deps


    useEffect (() => {

            function onLoad() {
                onSnapshot(doc(forumdb, "topics", threadId), (doc) => {
                    const docdata = (doc.data())
                    if (docdata)
                    {   
                        setTopic(docdata);
                        checkEmpty(false);

                      
                    }
                    else{
                        
                        checkEmpty(true);
                       
                    }

                    
                });

           
            }
       
      onLoad();

    },[]) // eslint-disable-line react-hooks/exhaustive-deps


    const showRep= threadList.map((threadList) =>  <div key={threadList.id}>  <br></br> {threadList.reply} <br></br>{threadList.email}<br></br>Level: <strong>{threadList.level}</strong></div>)

    
    return <div className="commentSection">

        <div>
            <Helmet>
            <title>ConquError | Thread </title>
            <meta name="description" content="ConquError Games page" />
            </Helmet>
        </div>

        <Navbar/>


        <div className="mt-5 mb-5">
            <Link to="/forum" style={{ textDecoration: 'none',marginLeft: '10px', marginTop: '5px' }} className="mt-5"><FaIcons.FaArrowLeft/> Back</Link>
        </div>
        
        <Container className="mb-5 bg-light rounded p-5">
        
        {/* Option Menu*/}
        <div class="topnav">
        <div class="topnav-right">
            <h3><BiIcons.BiMenuAltRight/></h3>
        </div>
        </div>


        { Empty && <h1>Nothing to see here.</h1>  }  

        <strong>{topic.title}</strong><br></br>
        {topic.desc}<br></br>
        {topic.created_by}<br></br>
        {topic.created_at}<br></br>
        <div className="border border-primary mt-3">
        <img className="mx-auto d-block img-fluid mt-3 mb-3 image-preview image-preview-js" style={{width: '25%', height: 'auto'}} src={topic.sampcodeimg} alt={topic.title} onclick="enlargeImg(this)"/> 
            
        </div>
        {showRep}
      
            { Empty ? '' :
                    <Form className="mt-2">

                        <Row>
                            <Col l="auto">
                                <p className="mt-3">Comment</p>
                                <div className="d-flex">
                                    <input type="textarea"  value={reply || ''} onChange={e => setReply(e.target.value)} className="form-control w-100 m-1"/>
                                    <button type="button" onClick={addComment} className="btn btn-primary m-1 text-right pull-right">Reply</button>  
                                </div>
                                <div className=" text-right">
                                </div>
                            </Col>
                            <Col sm lg="2">
                            </Col>
                        </Row>
                    </Form>
                    }
        </Container>
        </div>
  }

  export default Thread