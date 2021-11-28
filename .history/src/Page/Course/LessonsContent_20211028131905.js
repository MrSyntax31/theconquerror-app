import React, {useEffect,useState} from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {Card, Button, Accordion} from 'react-bootstrap';
import * as AiIcons from 'react-icons/ai';
import './Contents.css';
import Navbar from '../../Components/Navbar/Navbar'
import {} from '../../firebase/firebase'
import { getFirestore, doc, getDoc } from "firebase/firestore";
import {  useHistory} from "react-router-dom"
import Footer from '../../Components/Footer/Footer';


const LessonsContent = () => {

  const history = useHistory()
  
  const forumdb = getFirestore();

  const [courses, setLesson] = useState([]);

  const lessonid = localStorage.getItem('getLesson')

  async function fetchLesson(){

    if (lessonid === null)
    {
      history.push("/course")
    }
     else{
      const docRef = doc(forumdb, "courses", lessonid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
       setLesson(docSnap.data())
  
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
     } 
  
  }

  function cleartoken(){

    history.push("/course")

  }

  useEffect(() => {

   fetchLesson();
     
  });

    return (
        <>
      <div>
        <Helmet>
          <title>ConquError | Lessons </title>
          <meta name="description" content="ConquError Homepage" />
        </Helmet>
      </div>
      <Navbar/>

<div className="" style={{marginTop:'5rem',  marginBottom:'3rem'}}> </div>

      <Link to="/course" style={{ textDecoration: 'none', marginLeft:'1rem' }} className="btn btn-primary mb-4">Back</Link>

            <Card className="text-center">
                <Card.Header><AiIcons.AiFillCode/> {lessonid}</Card.Header>
                  <Card.Body>
                      <Card.Title> {courses.coursename}</Card.Title>
                      <Card.Text>
                      {courses.courseoverview}

                      <div className="mt-2 text-start" style={{}}>
                        <h5>Objectives</h5>
                        <p>Upon successful completion of this course, the student will be able to:</p>
                        <ul>
                              <li>{courses.lessonoverview1}</li>
                              <li>{courses.lessonoverview2}</li>
                              <li>{courses.lessonoverview3}</li>
                              <li>{courses.lessonoverview4}</li>
                              <li>{courses.lessonoverview5}</li>
                              <li>{courses.lessonoverview6}</li>
                              <li>{courses.lessonoverview7}</li>
                              <li>{courses.lessonoverview8}</li>
                              <li>{courses.lessonoverview9}</li>
                              <li>{courses.lessonoverview10}</li>
                              <li>{courses.lessonoverview11}</li>
                        </ul>
                      </div>
                      </Card.Text>

                      <Accordion>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>{courses.lessons1title}</Accordion.Header>
                            <Accordion.Body>
                              {/*Basic Programming Structure */}
                                <div className=" mt-2 text-start p-5">
                                    <h4>{courses.lessons1subcontenttitle}</h4>
                                    <p>{courses.lessons1intro}</p>
                                    {/*Programming Concepts*/}
                                    <p>{courses.lessons1intro1}</p>

                                    <ul>
                                        <li>{courses.lessons1subcontentlist}</li>
                                        <li>{courses.lessons1subcontentlist1}</li>
                                    </ul>

                                    <h5>{courses.lessons1subcontenttitle1}</h5>
                                    <p>{courses.lessons1subcontent}</p>
                                     {/*Programming Concepts*/}{/*Conditional Structure*/}
                                    <p>{courses.lessons1subcontent1}</p>

                                    <ul>
                                        <li>{courses.lessons1subcontentlist2}</li>
                                        <li>{courses.lessons1subcontentlist3}</li>
                                        <li>{courses.lessons1subcontentlist4}</li>
                                    </ul>
                                </div>
                            </Accordion.Body>
                          </Accordion.Item>

                          <Accordion.Item eventKey="1">
                            <Accordion.Header>{courses.lessons2title}</Accordion.Header>
                            <Accordion.Body>
                          
                            </Accordion.Body>
                          </Accordion.Item>

                          <Accordion.Item eventKey="2">
                            <Accordion.Header>Lesson 3: </Accordion.Header>
                            <Accordion.Body>
                          
                            </Accordion.Body>
                          </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Lesson 4: </Accordion.Header>
                            <Accordion.Body>
                            
                            </Accordion.Body>
                          </Accordion.Item>
                      </Accordion>


                  <div className="mt-5">
                    {
                      <Button onClick={cleartoken} variant="primary">Assessment</Button>
                      }
                  </div>
                    
                  </Card.Body>
                    <Card.Footer className="text-muted mb-5"></Card.Footer>
            </Card>


        <a href="#top" className="scroll-top">
            <i className="fa fa-chevron-up"></i>
        </a>
        </>
    )
}

export default LessonsContent
