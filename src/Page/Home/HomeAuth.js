import React from 'react'
import Guest from './HomeGuest'
import Logged from './HomeUser'
import {} from '../../firebase/firebase'
import { getAuth } from 'firebase/auth'

export default function HomeAuth() {
  
  //Detects if there is any user currently Logged-in on the Website so that the website knows which type of Homepage is going to be shown
  const auth = getAuth();
  const user = auth;
  const currentUser = user.currentUser;


  if (currentUser !== null) {
    return (
      <Logged/>
    );
    
  } else {
    return   <Guest/> ; 
  }
}

