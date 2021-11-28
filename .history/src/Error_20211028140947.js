import React from 'react'
import { Helmet } from "react-helmet";
import './Assets/css/error.css'

const Error = () => {
    return (
        <>

            <div>
                  <Helmet>
                      <title>ConquError | ERROR!</title>
                      <meta name="description" content="ConquError Login page" />
                  </Helmet>
              </div>

            <h1>Hoi</h1>

            <div class="container" style="margin:0 auto; max-width:700px; height:100px;">
                <div class="row content">
             <div class="col-md-6">
                        <p>meesage here</p>
                          
                      
                       
                    </div>
            </div>
        </>
    )
}

export default Error
