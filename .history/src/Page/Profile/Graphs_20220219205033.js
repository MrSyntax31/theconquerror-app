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
                          

                  
                        </Card.Text>

                              <div style={{marginTop:'2rem'}}>
                          

                                 
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