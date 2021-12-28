import Helmet from 'react-helmet';
import { Link } from "react-router-dom"
import { Container, Row, Col, Card} from 'react-bootstrap'
import Navbar from '../../Components/Navbar/Navbar'
import { ca } from 'date-fns/locale';

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

        <section className=" section mt-5">
            <Container fluid="md" style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>

            <Row >
                <h1 className="text-center text-primary fw-bold">Welcome to Games Page</h1>                                   
                    <h4 className="text-center text-secondary"> Play to learn programming</h4>


                                <Col style={{width: "200px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                      
                                      <Card style={{ width: '18rem', marginTop: '2rem' }}>
                                         <Card.Body>
                                        <img className="w-64" src="../Assets/Online test-bro.png" alt="quiz" />
                                        <h3>Quiz</h3>
                                        <p>
                                        Play the random quiz game that test your knowledge in basic computer programming.</p>
                                        <Link to="/quiz" style={{ textDecoration: 'none' }} className="btn btn-primary  mt-4">Play</Link>
                                      </Card.Body> 
                                    </Card> 

                                </Col>

                                  <Col style={{width: "200px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                      
                                      <Card style={{ width: '18rem', marginTop: '2rem' }}>
                                                                                    
                                      </Card>   
                                               
                                  </Col> 
            </Row>
            </Container>
        </section>

        <a href="#top" className="scroll-top">
            <i className="fa fa-chevron-up"></i>
        </a>
    </>
    )
}

export default Games
