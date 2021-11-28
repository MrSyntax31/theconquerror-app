import React, { PureComponent, useState } from 'react'
import data from "./data.json"
//import { CommentSection } from 'react-comments'
import { Link } from "react-router-dom"
import * as FaIcons from 'react-icons/fa';
import Helmet from 'react-helmet';
import Navbar from '../../Components/Navbar/Navbar'
import {Container} from 'react-bootstrap'
import { CommentSection } from 'react-comments-section'

export default function Thread() {

    const [comment, setComment] = useState(data)
   const userId = "01a"
   const avatarUrl = "https://ui-avatars.com/api/name=Riya&background=random"
   const name = "xyz"
   const signinUrl = "/signin"
   const signupUrl = "/signup"
   let count = 0
   comment.map(i => {count+=1; i.replies && i.replies.map(i=> count+=1)} )

   return
   
   <div className="commentSection">
 <div className="header">{count} Comments</div>

 <CommentSection currentUser={userId && { userId: userId, avatarUrl: avatarUrl, name: name }} commentsArray={comment}
 setComment={setComment} signinUrl={signinUrl} signupUrl={signupUrl}/>
     </div>
     

        </>
    )
}
