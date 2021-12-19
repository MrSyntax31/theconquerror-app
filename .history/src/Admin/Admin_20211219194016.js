import React from 'react'

//Taskbar title
import Helmet from 'react-helmet'

//Navbar
import Navbar from './NavBar'

//Bootstrap
import { Row, Container } from 'react-bootstrap';

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
                        {/* Section for Courses*/}
                        <section className="" id="destinations">   
                            <Container fluid="md" style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                        
                                <Row>          
                                    <div className="mt-5">
                                        <h1 className="text-center mt-4 text-primary fw-bold">Admin Console</h1>
                                    </div>

                                    <div className="col-sm-4 mb-5">
                                        <div className="card mt-4">
                                        <img className="card-img-top" src="../../../assets/Add User-rafiki.png" alt=""/>
                                            <div className="card-body">
                                                <h4 className="card-title text-center text-secondary fw-bold">Users Info</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-4 mb-5">
                                        <div className="card mt-4">
                                        <img className="card-img-top" src="../assets/Feedback-bro.png" alt=""/>
                                            <div className="card-body">
                                                <h4 className="card-title text-center text-secondary fw-bold">Feedback</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-4 mb-5">
                                        <div className="card mt-4">
                                        <img className="card-img-top" src="../assets/See you soon-pana.webp" alt=""/>
                                            <div className="card-body">
                                                <h4 className="card-title text-secondary text-center ">Coming Soon</h4>
                                                <p className="card-text text-secondary">In the coming months the ConquError will soon to offer other learning material for web design, data structures and algorithm, and database.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </Container>
                        </section>
        
            
        </Container>
        </>
    )
}

export default Admin
