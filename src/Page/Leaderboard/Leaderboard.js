import React, {useEffect, useState} from 'react'


import { Helmet } from "react-helmet";
import {} from '../../firebase/firebase';
import Navbar from '../../Components/Navbar/Navbar'
import { onSnapshot,collection,getFirestore, query, orderBy, limit} from 'firebase/firestore';

import './leaderboard.scss'



    export default function ForgotPass() {

        const leaderboardDB = getFirestore()

       
        const [leaderboard, setLeaderboard] = useState([])

        const collectionRef = collection(leaderboardDB, "userdata");
 
        
        useEffect(
          () => {
            const q = query(collectionRef,orderBy("level","desc"), limit(5));
        
            onSnapshot(q, (snapshot) =>
            setLeaderboard(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

            )
            


          },[]); // eslint-disable-line react-hooks/exhaustive-deps

        const leaders = leaderboard.map((leads)=>     
        <article className="leaderboard__profile" key={leads.id}>
        <span className="leaderboard__name">{leads.AdventurerName}</span>
        <span className="leaderboard__value"><span>LEVEL</span> {leads.level}</span>
        </article>
        )

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
            <h1 className="mt-5 text-light fw-bold text-center">Top ConquErrors</h1>
        <div className="bodies m-2">
            <article className="leaderboard">
                <div className="headerTop">
                <img src="https://firebasestorage.googleapis.com/v0/b/conquerror-development.appspot.com/o/Homepage%2F1872241.png?alt=media&token=b52fe0c2-374e-4cf1-8639-96ff4c3a99bd" alt="Trophy" className="leaderboard__icon"/>
                    <h1 className="leaderboard__title"><span className="leaderboard__title--top text-light">GENERAL</span><span className="leaderboard__title--bottom text-light">Leaderboard</span></h1>
                </div>
                
                <main className="leaderboard__profiles">
                 
                    {leaders}

                </main>

            </article>

        </div>


   

    </div>
 </>
     
    )
}


