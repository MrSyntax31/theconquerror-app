import React, {useState, useEffect} from 'react'
import {Container} from 'react-bootstrap'
import {} from '../../firebase/firebase'
import {getAuth} from 'firebase-auth'
import { getFirestore, doc, addDoc, startAfter , getDoc} from 'firebase/firestore';
import {} from 'firebase/database'
import swal from 'sweetalert'

import './assessment.css'

export default function Assessment() {

      
        
        const assessmentdb = getFirestore();


        const [quiz, setQuiz] = useState([]);
        const [lastPage, setLastPage] = useState([]);

        const [score,setScore] = useState(0);
        const [opt, chooseAnswer] = useState();
        const [Question, setQuestion] = useState(1)

        async function sample(){

            const docRef = doc(assessmentdb, "Assessment","PROG-BPS102","Quiz","Q"+Question);
            const docSnap = await getDoc(docRef);
            

                if (docSnap.exists()) {
                setQuiz(docSnap.data())

                setLastPage(docSnap.data())

                } else {
               
                swal("Error","No such document!","error");
            }
          }

          function next(){

            if (opt === quiz.Opt2Correct)

            {
                setScore(score+1)
             
                
              
                console.log("correct")
              
             }
            else{

            console.log("something is wrong")

            }
            
            setQuestion(Question+1)
            console.log("You pressed next")
            
          }

        useEffect(
          () => {
            if(Question <=2)
            {
            sample();
            console.log(opt)
            console.log(score)
            }
            else{
                console.log("No MORE DATA")
            }

          },[score,opt,Question]); // eslint-disable-line react-hooks/exhaustive-deps

          
    

        


    return (
        <>
        <section className="assessment section bg-light mt-4">

                        <h1 className="text-center text-light">Assessment</h1>
            <Container className="mt-3" fluid="md" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                      <div className="container mt-sm-5 my-1">

                      <div className="assessment-containers">
                    
                        <div className="assessment-body">
                            <div className="assessment-question">
                                <h2>{quiz.Question}</h2>

                                <div className="assessment-options">
                                    <div className="assessment-option">
                                        <input type="radio" id="Option1" name="Quiz" className="form-check-input" onChange={e => chooseAnswer(e.target.value)} value={quiz.Opt1Wrong} />
                                        <label htmlFor="Option1">&nbsp;{quiz.Opt1Wrong}</label>
                                    </div>
                                    <div className="assessment-option">
                                        <input type="radio" id="Option2" name="Quiz"  className="form-check-input" onClick={e => chooseAnswer(e.target.value)} value={quiz.Opt2Correct} />
                                        <label htmlFor="Option2">&nbsp;{quiz.Opt2Correct}</label>
                                    </div>
                                    <div className="assessment-option">
                                        <input type="radio" name="option" value="3" onChange={(e) => chooseAnswer(e.target.value)} />
                                        <label>{quiz.Opt3}</label>
                                    </div>
                                    <div className="assessment-option">
                                        <input type="radio" name="option" value="4" onChange={(e) => chooseAnswer(e.target.value)} />
                                        <label>{quiz.Opt4}</label>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center pt-3">
                                <div className="ml-auto mr-sm-5"> <button className="btn btn-primary" onClick={next}>Next</button> </div>
                            </div>
                        </div>
                      </div>
                    </div>
            </Container>
            
        </section>
        </>
    )
}
