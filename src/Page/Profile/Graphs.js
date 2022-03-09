import React from 'react';

//Dependencies
import Helmet from 'react-helmet';

//Styles & Libraries
import { Card, Container } from 'react-bootstrap';

import Navbar from '../../Components/Navbar/Navbar'

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
    ResponsiveContainer,
  } from 'recharts';
  
  import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';


const Graphs = () => {




  const data = [
    {
      name: 'Page A',
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: 'Page B',
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: 'Page C',
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: 'Page D',
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: 'Page E',
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: 'Page F',
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
  ];
  

  const datas = [
    {
      subject: 'Math',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Chinese',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'English',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Geography',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'Physics',
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'History',
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];

  return (
    <>
        {/* Division for Tab Page and Description*/}
        <div>
            <Helmet>
              <title>ConquError | 📈 Graphs</title>
              <meta name="description" content="This is your graphs page." />
            </Helmet>
        </div>

        <Navbar/>
        
        {/* Container for Card User Profile Information */}
        <section>
               
        <div className="main-content">

            <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" style={{minHeight: "600px", backgroundImage: "url(https://images.unsplash.com/photo-1495592822108-9e6261896da8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)", backgroundSize: "cover", backgroundPosition: "center top"}}>

            <span className="mask bg-gradient-default opacity-8"></span>

            <div className="container-fluid d-flex align-items-center">
                <div className="row">
                <div className="col-lg-7 col-md-10">
                    <h1 className="display-2 text-white">Hello, Arman </h1>
                    <p className="text-white mt-0 mb-5">Welcome to your graphical data center. Monitor your data and performance.</p>
                </div>
                </div>
            </div>
            
            </div>

        </div>

            <Card>
                <Container>
                                <div className="text-center">
                                    <h3 className="text-center mt-5 fw-bold">Graph Title</h3>
                                    <p>
                                        This shows the different lesson's time table and status of your current lesson.
                                    </p>
                                </div>
                    <div className="App">
                        <div style={{ width: '100%', height: 350, marginTop:'2rem', marginBottom:'2rem' }}>
                        <ResponsiveContainer>
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
                            </ComposedChart>
                        </ResponsiveContainer>
                        </div>
                    </div>

                                <div className="text-center">
                                    <h3 className="text-center mt-5 fw-bold">Graph Title</h3>
                                    <p>
                                        This shows the different lesson's time table and status of your current lesson.
                                    </p>
                                </div>
                    <div className="App">
                        <div style={{ width: '100%', height: 350, marginTop:'2rem', marginBottom:'2rem' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={datas}>
                                <PolarGrid />
                                <PolarAngleAxis dataKey="subject" />
                                <PolarRadiusAxis />
                                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </Container>
            </Card>
                
              </section>
 
    </>
  )
}

export default Graphs