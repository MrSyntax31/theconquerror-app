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
        <div>

            {quiz.Question}
            <Container className="mt-3" fluid="md" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      
                      <div className="form-check">
                      <input type="radio" id="Option1" name="Quiz" className="form-check-input" onChange={e => chooseAnswer(e.target.value)} value={quiz.Opt1Wrong} />
                      <label htmlFor="Option1" className="form-check-label">{quiz.Opt1Wrong}</label>
                      </div>
                      <div className="form-check">
                          <input type="radio" id="Option2" name="Quiz"  className="form-check-input" onClick={e => chooseAnswer(e.target.value)} value={quiz.Opt2Correct} />
                          <label htmlFor="Option2" className="form-check-label">{quiz.Opt2Correct}</label>
                      </div>

                      <div class="courses-container">
                        <div class="course">
                          <div class="course-preview">
                            <h6>Course</h6>
                            <h2>JavaScript Fundamentals</h2>
                            <a href="#">View all chapters <i class="fas fa-chevron-right"></i></a>
                          </div>
                          <div class="course-info">
                            <div class="progress-container">
                              <div class="progress"></div>
                              <span class="progress-text">
                                6/9 Challenges
                              </span>
                            </div>
                            <h6>Chapter 4</h6>
                            <h2>Callbacks & Closures</h2>
                            <button class="btn">Continue</button>
                          </div>
                        </div>
                      </div>


                      <div class="social-panel-container">
                        <div class="social-panel">
                          <p>Created with <i class="fa fa-heart"></i> by
                            <a target="_blank" href="https://florin-pop.com">Florin Pop</a></p>
                          <button class="close-btn"><i class="fas fa-times"></i></button>
                          <h4>Get in touch on</h4>
                          <ul>
                            <li>
                              <a href="https://www.patreon.com/florinpop17" target="_blank">
                                <i class="fab fa-discord"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/florinpop1705" target="_blank">
                                <i class="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://linkedin.com/in/florinpop17" target="_blank">
                                <i class="fab fa-linkedin"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://facebook.com/florinpop17" target="_blank">
                                <i class="fab fa-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://instagram.com/florinpop17" target="_blank">
                                <i class="fab fa-instagram"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <button class="floating-btn">
                        Get in Touch
                      </button>

                      <div class="floating-text">
                        Part of <a href="https://florin-pop.com/blog/2019/09/100-days-100-projects" target="_blank">#100Days100Projects</a>
                      </div>

                   
            </Container>
            <button onClick={next}>NEXT</button>
        </div>
    )
}
