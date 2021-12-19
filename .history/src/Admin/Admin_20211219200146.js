import React from 'react'

//Taskbar title
import Helmet from 'react-helmet'

//Navbar
import Navbar from './NavBar'

//Bootstrap
import { Row, Container, Tabs, Tab, Card, Table } from 'react-bootstrap';

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
                                        <h1 className="text-center text-primary fw-bold">Admin Console</h1>
                                    </div>

                                    <div className="col-sm-4 mb-5">
                                        <div className="card mt-4">
                                        <img className="card-img-top" src="../../../assets/Add User-rafiki.png" alt=""/>
                                        <h3 className="card-title text-center text-primary fw-bold">Users Count</h3>
                                            <div className="card-body">
                                                <h4 className="card-title text-center text-secondary fw-bold">User</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-4 mb-5">
                                        <div className="card mt-4">
                                        <img className="card-img-top" src="../assets/Feedback-bro.png" alt=""/>
                                        <h3 className="card-title text-center text-primary fw-bold">Feedback Count</h3>
                                            <div className="card-body">
                                                <h4 className="card-title text-center text-secondary fw-bold">Feedback</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-4 mb-5">
                                        <div className="card mt-4">
                                        <img className="card-img-top" src="../assets/See you soon-pana.webp" alt=""/>
                                        <h3 className="card-title text-center text-primary fw-bold">Users Count</h3>
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
                                            <Card.Title>User Info</Card.Title>
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

                                        <Table striped bordered hover>
                                            <thead>
                                            <tr>
                                            <th>#</th>
                                            <th>Profile Picture</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                            <td>1</td>
                                            <td style={{width:"8rem"}}><img src="" alt="profile" className="img-fluid mx-auto d-block"  style={{width: "3rem"}} /></td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            </tr>
                                            <tr>
                                            <td>2</td>
                                            <td style={{width:"8rem"}}><img src="38010771~hmac=54c1cfbc2dab5826e67ac88187de7f1b" alt="profile" className="img-fluid mx-auto d-block"  style={{width: "3rem"}} /></td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            </tr>
                                            <tr>
                                            <td>3</td>
                                            <td style={{width:"8rem"}}><img src="https://cdn-icons.flaticon.com/png/512/3177/premium/3177440.png?token=exp=1638010771~hmac=54c1cfbc2dab5826e67ac88187de7f1b" alt="profile" className="img-fluid mx-auto d-block"  style={{width: "3rem"}} /></td>
                                            <td colSpan="2">Larry the Bird</td>
                                            <td>@twitter</td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </Card>
                                </Tab>
                                <Tab eventKey="profile" title="Feedback">
                                <Card>
                                        <Card.Body>
                                            <Card.Title>Feedback</Card.Title>
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
