import React from 'react'
import { Link } from "react-router-dom"
import {Container,  Row,Col} from 'react-bootstrap'

export default function NavGuest() {

    return (
   

    <Container>
      <Row>
        <Col></Col>
        <Col md="auto"></Col>
        <Col xs lg="2">

          <div className="NoUserMenu">
            <Link to="/login" style={{ textDecoration: 'none' , fontFamily: 'Raleway sans-serif'}} className="text-light ">Login</Link>
            <br />
            <Link to="/register" style={{ textDecoration: 'none'}} className="text-light ">Register</Link>
          </div>
    
        </Col>
      </Row>
    </Container>
        
    )
}
