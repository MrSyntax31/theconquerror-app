import React , {useState, useEffect}from 'react'

//Taskbar title
import Helmet from 'react-helmet'

//Navbar
import Navbar from './NavBar'

//Bootstrap
import {  Container, Tabs, Tab, Card, Table, Form , Button} from 'react-bootstrap';


//Firebase
import {getAuth} from 'firebase/auth'
import { getFirestore, query, collection, where, limit,  getDocs, updateDoc, doc, orderBy, startAfter , onSnapshot} from 'firebase/firestore';
import { getDatabase, ref, onValue } from "firebase/database";

import {  useHistory} from "react-router-dom"
import swal from 'sweetalert';

//Charts
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


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


      const [graphdata, setGraphData] = useState([]);

      function Analytics(){
  
        const collectionRef = collection(admindb, "userdata");
      const q = query(collectionRef);
      onSnapshot(q, (snapshot) =>
      setGraphData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  
      )
    }
  
    useEffect(() => {
    
  
      Analytics()
  
    },[]); // eslint-disable-line react-hooks/exhaustive-deps
    //For Graphs (Data)
    
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
];

    return (
        <>
            {/* Tab Bar Title */}
            <Helmet>
                <title>ConquError | Admin</title>
            </Helmet>

            {/* Navbar */}
            <Navbar/>
                <h1 className="text-center text-primary fw-bold mt-3"><img
                  alt=""
                  src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjE0LjI1ODA4IiB5MT0iMTQuMjU4MDgiIHgyPSIxMjEuMjY3MTciIHkyPSIxMjEuMjY3MTciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjM2NhMGUxIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIwLjU4NyIgc3RvcC1jb2xvcj0iIzQ1OTlkMiI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzIwNjhlNSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0idXJsKCNjb2xvci0xKSI+PHBhdGggZD0iTTEwOS44MTQ4MywxNDUuNjQ4MTdsLTE1LjM4MzI1LC0xNS4zODMyNWMtMC42OTg3NSwtMC42OTg3NSAtMC42OTg3NSwtMS44MzQ2NyAwLC0yLjUzMzQybDguMjE2NTgsLTguMjE2NThjMC42OTg3NSwtMC42OTg3NSAxLjgzNDY3LC0wLjY5ODc1IDIuNTMzNDIsMGw0LjYzMzI1LDQuNjMzMjVjMC42OTg3NSwwLjY5ODc1IDEuODM0NjcsMC42OTg3NSAyLjUzMzQyLDBsMzYuODgzMjUsLTM2Ljg4MzI1YzAuNjk4NzUsLTAuNjk4NzUgMC42OTg3NSwtMS44MzQ2NyAwLC0yLjUzMzQybC0zNi44Nzk2NywtMzYuODc5NjdjLTAuNjk4NzUsLTAuNjk4NzUgLTEuODM0NjcsLTAuNjk4NzUgLTIuNTMzNDIsMGwtMTEuNzk5OTIsMTEuNzk5OTJjLTAuNjk4NzUsMC42OTg3NSAtMC42OTg3NSwxLjgzNDY3IDAsMi41MzM0MmwyMi41NDk5MiwyMi41NDk5MmMwLjY5ODc1LDAuNjk4NzUgMC42OTg3NSwxLjgzNDY3IDAsMi41MzM0MmwtOC4yMTY1OCw4LjIxNjU4Yy0wLjY5ODc1LDAuNjk4NzUgLTEuODM0NjcsMC42OTg3NSAtMi41MzM0MiwwbC0zMy4yOTk5MiwtMzMuMjk5OTJjLTAuNjk4NzUsLTAuNjk4NzUgLTAuNjk4NzUsLTEuODM0NjcgMCwtMi41MzM0MmwzMy4yOTk5MiwtMzMuMjk5OTJjMC42OTg3NSwtMC42OTg3NSAxLjgzNDY3LC0wLjY5ODc1IDIuNTMzNDIsMGw1OC4zODMyNSw1OC4zODMyNWMwLjY5ODc1LDAuNjk4NzUgMC42OTg3NSwxLjgzNDY3IDAsMi41MzM0MmwtNTguMzgzMjUsNTguMzc5NjdjLTAuNzAyMzMsMC43MDIzMyAtMS44MzQ2NywwLjcwMjMzIC0yLjUzNywwek05NS40ODE1LDEwOS44MTQ4M2wtMzMuMjk5OTIsLTMzLjI5OTkyYy0wLjY5ODc1LC0wLjY5ODc1IC0xLjgzNDY3LC0wLjY5ODc1IC0yLjUzMzQyLDBsLTguMjE2NTgsOC4yMTY1OGMtMC42OTg3NSwwLjY5ODc1IC0wLjY5ODc1LDEuODM0NjcgMCwyLjUzMzQybDIyLjU0OTkyLDIyLjU0OTkyYzAuNjk4NzUsMC42OTg3NSAwLjY5ODc1LDEuODM0NjcgMCwyLjUzMzQybC0xMS43OTk5MiwxMS43OTk5MmMtMC42OTg3NSwwLjY5ODc1IC0xLjgzNDY3LDAuNjk4NzUgLTIuNTMzNDIsMGwtMzYuODc5NjcsLTM2Ljg3OTY3Yy0wLjY5ODc1LC0wLjY5ODc1IC0wLjY5ODc1LC0xLjgzNDY3IDAsLTIuNTMzNDJsMzYuODgzMjUsLTM2Ljg4MzI1YzAuNjk4NzUsLTAuNjk4NzUgMS44MzQ2NywtMC42OTg3NSAyLjUzMzQyLDBsNC42MzMyNSw0LjYzMzI1YzAuNjk4NzUsMC42OTg3NSAxLjgzNDY3LDAuNjk4NzUgMi41MzM0MiwwbDguMjE2NTgsLTguMjE2NThjMC42OTg3NSwtMC42OTg3NSAwLjY5ODc1LC0xLjgzNDY3IDAsLTIuNTMzNDJsLTE1LjM4MzI1LC0xNS4zODMyNWMtMC42OTg3NSwtMC42OTg3NSAtMS44MzQ2NywtMC42OTg3NSAtMi41MzM0MiwwbC01OC4zODMyNSw1OC4zNzk2N2MtMC42OTg3NSwwLjY5ODc1IC0wLjY5ODc1LDEuODM0NjcgMCwyLjUzMzQybDU4LjM4MzI1LDU4LjM4MzI1YzAuNjk4NzUsMC42OTg3NSAxLjgzNDY3LDAuNjk4NzUgMi41MzM0MiwwbDMzLjI5OTkyLC0zMy4yOTk5MmMwLjY5ODc1LC0wLjY5ODc1IDAuNjk4NzUsLTEuODMxMDggLTAuMDAzNTgsLTIuNTMzNDJ6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                />{' '}ConquError Console</h1>
                <p className="text-secondary text-center"> <em> *NOTE: ALL DECISIONS SHOULD BE DISCUSSED ON OUR DISCORD SERVER</em></p>
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

                            <section>
                                <h1 className="text-center text-primary fw-bold mt-3">My ConquError Status</h1>

                                <h5 className="text-primary text-center">This Feature is under development!!!</h5>

                                <div className="App">
                                
                                        <div style={{ width: '100%', height: 500, marginTop:'4rem', marginBottom:'4rem' }}>
                                        <ResponsiveContainer>
                                        <LineChart
                                            width={500}
                                            height={300}
                                            data={data}
                                            margin={{
                                                top: 5,
                                                right: 30,
                                                left: 20,
                                                bottom: 5
                                            }}
                                            >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Line
                                                type="monotone"
                                                dataKey="pv"
                                                stroke="#8884d8"
                                                activeDot={{ r: 8 }}
                                            />
                                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                            </LineChart>
                                        </ResponsiveContainer>
                                        </div>
                                </div>     
                            </section>
                            
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
