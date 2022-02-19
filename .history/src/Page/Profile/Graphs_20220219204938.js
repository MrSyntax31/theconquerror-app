import React from 'react';

//Dependencies
import Helmet from 'react-helmet';
import { Link } from "react-router-dom"

//Styles & Libraries
import { Card } from 'react-bootstrap';


import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
  } from 'recharts';
  
  const data = [
    {
      name: 'Page A',
      uv: 590,
      pv: 800,
      amt: 1400,
      cnt: 490,
    },
    {
      name: 'Page B',
      uv: 868,
      pv: 967,
      amt: 1506,
      cnt: 590,
    },
    {
      name: 'Page C',
      uv: 1397,
      pv: 1098,
      amt: 989,
      cnt: 350,
    },
    {
      name: 'Page D',
      uv: 1480,
      pv: 1200,
      amt: 1228,
      cnt: 480,
    },
    {
      name: 'Page E',
      uv: 1520,
      pv: 1108,
      amt: 1100,
      cnt: 460,
    },
    {
      name: 'Page F',
      uv: 1400,
      pv: 680,
      amt: 1700,
      cnt: 380,
    },
  ];

const Graphs = () => {
  return (
    <>
        {/* Division for Tab Page and Description*/}
        <div>
            <Helmet>
              <title>ConquError | 📈 Graphs</title>
              <meta name="description" content="This is your graphs page." />
            </Helmet>
        </div>

        {/* Container for Card User Profile Information */}
        <section className="m-1">
               
                    <Card>
                      <section>
                        <div className="headers mb-2">
                          <h3 className="text-center" style={{marginBottom:'5rem'}}>Forum</h3>
                          <h2  className="text-light fw-bold ml-2" style={{marginTop:'4rem'}}>ConquErroRoom</h2>
                        </div>
                      </section>
                      <Card.Body>
                        <Card.Title>
                        <div className="row">
                          <h3 className="text-primary fw-bold">Forum</h3>
                        </div>
                        </Card.Title>

                        <Card.Text>
                      
                            <strong>ConquError</strong> is a community of users who are interested in learning and sharing their knowledge and experience with each other. The forum is open source and is available for everyone to contribute to and learn from the community.
                            If you have any questions or concerns, please feel free to ask them in the forum. Just click on the "Ask Questions" button and fill in the form.
                            ConquError is a free flat-forum bulletin board solution that can be used to communicate with a small group of people or to share their knowledge.
                          
                          <br/>
                          <Button variant="primary" onClick={AskQuestion} className="mt-2 mb-2"> Ask a Question</Button>

                  
                        </Card.Text>

                              <div style={{marginTop:'2rem'}}>
                          

                                  {/* Division for Discussion Board*/}
                            
                                      <section className="text-center mt-2 mb-5">
                                        <div>                                  
                                              <div className="text-start">
                                                <h3 className="fw-bold fs-m text-start"><GoIcons.GoCommentDiscussion/> Most Recent Topics  </h3>     
                                                    {Discussion}

                                                    <Modal size="sm" show={smShow}  onHide={() => setSmShow(false)}  aria-labelledby="example-modal-sizes-title-sm">
                                                      <Modal.Header closeButton>
                                                        <Modal.Title id="example-modal-sizes-title-sm">
                                                          User Information
                                                        </Modal.Title>
                                                      </Modal.Header>
                                                      <Modal.Body>
                                                          <div className="text-center">
                                                            <img src={avatar.img} className="rounded-circle" alt="UserLvl" width="100" height="100"/>
                                                          </div>
                                                          <div className="text-center">
                                                          <strong>Email</strong>
                                                            <h6>{showUserEmail}</h6>
                                                            </div>
                                                          <div className="text-center">
                                                            <strong>User Level on post</strong>
                                                            <h5>{showUserLevel}</h5>
                                                          </div>
                                                          <Button className="btn w-100 text-light"  onClick={askReport}><GoIcons.GoReport/> Report</Button>
                                                      </Modal.Body>
                                                    </Modal>
                                              </div>


                                              <Modal show={showR} onHide={handleCloseR}>
                                                <Modal.Header closeButton>
                                                  <Modal.Title>Report User</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                  <Form>
                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                      <Form.Label>State your problem.</Form.Label>
                                                      <Form.Control as="textarea" value={report || ""} onChange={e => ReportUser(e.target.value)} rows={3} />
                                                      <Button className="btn w-100 mt-3 text-light" data-id={showUserEmail} onClick={sendReport}><GoIcons.GoReport/> Report</Button>
                                                    </Form.Group>
                                                  </Form>
                                                </Modal.Body>
                                              </Modal>


                                              <div className="position-end">
                                              
                                                <em> Click to see more discussions.</em>
                                            
                                                <Link to="/alltopics" style={{ textDecoration: 'none',marginLeft: '10px', marginTop: '5px' }} className="mt-5"> Show All</Link> 
                                              </div>
                                        </div>
                                      </section>
                            

                          
                                  <a href="#top" className="scroll-top">
                                    <i className="fa fa-chevron-up"></i>
                                  </a>

                              </div>


                      </Card.Body>
                    </Card>
                
              </section>
 
    </>
  )
}

export default Graphs