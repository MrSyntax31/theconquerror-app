import React, { Component  } from "react";
import { Helmet } from "react-helmet";
import Navbar from '../../Components/Navbar/Navbar';
import "./Tutorial.css"

class Tutorial extends Component {
    render(){
        return (
        <>
                <div>
                    <Helmet>
                        <title>ConquError | Tutorial</title>
                        <meta name="description" content="ConquError Register page" />
                    </Helmet>
                </div> 

                <Navbar/>

                <section className="features section bg-light mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 mb-4">
                                    <h3 className="text-center text-secondary fw-bold">Tutorials</h3>
                                    
                            </div>
                    
                                
                        </div>
                        
                         <div className="container">
  
                                <div className="row d-flex justify-content-center">

                                    <div className="col-lg-4 col-md-6 col-12 mb-2">
                                        <h4 className="text-center text-secondary">Basic Programming Course</h4>
                                    <div className="d-flex justify-content-center" data-wow-delay=".4s">
                                        <iframe title= "Video1" className="d-flex justify-content-center" width="1080px" height="315" src="https://www.youtube.com/embed/jcYaWFhV8oY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                    </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-12 mb-2">
                                    <h4 className="text-center text-secondary">Basic Programming Course</h4>
                                    <div className="d-flex justify-content-center" data-wow-delay=".4s">
                                        <iframe title= "Video1" className="d-flex justify-content-center" width="1080px" height="315" src="https://www.youtube.com/embed/jcYaWFhV8oY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                    </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-12 mb-2">
                                    <h4 className="text-center text-secondary">Basic Programming Course</h4>
                                    <div className="d-flex justify-content-center" data-wow-delay=".4s">
                                        <iframe title= "Video1" className="d-flex justify-content-center" width="1080px" height="315" src="https://www.youtube.com/embed/jcYaWFhV8oY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                    </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-12 mb-2">
                                    <h4 className="text-center text-secondary">Basic Programming Course</h4>
                                    <div className="d-flex justify-content-center" data-wow-delay=".4s">
                                        <iframe title= "Video1" className="d-flex justify-content-center" width="1080px" height="315" src="https://www.youtube.com/embed/jcYaWFhV8oY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                    </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-12 mb-2">
                                    <h4 className="text-center text-secondary">Basic Programming Course</h4>
                                    <div className="d-flex justify-content-center" data-wow-delay=".4s">
                                        <iframe title= "Video1" className="d-flex justify-content-center" width="1080px" height="315" src="https://www.youtube.com/embed/jcYaWFhV8oY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                    </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-12 mb-2">
                                    <h4 className="text-center text-secondary">Basic Programming Course</h4>
                                    <div className="d-flex justify-content-center" data-wow-delay=".4s">
                                        <iframe title= "Video1" className="d-flex justify-content-center" width="1080px" height="315" src="https://www.youtube.com/embed/jcYaWFhV8oY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                    </div>
                                    </div>


                                </div>


                                <nav class="navbar">
        <div class="toggle-btn">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <img src="img/logo.PNG" class="logo" alt=""/>
        <div class="search-box">
            <input type="text" class="search-bar" placeholder="search"/>
            <button class="search-btn"><img src="img/search.PNG" alt=""/></button>
        </div>
        <div class="user-options">
            <img src="img/video.PNG" class="icon" alt=""/>
            <img src="img/grid.PNG" class="icon" alt=""/>
            <img src="img/bell.PNG" class="icon" alt=""/>
            <div class="user-dp">
                <img src="img/profile-pic.png" alt=""/>
            </div>
        </div>
    </nav>


    <div class="side-bar">
        <a href="#" class="links active"><img src="img/home.PNG" alt=""/>home</a>
        <a href="#" class="links"><img src="img/explore.PNG" alt=""/>explore</a>
        <a href="#" class="links"><img src="img/subscription.PNG" alt=""/>subscription</a>
        <hr class="seperator"/>
        <a href="#" class="links"><img src="img/library.PNG" alt=""/>library</a>
        <a href="#" class="links"><img src="img/history.PNG" alt=""/>history</a>
        <a href="#" class="links"><img src="img/your-video.PNG" alt=""/>your video</a>
        <a href="#" class="links"><img src="img/watch-later.PNG" alt=""/>watch leater</a>
        <a href="#" class="links"><img src="img/liked video.PNG" alt=""/>like video</a>
        <a href="#" class="links"><img src="img/show more.PNG" alt=""/>show more</a>
    </div>


    <div class="filters">
        <button class="filter-options active">all</button>
        <button class="filter-options">CSS</button>
        <button class="filter-options">web development</button>
        <button class="filter-options">python</button>
        <button class="filter-options">entertainment</button>
        <button class="filter-options">marvel</button>
        <button class="filter-options">javascript</button>
        <button class="filter-options">artificial intelligence</button>
        <button class="filter-options">machine learning</button>
        <button class="filter-options">trending</button>
    </div>

    <div class="video-container">
         <div class="video">
            <img src="img/profile-pic.png" class="thumbnail" alt=""/>
            <div class="content">
                <img src="img/profile-pic.png" class="channel-icon" alt=""/>
                <div class="info">
                    <h4 class="title">youtube clone 2021 | create working youtube clone</h4>
                    <p class="channel-name">modern web</p>
                </div>
            </div>
        </div> 
    </div>

    <script src="https://apis.google.com/js/api.js"></script>
    <script src="./app.js"></script>
                            </div>

                    </div>

                          
            </section>            

        </>
    )
    }
    
}

export default Tutorial
