import React from 'react'
import { Helmet } from "react-helmet";
import './error.css'
import './Login.css'

const RequestDenied = () => {
    
    return (
        <>
    

            <div>
                  <Helmet>
                      <title>ConquError | ERROR!</title>
                      <meta name="description" content="ConquError Login page" />
                  </Helmet>
              </div>

            <section className="section mb-5 mt-5">
                <div className="container mb-5 mt">
                    <div className="row mb-5">
                        <div className="col-md-8 mx-auto">  
                            <div className="card">
                                <div className="card-header">
                                    <h4>ERROR!</h4>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="error-template">
                                                <h1>
                                                    403
                                                </h1>
                                                <h2>
                                                    Oops! You are not authorized to access this page.
                                                </h2>
                                                <div className="error-details">
                                                    Sorry, an error has occured, Request Denied!
                                                </div>
                                                <div className="error-actions">
                                                    <a href="/" className="btn btn-primary btn-lg">
                                                        <span className="glyphicon glyphicon-home"></span>
                                                        Take Me Home
                                                    </a>
                                                    <a href="/" className="btn btn-default btn-lg">
                                                        <span className="glyphicon glyphicon-envelope"></span>
                                                        Contact Support
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default RequestDenied
