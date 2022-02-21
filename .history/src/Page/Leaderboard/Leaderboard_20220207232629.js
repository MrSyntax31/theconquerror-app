import React from 'react'
//import { Form, Button, Card, Container} from 'react-bootstrap'
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet";
import {} from '../../firebase/firebase';

import './Login.css'
import './leaderboard.scss'



    export default function ForgotPass() {

  

        

    return (        
 <>

    <div>
      <Helmet>
        <title>ConquError | Leaderboard</title>
        <meta name="description" content="Welcome to the ConquError  page. " />
      </Helmet>
    </div> 

    <div className="background-area" id="particles-js">
                  <div id='stars'></div>
                  <div id='stars2'></div>
                  <div id='stars3'></div>
                  <div id='title'></div>

        <Link to="/" style={{ textDecoration: 'none' }}><img to="/home" src="../Assets/white-logo.svg" className="Headerlogo mt-2" alt="logo" style={{width: "190px",paddingLeft: "20px"}}/></Link>

            <h1 className="mt-5 text-light fw-bold text-center">ConquError Top Leaderboard</h1>

        <div className="bodies m-2">
            <article className="leaderboard">
                <div className="headerTop">
                <img src="https://firebasestorage.googleapis.com/v0/b/conquerror-development.appspot.com/o/Homepage%2F1872241.png?alt=media&token=b52fe0c2-374e-4cf1-8639-96ff4c3a99bd" alt="Trophy" className="leaderboard__icon"/>
                    <h1 className="leaderboard__title"><span className="leaderboard__title--top text-light">GENERAL</span><span className="leaderboard__title--bottom text-light">Leaderboard</span></h1>
                </div>
                
                <main className="leaderboard__profiles">
                    <article className="leaderboard__profile">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Mark Zuckerberg" className="leaderboard__picture"/>
                    <span className="leaderboard__name">Mark Zuckerberg</span>
                    <span className="leaderboard__value">1<span>B</span></span>
                    </article>
                    
                    <article className="leaderboard__profile">
                    <img src="https://randomuser.me/api/portraits/men/97.jpg" alt="Dustin Moskovitz" className="leaderboard__picture"/>
                    <span className="leaderboard__name">Dustin Moskovitz</span>
                    <span className="leaderboard__value">2<span>B</span></span>
                    </article>
                    

                </main>

            </article>

        </div>

        <div className="bodies m-2">
            <article className="leaderboard">
                <div className="headerTop">
                <img src="https://firebasestorage.googleapis.com/v0/b/conquerror-development.appspot.com/o/Homepage%2F1872241.png?alt=media&token=b52fe0c2-374e-4cf1-8639-96ff4c3a99bd" alt="Trophy" className="leaderboard__icon"/>
                    <h1 className="leaderboard__title"><span className="leaderboard__title--top text-light">Programming <br/> Concepts</span><span className="leaderboard__title--bottom text-light">Leaderboard</span></h1>
                </div>
                
                <main className="leaderboard__profiles">
                    <article className="leaderboard__profile">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Mark Zuckerberg" className="leaderboard__picture"/>
                    <span className="leaderboard__name">Mark Zuckerberg</span>
                    <span className="leaderboard__value">1<span>B</span></span>
                    </article>
                    
                    <article className="leaderboard__profile">
                    <img src="https://randomuser.me/api/portraits/men/97.jpg" alt="Dustin Moskovitz" className="leaderboard__picture"/>
                    <span className="leaderboard__name">Dustin Moskovitz</span>
                    <span className="leaderboard__value">2<span>B</span></span>
                    </article>
                    

                </main>

            </article>

        </div>

        <div className="bodies m-2">
            <article className="leaderboard">
                <div className="headerTop">
                <img src="https://firebasestorage.googleapis.com/v0/b/conquerror-development.appspot.com/o/Homepage%2F1872241.png?alt=media&token=b52fe0c2-374e-4cf1-8639-96ff4c3a99bd" alt="Trophy" className="leaderboard__icon"/>
                    <h1 className="leaderboard__title"><span className="leaderboard__title--top text-light">Basic <br/> Programming <br/> Structures</span><span className="leaderboard__title--bottom text-light">Leaderboard</span></h1>
                </div>
                
                <main className="leaderboard__profiles">
                    <article className="leaderboard__profile">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Mark Zuckerberg" className="leaderboard__picture"/>
                    <span className="leaderboard__name">Mark Zuckerberg</span>
                    <span className="leaderboard__value">1<span>B</span></span>
                    </article>
                    
                    <article className="leaderboard__profile">
                    <img src="https://randomuser.me/api/portraits/men/97.jpg" alt="Dustin Moskovitz" className="leaderboard__picture"/>
                    <span className="leaderboard__name">Dustin Moskovitz</span>
                    <span className="leaderboard__value">2<span>B</span></span>
                    </article>
                    

                </main>

            </article>

        </div>

        

        
    </div>



 </>
     
    )
}


