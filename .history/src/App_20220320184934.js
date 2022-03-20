import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Helmet } from "react-helmet";
import { Card } from 'react-bootstrap';
import './App.css'

import Home from './Page/Home/Home';
import Course from './Page/Course/Course';
import Lesson from './Page/Course/LessonsContent';
import Lessons from './Page/Course/Lessons';
import Certificate from './Page/Course/Certificate'
import Games from './Page/Games/Games';
import Hangman from './Page/Games/Hangman';
import Quiz from './Page/Games/Quiz';
import Forum from './Page/Forum/Forum';
import Thread from './Page/Forum/Thread';
import Tutorial from './Page/Tutorial/Tutorial';
import Profile from './Page/Profile/Profile';
import Login from './Page/User/Login';
import Register from './Page/User/Register';
import Policy from './Page/User/PrivacyPolicy';
import ForgotPass from './Page/User/ForgotPass';
//import Footer from './Components/Footer/Footer';
import { AuthProvider } from "../src/firebase/auth"
import PrivateRoute from './routing/PrivateRoute';
import RequestDenied from './Components/Error/RequestDenied'
import TopicList from './Page/Forum/TopicList';
import Assessment from './Page/Course/Assessment';
import UploadFile from './Page/Profile/UploadFile';
import Leaderboard from './Page/Leaderboard/Leaderboard';

import Graphs from './Page/Profile/Graphs';

//Admin
import Admin from './Admin/Admin';

//Maintenance
import Maintenance from './Maintenance';



const App = () => {

  return (
  <>
  {/*
<Router>
<AuthProvider>
  <Switch>
  
     <PrivateRoute  path="/profile" component={Profile}/>

     <Route exact path="/" component={Home} />
  
     <Route path="/course" component={Course}/>

     <Route path="/lessons" component={Lessons}/>

     <PrivateRoute path="/lessonscontent" component={Lesson}/>

     <Route path="/certificate" component={Certificate}/>
  
     <Route path="/games" component={Games}/>
   
     <Route path="/forum" component={Forum}/>

     <Route path="/thread" component={Thread}/>

     <Route path="/tutorials" component={Tutorial}/>

     <Route path="/register" component={Register} />

     <Route path="/privacypolicy" component={Policy} />

     <PrivateRoute path="/hangman" component={Hangman}/>

     <PrivateRoute path="/quiz" component={Quiz}/>
   
     <Route path="/forgot-pass" component={ForgotPass}/>
    
     <Route path="/login" component={Login}/>

     <Route path="/alltopics" component={TopicList}/>

     <Route path="/error" component={RequestDenied}/>

     <PrivateRoute path="/graphs" component={Graphs}/>

     <Route path="/leaderboard" component={Leaderboard}/>

     <PrivateRoute path="/admin" component={Admin}/>

     <PrivateRoute path="/assessment" component={Assessment}/>

     <PrivateRoute path="/UploadFile" component={UploadFile}/>
 

  <Route path="/maintenance" component={Maintenance}/>
  </Switch>
 
</AuthProvider>
</Router> 
*/}
  <div>
            <Helmet>
                <title>ConquError | Maintenance</title>
                <meta name="description" content="ConquError is under maintenance. " />
            </Helmet>
        </div>


        <Card>
          <Card.Body>
            <Card.Title>
              <h1>ConquError is under maintenance</h1>
            </Card.Title>
            <Card.Text>
              <p>
                We are working on improving the site and fixing any bugs.
              </p>
              <p>
                Please check back later.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>


   <div className="box"></div>
    <div className="animation">
     <div className="one spin-one"></div>
     <div className="two spin-two"></div>
     <div className="three spin-one"></div>
    </div>
  <h1>Under maintenance</h1>
  <p>Update in progress.  Please run installer to finish update.</p>
  <p>Maintenance screen for<a href="https://www.ladesk.com/?utm_source=maintenance&utm_campaign=maintenance/" target="_blank">LiveAgent</a></p>
  </div>
</div>
  </>

  );
}

export default App;
