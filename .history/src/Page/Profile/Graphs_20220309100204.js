import React, {useEffect, useState} from 'react';

//Dependencies
import Helmet from 'react-helmet';
import { Link } from "react-router-dom"

//Styles & Libraries
import { Card, Container, Form, Table,  } from 'react-bootstrap';

import Navbar from '../../Components/Navbar/Navbar'

import {
    ComposedChart,
    BarChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';
  import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
  import {getAuth} from 'firebase/auth'
  import { getFirestore, collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";

const Graphs = () => {

  const Auth = getAuth()
  const db = getFirestore()
  const userId = Auth.currentUser.uid


  //PC 101
  const [PC101, setPC101] = useState(0)
  const [countPC101,setcountPC101] = useState(1)
  const [computePC101,setComputePC101] = useState(0)

  async function courseQUERYPC101(){

    setPC101(0)
    setcountPC101(1)
    setComputePC101(0)
    const q = query(collection(db, "analyticsdata"),where("course","==","PROG-PC101"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
     setPC101(PC101 => doc.data().ScoreOnTest+PC101);
     
    });

  }

  
  useEffect  (() => {
    //Counting
    setcountPC101(countPC101+1)
 
  },[PC101]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect  (() => {
    //Computation
    setComputePC101(PC101/countPC101)
   

  },[PC101,countPC101]) // eslint-disable-line react-hooks/exhaustive-deps


   //NCS 218
   const [NCS218, setNCS218] = useState(0)
   const [countNCS218,setcountNCS218] = useState(1)
   const [computeNCS218,setComputeNCS218] = useState(0)
 
   async function courseQUERYNCS218(){
 
    setNCS218(0)
    setcountNCS218(1)
    setComputeNCS218(0)
     const q = query(collection(db, "analyticsdata"),where("course","==","PROG-NCS218"));
 
     const querySnapshot = await getDocs(q);
     querySnapshot.forEach((doc) => {
       // doc.data() is never undefined for query doc snapshots
       setNCS218(NCS218 => doc.data().ScoreOnTest+NCS218);
      
     });
 
   }

   
  useEffect  (() => {
    //Counting
    setcountNCS218(countNCS218+1)
 
  },[NCS218]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect  (() => {
    //Computation
    setComputeNCS218(NCS218/countNCS218)
   

  },[NCS218,countNCS218]) // eslint-disable-line react-hooks/exhaustive-deps


 //LC101 
 const [LC101, setLC101] = useState(0)
 const [countLC101,setcountLC101] = useState(0)
 const [computeLC101,setComputeLC101] = useState(0)

 async function courseQUERYLC101(){

  setLC101(0)
  setcountLC101(0)
  setComputeLC101(0)
   const q = query(collection(db, "analyticsdata"),where("course","==","PROG-LC101"));

   const querySnapshot = await getDocs(q);
   querySnapshot.forEach((doc) => {
     // doc.data() is never undefined for query doc snapshots
     setLC101(LC101 => doc.data().ScoreOnTest+LC101);
    
   });

 }

 
 
useEffect  (() => {
  //Counting
  setcountLC101(countLC101+1)

},[LC101]) // eslint-disable-line react-hooks/exhaustive-deps

useEffect  (() => {
  //Computation
  setComputeLC101(LC101/countLC101)
 

},[LC101,countLC101]) // eslint-disable-line react-hooks/exhaustive-deps



//FN211 
const [FN211, setFN211] = useState(0)
const [countFN211,setcountFN211] = useState(0)
const [computeFN211,setComputeFN211] = useState(0)

async function courseQUERYFN211(){

 setFN211(0)
 setcountFN211(0)
 setComputeFN211(0)
  const q = query(collection(db, "analyticsdata"),where("course","==","PROG-FN211"));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    setFN211(FN211 => doc.data().ScoreOnTest+FN211);
   
  });

}


useEffect  (() => {
 //Counting
 setcountFN211(countFN211+1)

},[FN211]) // eslint-disable-line react-hooks/exhaustive-deps

useEffect  (() => {
 //Computation
 setComputeFN211(FN211/countFN211)


},[FN211,countFN211]) // eslint-disable-line react-hooks/exhaustive-deps



//CS111 
const [CS111, setCS111] = useState(0)
const [countCS111,setcountCS111] = useState(0)
const [computeCS111,setComputeCS111] = useState(0)

async function courseQUERYCS111(){

 setCS111(0)
 setcountCS111(0)
 setComputeCS111(0)
  const q = query(collection(db, "analyticsdata"),where("course","==","PROG-CS111"));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    setCS111(CS111 => doc.data().ScoreOnTest+CS111);
   
  });

}


useEffect  (() => {
 //Counting
 setcountCS111(countCS111+1)

},[CS111]) // eslint-disable-line react-hooks/exhaustive-deps

useEffect  (() => {
 //Computation
 setComputeCS111(CS111/countCS111)


},[CS111,countCS111]) // eslint-disable-line react-hooks/exhaustive-deps



//BPS102 
const [BPS102, setBPS102] = useState(0)
const [countBPS102,setcountBPS102] = useState(0)
const [computeBPS102,setComputeBPS102] = useState(0)

async function courseQUERYBPS102(){

 setBPS102(0)
 setcountBPS102(0)
 setComputeBPS102(0)
  const q = query(collection(db, "analyticsdata"),where("course","==","PROG-BPS102"));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    setBPS102(BPS102 => doc.data().ScoreOnTest+BPS102);
   
  });

}


useEffect  (() => {
 //Counting
 setcountBPS102(countBPS102+1)

},[BPS102]) // eslint-disable-line react-hooks/exhaustive-deps

useEffect  (() => {
 //Computation
 setComputeBPS102(BPS102/countBPS102)


},[BPS102,countBPS102]) // eslint-disable-line react-hooks/exhaustive-deps

//AR132 
const [AR132, setAR132] = useState(0)
const [countAR132,setcountAR132] = useState(0)
const [computeAR132,setComputeAR132] = useState(0)

async function courseQUERYAR132(){

 setAR132(0)
 setcountAR132(0)
 setComputeAR132(0)
  const q = query(collection(db, "analyticsdata"),where("course","==","PROG-AR132"));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    setAR132(AR132 => doc.data().ScoreOnTest+AR132);
   
  });

}


useEffect  (() => {
 //Counting
 setcountAR132(countAR132+1)

},[AR132]) // eslint-disable-line react-hooks/exhaustive-deps

useEffect  (() => {
 //Computation
 setComputeAR132(AR132/countAR132)


},[AR132,countAR132]) // eslint-disable-line react-hooks/exhaustive-deps


const data =  graphdata.map((analytics) => ( 
  {
  
    name: analytics.CourseName,
    Score: analytics.ScoreOnTest,
    tries: analytics.tries,
  }
))
const dataList = graphdata.map((analytics) => (
  
  <tr key={analytics.id}>
  <th>{analytics.CourseName}</th>
  <th>{analytics.id}</th>
  <th>{analytics.AssessmentStatus}</th>
  <th>{analytics.ScoreOnTest}</th>
  <th>{analytics.finished_at}</th>
  <th>{analytics.tries}</th>
  </tr>

)
)

const [userPC101, setuserPC101] = useState()

  async function userScorePC101(){
          const docRef = doc(db, "userdata", userId,"coursesfinished","PROG-PC101");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
       setuserPC101(docSnap.data().ScoreOnTest);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
}
  }

  const [userNCS218, setuserNCS218] = useState()

  async function userScoreNCS218(){
          const docRef = doc(db, "userdata", userId,"coursesfinished","PROG-NCS218");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setuserNCS218(docSnap.data().ScoreOnTest);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
}
  }

  const [userLC101, setuserLC101] = useState()

  async function userScoreLC101(){
          const docRef = doc(db, "userdata", userId,"coursesfinished","PROG-LC101");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setuserLC101(docSnap.data().ScoreOnTest);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
}
  }


  const [userFN211, setuserFN211] = useState()

  async function userScoreFN211(){
          const docRef = doc(db, "userdata", userId,"coursesfinished","PROG-FN211");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setuserFN211(docSnap.data().ScoreOnTest);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
}
  }
  

  const [userCS111, setuserCS111] = useState()

  async function userScoreCS111(){
          const docRef = doc(db, "userdata",userId, "coursesfinished","PROG-CS111");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setuserCS111(docSnap.data().ScoreOnTest);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
}
  }

  const [userBPS102, setuserBPS102] = useState()

  async function userScoreBPS102(){
          const docRef = doc(db, "userdata", userId,"coursesfinished","PROG-BPS102");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setuserBPS102(docSnap.data().ScoreOnTest);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
}
}

const [userAR132, setuserAR132] = useState()

  async function userScoreAR132(){
          const docRef = doc(db, "userdata",userId, "coursesfinished","PROG-AR132");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setuserAR132(docSnap.data().ScoreOnTest);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
}
}
  useEffect  (() => {
    //Queries
    courseQUERYPC101()
    courseQUERYNCS218()
    courseQUERYLC101()
    courseQUERYFN211()
    courseQUERYCS111()
    courseQUERYBPS102()
    courseQUERYAR132()
    userScoreAR132()
    userScoreBPS102()
    userScoreCS111()
    userScoreFN211()
    userScoreLC101()
    userScoreNCS218()
    userScorePC101()
  },[]) // eslint-disable-line react-hooks/exhaustive-deps


  //Data Show
  const data = [
    {
      name: 'Programming Concepts',
      Your_Score: userPC101,
      User_Average: computePC101,
    
    },
    {
      name: 'Nested Conditions',
      Your_Score: userNCS218,
      User_Average: computeNCS218,
     
    },
    {
      name: 'Looping Constructs',
      Your_Score: userLC101,
      User_Average: computeLC101,
     
    },
    {
      name: 'Functions',
      Your_Score: userFN211,
      User_Average: computeFN211,
     
    },
    {
      name: 'Conditional Structures',
      Your_Score: userCS111,
      User_Average: computeCS111,
    
    },
    {
      name: 'Basic Programming Structures',
      Your_Score: userBPS102,
      User_Average: computeBPS102,
    
    },
    {
      name: 'Arrays',
      Your_Score: userAR132,
      User_Average: computeAR132,
    
    },
  ];
  

  const datas = [
    {
      subject: 'Arrays',
      A: userAR132,
      B: computeAR132,
      fullMark: 10,
    },
    {
      subject: 'Basic Programming Structures',
      A: userBPS102,
      B: computeBPS102,
      fullMark: 10,
    },
    {
      subject: 'Conditional Structures',
      A: userCS111,
      B: computeCS111,
      fullMark: 10,
    },
    {
      subject: 'Functions',
      A: userFN211,
      B: computeFN211,
      fullMark: 10,
    },
    {
      subject: 'Looping Constructs',
      A: userLC101,
      B: computeLC101,
      fullMark: 10,
    },
    {
      subject: 'Nested Conditions',
      A: userNCS218,
      B: computeNCS218,
      fullMark: 10,
    },
    {
      subject: 'Programming Concepts',
      A: userPC101,
      B: computePC101,
      fullMark: 10,
    },
  ];


  return (
    <>
        {/* Division for Tab Page and Description*/}
        <div>
            <Helmet>
              <title>ConquError | 📈 Graphs</title>
              <meta name="description" content="This is your graphs page." />
            </Helmet>
        </div>

        <Navbar/>
        
        {/* Container for Card User Profile Information */}
        <section>
               
        <div className="main-content">

            <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" style={{minHeight: "600px", backgroundImage: "url(https://images.unsplash.com/photo-1495592822108-9e6261896da8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)", backgroundSize: "cover", backgroundPosition: "center top"}}>

            <span className="mask bg-gradient-default opacity-8"></span>

            <div className="container-fluid d-flex align-items-center">
                <div className="row">
                <div className="col-lg-7 col-md-10">
                    <h1 className="display-2 text-white">Hello</h1>
                    <p className="text-white mt-0 mb-5">Welcome to your graphical data center. Monitor your data and performance.</p>
                    <p className="text-white mt-0 mb-5">Compare your score to other Warriors!</p>
                </div>
                </div>
            </div>
            
            </div>

        </div>

        <h1 className="fw-bold">My ConquError Status</h1>
            <div className="w-100 mt-2 mb-2 text-center text-secondary">
              Wanna boost your skills? Go to Course! <Link to="/lessons" style={{ textDecoration: 'none' }}>Course</Link>
            </div>
            <div className="App">
              
                    <div style={{ width: '100%', height: 500, marginTop:'4rem', marginBottom:'4rem' }}>
                      <ResponsiveContainer>
                        <BarChart   data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip />
                              <Legend />
                            
                              <Bar dataKey="Score" fill="#3a86ff" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
            </div>    

                        {/*Time Table*/}
                        <section>
                            <Card className="mt-5 mb-5">
                                <Card.Header className="text-center">
                                    <h3 className="text-center mt-5 fw-bold">Lesson's Time Table</h3>
                                    <p>
                                        This shows the different lesson's time table and status of your current lesson.
                                    </p>
                                </Card.Header>
                                <Card.Body>
                                            <Form>
                                                    <Table striped bordered hover>
                                                        <thead>
                                                        <tr className="text-primary fw-bold">
                                                        <th>Course Name</th>
                                                        <th>Course Code</th>
                                                        <th>Status</th>
                                                        <th>Score</th>
                                                        <th>Finished At</th>
                                                        <th>Tries</th>
                                                        </tr>
                                                          {dataList}
                                                        </thead>
                                                           
                                                    </Table>
                                                    
                                            </Form> 
                                </Card.Body>
                                
                            </Card>
                        </section>
            <Card>
                <Container>
                                <div className="text-center">
                                    <h3 className="text-center mt-5 fw-bold">Compare your Average!</h3>
                                    <p>
                                        This shows the Average score of the other Warriors compared to yours.
                                    </p>
                                </div>
                    <div className="App">
                        <div style={{ width: '100%', height: 350, marginTop:'2rem', marginBottom:'2rem' }}>
                        <ResponsiveContainer>
                            <ComposedChart
                                width={500}
                                height={400}
                                data={data}
                                margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                                }}
                            >
                                <CartesianGrid stroke="#f5f5f5" />
                                <XAxis dataKey="name" scale="band" />
                                <YAxis />
                                <Tooltip />
                                <Legend />

                                <Bar dataKey="Your_Score" barSize={20} fill="#413ea0" />
                                <Line type="monotone" dataKey="User_Average" stroke="#ff7300" />
                            </ComposedChart>
                        </ResponsiveContainer>
                        </div>
                    </div>


                
                    <div className="App">
                        <div style={{ width: '100%', height: 350, marginTop:'2rem', marginBottom:'2rem' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={datas}>
                                <PolarGrid />
                                <PolarAngleAxis dataKey="subject" />
                                <PolarRadiusAxis />
                                <Radar name="User_Average" dataKey="B" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                                <Radar name="Your_Score" dataKey="A" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                                <Legend/>
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                
                </Container>
            </Card>
                
              </section>
 
    </>
  )
}

export default Graphs