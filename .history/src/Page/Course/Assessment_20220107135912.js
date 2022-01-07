import React, {useState, useEffect} from 'react'
import {Container} from 'react-bootstrap'
import { Link } from "react-router-dom";
import {} from '../../firebase/firebase'
import { getFirestore, doc,  getDoc} from 'firebase/firestore';
import {} from 'firebase/database'
import swal from 'sweetalert'

import './assessment.css'

export default function Assessment() {

          

        const assessmentdb = getFirestore();

        const [quiz, setQuiz] = useState([]);

        const [score,setScore] = useState(0);
        const [opt, chooseAnswer] = useState();
        const [Question, setQuestion] = useState(1);


        const coursecode = localStorage.getItem("getLesson")
    

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
             
                

              
              
             }
            else{

            swal("Oops","Something went wrong!","error")

            }
            
            setQuestion(Question+1)
            
          }

        useEffect(
          () => {
            if(Question <= 10)
            {
            sample();
            console.log(opt)
            console.log(score)
            }
            else{

                swal("Error","No such document!","error");

            }

          },[score,opt,Question]); // eslint-disable-line react-hooks/exhaustive-deps

          
    

        


    return (
        <>
        <Link to="/lessonscontent" style={{ textDecoration: 'none', marginLeft:'1rem' }} className="btn btn-primary mb-4 mt-3">Return</Link>
        <section className="assessment section bg-light mt-2">
                        <h1 className="text-center text-light">Assessment</h1>
                        <h3 className="text-center text-light mt-3">Topic: </h3>
                        <h3 className="text-center text-light mt-3">Score: </h3>
            <Container className="mt-3" fluid="md" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                      <div className="container bg-light mt-sm-5 my-1">

                      <div className="assessment-container">
                    
                        <div className="assessment-body">
                            <div className="assessment-question">
                                <h2>{quiz.Question}</h2>

                                <div className="assessment-options">
                                    <div className="assessment-option">
                                        <input type="radio" id="Option1" name="Quiz" className="form-check-input" onChange={e => chooseAnswer(e.target.value)} value={quiz.Opt1} />
                                        <label htmlFor="Option1">&nbsp;{quiz.Opt1}</label>
                                    </div>
                                    <div className="assessment-option">
                                        <input type="radio" id="Option2" name="Quiz"  className="form-check-input" onClick={e => chooseAnswer(e.target.value)} value={quiz.Opt2} />
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
