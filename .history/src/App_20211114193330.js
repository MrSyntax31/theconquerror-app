import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from './Page/Home/Home';
import Course from './Page/Course/Course';
import Lessons from './Page/Course/LessonsContent';
import Certificate from './Page/Course/Certificate'
import Games from './Page/Games/Games';
import Hangman from './Page/Games/Hangman';
import Quiz from './Page/Games/Quiz';
import Puzzle from './Page/Games/Puzzle';
import Forum from './Page/Forum/Forum';
import Thread from './Page/Forum/Thread';
import Tutorial from './Page/Tutorial/Tutorial';
import Profile from './Page/Profile/Profile';
import Login from './Page/User/Login';
import Register from './Page/User/Register';
import ForgotPass from './Page/User/ForgotPass';
import Footer from './Components/Footer/Footer';
import { AuthProvider } from "../src/firebase/auth"
import PrivateRoute from './routing/PrivateRoute';
import RequestDenied from './Components/Error/RequestDenied'
import TopicList from './Page/Forum/TopicList';
const App = () => {

  return (

<Router>
<AuthProvider>
  <Switch>

     <PrivateRoute  path="/profile" component={Profile}/>

     <Route exact path="/" component={Home} />
  
     <Route path="/course" component={Course}/>

     <PrivateRoute path="/lessons" component={Lessons}/>

     <Route path="/certificate" component={Certificate}/>
  
     <Route path="/games" component={Games}/>
   
     <Route path="/forum" component={Forum}/>

     <Route path="/thread" component={Thread}/>

     <Route path="/video" component={Tutorial}/>

     <Route path="/register" component={Register} />

     <PrivateRoute path="/hangman" component={Hangman}/>

     <PrivateRoute path="/quiz" component={Quiz}/>

     <PrivateRoute path="/puzzle" component={Puzzle}/>
   
     <Route path="/forgot-pass" component={ForgotPass}/>
    
     <Route path="/login" component={Login}/>

     <Route path="/alltopics" component={TopicList}/>

     <Route path="/error" component={RequestDenied}/>*/}

  </Switch>
  <Footer/>
</AuthProvider>
</Router>
  );
}

export default App;
