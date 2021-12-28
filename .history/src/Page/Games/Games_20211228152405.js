import Helmet from 'react-helmet';
import { Link } from "react-router-dom"
import { Container, Row, Col, Card} from 'react-bootstrap'
import Navbar from '../../Components/Navbar/Navbar'

const Games = () => {





    return (
        <>
        <div>
            <Helmet>
            <title>ConquError | Games</title>
            <meta name="description" content="ConquError Games page" />
            </Helmet>
        </div>

        <Navbar/>

        <section className="features section bg-light mt-5">
            <Container fluid="md" style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>

            <Row >
            <h1 className="text-center text-primary fw-bold">Welcome to Games Page</h1>                                   
                        <h4 className="text-center text-secondary"> Play to learn programming</h4>
            
            
        

            </Row>

            <Col style={{width: "200px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                      
                                      <Card style={{ width: '18rem', marginTop: '2rem' }}>
                                          
                                      <img className="w-64" src="../Assets/Online test-bro.png" alt="quiz" />
                                        <h3>Quiz</h3>
                                        <p>
                                        Play the random quiz game that test your knowledge in basic computer programming.</p>
                                        <Link to="/quiz" style={{ textDecoration: 'none' }} className="btn btn-primary  mt-4">Play</Link>
                                                    </Card> 

                                </Col>

                                  <Col style={{width: "200px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                      
                                      <Card style={{ width: '18rem', marginTop: '2rem' }}>
                                            
                                            <div style={{textAlign:"center"}}>
                                              <Card.Img variant="top" className="mt-5 w-50" src="https://img.icons8.com/color/144/000000/informatics.png" />
                                            </div>

                                            <Card.Body>
                                              <Card.Title className="fw-bold">Computing</Card.Title>
                                                <Card.Text className="mt-3 mb-3">Beginner Friendly, <strong>5</strong> Lessons</Card.Text>
                                                  
                                                  
                                           </Card.Body>

                                      </Card>   
                                               
                                  </Col>
            </Container>
        </section>
    <a href="#top" className="scroll-top">
    <i className="fa fa-chevron-up"></i>
   </a>
    </>
    )
}

export default Games
