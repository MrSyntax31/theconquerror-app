import React, { useEffect, useState } from 'react'

import { Link } from "react-router-dom"
import * as FaIcons from 'react-icons/fa';
import Helmet from 'react-helmet';
import Navbar from '../../Components/Navbar/Navbar'
import {Container, Form} from 'react-bootstrap'
import './Forum.css';
import { getAuth } from '@firebase/auth';
import { getFirestore, doc, onSnapshot, addDoc, collection,query,orderBy } from '@firebase/firestore';
import { useHistory } from 'react-router';


const Thread = () => {
    
    const auth = getAuth();
    const forumdb = getFirestore();
    
    const user = auth.currentUser;

    const history = useHistory();
    
    const threadId = localStorage.getItem('threadID');
  
    const [topic, setTopic] = useState([]);

    const [reply, setReply] = useState();
    
    const [threadList, setReplies] = useState([]);

    const [Empty, checkEmpty] = useState(false);
      
         
         //convert date which is timestamp to String
         var timestamp = Date.now();
         var convertedDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)
   
   async function addComment(){

        if (user === null){

            if (window.confirm('You need to be logged-in to continue, Press Yes to Proceed on our Log-in Page')) {
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
                 email : user.email
                }).then(() =>{
                    setReply("");
               alert("Comment has been posted!");
              
            
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


    const showRep= threadList.map((threadList) =>  <div key={threadList.id}>  <br></br> {threadList.reply} <br></br>{threadList.email}</div>)

    
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
        
        <Container className="mb-5 bg-light rounde">
        
        { Empty && <h1>Nothing to see here.</h1>  }  

        <strong>{topic.title}</strong><br></br>
        {topic.desc}<br></br>
        {topic.created_by}<br></br>
        {topic.created_at}<br></br>

        {showRep}
      
            { Empty ? '' :
                    <Form className="mt-3">
                    <input type="textarea"  value={reply || ''} onChange={e => setReply(e.target.value)} className="form-control w-25"/>
                    <button  onClick={addComment} className="btn btn-primary mt-2">Add Comment</button>  
                    </Form>
                    }

        </Container>
        
        
        </div>
  }

  export default Thread