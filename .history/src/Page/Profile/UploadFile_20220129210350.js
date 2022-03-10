import React from 'react';


import { Helmet } from "react-helmet";

import { Link } from "react-router-dom"
import * as FaIcons from 'react-icons/fa';

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
                    <h2>Upload </h2>

                <div className="form-group m-4">
                    <label htmlFor="exampleInputName">Title</label>
                    <input type="text" name="title" className="form-control" id="exampleInputName" placeholder="Title" required="required"/>
                </div>
                <div className="form-group m-4">
                    <label htmlFor="exampleInputEmail1" required="required">Description</label>
                    <input type="email" name="description" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Description"/>
                </div>
                <div className="form-group m-4">
                    <label htmlFor="exampleInputEmail1" required="required">Owner</label>
                    <input type="email" name="owner" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Owner"/>
                </div>
                <div className="form-group m-4">
                    <label htmlFor="exampleFormControlSelect1">Tags</label>
                    <select className="form-control" id="exampleFormControlSelect1" name="platform" required="required">
                    <option>Programming</option>
                    <option>C++</option>
                    <option>Others</option>
                    </select>
                </div>
                <hr/>
                <div className="form-group mt-3 m-4">
                    <label className="mr-2 mb-3">Upload Document</label>
                    <input type="file" name="file"/>
                </div>
                <hr/>
                    <button type="submit" className="btn btn-primary m-4">Submit</button>
                </form>
    <Link to="/profile" style={{ textDecoration: 'none',marginLeft: '10px', marginTop: '5rem' }}><FaIcons.FaArrowLeft/> Return</Link>
            
    </div> 
    
  </div>;
};

export default UploadFile;
