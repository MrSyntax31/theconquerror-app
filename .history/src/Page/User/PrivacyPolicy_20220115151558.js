import React from 'react'
import { Link, useHistory } from "react-router-dom"
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
    return (
        <>
             <div>
                <Helmet>
                    <title>ConquError | Privacy Policy</title>
                    <meta name="description" content="ConquError Privacy  page" />
                </Helmet>
            </div> 
        </>
    )
}

export default PrivacyPolicy
