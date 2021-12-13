import React from 'react'
import { Dropdown, DropdownButton} from 'react-bootstrap';
import {} from "../../firebase/firebase";
import { getAuth, signOut } from "firebase/auth";
import {Container,  Row,Col} from 'react-bootstrap'
import { useHistory} from "react-router-dom"
import swal from 'sweetalert';

export default function NavUser() {

    const auth = getAuth();
    const history = useHistory();

    function logout (){
       signOut(auth).then(() => {
      swal("Logout", "You have been logged out", "success");
      localStorage.removeItem('userProfile')
      history.push("/")
      
      }).catch((error) => {
      console.log(error.message)
      });
    }


      
    return (

      <Container>

      <Row>
        <Col></Col>

        <Col md="auto"></Col>

        <Col xs lg="4">
        <DropdownButton
          id="dropdown-button-dark-example2"
          variant="secondary"
          menuVariant="dark"
          title="ConquError"
          className="mt-2">

          <Dropdown.Item href="/profile"> Profile </Dropdown.Item>
          <Dropdown.Item  onClick={logout} >Log-Out</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="https://technojetdev.netlify.app">Technojet.Dev</Dropdown.Item>
        </DropdownButton>
    </Col>
  </Row>
</Container>
    )
}
