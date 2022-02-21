import React from 'react';


import { Helmet } from "react-helmet";

//import { Link } from "react-router-dom"

import './upload.css'
//import './upload.scss'

const UploadFile = () => {
  return <div className="backGround">
      {/* Helmet */}
            <div>
              <Helmet>
                <title>ConquError | Upload File </title>
                <meta name="description" content="Welcome to the ConquError Upload file page." />
              </Helmet>
            </div> 


            <div class="col-md-6 offset-md-3 mt-5">
       <a target="_blank" href="https://getform.io?ref=codepenHTML">
          <img src='https://i.imgur.com/Z2Nyxsm.png'/>
        </a>
        <br/>
        <a target="_blank" href="https://getform.io?ref=codepenHTML" class="mt-3 d-flex">Getform.io |  Get your free endpoint now</a>
        <h1>Getform.io HTML Form Example with File Upload</h1>
        <form accept-charset="UTF-8" action="https://getform.io/f/{your-form-endpoint-goes-here}"   target="_blank">
          <div class="form-group">
            <label for="exampleInputName">Full Name</label>
            <input type="text" name="fullname" class="form-control" id="exampleInputName" placeholder="Enter your name and surname" required="required"/>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1" required="required">Email address</label>
            <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Favourite Platform</label>
            <select class="form-control" id="exampleFormControlSelect1" name="platform" required="required">
              <option>Github</option>
              <option>Gitlab</option>
              <option>Bitbucket</option>
            </select>
          </div>
          <hr>
          <div class="form-group mt-3">
            <label class="mr-2">Upload your CV:</label>
            <input type="file" name="file">
          </div>
          <hr>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div> 
    

            
  </div>;
};

export default UploadFile;
