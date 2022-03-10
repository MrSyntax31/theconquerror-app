import React, {useState, useEffect} from 'react'
import {Container, Button} from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import {} from '../../firebase/firebase'
import { getFirestore, doc,  getDoc, setDoc,updateDoc, addDoc, collection} from 'firebase/firestore';
import { Helmet } from "react-helmet";
import {} from 'firebase/database'
import swal from 'sweetalert'
import { getAuth } from 'firebase/auth'
import { getDatabase, ref, onValue, update } from "firebase/database";
import './assessment.css'

export default function Assessment() {

        const AUTH = getAuth();  
        const realtimedb = getDatabase();
        const assessmentdb = getFirestore();
        const history = useHistory()
        const [quiz, setQuiz] = useState([]);

        const [score,setScore] = useState(0);
        const [opt, chooseAnswer] = useState("");
        const [Question, setQuestion] = useState(1);

        const [Empty, checkEmpty] = useState(true);
        const [Empty1, checkEmpty1] = useState(false);
        const [EmptyQ, checkEmptyQ] = useState(false);

        const userid = AUTH.currentUser.uid

        const coursecode = sessionStorage.getItem("getLesson")
        const coursename = sessionStorage.getItem("lessonName")
        const [result, setResult] = useState();
         const [profile, setData] = useState([]);


         //convert date which is timestamp to String
         var timestamp = Date.now();
         var convertedDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)
                  
                           
         
            //Loads the function inside the useEffect when the component renders
  useEffect (() => {
    
    //Function that shows the profile of the user 
    function showProfile() {
     
  
    //creating reference for realtimedb and fetching data from table users using the userID as reference then setting the data inside the Profile useState above
      const profileData = ref(realtimedb, '/users/' + userid);
      onValue(profileData, (snapshot) => {
        setData(snapshot.val());
        
    })
  }
          
          showProfile();
          listener()
     
    },[]); // eslint-disable-line react-hooks/exhaustive-deps
    
    const [oldScore, setOldScore] = useState(0)
    const [mytries, setTries] = useState(0)
    const [isAlreadyTaken, setStatus] = useState(false)
    const [QuizStatus, setQuizStatus] = useState("")
 

      async function listener(){

        const docRef = doc(assessmentdb, "userdata",userid,"coursesfinished",coursecode);

        const docSnap = await getDoc(docRef);
        

            if (docSnap.exists()) {
              setStatus(true)
              setOldScore(docSnap.data().ScoreOnTest)
              setTries(docSnap.data().tries)
              setQuizStatus(docSnap.data().AssessmentStatus)
             
            } else {
              setStatus(false)
            
        }
      }

        async function ShowQuestion(){

            const docRef = doc(assessmentdb, "Assessment",`${coursecode}`,"Quiz","Q"+Question);
            const docSnap = await getDoc(docRef);
            

                if (docSnap.exists()) {

                setQuiz(docSnap.data())


                } else {
               
                swal("Error","No such document!","error");
            }
          }

          function next(){

            if(opt === ""){
              swal("Oops!","You forgot to choose an answer!","info")
            }
            else{
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
           
          
            
          }


        useEffect(
          () => {

 
         

            if(Question <= 10)
            {
                ShowQuestion();
            }
            else{

                if(score < 7)
                {
                    setResult("Fail")
                    
                   
                }
                else {
                    setResult("Passed")
                }
                swal("Finished","You got "+score,"info")
                checkEmpty(false);
                checkEmpty1(true);
                checkEmptyQ(true);
            }

          },[score,opt,Question]); // eslint-disable-line react-hooks/exhaustive-deps

          async function dupeUpdate(){
          
          
            const DbRef = doc(assessmentdb, "userdata", userid);

       
          await updateDoc(DbRef, {
            level: profile.level+1
          });

          }

          async function addtries(){
          
          
            const DbRef = doc(assessmentdb, "userdata",userid,"coursesfinished",coursecode);

         
              await updateDoc(DbRef, {
                finished_at: convertedDate,
                tries: mytries+1
            
            });


          }

          function updateProfile(){ 
  
        
                  // A post entry.
              const postData = {  
                Name: profile.Name,
                Birthday: profile.Birthday,
                Gender : profile.Gender,
                Occupation: profile.Occupation,
                Address: profile.Address,
                email: profile.email,
                Institution: profile.Institution,
                level: profile.level+1,
                Permission: profile.Permission
              };
            
              const updates = {};
              updates['/users/' + userid] = postData;
          
          
              return update(ref(realtimedb), updates).then(() => {
                
                swal("The guild will take care of your Certificate!");
                history.push("/profile")
                dupeUpdate();
          
              }).catch((error) => {
                  swal("Error", error.code, "warning")
              }).finally(() => {
               //
              })
          
            } 
          
          async function addScoretoDB(){

     
               // Add a new document with a generated id.
               await setDoc(doc(assessmentdb, "userdata",userid,"coursesfinished",coursecode), {
                ScoreOnTest: score,
                finished_at: convertedDate,
                AssessmentStatus : result,
                tries: 1,
                certificate: "",
                CourseName: coursename
                })
          }

          
          async function updateScore(){
          
          
            const DbRef = doc(assessmentdb, "userdata",userid,"coursesfinished",coursecode);

         
              await updateDoc(DbRef, {
                ScoreOnTest: score,
                finished_at: convertedDate,
                AssessmentStatus : result,
                tries: mytries+1
            
            });


          }

          async function addDataForAnalytics(){

     
            // Add a new document with a generated id.
            await addDoc(collection(assessmentdb, "analyticsdata"), {
             ScoreOnTest: score,
              School: profile.Institution,
              Gender: profile.Gender,
              Occupation: profile.Occupation,
             AssessmentStatus : result,
             tries: mytries,
             created_at: convertedDate,
             course: coursecode,
             userid: userid,
             CourseName: coursename
             })

       }


         function AssessmentDone() {
          if(score <= oldScore)
                      {

                        history.push("/profile")
                        swal("So Close!","Unfortunately, you failed to beat your old score!","info")
                        addtries()
                        addDataForAnalytics()
                      }
              
                    else {
                      if(score <= 6)
                      {   
                          history.push("/profile")
                          swal("So Close!","Unfortunately, you failed to beat the final boss!","info")
                          
                          if(isAlreadyTaken === true)
                          {
                            addtries()
                            addDataForAnalytics()
                          }
                          else{
                            addScoretoDB()
                            addDataForAnalytics()
                          }      
                      }  
                      else{
                        if(QuizStatus === "Passed")
                        {
                          swal({
                            title: "Congratulations!",
                            text: "Please press Okay to Confirm your Assessment.",
                            icon: "info",
                            buttons: true,
                            defeat: true,
                          })
                          .then((willDownload) => {
                            if (willDownload) {
                              updateScore()
                              addtries()
                              addDataForAnalytics()
                              history.push("/profile")
                            } else {
                              swal("Not sure?","It's Okay! you can try again.","info");
                              history.push("/profile")
                            }
                          });
                        }
                        else{
                          swal({
                            title: "Congratulations!",
                            text: "Please press Okay to Confirm your Assessment.",
                            icon: "info",
                            buttons: true,
                            defeat: true,
                          })
                          .then((willDownload) => {
                            if (willDownload) {
                              addScoretoDB()
                              addtries()
                              updateProfile()
                              addDataForAnalytics()
                            } else {
                              swal("Not sure?","It's Okay! you can try again.","info");
                              history.push("/profile")
                            }
                          });
                        }
                       
                      }
                       
                    }
                  
                    //Choose kung download now ung cert or later
            
            
           }
           
           async function escapeDungeonData()
           {
              // Add a new document with a generated id.
              await setDoc(doc(assessmentdb, "userdata",userid,"coursesfinished",coursecode), {
                ScoreOnTest: 0,
                finished_at: convertedDate,
                AssessmentStatus : "Not Finished",
                tries: 1,
                certificate: "",
             CourseName: coursename
                })
           }


           async function escapeDungeonDataAnalytics(){

     
            // Add a new document with a generated id.
            await addDoc(collection(assessmentdb, "analyticsdata"), {
             ScoreOnTest: 0,
              School: profile.Institution,
              Gender: profile.Gender,
              Occupation: profile.Occupation,
             AssessmentStatus : "Not Finished",
             tries: 1,
             created_at: convertedDate,
             course: coursecode,
<<<<<<< HEAD
             userid: userid,
             CourseName: coursename
=======
             userid: userid
>>>>>>> 37db5f1a5e90da4dcc6ef61f467ddb012b9fca5c
             })

       }
           async function cancelAssessment(){
            if(isAlreadyTaken)
            {
              swal("Coward!","Weakness Disgusts me.","info")
              escapeDungeonDataAnalytics()
              addtries()
              history.push("/profile")
            }
            else{
              swal({
                title: "Are you sure?",
                text: "Please press Okay to Escape the Dungeon.",
                icon: "info",
                buttons: true,
                defeat: true,
              })
              .then((willDownload) => {
                if (willDownload) {


                  swal("Coward!","Weakness Disgusts me.","info")
                  escapeDungeonData()
                  escapeDungeonDataAnalytics()
                  history.push("/profile")
                  
                } else {
                 
                  swal("Oh-hoh","Changed your mind?","info");

                }
              });
            }
          
           }

    return (
        <>
            {/* Helmet */}
            <div>
              <Helmet>
                <title>ConquError | Lessons </title>
                <meta name="description" content="Welcome to the ConquError Assessment. Take a step and Conquer your error." />
              </Helmet>
            </div> 

        
        <section className="assessment section bg-light mt-2">
      
                        <h1 className="text-center text-light">Assessment</h1>
                        <h3 className="text-center text-light mt-3">Course Name: {coursename} </h3>
                        <h3 className="text-center text-light mt-3">Course Code: {coursecode} </h3>
                        <h3 className="text-center text-light mt-3">Score: {score}/10 </h3>
            <Container className="mt-3" fluid="md" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                      <div className="container bg-light mt-sm-5 my-1">

                      <div className="assessment-container">
                     
                        <div className="assessment-body">
                        {EmptyQ ? '' :
                            <div className="assessment-question">   
                                <h2>{quiz.Question}</h2>
                                {quiz.Imgquiz &&  <img className="mx-auto d-block mt-3 mb-3" style={{width: '50%', height: 'auto'}} src={quiz.Imgquiz} alt={coursecode} />}
                                <div className="assessment-options">
                                    <div className="assessment-option">
                                        <input type="radio" id="Option1" name="Quiz" className="form-check-input" checked={opt === quiz.Opt1} onChange={e => chooseAnswer(e.target.value)} value={quiz.Opt1} />
                                        <label htmlFor="Option1">&nbsp;{quiz.Opt1}</label>
                                    </div>
                                    <div className="assessment-option">
                                        <input type="radio" id="Option2" name="Quiz"  className="form-check-input" checked={opt === quiz.Opt2} onChange={e => chooseAnswer(e.target.value)} value={quiz.Opt2} />
                                        <label htmlFor="Option2">&nbsp;{quiz.Opt2}</label>
                                    </div>
                                    <div className="assessment-option">
                                        <input type="radio" id="Option3" name="Quiz"  className="form-check-input" checked={opt === quiz.Opt3} onChange={(e) => chooseAnswer(e.target.value)} value={quiz.Opt3}/>
                                        <label htmlFor="Option3">&nbsp;{quiz.Opt3}</label>
                                    </div>
                                    <div className="assessment-option">
                                        <input type="radio" id="Option4" name="Quiz"  className="form-check-input" checked={opt === quiz.Opt4} onChange={(e) => chooseAnswer(e.target.value)} value={quiz.Opt4}/>
                                        <label htmlFor="Option4">&nbsp;{quiz.Opt4}</label>
                                    </div>
                                </div>
                            </div> 
                          }
                            {Empty1 ? '': 
                            <div className="d-flex align-items-center pt-3">

                              
                                <div className="ml-auto mr-sm-5"> <button className="btn btn-primary" onClick={next}>Next</button> </div>
                              
                            </div>
                          }
          
                            { Empty ? '' :
                            <div className="vertical-center">
                                <div className="ml-auto mr-sm-5"> <button className="btn btn-primary" onClick={AssessmentDone}>Finish</button> </div> 
                                </div>
                                }
                        </div>
                      </div>
                    </div>
            </Container>
            <br></br>
            <Button onClick={cancelAssessment}>Escape Dungeon!</Button>
        </section>
        </>
    )
}
