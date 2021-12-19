import React from 'react'

//Taskbar title
import Helmet from 'react-helmet'

//Navbar
import Navbar from './NavBar'

//Bootstrap
import { Button, Row, Container, Col, Card, Offcanvas, Tab, Tabs, Accordion } from 'react-bootstrap';

const Admin = () => {
    return (
        <>
        {/* Tab Bar Title */}
        <Helmet>
            <title>ConquError | Admin</title>
        </Helmet>


        {/* Dashboard */}
        <Navbar/>

        {/* Content */}
        <Container className="mt-3">
            <h1>Hello Admin</h1>
        
            
        </Container>
        </>
    )
}

export default Admin
