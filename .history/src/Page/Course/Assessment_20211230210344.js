import React, {useState, useEffect} from 'react'
import {} from '../../firebase/firebase'
import {getAuth} from 'firebase-auth'
import { onSnapshot,collection,getFirestore, doc,  query, orderBy, limit, addDoc, setDoc, getDocs } from 'firebase/firestore';
import {} from 'firebase/database'
import swal from 'sweetalert'

export default function Assessment() {

      
        
        const assessmentdb = getFirestore();


        const [quiz, setQuiz] = useState([]);
        const [score, setScore] = useState();
        const [lastQuestion, LastVisible] = useState([]);
        


        async function showQuiz(){
          
            const collectionRef = query(collection(assessmentdb, "Assessment","PROG-BPS102","Quiz"), orderBy("Question#","asc"), limit(1));
            const documentSnapshots = await getDocs(collectionRef);
            
            if (documentSnapshots)
            {

                LastVisible(documentSnapshots.docs[documentSnapshots.docs.length-1])

                

            }
            else{

                swal("Error","No Data Found","error")
            }

        }

        useEffect(
          () => {
           
            

          },[]); // eslint-disable-line react-hooks/exhaustive-deps


        
          const showQuiz = quiz.map((quiz) => <div key={quiz.id} >
          {quiz.Question} 
          <input type="radio" value={quiz.Opt1Wrong}/><label>{quiz.Opt1Wrong}</label>
          <input type="radio" value={quiz.Opt2Correct}/><label>{quiz.Opt2Correct}</label>

        
          
           </div>)


    return (
        <div>

            {showQuiz}

                
        </div>
    )
}