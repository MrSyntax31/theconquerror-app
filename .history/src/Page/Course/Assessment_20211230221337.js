import React, {useState, useEffect} from 'react'
import {} from '../../firebase/firebase'
import {getAuth} from 'firebase-auth'
import { onSnapshot,collection,getFirestore, doc,  query, orderBy, limit, addDoc, startAfter , getDoc, getDocs} from 'firebase/firestore';
import {} from 'firebase/database'
import swal from 'sweetalert'

export default function Assessment() {

      
        
        const assessmentdb = getFirestore();


        const [quiz, setQuiz] = useState([]);
        const [lastPage, setLastPage] = useState([]);

        const [score,setScore] = useState(0);
        const [opt, chooseAnswer] = useState();

        async function sample(){

            const docRef = doc(assessmentdb, "Assessment","PROG-BPS102","Quiz","Q"+1);
            const docSnap = await getDoc(docRef);
            

                if (docSnap.exists()) {
                setQuiz(docSnap.data())

                } else {
               
                console.log("No such document!");
            }
          }

        useEffect(
          () => {
            
            sample();
            console.log(opt)
            console.log(score)

          },[score,opt]); // eslint-disable-line react-hooks/exhaustive-deps

          
    

        


    return (
        <div>

            {quiz.Question}
            
        
        </div>
    )
}
