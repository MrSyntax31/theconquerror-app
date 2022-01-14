import React , {useState, useEffect, PureComponent}from 'react'

//Taskbar title
import Helmet from 'react-helmet'

//Navbar
import Navbar from './NavBar'

//Bootstrap
import {  Container, Tabs, Tab, Card, Table, Form , Button} from 'react-bootstrap';


//Firebase
import {getAuth} from 'firebase/auth'
import { getFirestore, query, collection, where, limit,  getDocs, updateDoc, doc, orderBy, startAfter } from 'firebase/firestore';
import { getDatabase, ref, onValue } from "firebase/database";

import {  useHistory} from "react-router-dom"
import swal from 'sweetalert';

//Charts
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

const Admin = () => {

    const auth = getAuth();

    const admindb = getFirestore();

    const realtimedb = getDatabase();

    const history = useHistory();

    const userId = auth.currentUser.uid;   

    const [profile, setData] = useState();
  
//Loads the function inside the useEffect when the component renders
useEffect (() => {
    
         //Function that shows the profile of the user 
  function showProfile() {
   

    //creating reference for realtimedb and fetching data from table users using the userID as reference then setting the data inside the Profile useState above
      const profileData = ref(realtimedb, '/users/' + userId);
      onValue(profileData, (snapshot) => {
        setData(snapshot.val().Permission); 
        
    })
  }
          
          showProfile();
      
            size();
      
      
         
    },[]); // eslint-disable-line react-hooks/exhaustive-deps
    
   
useEffect (() => {

    if(profile){
        if (profile === "Admin")
        {
            //Welcome Admin
        }
        else
        {
            history.push('/login')
            swal("Oops","You're not supposed to be there","error")
        }
    }
    else{

    }

},[profile]); // eslint-disable-line react-hooks/exhaustive-deps

    const [user, setSize] = useState();

function size(){
    
    //creating reference for realtimedb and fetching data from table users using the userID as reference then setting the data inside the Profile useState above
    const profileData = ref(realtimedb, '/users');
    onValue(profileData, (snapshot) => {
        setSize(snapshot.size);
      

})
}

const [VerifReq, setVerifReq] = useState([]);
const [LastPage, setLastPage] = useState([]);


const collRef = query(collection(admindb, "verifiedteachers"), where("verifiedstatus", "==", "Pending"),limit(5));
 
  // Query the first page of docs
  async function fetch(){
    //query data
  
   try{
    const documentSnapshots = await getDocs(collRef);

    const isEmpty = documentSnapshots.size === 0;
    //Pagination
    if(!isEmpty)
    {     //throw data to useState
      const map =  documentSnapshots.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setLastPage(documentSnapshots.docs[documentSnapshots.docs.length-1]) ;
      setVerifReq(map);
        }       
    else{
     //No DATA
 
    }

   }
   catch(error){
  swal('Error',error.message,'error')

  };

}

  async function approveReq(e){

        const userID = e.target.getAttribute("data-id")
        
        const docRef = doc(admindb, "verifiedteachers", userID);

       
        await updateDoc(docRef, {
        verifiedstatus: "Approved"
        }).then(() =>{

            swal("Success","You have Verified user "+userID,"success")
        
        }).catch((error) => {
            swal("Error",error,"error")
        })
        
  }

  const ReqVerfi = VerifReq.map((verification) => ( 
        <tbody key={verification.id}>
        <tr >
        <td>{verification.id}</td>
        <td style={{width:"8rem"}}><img src={verification.img} alt="profile" className="img-fluid mx-auto d-block"  style={{width: "3rem"}} /></td>
        <td>{verification.created_at}</td>
        <td>{verification.verifiedstatus}</td>
        <td><Button data-id={verification.id} onClick={approveReq} >Approve</Button></td>
        </tr>
        </tbody>
      ))
    


      const [feedback, setFeedback] = useState([]);

      const feedbackref = query(collection(admindb, "feedback"), orderBy("sent_at","desc"),limit(5));
       
        // Query the first page of docs
        async function getfeedback(){
          //query data
        
         try{
          const documentSnapshots = await getDocs(feedbackref);
      
          const isEmpty = documentSnapshots.size === 0;
          //Pagination
          if(!isEmpty)
          {     //throw data to useState
            const map =  documentSnapshots.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setLastPage(documentSnapshots.docs[documentSnapshots.docs.length-1]) ;
            setFeedback(map);
              }       
          else{
           //No DATA
       
          }
      
         }
         catch(error){
        swal('Error',error.message,'error')
      
        };
      
      }

      const feedbackMap = feedback.map((fback) => ( 
        <tbody key={fback.id}>
        <tr >
        <td>{fback.id}</td>
        <td>{fback.Feedback} </td>
        <td>{fback.sent_at}</td>
        <td>{fback.sender}</td>
        </tr>
        </tbody>
      ))

      const [report, setReport] = useState([]);

      const reportRef = query(collection(admindb, "reports"), orderBy("dateofReport","desc"),limit(5));
       
        // Query the first page of docs
        async function getReports(){
          //query data
        
         try{
          const documentSnapshots = await getDocs(reportRef);
      
          const isEmpty = documentSnapshots.size === 0;
          //Pagination
          if(!isEmpty)
          {     //throw data to useState
            const map =  documentSnapshots.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setLastPage(documentSnapshots.docs[documentSnapshots.docs.length-1]) ;
            setReport(map);
              }       
          else{
           //No DATA
       
          }
      
         }
         catch(error){
        swal('Error',error.message,'error')
      
        };
      
      }

      const reportMap = report.map((reports) => ( 
        <tbody key={reports.id}>
        <tr >
        <td>{reports.id}</td>
        <td>{reports.ReportDesc} </td>
        <td>{reports.dateofReport}</td>
        <td>{reports.Email}</td>
        </tr>
        </tbody>
      ))

      
useEffect(
    () => {
  
      fetch()
      getfeedback()   
      getReports()
    },[]); // eslint-disable-line react-hooks/exhaustive-deps
  
    async function getMoreRequests(){
    
        if (VerifReq.length === 0){
              
            swal("Oops!","Seems like you've reached the end!","info")

        } else{
          try {   
               
            const next =
            query(collRef,
            orderBy("created_at","desc"),
            startAfter(LastPage),
            limit(5));

            const nextDocs =  await getDocs(next)
            
            const isEmpty = nextDocs.size === 0;
            if(!isEmpty){

              const map =  nextDocs.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

              
              setVerifReq((verification) =>[...verification, ...map]);

             
                setLastPage(nextDocs.docs[nextDocs.docs.length-1]);
              
          
            
            }
            else{
              swal("Sorry","There are no more Data left to show you","warning")
            
            }
             
           
        
     
        }
        catch (error) {
          swal('Error!',error.message,'error')
        }
        }
       
      }

    return (
        <>
            {/* Tab Bar Title */}
            <Helmet>
                <title>ConquError | Admin</title>
            </Helmet>

            {/* Navbar */}
            <Navbar/>
                
                <p className="mt-5 text-primary text-center"> <em> *NOTE: ALL DECISIONS SHOULD BE DISCUSSED ON OUR DISCORD SERVER</em></p>
            {/* Content */}
            <Container className="mt-3 mb-5">

                            <main className="mt-3">
                                <div className="mt-3" fluid="md" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <div className="row">

                                        <div className="col-xl-3 col-sm-6 mb-3">
                                            <div className="card text-white bg-primary o-hidden h-100 ">
                                                <div className="card-body">
                                                <div className="card-body-icon">
                                                    <i className="fa fa-fw fa-address-book"></i>
                                                </div>
                                                <strong>{user} Registered Users </strong>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-3 col-sm-6 mb-3">
                                            <div className="card text-white bg-warning o-hidden h-100">
                                                <div className="card-body">
                                                <div className="card-body-icon">
                                                    <i className="fa fa-fw fa-list"></i>
                                                </div>
                                                <div className="mr-5">11 New Tasks</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-3 col-sm-6 mb-3">
                                            <div className="card text-white bg-success o-hidden h-100">
                                                <div className="card-body">
                                                <div className="card-body-icon">
                                                    <i className="fa fa-fw fa-shopping-cart"></i>
                                                </div>
                                                <div className="mr-5">123 New Orders</div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-xl-3 col-sm-6 mb-3">
                                            <div className="card text-white bg-danger o-hidden h-100">
                                                <div className="card-body">
                                                <div className="card-body-icon">
                                                    <i className="fa fa-fw fa-support"></i>
                                                </div>
                                                <div className="mr-5">13 New Tickets</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </main>

                            <section></section></section>
                            <section className="mt-5 mb-5">
                                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                                    <Tab eventKey="home" title="Request Verification">
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>Request Verification</Card.Title>
                                                <Card.Text>
                                                   NOTE:
                                                   PLEASE THROUGHLY REVIEW ALL CREDENTIALS.
                                                </Card.Text>
                                            </Card.Body>

                                            <Form className="m-2"  >
                                        <Table striped bordered hover>
                                            <thead>
                                            <tr>
                                            <th>User ID</th>
                                            <th>Proof</th>
                                            <th>Date Of Request</th>
                                            <th>Status</th>
                                            <th>Approve</th>
                                            </tr>
                                            </thead>
                                            {ReqVerfi}
                                            </Table>
                                            <Button onClick={getMoreRequests}>Show More</Button>
                                        </Form>                                
                                        </Card>
                                    </Tab>

                                    <Tab eventKey="profile" title="Feedback">
                                    <Card>
                                            <Card.Body>
                                                <Card.Title>Feedback</Card.Title>
                                                <Card.Text>
                                                 This section shows all the feedback of  the users.
                                                </Card.Text>
                                            </Card.Body>

                                            <Form className="m-2">
                                                <Table striped bordered hover>
                                                <thead>
                                            <tr>
                                            <th>Document ID</th>
                                            <th>Message</th>
                                            <th>Date</th>
                                            <th>Email</th>
                                            </tr>
                                            </thead>
                                                    {feedbackMap}
                                              
                                                </Table>
                                                <Button>Show More</Button>
                                            </Form>
                                            
                                        </Card>
                                    </Tab>

                                    <Tab eventKey="report" title="Report">
                                    <Card>
                                            <Card.Body>
                                                <Card.Title>Reports</Card.Title>
                                                <Card.Text>
                                                 This section shows all the Reports. <br></br>
                                                 NOTE: DISABLING OF AN ACCOUNT SHOULD BE REVIEWED AND DISCUSSED WITH THE TEAM 
                                                </Card.Text>
                                            </Card.Body>

                                            <Form className="m-2">
                                                <Table striped bordered hover>
                                                <thead>
                                            <tr>
                                            <th>Document ID</th>
                                            <th>Description</th>
                                            <th>Date</th>
                                            <th>Email of Violator</th>
                                            </tr>
                                            </thead>
                                                {reportMap}
                                              
                                                </Table>
                                                <Button>Show More</Button>
                                            </Form>
                                            
                                        </Card>
                                    </Tab>
                                </Tabs>
                            </section>
            
                
            </Container>

        </>
    )
}

export default Admin
