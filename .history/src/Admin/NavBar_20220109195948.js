import React from 'react'
import { Container, Navbar, Button, Dropdown, DropdownButton, Row, Col } from 'react-bootstrap'
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
            <Row>
        <Col></Col>
        <Col md="auto"></Col>
        <Col xs lg="4">
            <DropdownButton className="NavBar mt-2"
            id="dropdown-button-dark-example2"
            variant="secondary"
            menuVariant="dark"
            title="Admin">

            <Dropdown.Item onClick={back}>Back</Dropdown.Item>
            <Dropdown.Item  onClick={logout}><MdIcons.MdOutlineLogout/> Log-Out</Dropdown.Item>
            <Dropdown.Divider />
            </DropdownButton>
        </Col>
            </Row>  
            </Container>
          </Navbar>
</>
    )
}

export default NavBar
