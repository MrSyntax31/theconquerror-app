import React , {useState, useEffect}from 'react'

//Taskbar title
import Helmet from 'react-helmet'

//Navbar
import Navbar from './NavBar'

//Bootstrap
import { Row, Container, Tabs, Tab, Card, Table, Form , Button} from 'react-bootstrap';


//Firebase
import {getAuth} from 'firebase/auth'
import { getFirestore, query, collection, where, limit,  getDocs } from 'firebase/firestore';
import { getDatabase, ref, onValue } from "firebase/database";

import {  useHistory} from "react-router-dom"
import swal from 'sweetalert';

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
            swal("Welcome","You are now in the Admin Panel","success")
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
      setVerifReq(map);
        }       
    else{
      swal("Sorry","There are no more Data left to show you","warning")
 
    }

   }
   catch(error){
  swal('Error',error.message,'error')

  };

}

useEffect(
  () => {

    fetch()
    
  },[]); // eslint-disable-line react-hooks/exhaustive-deps

  async function approveReq(){
    swal("Pakyu", "ARMAN", "error")
  }

  const ReqVerfi = VerifReq.map((verification) => ( 
        <tbody>
        <tr>
        <td>{verification.id}</td>
        <td style={{width:"8rem"}}><img src={verification.img} alt="profile" className="img-fluid mx-auto d-block"  style={{width: "3rem"}} /></td>
        <td>{verification.created_at}</td>
        <td>{verification.verifiedstatus}</td>
        <td><Button onClick={approveReq} >Approve</Button></td>
        </tr>
        </tbody>
      ))
    

    return (
        <>
            {/* Tab Bar Title */}
            <Helmet>
                <title>ConquError | Admin</title>
            </Helmet>
                

            {/* Navbar */}
            <Navbar/>

            {/* Content */}
            <Container className="mt-3 mb-5">
                            <div className="mt-5">
                                <h1 className="text-center text-primary fw-bold">Admin Console</h1>
                            </div>

                            <main className="mt-3">
                                <div className="mt-3" fluid="md" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <div className="row">

                                        <div className="col-xl-3 col-sm-6 mb-3">
                                            <div className="card text-white bg-primary o-hidden h-100 ">
                                                <div className="card-body">
                                                <div className="card-body-icon">
                                                    <i className="fa fa-fw fa-address-book"><strong>Registered Users:</strong></i>
                                                </div>
                                                
                                                <div className="mr-5">{user}</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-3 col-sm-6 mb-3">
                                            <div className="card text-white bg-warning o-hidden h-100">
                                                <div className="card-body">
                                                <div className="card-body-icon">
                                                    <i className="fa fa-fw fa-list"></i>
                                                </div>
                                                <div className="mr-5">11 New Tasks!</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-3 col-sm-6 mb-3">
                                            <div className="card text-white bg-success o-hidden h-100">
                                                <div className="card-body">
                                                <div className="card-body-icon">
                                                    <i className="fa fa-fw fa-shopping-cart"></i>
                                                </div>
                                                <div className="mr-5">123 New Orders!</div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-xl-3 col-sm-6 mb-3">
                                            <div className="card text-white bg-danger o-hidden h-100">
                                                <div className="card-body">
                                                <div className="card-body-icon">
                                                    <i className="fa fa-fw fa-support"></i>
                                                </div>
                                                <div className="mr-5">13 New Tickets!</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </main>

                            <section className="" id="destinations">   
                                <Container fluid="md" style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                            

                                </Container>
                            </section>

                            <section className="mt-5 mb-5">
                                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                                    <Tab eventKey="home" title="Request Verification">
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>Request Verification</Card.Title>
                                                <Card.Text>
                                                   NOTE:
                                                   UPDATE APPROVED APPLICATIONS INSIDE THE REALTIME DATABASE
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
                                        </Form>                                
                                        </Card>
                                    </Tab>

                                    <Tab eventKey="profile" title="Feedback">
                                    <Card>
                                            <Card.Body>
                                                <Card.Title>Feedback</Card.Title>
                                                <Card.Text>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Donec velit urna, interdum eget ipsum eu,
                                                    tincidunt efficitur nunc.
                                                    Nullam euismod, nisi eget consectetur
                                                    consectetur, nisl nisl maximus nisl,
                                                    eget efficitur nunc nisl eu nisl.
                                                    Nulla facilisi.
                                                    Donec velit urna, interdum eget ipsum eu,
                                                    tincidunt efficitur nunc.
                                                    Nullam euismod, nisi eget consectetur
                                                    consectetur, nisl nisl maximus nisl,
                                                    eget efficitur nunc nisl eu nisl.
                                                    Nulla facilisi.
                                                </Card.Text>
                                            </Card.Body>

                                            <Form className="m-2">
                                                <Table striped bordered hover>
                                                    <thead>
                                                    <tr>
                                                    <th>#</th>
                                                    <th>Profile Picture</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                    <td>1</td>
                                                    <td style={{width:"8rem"}}><img src="" alt="profile" className="img-fluid mx-auto d-block"  style={{width: "3rem"}} /></td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    </tr>
                                                    <tr>
                                                    <td>2</td>
                                                    <td style={{width:"8rem"}}><img src="" alt="profile" className="img-fluid mx-auto d-block"  style={{width: "3rem"}} /></td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                    </tr>
                                                    <tr>
                                                    <td>3</td>
                                                    <td style={{width:"8rem"}}><img src="" alt="profile" className="img-fluid mx-auto d-block"  style={{width: "3rem"}} /></td>
                                                    <td colSpan="2">Larry the Bird</td>
                                                    <td>@twitter</td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </Form>
                                            
                                        </Card>
                                    </Tab>

                                    <Tab eventKey="report" title="Report">
                                        
                                    </Tab>
                                </Tabs>
                            </section>
            
                
            </Container>

        </>
    )
}

export default Admin
