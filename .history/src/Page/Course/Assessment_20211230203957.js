import React, {useState, useEffect} from 'react'
import {} from '../../firebase/firebase'
import {getAuth} from 'firebase-auth'
import { onSnapshot,collection,getFirestore, doc,  query, orderBy, limit, addDoc, setDoc } from 'firebase/firestore';
import {} from 'firebase/database'


export default function Assessment() {

        const Auth = getAuth();
        
        const assessmentdb = getFirestore();


        const [quiz, setQuiz] = useState([]);

        const collectionRef = collection(assessmentdb, "Assessment","PROG-BPS102","Quiz");

        useEffect(
          () => {
            const q = query(collectionRef,orderBy("created_at","desc"), limit(5));
        
            onSnapshot(q, (snapshot) =>
              setQuiz(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

            )
            


          },[]); // eslint-disable-line react-hooks/exhaustive-deps

        
          const showQuiz = Quiz.map((Quiz) => <div> </div>)
    return (
        <div>

        

                
        </div>
    )
}
