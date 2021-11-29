import React, { Component  } from "react";
import { Helmet } from "react-helmet";
import { Row, Container, Col } from 'react-bootstrap';
import Navbar from '../../Components/Navbar/Navbar';
import './frame.css'

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

                    <Container>
                                <div className='box'>
                                    <div className='wave -one'></div>
                                    <div className='wave -two'></div>
                                    <div className='wave -three'></div>
                                </div>

                        <div>
                            <div className="col-sm-12 col-md-12 mb-4">
                                    <h1 className="text-center text-primary fw-bold">Welcome to Tutorial Page</h1>                                   
                            </div>  
                        </div>
                        
                         <Container fluid="md" style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
  
  <section class="about_area section_gap">
		<div class="container">
			<div class="row justify-content-start align-items-center">
				<div class="col-lg-5">
					<div class="about_img">
						<img class="" src="img/about-us.png" alt=""/>
                        <iframe width="1904" height="837" src="https://www.youtube.com/embed/vwzlg-wSDH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</div>
				</div>

				<div class="offset-lg-1 col-lg-5">
					<div class="main_title text-left">
						<h2>let’s <br/>
							Introduce about <br/>
							myself</h2>
						<p>
							Whose given. Were gathered. There first subdue greater. Bearing you Whales heaven 
							midst their. Beast creepeth. Fish days.
						</p>
						<p>
							Is give may shall likeness made yielding spirit a itself together created after sea 
							is in beast beginning signs open god you're gathering whose gathered cattle let. 
							Creature whales fruit unto meat the life beginning all in under give two.
						</p>
						<a class="primary_btn" href="#"><span>Download CV</span></a>
					</div>
				</div>
			</div>
		</div>
	</section>
                            </Container>

                    </Container>

                          
            </section>            

        </>
    )
    }
    
}

export default Tutorial
