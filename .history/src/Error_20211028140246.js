import React from 'react'
import { Helmet } from "react-helmet";
import './Assets/css/error.css'

const Error = () => {
    return (
        <>

            <div>
                  <Helmet>
                      <title>ConquError | ERROR!</title>
                      <meta name="description" content="ConquError Login page" />
                  </Helmet>
              </div>

              <div className="container">
        <div className="error">
            <h1>500</h1>
            <h2>error</h2>
            <p>Ruh-roh, something just isn't right... Time to paw through your logs and get down and dirty in your
                stack-trace;)</p>
        </div>
        <div className="stack-container">
            <div className="card-container">
                <div className="perspec" style="--spreaddist: 125px; --scaledist: .75; --vertdist: -25px;">
                    <div className="card">
                        <div className="writing">
                            <div className="topbar">
                                <div className="red"></div>
                                <div className="yellow"></div>
                                <div className="green"></div>
                            </div>
                            <div className="code">
                                <ul>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-container">
                <div className="perspec" style="--spreaddist: 100px; --scaledist: .8; --vertdist: -20px;">
                    <div className="card">
                        <div className="writing">
                            <div className="topbar">
                                <div class="red"></div>
                                <div class="yellow"></div>
                                <div class="green"></div>
                            </div>
                            <div class="code">
                                <ul>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-container">
                <div class="perspec" style="--spreaddist:75px; --scaledist: .85; --vertdist: -15px;">
                    <div class="card">
                        <div class="writing">
                            <div class="topbar">
                                <div class="red"></div>
                                <div class="yellow"></div>
                                <div class="green"></div>
                            </div>
                            <div class="code">
                                <ul>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-container">
                <div class="perspec" style="--spreaddist: 50px; --scaledist: .9; --vertdist: -10px;">
                    <div class="card">
                        <div class="writing">
                            <div class="topbar">
                                <div class="red"></div>
                                <div class="yellow"></div>
                                <div class="green"></div>
                            </div>
                            <div class="code">
                                <ul>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-container">
                <div class="perspec" style="--spreaddist: 25px; --scaledist: .95; --vertdist: -5px;">
                    <div class="card">
                        <div class="writing">
                            <div class="topbar">
                                <div class="red"></div>
                                <div class="yellow"></div>
                                <div class="green"></div>
                            </div>
                            <div class="code">
                                <ul>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-container">
                <div class="perspec" style="--spreaddist: 0px; --scaledist: 1; --vertdist: 0px;">
                    <div class="card">
                        <div class="writing">
                            <div class="topbar">
                                <div class="red"></div>
                                <div class="yellow"></div>
                                <div class="green"></div>
                            </div>
                            <div class="code">
                                <ul>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
        </>
    )
}

export default Error
