import React from 'react';


import { Helmet } from "react-helmet";

//import { Form, Button, Container, Alert, Row, Col, Modal } from 'react-bootstrap'
//import { Link } from "react-router-dom"

import './upload.scss'
import './upload.css'

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
            <p class="lead">Upload Word, PDF and PPT<b>Just Javascript</b></p>


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

            <section>
            <div class="container">
                <div class="row it">
                <div class="col-sm-offset-1 col-sm-10" id="one">
                <p>
                Please upload documents only in 'pdf', 'docx', 'rtf', 'jpg', 'jpeg', 'png' & 'text' format.
                </p><br/>
                <div class="row">
                <div class="col-sm-offset-4 col-sm-4 form-group">
                    <h3 class="text-center">My Documents</h3>
                </div>
                </div>
                <div id="uploader">
                <div class="row uploadDoc">
                <div class="col-sm-3">
                    <div class="docErr">Please upload valid file</div>
                    <div class="fileUpload btn btn-orange">
                    <img src="https://image.flaticon.com/icons/svg/136/136549.svg" class="icon"/>
                    <img src="https://img.icons8.com/color/48/000000/open-document.png" class="icon"/>
                    <span class="upl" id="upload">Upload document</span>
                    <input type="file" class="upload up" id="up" onchange="readURL(this);" />
                    </div>
                </div>
                <div class="col-sm-8">
                    <input type="text" class="form-control" name="" placeholder="Note"/>
                </div>
                <div class="col-sm-1"><a class="btn-check"><i class="fa fa-times"></i></a></div>
                </div>
                </div>
                <div class="text-center">
                <a class="btn btn-new"><i class="fa fa-plus"></i> Add new</a>
                <a class="btn btn-next"><i class="fa fa-paper-plane"></i> Submit</a>
                </div>
                </div>
                </div>
            </div>
            </section>
  </div>;
};

export default UploadFile;
