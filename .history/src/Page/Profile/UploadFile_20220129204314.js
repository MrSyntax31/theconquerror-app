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


            <div className="col-md-6 offset-md-3 mt-5 mb-5 container">

                <div className="mb-3" >
                    <img  className="imgProf" alt="icon" src='https://firebasestorage.googleapis.com/v0/b/conquerror-development.appspot.com/o/Homepage%2Flogo.svg?alt=media&token=274fc263-dba7-4b50-a713-636284493fdc'/>
                </div>

                <br/>
        
                <form className="card">
                <div class="form-group m-4">
                    <label for="exampleInputName">Full Name</label>
                    <input type="text" name="fullname" class="form-control" id="exampleInputName" placeholder="Title" required="required"/>
                </div>
                <div class="form-group m-4">
                    <label for="exampleInputEmail1" required="required">Description</label>
                    <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Description"/>
                </div>
                <div class="form-group m-4">
                    <label for="exampleInputEmail1" required="required">Owner</label>
                    <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Owner"/>
                </div>
                <div class="form-group m-4">
                    <label for="exampleFormControlSelect1">Tags</label>
                    <select class="form-control" id="exampleFormControlSelect1" name="platform" required="required">
                    <option>Github</option>
                    <option>Gitlab</option>
                    <option>Bitbucket</option>
                    </select>
                </div>
                <hr/>
                <div className="form-group mt-3 m-4">
                    <label className="mr-2">Upload your CV:</label>
                    <input type="file" name="file"/>
                </div>
                <hr/>
                    <button type="submit" className="btn btn-primary m-4">Submit</button>
                </form>
    </div> 
    

            
  </div>;
};

export default UploadFile;
