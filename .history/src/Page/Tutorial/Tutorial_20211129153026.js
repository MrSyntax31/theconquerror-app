import React, { Component  } from "react";
import { Helmet } from "react-helmet";
import { Row, Container, Col } from 'react-bootstrap';
import Navbar from '../../Components/Navbar/Navbar';
import './frame.css'

class Tutorial extends Component {
    render(){
        return (
        <>
                <div>
                    <Helmet>
                        <title>ConquError | Tutorial</title>
                        <meta name="description" content="ConquError Register page" />
                    </Helmet>
                </div> 

                <Navbar/>

                <section className="features section bg-light mt-5">

                    <Container>
                                <div className='box'>
                                    <div className='wave -one'></div>
                                    <div className='wave -two'></div>
                                    <div className='wave -three'></div>
                                </div>
                                
                        <div className="">
                            <div className="col-sm-12 col-md-12 mb-4">
                                    <h1 className="text-center text-primary fw-bold">Welcome to Tutorial Page</h1>
                                    
                            </div>
                    
                                
                        </div>
                        
                         <Container fluid="md" style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
  
                                
                            </Container>

                    </Container>

                          
            </section>            

        </>
    )
    }
    
}

export default Tutorial
