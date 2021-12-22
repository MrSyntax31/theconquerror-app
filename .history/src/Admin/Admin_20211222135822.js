import React from 'react'

//Taskbar title
import Helmet from 'react-helmet'

//Navbar
import Navbar from './NavBar'

//Bootstrap
//import { Row, Container, Tabs, Tab, Card, Table, Form } from 'react-bootstrap';

import './style.css'


const Admin = () => {
    return (
        <>
        {/* Tab Bar Title */}
        <Helmet>
            <title>ConquError | Admin</title>
        </Helmet>


        {/* Dashboard */}
        <Navbar/>

        {/* Content 
        <Container className="mt-3 mb-5">



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
                                <Tab eventKey="contact" title="Contact" disabled>
                                    
                                </Tab>
                            </Tabs>
                        </section>
        
            
        </Container>*/}



<main >



  <div class="content-wrapper">
    <div class="container-fluid">
    
      <div class="row">
        <div class="col-xl-3 col-sm-6 mb-3">
          <div class="card text-white bg-primary o-hidden h-100">
            <div class="card-body">
              <div class="card-body-icon">
                <i class="fa fa-fw fa-comments"></i>
              </div>
              <div class="mr-5">26 New Messages!</div>
            </div>
            <a class="card-footer text-white clearfix small z-1" href="#">
              <span class="float-left">View Details</span>
              <span class="float-right">
                <i class="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-3">
          <div class="card text-white bg-warning o-hidden h-100">
            <div class="card-body">
              <div class="card-body-icon">
                <i class="fa fa-fw fa-list"></i>
              </div>
              <div class="mr-5">11 New Tasks!</div>
            </div>
            <a class="card-footer text-white clearfix small z-1" href="#">
              <span class="float-left">View Details</span>
              <span class="float-right">
                <i class="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-3">
          <div class="card text-white bg-success o-hidden h-100">
            <div class="card-body">
              <div class="card-body-icon">
                <i class="fa fa-fw fa-shopping-cart"></i>
              </div>
              <div class="mr-5">123 New Orders!</div>
            </div>
            <a class="card-footer text-white clearfix small z-1" href="#">
              <span class="float-left">View Details</span>
              <span class="float-right">
                <i class="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-3">
          <div class="card text-white bg-danger o-hidden h-100">
            <div class="card-body">
              <div class="card-body-icon">
                <i class="fa fa-fw fa-support"></i>
              </div>
              <div class="mr-5">13 New Tickets!</div>
            </div>
            <a class="card-footer text-white clearfix small z-1" href="#">
              <span class="float-left">View Details</span>
              <span class="float-right">
                <i class="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    
      <div class="card mb-3">
        <div class="card-header">
          <i class="fa fa-area-chart"></i> Area Chart Example</div>
        <div class="card-body">
          <canvas id="myAreaChart" width="100%" height="30"></canvas>
        </div>
        <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          
          <div class="card mb-3">
            <div class="card-header">
              <i class="fa fa-bar-chart"></i> Bar Chart Example</div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm-8 my-auto">
                  <canvas id="myBarChart" width="100" height="50"></canvas>
                </div>
                <div class="col-sm-4 text-center my-auto">
                  <div class="h4 mb-0 text-primary">$34,693</div>
                  <div class="small text-muted">YTD Revenue</div>
                  <hr/>
                  <div class="h4 mb-0 text-warning">$18,474</div>
                  <div class="small text-muted">YTD Expenses</div>
                  <hr/>
                  <div class="h4 mb-0 text-success">$16,219</div>
                  <div class="small text-muted">YTD Margin</div>
                </div>
              </div>
            </div>
            <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
          </div>
          
            <i class="fa fa-newspaper-o"></i> News Feed</div>
          <hr class="mt-2"/>
          <div class="card-columns">
            
            <div class="card mb-3">
              <a href="#">
                <img class="card-img-top img-fluid w-100" src="https://unsplash.it/700/450?image=610" alt=""/>
              </a>
              <div class="card-body">
                <h6 class="card-title mb-1"><a href="#">David Miller</a></h6>
                <p class="card-text small">These waves are looking pretty good today!
                  <a href="#">#surfsup</a>
                </p>
              </div>
              <hr class="my-0"/>
              <div class="card-body py-2 small">
                <a class="mr-3 d-inline-block" href="#">
                  <i class="fa fa-fw fa-thumbs-up"></i>Like</a>
                <a class="mr-3 d-inline-block" href="#">
                  <i class="fa fa-fw fa-comment"></i>Comment</a>
                <a class="d-inline-block" href="#">
                  <i class="fa fa-fw fa-share"></i>Share</a>
              </div>
              <hr class="my-0"/>
              <div class="card-body small bg-faded">
                <div class="media">
                  <img class="d-flex mr-3" src="http://placehold.it/45x45" alt=""/>
                  <div class="media-body">
                    <h6 class="mt-0 mb-1"><a href="#">John Smith</a></h6>Very nice! I wish I was there! That looks amazing!
                    <ul class="list-inline mb-0">
                      <li class="list-inline-item">
                        <a href="#">Like</a>
                      </li>
                      <li class="list-inline-item">·</li>
                      <li class="list-inline-item">
                        <a href="#">Reply</a>
                      </li>
                    </ul>
                    <div class="media mt-3">
                      <a class="d-flex pr-3" href="#">
                        <img src="http://placehold.it/45x45" alt=""/>
                      </a>
                      <div class="media-body">
                        <h6 class="mt-0 mb-1"><a href="#">David Miller</a></h6>Next time for sure!
                        <ul class="list-inline mb-0">
                          <li class="list-inline-item">
                            <a href="#">Like</a>
                          </li>
                          <li class="list-inline-item">·</li>
                          <li class="list-inline-item">
                            <a href="#">Reply</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer small text-muted">Posted 32 mins ago</div>
            </div>
      
            <div class="card mb-3">
              <a href="#">
                <img class="card-img-top img-fluid w-100" src="https://unsplash.it/700/450?image=180" alt=""/>
              </a>
              <div class="card-body">
                <h6 class="card-title mb-1"><a href="#">John Smith</a></h6>
                <p class="card-text small">Another day at the office...
                  <a href="#">#workinghardorhardlyworking</a>
                </p>
              </div>
              <hr class="my-0"/>
              <div class="card-body py-2 small">
                <a class="mr-3 d-inline-block" href="#">
                  <i class="fa fa-fw fa-thumbs-up"></i>Like</a>
                <a class="mr-3 d-inline-block" href="#">
                  <i class="fa fa-fw fa-comment"></i>Comment</a>
                <a class="d-inline-block" href="#">
                  <i class="fa fa-fw fa-share"></i>Share</a>
              </div>
              <hr class="my-0"/>
              <div class="card-body small bg-faded">
                <div class="media">
                  <img class="d-flex mr-3" src="http://placehold.it/45x45" alt=""/>
                  <div class="media-body">
                    <h6 class="mt-0 mb-1"><a href="#">Jessy Lucas</a></h6>Where did you get that camera?! I want one!
                    <ul class="list-inline mb-0">
                      <li class="list-inline-item">
                        <a href="#">Like</a>
                      </li>
                      <li class="list-inline-item">·</li>
                      <li class="list-inline-item">
                        <a href="#">Reply</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-footer small text-muted">Posted 46 mins ago</div>
            </div>
      
           </div>
           </div>
    </div>


</main>
        </>
    )
}

export default Admin
