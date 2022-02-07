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
                    <h1 className="leaderboard__title"><span className="leaderboard__title--top">GENERAL</span><span className="leaderboard__title--bottom">Leaderboard</span></h1>
                </div>
                
                <main className="leaderboard__profiles">
                    <article class="leaderboard__profile">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Mark Zuckerberg" class="leaderboard__picture"/>
                    <span class="leaderboard__name">Mark Zuckerberg</span>
                    <span class="leaderboard__value">35.7<span>B</span></span>
                    </article>
                    
                    <article class="leaderboard__profile">
                    <img src="https://randomuser.me/api/portraits/men/97.jpg" alt="Dustin Moskovitz" class="leaderboard__picture"/>
                    <span class="leaderboard__name">Dustin Moskovitz</span>
                    <span class="leaderboard__value">9.9<span>B</span></span>
                    </article>
                    
                    <article class="leaderboard__profile">
                    <img src="https://randomuser.me/api/portraits/women/17.jpg" alt="Elizabeth Holmes" class="leaderboard__picture"/>
                    <span class="leaderboard__name">Elizabeth Holmes</span>
                    <span class="leaderboard__value">4.5<span>B</span></span>
                    </article>
                    
                    <article class="leaderboard__profile">
                    <img src="https://randomuser.me/api/portraits/men/37.jpg" alt="Evan Spiegel" class="leaderboard__picture"/>
                    <span class="leaderboard__name">Evan Spiegel</span>
                    <span class="leaderboard__value">2.1<span>B</span></span>
                    </article>
                </main>

            </article>

        </div>

        
    </div>



 </>
     
    )
}


