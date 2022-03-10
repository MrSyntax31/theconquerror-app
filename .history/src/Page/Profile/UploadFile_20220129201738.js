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



            
  </div>;
};

export default UploadFile;
