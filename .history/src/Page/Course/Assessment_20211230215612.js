import React, {useState, useEffect} from 'react'
import {} from '../../firebase/firebase'
import {getAuth} from 'firebase-auth'
import { onSnapshot,collection,getFirestore, doc,  query, orderBy, limit, addDoc, startAfter , getDocs} from 'firebase/firestore';
import {} from 'firebase/database'
import swal from 'sweetalert'

export default function Assessment() {

      
        
        const assessmentdb = getFirestore();


        const [quiz, setQuiz] = useState([]);
        const [lastPage, setLastPage] = useState([]);

        const [score,setScore] = useState(0);
        const [opt, chooseAnswer] = useState();

        const collectionRef = collection(assessmentdb, "Assessment","PROG-BPS102","Quiz");
        const q = query(collectionRef,orderBy("Question#","asc"), limit(1));

        // Query the first page of docs
        async function fetch(){
            //query data
           try{
            const documentSnapshots = await getDocs(q);
           
            //Pagination

          //throw data to useState
         const map =  documentSnapshots.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
         setQuiz(map);

         // Get the last visible document
         setLastPage(documentSnapshots.docs[documentSnapshots.docs.length-1]) ;
             

           }
           catch(error){
          alert(error.message)
          };
        
            
        }

         const [page, setPage] = useState(0)
          
          // Construct a new query starting at the last visible document,
          // get the next set of data
         async function getMore(){

            

         
              try {          
                const next =
                query(collectionRef,
                orderBy("Question#","asc"),
                startAfter(lastPage),
                limit(1));
  
                const nextDocs =  await getDocs(next)
                  const map =  nextDocs.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  
                  setQuiz(map);
                  
                 
                    setLastPage(nextDocs.docs[nextDocs.docs.length-1]);
                 
                  

             //     setPage(page + 1)

                
         
            }
            catch (error) {
              swal("Error",error.message,"warning")
            }
            
           
          }
          function send(){



          }

        useEffect(
          () => {
        
            fetch();

          },[]); // eslint-disable-line react-hooks/exhaustive-deps

     

      const Quiz = quiz.map((quiz) => <div key={quiz.id}>{quiz.Question}  

      <input type="radio" value={quiz.Opt2Correct} onChange={e => chooseAns(e.target.value)}/> <label>{quiz.Opt2Correct}</label><br></br>
      <button onClick={getMore}>Next</button>

      <button onClick={send}>Finish</button>
            
            </div>)
        


    return (
        <div>

                {Quiz}
               
            
        
        </div>
    )
}
