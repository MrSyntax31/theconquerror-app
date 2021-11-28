import React, { Component } from "react";
import { exportComponentAsPNG } from "react-component-export-image";

import  { Button, Card } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { Link } from "react-router-dom"
import * as GoIcons from 'react-icons/go';
import * as FaIcons from 'react-icons/fa';
import Navbar from '../../Components/Navbar/Navbar'
import "./Contents.css"

class Certificate extends Component {
    certificateWrapper = React.createRef();
    state = {
      Name: ""
    };
    render() {
      return (
        <div className="App container">
 

          <div>
        <Helmet>
            <title>ConquError | Certificate</title>
            <meta name="description" content="ConquError Certificate page" />
        </Helmet>
        </div> 

        <Navbar/>
        
            <div className="mt-5">
            <Link to="/course" style={{ textDecoration: 'none',marginLeft: '10px', marginTop: '5px' }} className="mt-5"><FaIcons.FaArrowLeft/> Back</Link>
                <div>
                <div className="p-2">
                        <div className="text-center mt-5 mb-5 rounded container" style={{backgroundColor:"#343a40"}}>
                        <Card.Body>
                            <Card.Title> 
                            
                                </Card.Title>
                                    <Card.Text>
                                        <img src="../Assets/logo.svg" alt="logo" className="w-50 mt-2"/>
                                    </Card.Text>
                                        <div className=" text-start p-4 container">
                                            <h5 className="fs-m text-start container text-light"><GoIcons.GoCloudDownload/> Download your Certificate Here! </h5>     
                                        </div>
                                        <main>
                                        <div className="Meta">
            <input
            className="form-control mb-4"
              type="text"
              placeholder="Please enter your name..."
              value={this.state.Name}
              onChange={(e) => {
                this.setState({ Name: e.target.value });
              }}
            />
            <Button
              onClick={(e) => {
                e.preventDefault();
                exportComponentAsPNG(this.certificateWrapper, {
                  html2CanvasOptions: { backgroundColor: null }
                });
              }}
            >
              <GoIcons.GoCloudDownload/> Download
            </Button>
          </div>
  
          <div id="downloadWrapper" ref={this.certificateWrapper}>
            <div id="certificateWrapper">
              <p>{this.state.Name}</p>
              <img src="https://imgur.com/nGIFuwv.png" alt="Certificate" />
            </div>
          </div>
                                        </main>
                            </Card.Body>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Certificate;