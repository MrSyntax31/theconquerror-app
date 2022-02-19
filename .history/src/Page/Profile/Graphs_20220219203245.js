import React from 'react';

//Dependencies
import Helmet from 'react-helmet';
import { Link } from "react-router-dom"

//Styles & Libraries
import { Card } from 'react-bootstrap';
import * as IoIcons from 'react-icons/io5';
import * as AiIcons from 'react-icons/ai';

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
              <title>ConquError | Graphs</title>
              <meta name="description" content="This is your graphs page." />
            </Helmet>
        </div>

        {/* Container for Card User Profile Information */}
        <div className="main-content">

              <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" style={{minHeight: "600px", backgroundImage: "url(https://images.unsplash.com/photo-1495592822108-9e6261896da8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)", backgroundSize: "cover", backgroundPosition: "center top"}}>

                <span className="mask bg-gradient-default opacity-8"></span>

                <div className="container-fluid d-flex align-items-center">
                  <div className="row">
                    <div className="col-lg-7 col-md-10">
                      <h1 className="display-2 text-white">Hello, name</h1>
                      <p className="text-white mt-0 mb-5">This is your statistical model of your all activities.</p>
                    </div>
                  </div>
                </div>
                
              </div>

              <div className="container-fluid mt--7" fluid="md" style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                <div className="row">

                  <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                    <div className="card card-profile shadow">
                      <div className="row justify-content-center">
                        <div className="col-lg-3 order-lg-2">
                          <div className="card-profile-image">
                            
                              

                          </div>
                        </div>
                      </div>
                      <div className=" text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                        
                      </div>
                      <div className="card-body pt-0 pt-md-4">
                        <div className="row">
                        </div>
                          <div className="text-center">
                            <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                              <div>
                                <span className="heading fs-2">i</span>
                                <span className="description">My Level</span>
                              </div>                              
                            </div>
                          </div>
                        <div className="text-center">
                          <h3 className="fw-bold">
                          
                          </h3>
                          <div className="h5 font-weight-500">
                            
                          </div>
                          <div className="h5 mt-4">
                                <Card.Text className="text-center">
                                  g
                                </Card.Text>
                          </div>
                          <div>
                          
                          </div>
                          <p className="btn btn-sm btn-primary mt-4"><IoIcons.IoSettingsSharp/> Settings</p> {''}
                          <p className="btn btn-sm btn-primary mt-4"><AiIcons.AiFillFileText/> Upload Files</p> {''}
                         
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-8 order-xl-1">
                    <div className="card shadow">
                      <div className="card-header bg-white border-0">
                        <div className="row align-items-center">
                          <div className="col-8">
                            <h3 className="mb-0 mt-4">My account</h3>
                          </div>
                        </div>
                      </div>

                        <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                        >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                        <Scatter dataKey="cnt" fill="red" />
                        </ComposedChart>
                    </ResponsiveContainer>

                    </div>
                  </div>

                </div>
              </div>
        </div>
    </>
  )
}

export default Graphs