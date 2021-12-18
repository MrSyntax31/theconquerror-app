import React, { useContext, useState, useEffect } from "react"
import {  } from "../../src/firebase/firebase";
import { getAuth, signOut } from "firebase/auth";

//Create Context to be used by User Auth
const AuthContext = React.createContext()

//Declare Var for getAuth Function of Firebase
const auth = getAuth();

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

 

  useEffect(() => {

    const checkstate = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })
    
    //signout users that are not verified
    if (currentUser)
    {
      if (auth.currentUser.emailVerified === false) 
      {
        signOut(auth);
      }
      else if (sessionStorage.getItem('sessionKey') === null) {
        //
      }
    }
    else{ 
      //
    }

  
   if (sessionStorage.getItem('sessionKey') === null)
    {
      signOut(auth);
   }
  else
   {
      console.log("you are logged-in")
    }

    return checkstate
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const value = {
    currentUser

  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
//This Component is Used to Check if there is a user Logged-in (Primarily used in PrivateRoute on routing Folder)