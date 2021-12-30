import React, {useState, useEffect} from 'react'
import {} from '../../firebase/firebase'
import {getAuth} from 'firebase-auth'
import { onSnapshot,collection,getFirestore, doc,  query, orderBy, limit, getDocs, startAfter } from 'firebase/firestore';
import {} from 'firebase/database'


export default function Assessment() {

      
        
        const assessmentdb = getFirestore();


        const [quiz, setQuiz] = useState();

        const collectionRef = collection(assessmentdb, "Assessment","PROG-BPS102","Quiz");

        async function sample(){
            const q = query(collectionRef,orderBy("Question#","asc"), limit(1));

            const documentSnapshots = await getDocs(q);

            setQuiz(documentSnapshots)

            console.log(documentSnapshots)
        }


        useEffect(
          () => {
           
            sample();
           


          },[]); // eslint-disable-line react-hooks/exhaustive-deps

          function showNext(){

            const q = query(collectionRef,orderBy("Question#","asc"), startAfter(quiz),limit(1));
            
            
          
    

          }

        
        


    return (
        <div>

            {quiz.Question}

                
        </div>
    )
}
