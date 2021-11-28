import React from 'react'
import { Link } from "react-router-dom"
import * as FaIcons from 'react-icons/fa';
import Helmet from 'react-helmet';
import Navbar from '../../Components/Navbar/Navbar'
import {Container} from 'react-bootstrap'


export default function Thread() {
    return (
        <>
            <div>
            <Helmet>
            <title>ConquError | Puzzle</title>
            <meta name="description" content="ConquError Games page" />
            </Helmet>
        </div>

        <Navbar/>

        <div className="mt-5 mb-5">
        <Link to="/forum" style={{ textDecoration: 'none',marginLeft: '10px', marginTop: '5px' }} className="mt-5"><FaIcons.FaArrowLeft/> Back</Link>
        </div>


        <Container>
            
        </Container>
        </>
    )
}
