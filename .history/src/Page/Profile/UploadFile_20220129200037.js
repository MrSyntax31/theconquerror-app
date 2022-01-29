import React from 'react';


import { Helmet } from "react-helmet";

import { FContainer} from 'react-bootstrap'
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
            <p className="lead">Please upload documents only in 'pdf', 'docx', 'rtf', 'jpg', 'jpeg', 'png' & 'text' format.</p>


            <form className="container" >
                
                <div class="row it">
                <div class="col-sm-offset-1 col-sm-10" id="one">
                

                <div id="uploader" className="mt-5">
                <div className="row uploadDoc">

                <div>
                    <input type="text" class="form-control" name="" placeholder="Title"/>
                    <input type="text" class="form-control" name="" placeholder="Description"/>
                    <input type="text" class="form-control" name="" placeholder="Tags"/>
                    <input type="text" class="form-control" name="" placeholder="Owner"/>
                </div>
                <div class="col-sm-3">
                    
                    <div className="fileUpload btn btn-orange">
                    <img src="https://img.icons8.com/color/48/000000/open-document.png" className="icon"/>
                    <span className="upl" id="upload">Upload document</span>
                    <input type="file" className="upload up" id="up" onchange="readURL(this);" />
                    </div>
                </div>
                
                <div className="col-sm-1"><a class="btn-check"><i class="fa fa-times"></i></a></div>
                </div>
                </div>
                <div className="text-center mb-5">
                <button className="btn btn-primary"><i className="fa fa-plus"></i> Add new</button>
                </div>
                </div>
                </div>
                
            </form>

            
  </div>;
};

export default UploadFile;
