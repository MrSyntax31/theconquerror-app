import React from 'react'
import GuestNav from './NavGuest'
import UserNav from './NavUser'
import {} from '../../firebase/firebase'
import { getAuth } from 'firebase/auth'

export default function NavAuth() {
  
  const auth = getAuth();
  const user = auth;
  const currentUser = user.currentUser;


  if (currentUser !== null) {
    return (
      <UserNav/>
    );
    
  } else {
    return   <GuestNav/> ; 
  }
}

