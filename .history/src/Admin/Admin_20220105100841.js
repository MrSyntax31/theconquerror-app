import React from 'react'

//Taskbar title
import Helmet from 'react-helmet'

//Navbar
import Navbar from './NavBar'

//Bootstrap
import { Row, Container, Tabs, Tab, Card, Table, Form } from 'react-bootstrap';


//Firebase
import {} from 'firebase/auth'
import { getAuth } from '@firebase/auth';
import { getDatabase, ref, onValue } from "firebase/database";



const Admin = () => {

    const auth = getAuth();
    const realtimedb = getDatabase();
  
//Loads the function inside the useEffect when the component renders
useEffect (() => {
    
         //Function that shows the profile of the user 
  function showProfile() {
   

    //creating reference for realtimedb and fetching data from table users using the userID as reference then setting the data inside the Profile useState above
      const profileData = ref(realtimedb, '/users/' + userId);
      onValue(profileData, (snapshot) => {
        setData(snapshot.val());
      
        
    })
  }
          
          showProfile();
      
        
  
       
      
      
         
    },[]); // eslint-disable-line react-hooks/exhaustive-deps
    
   



    return (
        <>
            {/* Tab Bar Title */}
            <Helmet>
                <title>ConquError | Admin</title>
            </Helmet>


            {/* Navbar */}
            <Navbar/>

            {/* Content */}
            <Container className="mt-3 mb-5">

                            <main className="mt-3">
                                <div className="mt-3" fluid="md" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <div className="row">

                                        <div className="col-xl-3 col-sm-6 mb-3">
                                            <div className="card text-white bg-primary o-hidden h-100 ">
                                                <div className="card-body">
                                                <div className="card-body-icon">
                                                    <i className="fa fa-fw fa-comments"></i>
                                                </div>
                                                <div className="mr-5">26 New Messages!</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-3 col-sm-6 mb-3">
                                            <div className="card text-white bg-warning o-hidden h-100">
                                                <div className="card-body">
                                                <div className="card-body-icon">
                                                    <i className="fa fa-fw fa-list"></i>
                                                </div>
                                                <div className="mr-5">11 New Tasks!</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-3 col-sm-6 mb-3">
                                            <div className="card text-white bg-success o-hidden h-100">
                                                <div className="card-body">
                                                <div className="card-body-icon">
                                                    <i className="fa fa-fw fa-shopping-cart"></i>
                                                </div>
                                                <div className="mr-5">123 New Orders!</div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-xl-3 col-sm-6 mb-3">
                                            <div className="card text-white bg-danger o-hidden h-100">
                                                <div className="card-body">
                                                <div className="card-body-icon">
                                                    <i className="fa fa-fw fa-support"></i>
                                                </div>
                                                <div className="mr-5">13 New Tickets!</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </main>

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
                                    <Tab eventKey="home" title="Request Verification">
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

                                            <Form className="m-2">
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
                                                    <td style={{width:"8rem"}}><img src="" alt="profile" className="img-fluid mx-auto d-block"  style={{width: "3rem"}} /></td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                    </tr>
                                                    <tr>
                                                    <td>3</td>
                                                    <td style={{width:"8rem"}}><img src="" alt="profile" className="img-fluid mx-auto d-block"  style={{width: "3rem"}} /></td>
                                                    <td colSpan="2">Larry the Bird</td>
                                                    <td>@twitter</td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </Form>
                                            
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

                                            <Form className="m-2">
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
                                                    <td style={{width:"8rem"}}><img src="" alt="profile" className="img-fluid mx-auto d-block"  style={{width: "3rem"}} /></td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                    </tr>
                                                    <tr>
                                                    <td>3</td>
                                                    <td style={{width:"8rem"}}><img src="" alt="profile" className="img-fluid mx-auto d-block"  style={{width: "3rem"}} /></td>
                                                    <td colSpan="2">Larry the Bird</td>
                                                    <td>@twitter</td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </Form>
                                            
                                        </Card>
                                    </Tab>

                                    <Tab eventKey="report" title="Report">
                                        
                                    </Tab>
                                </Tabs>
                            </section>
            
                
            </Container>

        </>
    )
}

export default Admin
