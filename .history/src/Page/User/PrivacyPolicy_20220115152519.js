import React from 'react'
import { Link } from "react-router-dom";
import { Container, NavBar} from 'react-bootstrap';
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
    return (
        <>
             <div>
                <Helmet>
                    <title>ConquError | Privacy Policy</title>
                    <meta name="description" content="ConquError Privacy Policy page" />
                </Helmet>
            </div> 
            <Navbar bg="dark" variant="dark" sticky="top">
            <Container>

              <p className="btn btn-primary" ><MdIcons.MdArrowBack/> Back</p>{'  '}
              <p className="btn text-light"><MdIcons.MdOutlineLogout/> Logout</p>
            </Container>  
          </Navbar>
            <section className="features section bg-light mt-4">
            <Container>
                            <div className="mb-4">
                                    <h1 className="text-center text-primary fw-bold">Welcome to Tutorials</h1>                                   
                            </div>  
                        </Container>

                            <Container className="mb-5" fluid="md" style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                        
                                    <section className="about_area section_gap">
                                            <div className="container">
                                                <div className="row justify-content-start align-items-center">
                                                    <div className="col-lg-5">
                                                        <div className="about_img">
                                                            <img className="" src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Annie Spratt unsplash.com/photos/MChSQHxGZrQ"/>
                                                        </div>
                                                    </div>

                                                    <div className="offset-lg-1 col-lg-5 mt-3">
                                                        <div className="main_title text-left">
                                                            <h2 className="fw-bold mb-3">let’s <br/>
                                                                Learn and study  <br/>
                                                                together</h2>
                                                            <p className="mb-3">
                                                                It's easy to study and learn if there is someone willing to help you. In these tutorials, you will learn how to become an independent leaner  and understand how to conquer your own problems.
                                                            </p>
                                                            <p> 
                                                                There are a lot of tutorials on the internet, but they are not meant for you. These tutorials are designed to help you understand how to become a better learner.
                                                                The following tutorial shows tips, guides, insight and strategies to help you better understood computer programming..
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </section>
                            </Container>
            </section>
        </>
    )
}

export default PrivacyPolicy
