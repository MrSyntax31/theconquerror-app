import React, {useState, useEffect} from 'react'
import {} from '../../firebase/firebase'
import {getAuth} from 'firebase-auth'
import { onSnapshot,collection,getFirestore, doc,  query, orderBy, limit, getDocs, startAfter } from 'firebase/firestore';
import {} from 'firebase/database'


export default function Assessment() {

      
        
        const assessmentdb = getFirestore();


        const [quiz, setQuiz] = useState([]);

        const collectionRef = collection(assessmentdb, "Assessment","PROG-BPS102","Quiz");

        async function sample(){
            const q = query(collectionRef,orderBy("Question#","asc"), limit(1));

            const documentSnapshots = await getDocs(q);

            setQuiz(documentSnapshots.data())
        }


        useEffect(
          () => {
           
            
           


          },[]); // eslint-disable-line react-hooks/exhaustive-deps

          function showNext(){

            const q = query(collectionRef,orderBy("Question#","asc"), startAfter(quiz),limit(1));
            
            
          
          )

          }

        
          const showQuiz = quiz.map((quiz) => <div key={quiz.id} > 
          {quiz.Question} <br></br>
          <input type="radio" value={quiz.Opt1Wrong}/><label>{quiz.Opt1Wrong}</label>
          <input type="radio" value={quiz.Opt2Correct}/><label>{quiz.Opt2Correct}</label>
          <br></br>

          <button onClick={showNext}>Next</button>
          
           </div>)


    return (
        <div>

            {showQuiz}

                
        </div>
    )
}
