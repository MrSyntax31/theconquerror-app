import React from 'react';


import { Helmet } from "react-helmet";

//import { Link } from "react-router-dom"

import './upload.css'

const UploadFile = () => {
  return <div className="backGround">
      {/* Helmet */}
            <div>
              <Helmet>
                <title>ConquError | Upload File </title>
                <meta name="description" content="Welcome to the ConquError Upload file page." />
              </Helmet>
            </div> 

            <div class="container"><div class="container">
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
                    <div class="docErr">Please upload valid file</div><!--error-->
                    <div class="fileUpload btn btn-orange">
                    <img src="https://image.flaticon.com/icons/svg/136/136549.svg" class="icon">
                    <span class="upl" id="upload">Upload document</span>
                    <input type="file" class="upload up" id="up" onchange="readURL(this);" />
                    </div><!-- btn-orange -->
                </div><!-- col-3 -->
                <div class="col-sm-8">
                    <input type="text" class="form-control" name="" placeholder="Note">
                </div><!--col-8-->
                <div class="col-sm-1"><a class="btn-check"><i class="fa fa-times"></i></a></div><!-- col-1 -->
                </div><!--row-->
                </div><!--uploader-->
                <div class="text-center">
                <a class="btn btn-new"><i class="fa fa-plus"></i> Add new</a>
                <a class="btn btn-next"><i class="fa fa-paper-plane"></i> Submit</a>
                </div>
                </div><!--one-->
                </div><!-- row -->
                </div><!-- container -->

            
  </div>;
};

export default UploadFile;
