import React from 'react'

//Taskbar title
import Helmet from 'react-helmet'

//Navbar
import Navbar from '../../components/NavBar'

const Admin = () => {
    return (
        <>
        {/* Tab Bar Title */}
        <Helmet>
            <title>DPFA | Dashbaord</title>
        </Helmet>


        {/* Dashboard */}
        <Navbar/>
        </>
    )
}

export default Admin
