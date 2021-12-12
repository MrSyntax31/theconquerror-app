import React, { useState, useEffect } from "react";
import Board from "./Board";
import { updateURLParameter } from "./helpers"
import './Puzzle.css'
import { Link } from "react-router-dom"
import * as FaIcons from 'react-icons/fa';
import Helmet from 'react-helmet';
import Navbar from '../../Components/Navbar/Navbar'
function Puzzle() {
  const [imgUrl, setImgUrl] = useState("")

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.has("img")) {
      setImgUrl(urlParams.get("img"))
    }
  }, [])

  const handleImageChange = (e) => {
    setImgUrl(e.target.value)
    window.history.replaceState("", "", updateURLParameter(window.location.href, "img", e.target.value))
  }

  return (
      <>
      
      <div>
            <Helmet>
            <title>ConquError | Puzzle</title>
            <meta name="description" content="ConquError Games page" />
            </Helmet>
        </div>

        <Navbar/>

        <div className="mt-5">
        <Link to="/games" style={{ textDecoration: 'none',marginLeft: '10px', marginTop: '5px' }} className="mt-5"><FaIcons.FaArrowLeft/> Back</Link>
        

        <div className="justify-content-center box">
        <h1 className="text-center text-secondary fw-bold">Error Sliding Puzzle</h1>
          <Board imgUrl={imgUrl} />
          {<input value={imgUrl} onChange={handleImageChange} /> }
        </div>
        </div>
      </>
  );
}

export default Puzzle;