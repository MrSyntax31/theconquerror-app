import React from 'react'


import { Helmet } from "react-helmet";
import {} from '../../firebase/firebase';
import Navbar from '../../Components/Navbar/Navbar'


import './leaderboard.scss'



    export default function ForgotPass() {

  

        

    return (        
 <>

    <div>
      <Helmet>
        <title>ConquError | 🏆Leaderboard</title>
        <meta name="description" content="Welcome to the ConquError Leaderboard page. " />
      </Helmet>
    </div> 

    <Navbar/>

    <div className="background-area" id="particles-js">
                  <div id='stars'></div>
                  <div id='stars2'></div>
                  <div id='stars3'></div>
                  <div id='title'></div>

        

            <div className="mb-5" style={{marginTop: '7rem'}}></div>
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
                <img src="https://firebasestorage.googleapis.com/v0/b/conquerror-development.appspot.com/o/Homepage%2F2115955.png?alt=media&token=894b81ef-fc5f-4232-bbf0-0de04cefee64" alt="Trophy" className="leaderboard__icon"/>
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
                <img src="https://firebasestorage.googleapis.com/v0/b/conquerror-development.appspot.com/o/Homepage%2F6787299.png?alt=media&token=2282c601-4f09-4270-927f-c5510cadba65" alt="Trophy" className="leaderboard__icon"/>
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

        <div className="bodies m-2">
            <article className="leaderboard">
                <div className="headerTop">
                <img src="https://firebasestorage.googleapis.com/v0/b/conquerror-development.appspot.com/o/Homepage%2F4997543.png?alt=media&token=eefa1902-e64c-48ea-b2f5-2d22293f152e" alt="Trophy" className="leaderboard__icon"/>
                    <h1 className="leaderboard__title"><span className="leaderboard__title--top text-light">Conditional  <br/> Structures</span><span className="leaderboard__title--bottom text-light">Leaderboard</span></h1>
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
                <img src="https://firebasestorage.googleapis.com/v0/b/conquerror-development.appspot.com/o/Homepage%2F4143505.png?alt=media&token=68c0f2cf-fa00-4173-a9de-7ed4cf8d545b" alt="Trophy" className="leaderboard__icon"/>
                    <h1 className="leaderboard__title"><span className="leaderboard__title--top text-light">Nested <br/> Condition</span><span className="leaderboard__title--bottom text-light">Leaderboard</span></h1>
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
                <img src="https://firebasestorage.googleapis.com/v0/b/conquerror-development.appspot.com/o/Homepage%2F3168276.png?alt=media&token=f73d46c1-239c-4755-8fec-93cbaafb088d" alt="Trophy" className="leaderboard__icon"/>
                    <h1 className="leaderboard__title"><span className="leaderboard__title--top text-light">Looping <br/> Constructs </span><span className="leaderboard__title--bottom text-light">Leaderboard</span></h1>
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
                <img src="https://firebasestorage.googleapis.com/v0/b/conquerror-development.appspot.com/o/Homepage%2F1171544.png?alt=media&token=5b772682-832c-4104-b081-3e67ce42258f" alt="Trophy" className="leaderboard__icon"/>
                    <h1 className="leaderboard__title"><span className="leaderboard__title--top text-light">Functions </span><span className="leaderboard__title--bottom text-light">Leaderboard</span></h1>
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
                <img src="https://firebasestorage.googleapis.com/v0/b/conquerror-development.appspot.com/o/Homepage%2F1774128.png?alt=media&token=2980a55d-8bff-4e48-8e88-c5a7817fcd64" alt="Trophy" className="leaderboard__icon"/>
                    <h1 className="leaderboard__title"><span className="leaderboard__title--top text-light">Arrays </span><span className="leaderboard__title--bottom text-light">Leaderboard</span></h1>
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


