import React, {useState, useEffect} from 'react'
import {Container} from 'react-bootstrap'
import {} from '../../firebase/firebase'
import {getAuth} from 'firebase-auth'
import { getFirestore, doc, addDoc, startAfter , getDoc} from 'firebase/firestore';
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
               
                swal("Error","No such document!","error");
            }
          }

          function next(){
            console.log("You pressed next")
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
            <Container className="mt-3">
                      
                      <div className="form-check">
                      <input type="radio" id="Option1" name="Quiz" className="form-check-input" onClick={next} value={quiz.Opt1Wrong} />
                      <label htmlFor="Option1" className="form-check-label">Array</label>
                      </div>
                      <div className="form-check">
                          <input type="radio" id="Option2" name="Quiz"  className="form-check-input" onClick={next} value={quiz.Opt2Correct} />
                          <label htmlFor="Option2" className="form-check-label">C++</label>
                      </div>
            </Container>
        
        </div>
    )
}
