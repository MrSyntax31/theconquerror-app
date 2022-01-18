import React, {useEffect,useState} from 'react';
import { Helmet } from "react-helmet";
import { Row, Container, Col, Card, Tab, Tabs, Badge, Form, Table, Button} from 'react-bootstrap';
import * as BsIcons from 'react-icons/bs';
import Navbar from '../../Components/Navbar/Navbar';
import {  collection, getFirestore,  query, getDocs } from 'firebase/firestore';
import * as IoIcons from 'react-icons/io5';
import { Link } from "react-router-dom"

function Tutorial() {

    const docsdb = getFirestore();


    const [Docs, setDocs] = useState([])

const collRef = query(collection(docsdb, "docs"));

// Query the first page of docs
async function fetch(){
//query data

try{
const documentSnapshots = await getDocs(collRef);

const isEmpty = documentSnapshots.size === 0;
//Pagination
if(!isEmpty)
{     //throw data to useState
const map =  documentSnapshots.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
setDocs(map);
  }       
else{
//No DATA

}

}
catch(error){
console.log(error.message)

};

}


useEffect(
    () => {

     fetch()

    },[]); // eslint-disable-line react-hooks/exhaustive-deps

async function download(e){
    
    const doclink = e.target.getAttribute("data-id")

   await window.open(doclink)

}

const docsfile = Docs.map((documents) => (

    <tbody key={documents.id}>
    <tr >
    <td>{documents.Description}</td>
    <td>{documents.Topic} </td>
    <td>{documents.Owner}</td>
    <td>  <Button data-id={documents.FileLink} onClick={download} style={{ textDecoration: 'none', marginLeft:'3px' }} className="mb-4"><IoIcons.IoDownload/></Button></td>
    </tr>
    </tbody>
)
)
    return (
        <>
        <div>
                    <Helmet>
                        <title>ConquError | Tutorials</title>
                        <meta name="description" content="ConquError Register page" />
                    </Helmet>
                </div> 

                <Navbar/>
                
                <section className="features section bg-light mt-4">

                    
                        <div>
                            <div className="mb-4">
                                    <h1 className="text-center text-primary fw-bold">Welcome to Tutorials</h1>                                   
                            </div>  
                        </div>

                            <Container className="mb-5" fluid="md" style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                        
                                    <section className="about_area section_gap">
                                            <div className="container">
                                                <div className="row justify-content-start align-items-center">
                                                    <div className="col-lg-5">
                                                        <div className="about_img">
                                                            <img className="" src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Annie Spratt unsplash.com/photos/MChSQHxGZrQ"/>
                                                        </div>
                                                    </div>

                                                    <div className="offset-lg-1 col-lg-5 mt-3">
                                                        <div className="main_title text-left">
                                                            <h2 className="fw-bold mb-3">let’s <br/>
                                                                Learn and study  <br/>
                                                                together</h2>
                                                            <p className="mb-3">
                                                                It's easy to study and learn if there is someone willing to help you. In these tutorials, you will learn how to become an independent leaner  and understand how to conquer your own problems.
                                                            </p>
                                                            <p> 
                                                                There are a lot of tutorials on the internet, but they are not meant for you. These tutorials are designed to help you understand how to become a better learner.
                                                                The following tutorial shows tips, guides, insight and strategies to help you better understood computer programming..
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </section>
                            </Container>

                            <section className="features section bg-light mt-5">
                                <section fluid="md" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Row>
                                        <div className="">
                                            <h1 className="text-center text-primary fw-bold">Our featured Content Creators</h1>
                                        </div>
                                                        <Col style={{width: "200px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                                            <Card style={{ width: '18rem', marginTop: '2rem' }}>
                                                                <div style={{textAlign:"center"}}>
                                                                    <Card.Img variant="top" className="mt-5 w-50 rounded" src="../assets/WhiteLogo.png" />
                                                                </div>
                                                                <Card.Body>
                                                                <Card.Title className="text-center">ConquError</Card.Title>
                                                                </Card.Body>
                                                            </Card>        
                                                        </Col>

                                                        <Col style={{width: "200px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                                            <Card style={{ width: '18rem', marginTop: '2rem' }}>
                                                                        <div style={{textAlign:"center"}}>
                                                                        <Card.Img variant="top" className="mt-5 w-50 rounded" src="https://firebasestorage.googleapis.com/v0/b/conquerror-development.appspot.com/o/Images%2FCreator%2F162108690_121301806677028_8488807075884298821_n.jpg?alt=media&token=7ea53e45-dee7-4a61-bb98-407b21d24f94" />
                                                                        </div>           
                                                                        <Card.Body>
                                                                            <Card.Title className="text-center">Kuya Dev</Card.Title>
                                                                        </Card.Body>
                                                            </Card>            
                                                        </Col>

                                                        <Col style={{width: "200px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                                            <Card style={{ width: '18rem', marginTop: '2rem' }}>
                                                                        <div style={{textAlign:"center"}}>
                                                                        <Card.Img variant="top" className="mt-5 w-50 rounded" src="https://firebasestorage.googleapis.com/v0/b/conquerror-development.appspot.com/o/Images%2FCreator%2F142506784_713464262646294_432244117709991327_n.png?alt=media&token=a8893ce5-d0b6-4d28-b0ba-509fe0338a18" />
                                                                        </div>           
                                                                        <Card.Body>
                                                                            <Card.Title className="text-center">SDPT Solutions</Card.Title>
                                                                        </Card.Body>
                                                            </Card>            
                                                        </Col>

                                                        <Col style={{width: "200px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                                            <Card style={{ width: '18rem', marginTop: '2rem' }}>
                                                                        <div style={{textAlign:"center"}}>
                                                                        <Card.Img variant="top" className="mt-5 w-50 rounded" src="https://dashboard.kleap.co/wp-content/uploads/sites/139/2021/10/08102021082041_blob.png" />
                                                                        </div>           
                                                                        <Card.Body>
                                                                            <Card.Title className="text-center">Josiahdoestech</Card.Title>    
                                                                        </Card.Body>
                                                            </Card>            
                                                        </Col>

                                                        <Col style={{width: "200px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                                            <Card style={{ width: '18rem', height:"15rem", marginTop: '2rem' }}>
                                                                        <div style={{textAlign:"center"}}>
                                                                        <Card.Img variant="top" className="mt-5 w-50 rounded mb-3" src="https://firebasestorage.googleapis.com/v0/b/conquerror-development.appspot.com/o/Images%2FCreator%2F149870072_4438803116146821_814614453010169425_n.jpg?alt=media&token=bb9aa651-9f9d-4b9c-bca7-420d7125bc76" />
                                                                        </div>           
                                                                        <Card.Body>
                                                                            <Card.Title className="mt-4 text-center">John Carlo Franco</Card.Title>
                                                                        </Card.Body>
                                                            </Card>            
                                                        </Col>
                                    </Row>
                                </section>

                                {/* Kuya Dev */}
                                <section className="">
                                        <Card className="mt-5">
                                            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3 p-2 m-2">
                                                <Tab eventKey="home" title="Kuya Dev">
                                                    <Row>
                                                        <Col  className="text-center">
                                                                    <img alt="KuyaDev" variant="top" className="mt-2 w-50" src="https://firebasestorage.googleapis.com/v0/b/conquerror-development.appspot.com/o/Images%2FCreator%2F162108690_121301806677028_8488807075884298821_n.jpg?alt=media&token=7ea53e45-dee7-4a61-bb98-407b21d24f94" />
                                                                <div className="text-center mt-3">
                                                                    <p><strong>Kuya Dev</strong></p>
                                                                    <p>Ako si Rem, ang inyong Kuya Dev.</p>
                                                                </div>
                                                        </Col>
                                                        
                                                        <Col xs={12} md={8} className="container mb-5 m-3">
                                                            <p className="mt-2 text-justify">
                                                                <strong>Rem Lampa</strong> is Kuya Dev. He is a podcaster, web developer, speaker, and tech community leader.
                                                            <br/>
                                                            Formerly an electrical engineer, he is currently a Senior JS Engineer at Prosple, specialized in ReactJS and ExpressJS.
                                                            <br/>
                                                            He is also a co-founder and community manager of freeCodeCamp.Manila, and part of the core team of ReactJS Philippines.
                                                            <br/>
                                                            * <i className="fw-bold mt-5">"Kuya"</i> means "older brother" in Filipino, often used as a term of endearment.
                                                            </p>
                                                            <label className="fw-bold mb-2">Follow and Subscribe to learn more!</label>
                                                            <br/>
                                                            <h5>
                                                            <Badge bg="" text="dark"><BsIcons.BsTags/> Career Hack</Badge>
                                                            <Badge bg="" text="dark"><BsIcons.BsTags/> Podcast</Badge>
                                                            <Badge bg="" text="dark"><BsIcons.BsTags/> IT Tips</Badge>
                                                            <Badge bg="" text="dark"><BsIcons.BsTags/> GraphQL</Badge>
                                                            </h5>
                                                            
                                                            <a href="https://www.facebook.com/Rem.Lampa" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/facebook-new.png"  alt="facebook" /></a>
                                                            <a href="https://twitter.com/RemLampa?fbclid=IwAR2vIoBPC5VwfDY7mOQIpmA3thzEcxh7jV0gMMDtakCCjEfMTuV5Ogtg1Ps" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/twitter--v2.png"  alt="twitter"/></a>
                                                            <a href="https://www.youtube.com/RemLampa" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/youtube-play.png"  alt="youtube"/></a>
                                                            <a href="https://open.spotify.com/show/1w3LK7ABhxOcv5uHppyE0Z?fbclid=IwAR2QNWUbj4MdY70Fcaf-GHt8FzctPYebLmKayxinJ0q_Tv5jigp23S5Eus8" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/spotify--v3.png"  alt="spotify"/></a>
                                                            <a href="https://github.com/RemLampa?fbclid=IwAR0l8U3KlN39PEYtg9aNgTMPu2E6C7823GEy85RXg6oAe6WwvGS8ce5F_Js" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/github.png"  alt="github"/></a>
                                                        </Col>
                                                    </Row>
                                                </Tab>

                                                <Tab eventKey="profile" title="Videos">
                                                    <Container className="container-fluid mt-7" fluid="md" style={{
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center"
                                                        }}>
                                                        <Card>
                                                            <Card.Body>
                                                                
                                                                <h3 className="mt-2 fw-bold">Featured</h3>
                                                            <div className="video" style={{
                                                                position: "relative",
                                                                paddingBottom: "56.25%" /* 16:9 */,
                                                                paddingTop: 25,
                                                                height: 0 }} >
                                                                    <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} src="https://www.youtube.com/embed/O7jCPAOt53U?list=PLh6-IXduASC_QtCU7Dnn3IdLyhsshNtEv" frameBorder="0" title="vid" allowFullScreen/>
                                                            </div>

                                                            <Container>
                                                                    <Row>
                                                                        <div className="mt-3">
                                                                            <div className="">
                                                                                <h1 className="fw-bold">Kuya Dev Tidbits Podcast Season 2</h1>
                                                                                    
                                                                                    <p>Mga kuro-kuro ni Kuya Dev ukol sa pagbuo ng Career sa Pinoy Tech at Startup industry, at iba pang aspeto ng buhay.</p>
                                                                                    <p>Minsan nag-i-Ingles rin. Mapraktis lang ba.</p>
                                                                                    <p>Kuya Dev Tidbits Podcast: New episodes every Saturday at 8AM PHT.</p>
                                                                                    <div>

                                                
                                                                                        <section className="about_area section_gap mb-3 mt-3">
                                                                                                <div className="">
                                                                                                    <div className="row justify-content-start align-items-center">
                                                                                                        <div className="col-lg-4">
                                                                                                            <div className="about_img">
                                                                                                                <iframe title= "Video1" className="d-flex justify-content-center" width="315" height="315" src="https://www.youtube.com/embed/I2rbRmt4r8g?list=PLh6-IXduASC_QtCU7Dnn3IdLyhsshNtEv" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                                                                                            </div>
                                                                                                        </div>

                                                                                                        <div className="offset-lg-1 col-lg-5 mt-3">
                                                                                                            <div className="main_title text-left">
                                                                                                            <h5 className="fw-bold mb-3">S2E2 | Bakit Di Umubra ang Work From Home sa Ibang Kumpanya?</h5>
                                                                                                                <p className="mb-2">
                                                                                                                What I think went wrong in companies that failed adopting remote working setup during the pandemic.
                                                                                                                </p>
                                                                                                                    ABOUT KUYA DEV TIDBITS PODCAST
                                                                                                                <p className="mb-2">
                                                                                                                    Mga kuro-kuro ni Kuya Dev ukol sa pagbuo ng Career sa Pinoy Tech at Startup industry, at iba pang aspeto ng buhay.
                                                                                                                </p>
                                                                                                                <p className="mb-2">
                                                                                                                    Minsan nag-i-Ingles rin. Mapraktis lang ba.
                                                                                                                </p>
                                                                                                                <p className="mb-2">
                                                                                                                    Kuya Dev Tidbits Podcast: New episodes every Saturday at 8AM PHT.
                                                                                                                </p>
                                                                                                                <span className="duration">Duration: 16 minutes, 06 seconds</span><br/>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                        </section>

                                                                                        <section className="about_area section_gap mb-3">
                                                                                                <div className="">
                                                                                                    <div className="row justify-content-start align-items-center">
                                                                                                        <div className="col-lg-4">
                                                                                                            <div className="about_img">
                                                                                                            <iframe title= "Video1" className="d-flex justify-content-center" width="315" height="315" src="https://www.youtube.com/embed/z2xadp8e9Xs?list=PLh6-IXduASC_QtCU7Dnn3IdLyhsshNtEv" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                                                                                            </div>
                                                                                                        </div>

                                                                                                        <div className="offset-lg-1 col-lg-5 mt-3">
                                                                                                            <div className="main_title text-left">
                                                                                                                <h5 className="fw-bold mb-3">S2E3 | Career Hack: The More Entries You Send, The More Chances of Winning</h5>
                                                                                                                <p className="mb-2">
                                                                                                                Talakayin natin ang isa sa mga mabisang paraan para mapalaki ang tiyansa na makakuha ng tech job.
                                                                                                                </p>
                                                                                                                    ABOUT KUYA DEV TIDBITS PODCAST
                                                                                                                <p className="mb-2">
                                                                                                                    Mga kuro-kuro ni Kuya Dev ukol sa pagbuo ng Career sa Pinoy Tech at Startup industry, at iba pang aspeto ng buhay.
                                                                                                                </p>
                                                                                                                <p className="mb-2">
                                                                                                                    Minsan nag-i-Ingles rin. Mapraktis lang ba.
                                                                                                                </p>
                                                                                                                <p className="mb-2">
                                                                                                                    Kuya Dev Tidbits Podcast: New episodes every Saturday at 8AM PHT.
                                                                                                                </p>
                                                                                                                <span className="duration">Duration: 13 minutes, 41 seconds</span><br/>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                        </section>
                                                                                        
                                                                                        <section className="about_area section_gap mb-3">
                                                                                                <div className="">
                                                                                                    <div className="row justify-content-start align-items-center">
                                                                                                        <div className="col-lg-4">
                                                                                                            <div className="about_img">
                                                                                                            <iframe title= "Video1" className="d-flex justify-content-center" width="315" height="315" src="https://www.youtube.com/embed/rMiDze5Nguc?list=PLh6-IXduASC_QtCU7Dnn3IdLyhsshNtEv" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                                                                                            </div>
                                                                                                        </div>

                                                                                                        <div className="offset-lg-1 col-lg-5 mt-3">
                                                                                                        <h5 className="fw-bold mb-3">S2E4 | College vs. Bootcamp vs. Self-Study: Alin Nga Ba ang Pinaka-Effective?</h5>
                                                                                                            <div className="main_title text-left">
                                                                                                                <p className="mb-2">
                                                                                                                My perspective on the differences between different paths to acquiring skills for a tech career.
                                                                                                                </p>
                                                                                                                    ABOUT KUYA DEV TIDBITS PODCAST
                                                                                                                <p className="mb-2">
                                                                                                                    Mga kuro-kuro ni Kuya Dev ukol sa pagbuo ng Career sa Pinoy Tech at Startup industry, at iba pang aspeto ng buhay.
                                                                                                                </p>
                                                                                                                <p className="mb-2">
                                                                                                                    Minsan nag-i-Ingles rin. Mapraktis lang ba.
                                                                                                                </p>
                                                                                                                <p className="mb-2">
                                                                                                                    Kuya Dev Tidbits Podcast: New episodes every Saturday at 8AM PHT.
                                                                                                                </p>
                                                                                                                <span className="duration">Duration: 30 minutes, 35 seconds</span><br/>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                        </section>

                                                                                        <section className="about_area section_gap mb-3">
                                                                                                <div className="">
                                                                                                    <div className="row justify-content-start align-items-center">
                                                                                                        <div className="col-lg-4">
                                                                                                            <div className="about_img">
                                                                                                            <iframe title= "Video1" className="d-flex justify-content-center" width="315" height="315" src="https://www.youtube.com/embed/rMiDze5Nguc?list=PLh6-IXduASC_QtCU7Dnn3IdLyhsshNtEv" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                                                                                            </div>
                                                                                                        </div>

                                                                                                        <div className="offset-lg-1 col-lg-5 mt-3">
                                                                                                            <div className="main_title text-left">
                                                                                                                <h5 className="fw-bold mb-3">S2E5 | Should Everyone Invest in Cryptocurrencies?</h5>
                                                                                                                <p className="mb-2">
                                                                                                                My take on the cryptocurrency craze. Is it worth throwing money in?
                                                                                                                </p>
                                                                                                                    ABOUT KUYA DEV TIDBITS PODCAST
                                                                                                                <p className="mb-2">
                                                                                                                    Mga kuro-kuro ni Kuya Dev ukol sa pagbuo ng Career sa Pinoy Tech at Startup industry, at iba pang aspeto ng buhay.
                                                                                                                </p>
                                                                                                                <p className="mb-2">
                                                                                                                    Minsan nag-i-Ingles rin. Mapraktis lang ba.
                                                                                                                </p>
                                                                                                                <p className="mb-2">
                                                                                                                    Kuya Dev Tidbits Podcast: New episodes every Saturday at 8AM PHT.
                                                                                                                </p>
                                                                                                                <span className="duration">Duration: 31 minutes, 38 seconds</span><br/>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                        </section>

                                                                                    </div>            
                                                                            </div>
                                                                        </div>
                                                                    </Row>
                                                            </Container>
                                                                
                                                            </Card.Body>
                                                        </Card>
                                                    </Container>
                                                </Tab>
                                            </Tabs>
                                        </Card>   
                                </section>
                                
                                {/* SDPTSolutions */}
                                <section>
                                        <Card className="mt-5">
                                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 p-2 m-2">
                                            <Tab eventKey="profile" title="SDPT Solutions">
                                                <Row>
                                                    <Col  className="text-center m-3">
                                                                <img alt="SDPTSolutions" variant="top" className="mt-2 w-50" src="https://firebasestorage.googleapis.com/v0/b/conquerror-development.appspot.com/o/Images%2FCreator%2F142506784_713464262646294_432244117709991327_n.png?alt=media&token=a8893ce5-d0b6-4d28-b0ba-509fe0338a18" />
                                                            <div className="text-center mt-3">
                                                                <p><strong>SDPT Solutions</strong></p>
                                                                <p>SDPT Solutions is an Organization that Creates Video Tutorial for Programmers.</p>
                                                            </div>
                                                    </Col>
                                                    
                                                    <Col xs={12} md={8} className="container mb-5 m-3">
                                                        <p className="mt-2 text-justify">
                                                        <strong>SDPT Solutions</strong>, Is a small non-profit organization created by a Christian Couple that are creating Programming Tutorials for Filipinos to Watch. All of the knowledge you'll find here is solely from God.</p>
                                                        <p className="mt-2 text-justify">
                                                        <strong>How We Started</strong>
                                                            <br/>We Started with a Goal of Teaching Filipinos Computer Programming in the most convenient way possible.
                                                                Starting On May 29, 2019 Using our current knowledge and equipment we created video tutorials on Youtube using Tagalog Language.
                                                        </p>
                                                        <label className="fw-bold mb-2">Follow and Subscribe to learn more!</label>
                                                        <br/>
                                                            <h5>
                                                            <Badge bg="" text="dark"><BsIcons.BsTags/> IT Tips</Badge>
                                                            <Badge bg="" text="dark"><BsIcons.BsTags/> C++ Tutorial</Badge>
                                                            <Badge bg="" text="dark"><BsIcons.BsTags/> Programming</Badge>
                                                            <Badge bg="" text="dark"><BsIcons.BsTags/> Basic Web</Badge>
                                                            </h5>
                                                        <a href="https://www.facebook.com/SDPTSolutionsOfficial/" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/facebook-new.png"  alt="facebook" /></a>
                                                        <a href="https://sdptsolutionswebsite.web.app/" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/domain.png"  alt="web"/></a>
                                                        <a href="https://www.youtube.com/c/SDPTSolutions/featured" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/youtube-play.png"  alt="youtube"/></a>
                                                        <a href="https://www.tiktok.com/@sdptsolutions?"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/tiktok.png"  alt="spotify"/></a>
                                                    </Col>
                                                </Row>
                                            </Tab>

                                            <Tab eventKey="video" title="Videos">
                                                    <Container className="container-fluid mt-7" fluid="md" style={{
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center"
                                                        }}>
                                                        <Card>
                                                            <Card.Body>
                                                                
                                                                <h3 className="mt-2 fw-bold">Featured</h3>
                                                            <div className="video"
                                                                    style={{
                                                                        position: "relative",
                                                                        paddingBottom: "56.25%" /* 16:9 */,
                                                                        paddingTop: 25,
                                                                        height: 0 }}>
                                                                <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} src="https://www.youtube.com/embed/sPTZNXbSrqY" frameBorder="0" title="vid" allowFullScreen/>
                                                            </div>

                                                        <Container>
                                                                <Row>
                                                                    <div className="mt-3">
                                                                        <div className="">
                                                                            <h1 className="fw-bold mb-3">SDPTSolutions | The Greatest Programmer | Tagalog | Filipino</h1>
                                                                                
                                                                                <p>A  Basic In Depth Tutorial for C++ learn C++ without any knowledge in Programming!</p>

                                                                                <div>
                                                                                    
                                                                                    <section className="about_area section_gap mb-3 mt-3">
                                                                                            <div className="">
                                                                                                <div className="row justify-content-start align-items-center">
                                                                                                    <div className="col-lg-4">
                                                                                                        <div className="about_img">
                                                                                                            <iframe title= "Video1" className="d-flex justify-content-center" width="315" height="315" src="https://www.youtube.com/embed/vwzlg-wSDH0?list=PLVnJhHoKgEmrAk6XdaioMlfmpD_ahnA-B" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="offset-lg-1 col-lg-5 mt-3">
                                                                                                        <div className="main_title text-left">
                                                                                                        <h5 className="fw-bold mb-3">C++ Tutorial #1: IDE and Hello World | Filipino | Tagalog</h5>
                                                                                                            <p className="mb-2">
                                                                                                            Today pagaaralan natin ang IDE ng C++ and kung pano magrun ng "Hello World" gamit ang C++ Language!
                                                                                                            </p>
                                                                                                            Codeblocks Website: <a href="https://www.codeblocks.org/">Codeblocks</a>
                                                                                                            <br/>
                                                                                                            <span className="duration">Duration: 10 minutes, 20 seconds</span><br/>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                    </section>

                                                                                    <section className="about_area section_gap mb-3">
                                                                                            <div className="">
                                                                                                <div className="row justify-content-start align-items-center">
                                                                                                    <div className="col-lg-4">
                                                                                                        <div className="about_img">
                                                                                                        <iframe title= "Video1" className="d-flex justify-content-center" width="315" height="315" src="https://www.youtube.com/embed/Nma5TNskoJo?list=PLVnJhHoKgEmrAk6XdaioMlfmpD_ahnA-B" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="offset-lg-1 col-lg-5 mt-3">
                                                                                                        <div className="main_title text-left">
                                                                                                            <h5 className="fw-bold mb-3">C++ Tutorial #2: Variables and Input | Filipino | Tagalog</h5>
                                                                                                            <p className="mb-2">
                                                                                                                Today pagaaralan natin magdeclare ng Variables at ang mga Datatypes neto pagaaralan din natin kumuha ng input na galing sa User!
                                                                                                            </p>
                                                                                                            <br/>
                                                                                                            <span className="duration">Duration: 21 minutes, 11 seconds</span><br/>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                    </section>
                                                                                    
                                                                                    <section className="about_area section_gap mb-3">
                                                                                            <div className="">
                                                                                                <div className="row justify-content-start align-items-center">
                                                                                                    <div className="col-lg-4">
                                                                                                        <div className="about_img">
                                                                                                        <iframe title= "Video1" className="d-flex justify-content-center" width="315" height="315" src="https://www.youtube.com/embed/9p55DNEUz-4?list=PLVnJhHoKgEmrAk6XdaioMlfmpD_ahnA-B" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="offset-lg-1 col-lg-5 mt-3">
                                                                                                    <h5 className="fw-bold mb-3">C++ Tutorial #3: Arrays | Filipino | Tagalog</h5>
                                                                                                        <div className="main_title text-left">
                                                                                                            <p className="mb-2">
                                                                                                            Today we will be learning about arrays and how to manipulate them.
                                                                                                            </p>
                                                                                                               <br/>
                                                                                                            <span className="duration">Duration: 10 minutes, 57 seconds</span><br/>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                    </section>

                                                                                    <section className="about_area section_gap mb-3">
                                                                                            <div className="">
                                                                                                <div className="row justify-content-start align-items-center">
                                                                                                    <div className="col-lg-4">
                                                                                                        <div className="about_img">
                                                                                                            <iframe title= "Video1" className="d-flex justify-content-center" width="315" height="315" src="https://www.youtube.com/embed/7ltB_Hfegzs?list=PLVnJhHoKgEmrAk6XdaioMlfmpD_ahnA-B" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="offset-lg-1 col-lg-5 mt-3">
                                                                                                        <div className="main_title text-left">
                                                                                                            <h5 className="fw-bold mb-3">C++ Tutorial #4: Functions | Filipino | Tagalog</h5>
                                                                                                            <p className="mb-2">
                                                                                                                Today we will talk about one of the most important parts of a System in any Programming Language it is called Functions.
                                                                                                            </p>
                                                                                                               <br/>
                                                                                                            <span className="duration">Duration: 9 minutes, 17 seconds</span><br/>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                    </section>

                                                                                    <section className="about_area section_gap mb-3">
                                                                                            <div className="">
                                                                                                <div className="row justify-content-start align-items-center">
                                                                                                    <div className="col-lg-4">
                                                                                                        <div className="about_img">
                                                                                                            <iframe title= "Video1" className="d-flex justify-content-center" width="315" height="315" src="https://www.youtube.com/embed/wIi94VH1tO0?list=PLVnJhHoKgEmrAk6XdaioMlfmpD_ahnA-B" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="offset-lg-1 col-lg-5 mt-3">
                                                                                                        <div className="main_title text-left">
                                                                                                            <h5 className="fw-bold mb-3">C++ Tutorial #5: If Else Conditional Statement | Filipino | Tagalog</h5>
                                                                                                            <p className="mb-2">
                                                                                                            Hi Guys For today we are going to Learn the Conditional Statements this part teaches us how to make our Program Smarter!
                                                                                                            </p>
                                                                                                               <br/>
                                                                                                            <span className="duration">Duration: 25 minutes, 30 seconds</span><br/>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                    </section>

                                                                                    <section className="about_area section_gap mb-3">
                                                                                            <div className="">
                                                                                                <div className="row justify-content-start align-items-center">
                                                                                                    <div className="col-lg-4">
                                                                                                        <div className="about_img">
                                                                                                            <iframe title= "Video1" className="d-flex justify-content-center" width="315" height="315" src="https://youtube.com/embed/3tX23YIrotg?list=PLVnJhHoKgEmrAk6XdaioMlfmpD_ahnA-B" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="offset-lg-1 col-lg-5 mt-3">
                                                                                                        <div className="main_title text-left">
                                                                                                            <h5 className="fw-bold mb-3">C++ Tutorial #6: Switch Statements | Filipino | Tagalog</h5>
                                                                                                            <p className="mb-2">
                                                                                                                HONEST MISTAKE, Characters can also be used sa Switch Statement ng C++ so it can take char and int data type sorry!
                                                                                                            </p>
                                                                                                               <br/>
                                                                                                            <span className="duration">Duration: 6 minutes, 38 seconds</span><br/>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                    </section>

                                                                                    <section className="about_area section_gap mb-3">
                                                                                            <div className="">
                                                                                                <div className="row justify-content-start align-items-center">
                                                                                                    <div className="col-lg-4">
                                                                                                        <div className="about_img">
                                                                                                            <iframe title= "Video1" className="d-flex justify-content-center" width="315" height="315" src="https://youtube.com/embed/np8FTCwA7_Q?list=PLVnJhHoKgEmrAk6XdaioMlfmpD_ahnA-B" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="offset-lg-1 col-lg-5 mt-3">
                                                                                                        <div className="main_title text-left">
                                                                                                            <h5 className="fw-bold mb-3">C++ Tutorial #7: While and Do While Loop | Filipino | Tagalog</h5>
                                                                                                            <p className="mb-2">
                                                                                                                Today We are gonna learn While and Do While Looping Statements! and We will be creating a Simple One Question Quiz Game With Lives!
                                                                                                            </p>
                                                                                                               <br/>
                                                                                                            <span className="duration">Duration: 17 minutes, 17 seconds</span><br/>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                    </section>

                                                                                    <section className="about_area section_gap mb-3">
                                                                                            <div className="">
                                                                                                <div className="row justify-content-start align-items-center">
                                                                                                    <div className="col-lg-4">
                                                                                                        <div className="about_img">
                                                                                                            <iframe title= "Video1" className="d-flex justify-content-center" width="315" height="315" src="https://youtube.com/embed/GeMEHNBOUkU?list=PLVnJhHoKgEmrAk6XdaioMlfmpD_ahnA-B" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="offset-lg-1 col-lg-5 mt-3">
                                                                                                        <div className="main_title text-left">
                                                                                                            <h5 className="fw-bold mb-3">C++ Tutorial #8: For Loop | Filipino | Tagalog</h5>
                                                                                                            <p className="mb-2">
                                                                                                                Today we are tackling the other type of Loop Statement which is the For Loop If ever you have any questions please drop it down on the Comment Section and we will try to answer it! 
                                                                                                            </p>
                                                                                                               <br/>
                                                                                                            <span className="duration">Duration: 10 minutes, 36 seconds</span><br/>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                    </section>

                                                                                    <section className="about_area section_gap mb-3">
                                                                                            <div className="">
                                                                                                <div className="row justify-content-start align-items-center">
                                                                                                    <div className="col-lg-4">
                                                                                                        <div className="about_img">
                                                                                                            <iframe title= "Video1" className="d-flex justify-content-center" width="315" height="315" src="https://youtube.com/embed/XgU7y3XdaqM?list=PLVnJhHoKgEmrAk6XdaioMlfmpD_ahnA-B" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="offset-lg-1 col-lg-5 mt-3">
                                                                                                        <div className="main_title text-left">
                                                                                                            <h5 className="fw-bold mb-3">C++ Tutorial #9: 2D Arrays + Nested For Loops | Filipino | Tagalog</h5>
                                                                                                            <p className="mb-2">
                                                                                                                Hey Guys today pagaaralan natin ang 2D Array! Please Do Comment Down below if you happen to have questions or you don't understand something!
                                                                                                            </p>
                                                                                                               <br/>
                                                                                                            <span className="duration">Duration: 10 minutes, 36 seconds</span><br/>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                    </section>

                                                                                </div>            
                                                                        </div>
                                                                    </div>
                                                                </Row>
                                                        </Container>
                                                                
                                                            </Card.Body>
                                                        </Card>
                                                    </Container>
                                            </Tab>
                                        </Tabs>
                                        </Card>   
                                </section>

                                {/* Josiahdoestech */}
                                <section>
                                        <Card className="mt-5">
                                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 p-2 m-2">
                                            <Tab eventKey="profile" title="Josiahdoestech">
                                                <Row>
                                                    <Col  className="text-center m-3">
                                                                <img alt="KuyaDev" variant="top" className="mt-2 w-50" src="../assets/Joshiah.jpg" />
                                                            <div className="text-center mt-3">
                                                                <p><strong>Josiahdoestech</strong></p>
                                                                <p>Tech reviews, Tech gadgets, Sharing my knowledge about me and what I love doing, Also Gaming.</p>
                                                            </div>
                                                    </Col>
                                                    
                                                    <Col xs={12} md={8} className="container mb-5 m-3">
                                                        <p className="mt-2 text-justify">
                                                        <strong>Josiah Mark Castor</strong>, Hello everyone Josiah here! I am a BSIT student from Technological Institute of the Philippines who loves to create content about Tech, gadgets, Programming, Tips and hacks to help you in your computer needs!

                                                        If you wish to contact me and have a collaboration, please do not hesitate!</p>
                                                        <label className="fw-bold mb-2">Follow and Subscribe to learn more!</label>
                                                            <br/>
                                                            <h5>
                                                            <Badge bg="" text="dark"><BsIcons.BsTags/> Career Hack</Badge>
                                                            <Badge bg="" text="dark"><BsIcons.BsTags/> Tech Tips</Badge>
                                                            <Badge bg="" text="dark"><BsIcons.BsTags/> IT Tips</Badge>
                                                            <Badge bg="" text="dark"><BsIcons.BsTags/> Games</Badge>
                                                            </h5>

                                                        <a href="https://www.facebook.com/josiahmcastor.tech917" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/facebook-new.png"  alt="facebook" /></a>
                                                        <a href="https://josiahdoestech.kleap.co/home/?fbclid=IwAR3YyLyips7MhQjsge_C1iiJkkuwkfD2Zmf9R0YI2o0gjEwcpcNl8Llhri0" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/domain.png"  alt="web"/></a>
                                                        <a href="https://www.youtube.com/Josiahdoestech" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/youtube-play.png"  alt="youtube"/></a>
                                                        <a href="https://www.tiktok.com/@josiahmark917?fbclid=IwAR2DinC5FXHESwWxxA5JH0Zg1eMiZOs5Y668dpBmkNBouKCZIJ9EsxjMvjA"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/tiktok.png"  alt="spotify"/></a>
                                                        <a href="https://www.instagram.com/josiahmark917/" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/instagram-new.png"  alt="github"/></a>
                                                    </Col>
                                                </Row>
                                            </Tab>

                                            <Tab eventKey="video" title="Videos">
                                                    <Container className="container-fluid mt-7" fluid="md" style={{
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center"
                                                        }}>
                                                        <Card>
                                                            <Card.Body>
                                                                
                                                                <h3 className="mt-2 fw-bold">Featured</h3>
                                                                    <div className="video"
                                                                            style={{
                                                                                position: "relative",
                                                                                paddingBottom: "56.25%" /* 16:9 */,
                                                                                paddingTop: 25,
                                                                                height: 0 }}>
                                                                        <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} src="https://youtube.com/embed/7ctGMOa8ems?list=PLnTAO3B4QEUsch8tj3CWyt2uZiIjaOA-8" frameBorder="0" title="vid" allowFullScreen/>
                                                                    </div>

                                                                    <Container>
                                                                            <Row>
                                                                                <div className="mt-3">
                                                                                    <div className="">
                                                                                        <h1 className="fw-bold mb-3">My Experiences in being a BSIT Student || TIP-QC || Online Learning</h1>
                                                                                            
                                                                                            <p>What is up everyone! Here are some Questions that I answered on my experiences in being a BSIT student in TIP- QC</p>

                                                                                            <div>
                                                                                                
                                                                                                <section className="about_area section_gap mt-3 mb-3">
                                                                                                        <div className="">
                                                                                                            <div className="row justify-content-start align-items-center">
                                                                                                                <div className="col-lg-4">
                                                                                                                    <div className="about_img">
                                                                                                                        <iframe title= "Video1" className="d-flex justify-content-center" width="315" height="315" src="https://youtube.com/embed/iSNeOTyPALY?list=PLnTAO3B4QEUsch8tj3CWyt2uZiIjaOA-8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                                                                                                    </div>
                                                                                                                </div>

                                                                                                                <div className="offset-lg-1 col-lg-5 mt-3">
                                                                                                                    <div className="main_title text-left">
                                                                                                                    <h5 className="fw-bold mb-3">A day in the life of a BSIT student |First day of online classes | online learning #josiahdoestech</h5>
                                                                                                                        <p className="mb-2">
                                                                                                                        Hello everyone! sorry for not posting so much lately I've been busy with my school and organization activities!  but here yah go! here's my daily routine as a BsIT student! don't forget to leave a like to this video and don't forget to subscribe!  God bless everyone and stay safe!
                                                                                                                        </p>
                                                                                                                        <p className="mb-2">
                                                                                                                        Hello everyone! As we all know, I am now an affiliate with StyleDoubler where you can have commissions to the purchases on online Shopping like Lazada! If you would like to support me in my journey, you can help me with these links of what is in my setup! Thanks everyone! Ryzen 5 3600
                                                                                                                        </p>
                                                                                                                        <br/>
                                                                                                                        <span className="duration">Duration: 13 minutes, 03 seconds</span><br/>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                </section>

                                                                                                <section className="about_area section_gap mb-3">
                                                                                                        <div>
                                                                                                            <div className="row justify-content-start align-items-center">
                                                                                                                <div className="col-lg-4">
                                                                                                                    <div className="about_img">
                                                                                                                    <iframe title= "Video1" className="d-flex justify-content-center" width="315" height="315" src="https://youtube.com/embed/WgEXIhkIWZc?list=PLnTAO3B4QEUsch8tj3CWyt2uZiIjaOA-8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                                                                                                    </div>
                                                                                                                </div>

                                                                                                                <div className="offset-lg-1 col-lg-5 mt-3">
                                                                                                                    <div className="main_title text-left">
                                                                                                                        <h5 className="fw-bold mb-3">Tips and Fundamentals of Programming | BSIT | TIPian Student (Tagalog) #JosiahDoesTech</h5>
                                                                                                                        <p className="mb-2">
                                                                                                                            Hello everyone! As we all know, I am now an affiliate with StyleDoubler where you can have commissions to the purchases on online Shopping like Lazada! If you would like to support me in my journey, you can help me with these links of what is in my setup! Thanks everyone! Ryzen 5 3600
                                                                                                                        </p>
                                                                                                                        <br/>
                                                                                                                        <span className="duration">Duration: 12 minutes, 04 seconds</span><br/>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                </section>
                                                                                            
                                                                                                <section className="about_area section_gap mb-3">
                                                                                                        <div className="">
                                                                                                            <div className="row justify-content-start align-items-center">
                                                                                                                <div className="col-lg-4">
                                                                                                                    <div className="about_img">
                                                                                                                        <iframe title= "Video1" className="d-flex justify-content-center" width="315" height="315" src="https://youtube.com/embed/WdbN4_tr55o?list=PLnTAO3B4QEUsch8tj3CWyt2uZiIjaOA-8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                                                                                                    </div>
                                                                                                                </div>

                                                                                                                <div className="offset-lg-1 col-lg-5 mt-3">
                                                                                                                    <div className="main_title text-left">
                                                                                                                    <h5 className="fw-bold mb-3">Things I should have known when I started programming</h5>
                                                                                                                        <p  className="mb-2">
                                                                                                                            Hey guys! I'm back! here are some things you can ask yourself, Things that I should have known when I started programming!
                                                                                                                        </p>
                                                                                                                        
                                                                                                                        <br/>
                                                                                                                        <span className="duration">Duration: 16 minutes, 25 seconds</span><br/>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                </section> 
                                                                                            </div>            
                                                                                    </div>
                                                                                </div>
                                                                            </Row>
                                                                    </Container>
                                                                
                                                            </Card.Body>
                                                        </Card>
                                                    </Container>
                                            </Tab>
                                        </Tabs>
                                        </Card>   
                                </section>

                                {/* John Carlo Franco */}
                                <section>
                                        <Card className="mt-5">
                                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 p-2 m-2">
                                            <Tab eventKey="profile" title="John Carlo Franco">
                                                <Row>
                                                    <Col  className="text-center m-3">
                                                                <img alt="KuyaDev" variant="top" className="mt-2 w-50" src="https://firebasestorage.googleapis.com/v0/b/conquerror-development.appspot.com/o/Images%2FCreator%2F149870072_4438803116146821_814614453010169425_n.jpg?alt=media&token=bb9aa651-9f9d-4b9c-bca7-420d7125bc76" />
                                                            <div className="text-center  mt-3">
                                                                <p><strong>John Carlo Franco</strong></p>
                                                                <p>Web and Mobile App Developer, Entrepreneur</p>
                                                            </div>
                                                    </Col>
                                                    
                                                    <Col xs={12} md={8} className="container mb-5 m-3">
                                                        <p className="mt-2 text-justify">
                                                        <strong>John Carlo Franco</strong>, is a web and mobile app developer, also, an entrepreneur and CEO of Startidea, and founder of facebook group Programmers and Developers.
                                                        He created that group to help others student and developers in country.</p>
                                                        <label className="fw-bold mb-2">Follow and Subscribe to learn more!</label>
                                                            <br/>
                                                            <h5>
                                                            <Badge bg="" text="dark"><BsIcons.BsTags/> Career Hack</Badge>
                                                            <Badge bg="" text="dark"><BsIcons.BsTags/> Tech Tips</Badge>
                                                            <Badge bg="" text="dark"><BsIcons.BsTags/> Mobile Development</Badge>
                                                            <Badge bg="" text="dark"><BsIcons.BsTags/> Entrepreneur</Badge>
                                                            </h5>

                                                        <a href="https://www.facebook.com/francojohncdev" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/facebook-new.png"  alt="facebook" /></a>
                                                        <a href="https://uniregistry.com/market/domain/startidea.co?landerid=startidea61a8be2a5d4047.07543080" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/domain.png"  alt="web"/></a>
                                                        <a href="https://www.youtube.com/c/JohnCarloFranco/playlists" className="text-decoration-none text-white" target="_blank" rel="noopener noreferrer"><img className="mt-2"style={{width:"50px"}} src="https://img.icons8.com/color/50/000000/youtube-play.png"  alt="youtube"/></a>
                                                    </Col>
                                                </Row>
                                            </Tab>

                                            <Tab eventKey="video" title="Videos">
                                            <Container className="container-fluid mt-7" fluid="md" style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center"
                                                }}>
                                                        <Card>
                                                            <Card.Body>
                                                                
                                                                <h3 className="mt-2 fw-bold">Featured</h3>
                                                            <div className="video"
                                                                    style={{
                                                                        position: "relative",
                                                                        paddingBottom: "56.25%" /* 16:9 */,
                                                                        paddingTop: 25,
                                                                        height: 0 }}>
                                                                <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} src="https://youtube.com/embed/oqxOTQ8dfP0?list=PLVT3i1wfhKYD9TZ6lDjHDMtn8XbFpltCE" frameBorder="0" title="vid" allowFullScreen/>
                                                            </div>

                                                        <Container>
                                                                <Row>
                                                                    <div className="mt-3">
                                                                        <div className="">
                                                                            <h1 className="fw-bold mb-3">VLOG 1 - Paano ba maging Programmer?</h1>
                                                                                
                                                                                <p className="mb-2">paano maging programmer,
                                                                                    paano maging magaling na programmer,
                                                                                    paano ba maging programmer
                                                                                    </p>

                                                                                <div>
                                                                                    
                                                                                    <section className="about_area section_gap mt-3 mb-3">
                                                                                            <div className="">
                                                                                                <div className="row justify-content-start align-items-center">
                                                                                                    <div className="col-lg-4">
                                                                                                        <div className="about_img">
                                                                                                            <iframe title= "Video1" className="d-flex justify-content-center" width="315" height="315" src="https://youtube.com/embed/TaFwu9Sa63w?list=PLVT3i1wfhKYD9TZ6lDjHDMtn8XbFpltCE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="offset-lg-1 col-lg-5 mt-3">
                                                                                                        <div className="main_title text-left">
                                                                                                        <h5 className="fw-bold mb-3">VLOG 2 - Ano ang Programming?</h5>
                                                                                                            <p className="mb-2">
                                                                                                            paano maging programmer,
                                                                                                            paano maging magaling na programmer,
                                                                                                            paano ba maging programmer,
                                                                                                            paano maging computer programmer,
                                                                                                            paano mag programming,
                                                                                                            ano nga ba ang programming,
                                                                                                            ano ang computer programming
                                                                                                            programming tagalog tutorial,
                                                                                                            programming for beginners tagalog,
                                                                                                            computer programming tagalog,
                                                                                                            fundamentals of programming tagalog,
                                                                                                            programming language tagalog,
                                                                                                            what is programming tagalog,
                                                                                                            </p>
                                                                                                            
                                                                                                            <br/>
                                                                                                            <span className="duration">Duration: 10 minutes, 19 seconds</span><br/>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                    </section>

                                                                                    <section className="about_area section_gap mb-3">
                                                                                            <div>
                                                                                                <div className="row justify-content-start align-items-center">
                                                                                                    <div className="col-lg-4">
                                                                                                        <div className="about_img">
                                                                                                        <iframe title= "Video1" className="d-flex justify-content-center" width="315" height="315" src="https://youtube.com/embed/N5StlNwcLuY?list=PLVT3i1wfhKYD9TZ6lDjHDMtn8XbFpltCE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="offset-lg-1 col-lg-5 mt-3">
                                                                                                        <div className="main_title text-left">
                                                                                                            <h5 className="fw-bold mb-3">VLOG 3 - Para sayo ba ang pagiging Programmer</h5>
                                                                                                            <p className="mb-2">
                                                                                                            paano maging programmer,
                                                                                                            paano maging magaling na programmer,
                                                                                                            paano ba maging programmer,
                                                                                                            paano maging computer programmer,
                                                                                                            paano mag programming,
                                                                                                            ano nga ba ang programming,
                                                                                                            ano ang computer programming
                                                                                                            programming tagalog tutorial,
                                                                                                            programming for beginners tagalog,
                                                                                                            computer programming tagalog,
                                                                                                            fundamentals of programming tagalog,
                                                                                                            programming language tagalog,
                                                                                                            what is programming tagalog
                                                                                                            </p>
                                                                                                            <br/>
                                                                                                            <span className="duration">Duration: 12 minutes, 54 seconds</span><br/>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                    </section> 
                                                                                    
                                                                                    <section className="about_area section_gap mb-3">
                                                                                            <div className="">
                                                                                                <div className="row justify-content-start align-items-center">
                                                                                                    <div className="col-lg-4">
                                                                                                        <div className="about_img">
                                                                                                            <iframe title= "Video1" className="d-flex justify-content-center" width="315" height="315" src="https://youtube.com/embed/eQHnE-GyE3A?list=PLVT3i1wfhKYD9TZ6lDjHDMtn8XbFpltCE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="offset-lg-1 col-lg-5 mt-3">
                                                                                                        <div className="main_title text-left">
                                                                                                        <h5 className="fw-bold mb-3">VLOG 4 - Mahalaga bang graduate ka para maging Programmer?</h5>
                                                                                                            <p className="mb-2">
                                                                                                            paano maging programmer,
                                                                                                            paano maging magaling na programmer,
                                                                                                            paano ba maging programmer,
                                                                                                            paano maging computer programmer,
                                                                                                            paano mag programming,
                                                                                                            ano nga ba ang programming,
                                                                                                            ano ang computer programming
                                                                                                            programming tagalog tutorial,
                                                                                                            programming for beginners tagalog,
                                                                                                            computer programming tagalog,
                                                                                                            fundamentals of programming tagalog,
                                                                                                            programming language tagalog,
                                                                                                            what is programming tagalog

                                                                                                            </p>
                                                                                                            
                                                                                                            <br/>
                                                                                                            <span className="duration">Duration: 12 minutes, 24 seconds</span><br/>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                    </section> 

                                                                                    <section className="about_area section_gap mb-3">
                                                                                            <div className="">
                                                                                                <div className="row justify-content-start align-items-center">
                                                                                                    <div className="col-lg-4">
                                                                                                        <div className="about_img">
                                                                                                            <iframe title= "Video1" className="d-flex justify-content-center" width="315" height="315" src="https://youtube.com/embed/iGr_gTsah6o?list=PLVT3i1wfhKYD9TZ6lDjHDMtn8XbFpltCE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="offset-lg-1 col-lg-5 mt-3">
                                                                                                        <div className="main_title text-left">
                                                                                                        <h5 className="fw-bold mb-3">VLOG 5 - Dalawang bagay na kaylangan mong mahanap para maging succesful</h5>
                                                                                                            <p className="mb-2">
                                                                                                            Advice para maging successful sa career na napili mo.
                                                                                                            Advice para sa hindi alam kung ano gustong maging career.
                                                                                                            </p>
                                                                                                            
                                                                                                            <br/>
                                                                                                            <span className="duration">Duration: 12 minutes, 54 seconds</span><br/>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                    </section>

                                                                                </div>            
                                                                        </div>
                                                                    </div>
                                                                </Row>
                                                        </Container>
                                                                
                                                            </Card.Body>
                                                        </Card>
                                                    </Container>
                                            </Tab>
                                        </Tabs>
                                        </Card>   
                                </section>

                            </section>

                        <div>
                                        <div className=" text-center m-2">
                                            <h1 className="text-center text-primary fw-bold">Downloads for Students</h1>
                                            <p>You may need specific softwares to open, view and print the files in this page:  Microsoft Excel Online or Microsoft Word Online. Most modern browsers and devices can open PDF and ZIP files.</p>
                                        </div>
                            <Card className="mt- m-2">
                                <Card.Body>
                                            <Form className="m-1"  >
                                                    <Table striped bordered hover>
                                                        <thead>
                                                        <tr>
                                                        <th>Description</th>
                                                        <th>Topic</th>
                                                        <th>Owner</th>
                                                        <th>Download Link</th>
                                                        </tr>
                                                        </thead>
                                                            {docsfile}
                                                    </Table>
                                                    
                                            </Form> 
                                </Card.Body>
                            </Card>
                        </div>
                             

                          
            </section>       

        {/* ScrollUp Button */}
        <a href="#top" className="scroll-top">
            <i className="fa fa-chevron-up"></i>
        </a>     
                     
        </>
     
    )
    }


export default Tutorial;