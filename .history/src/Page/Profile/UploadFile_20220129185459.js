import React from 'react';


import { Helmet } from "react-helmet";

//import { Form, Button, Container, Alert, Row, Col, Modal } from 'react-bootstrap'
//import { Link } from "react-router-dom"

import './upl'

const UploadFile = () => {
  return <div>
      {/* Helmet */}
      <div>
              <Helmet>
                <title>ConquError | Upload File </title>
                <meta name="description" content="Welcome to the ConquError Upload file page." />
              </Helmet>
            </div> 


            <h2>File Upload & Image Preview</h2>
            <p class="lead">No Plugins <b>Just Javascript</b></p>


            <form id="file-upload-form" class="uploader">
            <input id="file-upload" type="file" name="fileUpload" accept="image/*" />

            <label for="file-upload" id="file-drag">
                <img id="file-image" src="#" alt="Preview" class="hidden"/>
                <div id="start">
                <i class="fa fa-download" aria-hidden="true"></i>
                <div>Select a file or drag here</div>
                <div id="notimage" class="hidden">Please select an image</div>
                <span id="file-upload-btn" class="btn btn-primary">Select a file</span>
                </div>
                <div id="response" class="hidden">
                <div id="messages"></div>
                <progress class="progress" id="file-progress" value="0">
                    <span>0</span>%
                </progress>
                </div>
            </label>
            </form>
  </div>;
};

export default UploadFile;
