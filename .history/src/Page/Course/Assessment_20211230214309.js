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

          
          // Construct a new query starting at the last visible document,
          // get the next set of data
         async function getMore(){

            if (topics.length === 0){
                  
            checkEnd(true);

            } else{
              try {          
                const next =
                query(collRef,
                orderBy("created_at","desc"),
                startAfter(lastpage),
                limit(5));
  
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
