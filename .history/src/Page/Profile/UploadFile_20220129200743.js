import React from 'react';


import { Helmet } from "react-helmet";

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

      

            <form className="mx-auto d-block container m-4">
                
                <div class="row it mx-auto d-block container">
                <div className="col-sm-offset-1 col-sm-10" id="one">
                

                <div id="uploader" className="mt-5 ">

                <div className="row uploadDoc">

                <div>
                    <input type="text" class="form-control" name="" placeholder="Title"/>
                    <input type="text" class="form-control" name="" placeholder="Description"/>
                    <input type="text" class="form-control" name="" placeholder="Tags"/>
                    <input type="text" class="form-control" name="" placeholder="Owner"/>
                </div>

                <div class="col-sm-3">
                    
                    <div className="fileUpload btn btn-orange">
                        <img src="https://img.icons8.com/color/48/000000/open-document.png" className="icon" alt="/>
                        
                    <span className="upl" id="upload">Upload document</span>
                    <input type="file" className="upload up" id="up" onchange="readURL(this);" />
                    </div>
                </div>
                
                <div className="col-sm-1"><a class="btn-check"><i class="fa fa-times"></i></a></div>
                </div>
                </div>

                <div className="text-center mb-5">
                    <button className="btn btn-primary mb-3">Upload Document</button>
                </div>

                </div>
                </div>
                
            </form>
          

            
  </div>;
};

export default UploadFile;
