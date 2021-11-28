import React, {useEffect,useState, Component} from 'react';
import { Helmet } from "react-helmet";
import {  Modal, Button } from 'react-bootstrap';
import { onSnapshot,collection,getFirestore, doc, setDoc, query, orderBy, limit  } from 'firebase/firestore';
import {} from '../../firebase/firebase'
import {  useHistory} from "react-router-dom"
import {Container,  Row,Col, Form, FormControl, Card} from 'react-bootstrap'
import { getAuth } from 'firebase/auth'
import * as GoIcons from 'react-icons/go';
import './Forum.css';
import Navbar from '../../Components/Navbar/Navbar'
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import axios from 'axios'



export default class Forum extends Component {

  //declare firestore services
  const forumdb = getFirestore();
  const auth = getAuth();

  //get current logged-in user
  const currentUser = auth.currentUser;

  //used to route the user through various pages of the website
  const history = useHistory()
    
  //Ask Question Modal*
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //declare text input for new question
  const [question, setQuestion] = useState();
  const [description, setDesc] = useState();

  //declare area to throw list for forum
  const [topics, setDiscussion] = useState([]);

  useEffect(
    () => {
      const collectionRef = collection(forumdb, "topics");
      const q = query(collectionRef,orderBy("created_at","desc"), limit(3));
  
      onSnapshot(q, (snapshot) =>
        setDiscussion(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      
      )
        console.log(onSnapshot.length)
     
    },[forumdb]);

  
  //Function that adds a new question in the forum
async function addNew(){
    //If there is no user logged-in, returns the user to Login page to continue
    if (currentUser === null)
    {
        alert("Please Log-in");
        history.push("/login")
    }
    else {
        //if user is logged-in
  
        // Add a new document with a generated id
const newQuestion = doc(collection(forumdb, "topics"));

//convert date which is timestamp to String
var timestamp = Date.now();
var convertedDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)

  // then create the array with the data to be set inside firestore in collection "topics"
var data = {

  title: question,
  desc: description,
  created_by: currentUser.email,
  created_at: convertedDate
}
 //puts the document inside the collection "topics" in firestore
await setDoc(newQuestion, data);
setDesc("");
setQuestion("");
alert("Question Posted!");

        }
    }

    //this is used to fetch the data from Discussion on Topics.MAP on the forum list
  const handler = function(e){
  
    const listkey = e.target.getAttribute("data-id");
  
    console.log(listkey);
};

  //Maps the data inside firestore collection (topics) so that it can be visible to the user
  const Discussion= topics.map((topic) => (  <div className="Discussion-Board" key={topic.id} > <p>Uploaded by: <strong>{topic.created_by}</strong> on <strong>
    {topic.created_at}</strong></p>  <div className="heading"><ul> <li onClick={ handler}  data-id ={topic.id}>{topic.title}<br></br><strong>Description:</strong> {topic.desc} </li></ul></div></div> ))

  constructor(props) {
      super(props);
      this.state = {
          offset: 0,
          data: [],
          perPage: 10,
          currentPage: 0
      };
      this.handlePageClick = this
          .handlePageClick
          .bind(this);
  }
  receivedData() {
      axios
          .get(`https://jsonplaceholder.typicode.com/photos`)
          .then(res => {

              const data = res.data;
              const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
              const postData = slice.map(pd => <React.Fragment>
                  <p>{pd.title}</p>
                  <img src={pd.thumbnailUrl} alt=""/>
              </React.Fragment>)

              this.setState({
                  pageCount: Math.ceil(data.length / this.state.perPage),
                 
                  postData
              })
          });
  }
  handlePageClick = (e) => {
      const selectedPage = e.selected;
      const offset = selectedPage * this.state.perPage;

      this.setState({
          currentPage: selectedPage,
          offset: offset
      }, () => {
          this.receivedData()
      });

  };

  componentDidMount() {
      this.receivedData()
  }
  render() {
      return (
          <div>
              {this.state.postData}
              <ReactPaginate
                  previousLabel={"prev"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={this.state.pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}/>
          </div>

      )
  }
}




