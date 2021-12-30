import React, {useState, useEffect} from 'react'
import {} from '../../firebase/firebase'
import {getAuth} from 'firebase-auth'
import { onSnapshot,collection,getFirestore, doc,  query, orderBy, limit, addDoc, startAfter , getDoc} from 'firebase/firestore';
import {} from 'firebase/database'


export default function Assessment() {

      
        
        const assessmentdb = getFirestore();


        const [quiz, setQuiz] = useState([]);

        const collectionRef = collection(assessmentdb, "Assessment","PROG-BPS102","Quiz");
        const q = query(collectionRef,orderBy("Question#","asc"), limit(1));

       
        }
        useEffect(
          () => {
        


          },[]); // eslint-disable-line react-hooks/exhaustive-deps

     

      
        


    return (
        <div>

            {showQuiz}

                
        </div>
    )
}
