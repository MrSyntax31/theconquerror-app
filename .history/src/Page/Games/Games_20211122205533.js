import Helmet from 'react-helmet';
import { Link } from "react-router-dom"
import { Container, Row, Col} from 'react-bootstrap'
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
   
    <div className="col-sm-12 col-md-12 mb-4">
            
   </div>      


    <Row>
                <h3 className="text-center text-secondary fw-bold">My Games</h3>
                <h4 className="text-center text-secondary"> Play to learn programming</h4>
    <Col>
    
            <div className="single-feature wow fadeInUp" data-wow-delay=".2s">
                <img className="w-64" src="../Assets/Online test-bro.png" alt="quiz" />
                <h3>Quiz</h3>
                <p>
                Play the random quiz game that test you knowledge in basic computer programming.</p>
                <Link to="/quiz" style={{ textDecoration: 'none' }} className="btn btn-primary">Play</Link>
            </div>
    </Col>
    
    <Col>
    
    <div className="single-feature wow fadeInUp" data-wow-delay=".4s">
    <img className="w-32" src="../Assets/Choice-cuate.png" alt="think man" />
    <h3>Hangman</h3>
    <p>Try to test and figure out programming terms, and words in a guessing game.</p>

    <Link to="/hangman" style={{ textDecoration: 'none' }} className="btn btn-primary">Play</Link>
    </div>
    
    </Col>

    <Col>
    
    <div className="single-feature wow fadeInUp" data-wow-delay=".6s">
    <img className="w-64" src="../assets/Collaboration-amico.png" alt="puzzle" />
    <h3>Error Puzzle</h3>
    <p>ConquError, will tease your brain to solve this sliding number puzzle.</p>

    <Link to="/puzzle" style={{ textDecoration: 'none' }} className="btn btn-primary">Play</Link>
    </div>
    
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
