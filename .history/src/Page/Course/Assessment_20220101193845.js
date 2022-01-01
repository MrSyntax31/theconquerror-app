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

            <Container className="mt-3" fluid="md" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      
                <div className="assessment-container">
                    <div className="assessment-header">
                        <h1>Assessment</h1>
                    </div>
                    <div className="assessment-body">
                        <div className="assessment-question">
                            <h2>{quiz.Question}</h2>

                            <div className="assessment-options">
                                <div className="assessment-option">
                                    <input type="radio" name="option" value="1" onChange={(e) => chooseAnswer(e.target.value)} />
                                    <label>{quiz.Opt1}</label>
                                </div>
                                <div className="assessment-option">
                                    <input type="radio" name="option" value="2" onChange={(e) => chooseAnswer(e.target.value)} />
                                    <label>{quiz.Opt2}</label>
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


                      <div class="container mt-sm-5 my-1">
                        <div class="question ml-sm-5 pl-sm-5 pt-2">
                            <div class="py-2 h5"><b>{quiz.Question}</b></div>
                            <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> 

                            <input type="radio" id="Option1" name="Quiz" className="form-check-input" onChange={e => chooseAnswer(e.target.value)} value={quiz.Opt1Wrong} />
                            <label htmlFor="Option1" className="form-check-label ">{quiz.Opt1Wrong}</label>

                            <input type="radio" id="Option2" name="Quiz"  className="form-check-input" onClick={e => chooseAnswer(e.target.value)} value={quiz.Opt2Correct} />
                            <label htmlFor="Option2" className="form-check-label">{quiz.Opt2Correct}</label>

                          </div>
                        </div>
                        <div class="d-flex align-items-center pt-3">
                            <div class="ml-auto mr-sm-5"> <button class="btn btn-success" onClick={next}>Next</button> </div>
                        </div>
                    </div>
            </Container>
            
        </section>
        </>
    )
}
