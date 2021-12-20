import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../firebase/auth"


export default function PrivateRoute({ component: Component, ...rest }) {
  
  //Gets the data from currentUser on the auth.js component on /firebase
  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Redirect to="/login" /> 
      }}
    ></Route>
  )
}
//checks if there is a user logged in so that App.js knows whether if it will open the Page or redirect the user to log-in page
