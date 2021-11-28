import React, { useState } from 'react'
import data from "./data.json"
//import { CommentSection } from 'react-comments'
import { Link } from "react-router-dom"
import * as FaIcons from 'react-icons/fa';
import Helmet from 'react-helmet';
import Navbar from '../../Components/Navbar/Navbar'
import {Container} from 'react-bootstrap'
import { CommentSection } from 'react-comments-section'
import './Forum.css';
import 'react-comments-section/dist/index.css'

const Thread = () => {

    const [comment, setComment] = useState(data)
    const userId = "01a"
    const avatarUrl = "https://ui-avatars.com/api/name=arllan&background=random"
    const name = "Arllan"
    const signinUrl = "/signin"
    const signupUrl = "/signup"
    let count = 0
    comment.map(i => {count+=1; i.replies && i.replies.map(i=> count+=1)} )
 
    return <div className="commentSection">

        <div>
            <Helmet>
            <title>ConquError | Threads</title>
            <meta name="description" content="ConquError Games page" />
            </Helmet>
        </div>

        <Navbar/>


        <div className="mt-5 mb-5">
            <Link to="/forum" style={{ textDecoration: 'none',marginLeft: '10px', marginTop: '5px' }} className="mt-5"><FaIcons.FaArrowLeft/> Back</Link>
        </div>
        <Container className="mb-5">

        <div className="header text-primary">{count} Comments</div>
 
        <CommentSection currentUser={userId && { userId: userId, avatarUrl: avatarUrl, name: name }} commentsArray={comment} setComment={setComment} signinUrl={signinUrl} signupUrl={signupUrl}/>
        </Container>
        </div>
  }

  export default Thread