import React, {useState, useEffect} from 'react'
import {Container} from 'react-bootstrap'
import { Link } from "react-router-dom";
import {} from '../../firebase/firebase'
import { getFirestore, doc,  getDoc, setDoc} from 'firebase/firestore';
import {} from 'firebase/database'
import swal from 'sweetalert'
import { getAuth } from 'firebase/auth'

import './assessment.css'

export default function Assessment() {

        const AUTH = getAuth();  
        
        const assessmentdb = getFirestore();

        const [quiz, setQuiz] = useState([]);

        const [score,setScore] = useState(0);
        const [opt, chooseAnswer] = useState();
        const [Question, setQuestion] = useState(1);

        const [Empty, checkEmpty] = useState(true);
        const [Empty1, checkEmpty1] = useState(false);

        const userid = AUTH.currentUser.uid

        const coursecode = sessionStorage.getItem("getLesson")
        const [result, setResult] = useState();

        async function sample(){

            const docRef = doc(assessmentdb, "Assessment",`${coursecode}`,"Quiz","Q"+Question);
            const docSnap = await getDoc(docRef);
            

                if (docSnap.exists()) {

                setQuiz(docSnap.data())


                } else {
               
                swal("Error","No such document!","error");
            }
          }

          function next(){

            if (opt === quiz.Answer)

            {
                setScore(score+1)
                setQuestion(Question+1)
                chooseAnswer("");
             }
            else{

                setQuestion(Question+1)
                chooseAnswer("");
            }
            
          
            
          }

        useEffect(
          () => {

            if(Question <= 10)
            {
            sample();
            }
            else{
                if(score < 7)
                {
                    setResult("Fail")
                   
                }
                else {
                    setResult("Passed")
                }
                checkEmpty(false);
                checkEmpty1(true);
            }

          },[score,opt,Question]); // eslint-disable-line react-hooks/exhaustive-deps

          
    
        async function AssessmentDone() {

                        //convert date which is timestamp to String
            var timestamp = Date.now();
            var convertedDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)
        
              // Add a new document with a generated id.
              await setDoc(doc(assessmentdb, "courses",coursecode,"enrollees",userid), {
                ScoreOnTest: score,
                finished_at: convertedDate,
                AssessmentStatus : result
                }).then(() =>{  
                  
                    swal("Assessment","FINISHED!","success");
                    
                    //Choose kung download now ung cert or later
            
             }).catch((error) => {
                       alert(error.message)
               })
            
           }
        


    return (
        <>
        <Link to="/lessonscontent" style={{ textDecoration: 'none', marginLeft:'1rem' }} className="btn btn-primary mb-4 mt-3">Return</Link>
        <section className="assessment section bg-light mt-2">
                        <h1 className="text-center text-light">Assessment</h1>
                        <h3 className="text-center text-light mt-3">Course Code: {coursecode} </h3>
            <Container className="mt-3" fluid="md" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                      <div className="container bg-light mt-sm-5 my-1">

                      <div className="assessment-container"> 
                    
                        <div className="assessment-body">
                            <div className="assessment-question">   
                                <h2>{quiz.Question}</h2>

                                <div className="assessment-options">
                                    <div className="assessment-option">
                                        <input type="radio" id="Option1" name="Quiz" className="form-check-input"  onChange={e => chooseAnswer(e.target.value)} value={quiz.Opt1} />
                                        <label htmlFor="Option1">&nbsp;{quiz.Opt1}</label>
                                    </div>
                                    <div className="assessment-option">
                                        <input type="radio" id="Option2" name="Quiz"  className="form-check-input" onChange={e => chooseAnswer(e.target.value)} value={quiz.Opt2} />
                                        <label htmlFor="Option2">&nbsp;{quiz.Opt2}</label>
                                    </div>
                                    <div className="assessment-option">
                                        <input type="radio" id="Option3" name="Quiz"  className="form-check-input" onChange={(e) => chooseAnswer(e.target.value)} value={quiz.Opt3}/>
                                        <label htmlFor="Option3">&nbsp;{quiz.Opt3}</label>
                                    </div>
                                    <div className="assessment-option">
                                        <input type="radio" id="Option4" name="Quiz"  className="form-check-input" onChange={(e) => chooseAnswer(e.target.value)} value={quiz.Opt4}/>
                                        <label htmlFor="Option4">&nbsp;{quiz.Opt4}</label>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center pt-3">

                                {Empty1 ? '': 
                                <div className="ml-auto mr-sm-5"> <button className="btn btn-primary" onClick={next}>Next</button> </div>}
                                { Empty ? '' :
                                <div className="ml-auto mr-sm-5"> <button className="btn btn-primary" onClick={AssessmentDone}>Finish</button> </div> }
                            </div>
                        </div>
                      </div>
                    </div>
            </Container>
            
        </section>
        </>
    )
}
