import React from 'react';


import { Helmet } from "react-helmet";

//import { Form, Button, Container, Alert, Row, Col, Modal } from 'react-bootstrap'
//import { Link } from "react-router-dom"

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
            <p class="lead">Please upload documents only in 'pdf', 'docx', 'rtf', 'jpg', 'jpeg', 'png' & 'text' format.</p>


            <form id="file-upload-form" className="container">
                <div class="">
                <div class="row it">
                <div class="col-sm-offset-1 col-sm-10" id="one">
                

                <div id="uploader" className="mt-5">
                <div class="row uploadDoc">

                <div>
                    <input type="text" class="form-control" name="" placeholder="Note"/>
                    <input type="text" class="form-control" name="" placeholder="Note"/>
                </div>
                <div class="col-sm-3">
                    
                    <div class="fileUpload btn btn-orange">
                    <img src="https://img.icons8.com/color/48/000000/open-document.png" class="icon"/>
                    <span class="upl" id="upload">Upload document</span>
                    <input type="file" class="upload up" id="up" onchange="readURL(this);" />
                    </div>
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
            </form>

            
  </div>;
};

export default UploadFile;
