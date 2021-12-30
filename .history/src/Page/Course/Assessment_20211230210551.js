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

                setQuiz(documentSnapshots);
                console.log(documentSnapshots);
            }
            else{

                swal("Error","No Data Found","error")
            }

        }

        useEffect(
          () => {
           
            showQuiz()
            

          },[]); // eslint-disable-line react-hooks/exhaustive-deps





    return (
        <div>

        {quiz.Question}

                
        </div>
    )
}
