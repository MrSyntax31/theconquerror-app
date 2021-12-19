import React from 'react'

//Taskbar title
import Helmet from 'react-helmet'

//Navbar
import Navbar from './NavBar'

//Bootstrap
import { Row, Container, Tabs, Tab, Card } from 'react-bootstrap';

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
        <Container className="mt-3 mb-5">
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
                                                <h4 className="card-title text-secondary text-center fw-bold">Coming Soon</h4>
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </Container>
                        </section>

                        <section className="mt-5 mb-5">
                            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="home" title="User Info">
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Home</Card.Title>
                                            <Card.Text>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Donec velit urna, interdum eget ipsum eu,
                                                tincidunt efficitur nunc.
                                                Nullam euismod, nisi eget consectetur
                                                consectetur, nisl nisl maximus nisl,
                                                eget efficitur nunc nisl eu nisl.
                                                Nulla facilisi.
                                                Donec velit urna, interdum eget ipsum eu,
                                                tincidunt efficitur nunc.
                                                Nullam euismod, nisi eget consectetur
                                                consectetur, nisl nisl maximus nisl,
                                                eget efficitur nunc nisl eu nisl.
                                                Nulla facilisi.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Tab>
                                <Tab eventKey="profile" title="Feedback">
                                <Card>
                                        <Card.Body>
                                            <Card.Title>Home</Card.Title>
                                            <Card.Text>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Donec velit urna, interdum eget ipsum eu,
                                                tincidunt efficitur nunc.
                                                Nullam euismod, nisi eget consectetur
                                                consectetur, nisl nisl maximus nisl,
                                                eget efficitur nunc nisl eu nisl.
                                                Nulla facilisi.
                                                Donec velit urna, interdum eget ipsum eu,
                                                tincidunt efficitur nunc.
                                                Nullam euismod, nisi eget consectetur
                                                consectetur, nisl nisl maximus nisl,
                                                eget efficitur nunc nisl eu nisl.
                                                Nulla facilisi.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Tab>
                                <Tab eventKey="contact" title="Contact" disabled>
                                    
                                </Tab>
                            </Tabs>
                        </section>
        
            
        </Container>
        </>
    )
}

export default Admin
