import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import * as MdIcons from 'react-icons/md';

//Routing
import {  useHistory} from "react-router-dom"

//Authentication
import { getAuth, signOut } from "firebase/auth";

//Alert
import swal from 'sweetalert';

function NavBar () {
           const auth = getAuth(); 
          const history = useHistory();


          const back = (event) => {

          history.push("/profile")
           }

           const logout = (event) => {

            signOut(auth).then(() => {

              swal("Logout", "You have been logged out", "success");
              sessionStorage.removeItem('userLevel')
              sessionStorage.removeItem('sessionKey')
              sessionStorage.removeItem('UpdateKey')
              sessionStorage.removeItem('changePassKey')
        
              history.push("/login")

            }).catch((error) => { swal('Error',error,'error')})
           }

    return (
        <>

          <Navbar bg="dark" variant="dark" sticky="top">
            <Container>

              <p className="btn btn-primary" onClick={back}><MdIcons.MdOutlineLogout/> Back</p>{'  '}
              <p onClick={logout} className="btn text-light"><MdIcons.MdOutlineLogout/> Logout</p>
            </Container>  
          </Navbar>
</>
    )
}

export default NavBar
