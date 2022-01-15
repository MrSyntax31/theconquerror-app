import React from 'react'
import { Link } from "react-router-dom";
import { Container, Navbar} from 'react-bootstrap';
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

              <p className="btn btn-primary" > Back</p>{'  '}
              <p className="btn text-light">Logout</p>
            </Container>  
          </Navbar>
            <section className="features section ">
            <Container>
                            <div className="mb-4">
                                    <h2 className="text-center text-primary fw-bold">Privacy Policy and Terms of Use</h2>                                   
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
                                                            <img className="" src="https://images.unsplash.com/photo-1613987750911-f768497fb94b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                                                        </div>
                                                    </div>

                                                    <div className="offset-lg-1 col-lg-5 mt-3">
                                                        <div className="main_title text-left">
                                                            <h2 className="fw-bold mb-3">Legitimate  <br/>
                                                                Reasons for Processing   <br/>
                                                                Your Personal Information</h2>
                                                            <p className="mb-3">
                                                                We only collect and use your personal information when we have a legitimate reason for doing so. In which instance, we only collect personal information that is reasonably necessary to provide our services to you.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </section>
                            </Container>
                                    <section className="about_area section_gap">
                                            <div className="container">
                                                <div className="row justify-content-start align-items-center">
                                                    <div className="col-lg-5">
                                                    <h3 className="mt-3 mb-3 fw-bold">Information We Collect</h3>
                                                            <p> 
                                                            We may collect personal information from you when you do any of the following on our website:
                                                            </p>
                                                            <ul>
                                                                <li>•	Use a mobile device or web browser to access our content</li>
                                                                <li>•	Contact us via email, social media, or on any similar technologies</li>
                                                                <li>•	Use a mobile device or web browser to access our content</li>
                                                            </ul>
                                                    </div>
                                                </div>
                                            </div>
                                    </section>
            </section>
        </>
    )
}

export default PrivacyPolicy
