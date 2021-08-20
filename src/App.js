
import './App.css';
import React, { Component } from 'react';
import Login from './components/login/login';
import QuizOn from './containers/quiz_on/quizOn';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import DashboardAdmin from './containers/dashboard/dashboard_admin';
import DashboardQuestions from './containers/dashboard/dashboard_question';
import DashboardCreate from './containers/dashboard/dashboard_create';
import users from './users/users';





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  
  render() { 
    return (
      <Router>
        <Switch>
        <Route exact path="/">
          <DashboardCreate/>
        </Route>
        <Route path='/addquestions'>
         <DashboardQuestions/>
        </Route>
        <Route path='/livequiz'>
         <QuizOn/>
        </Route>
        <Route path='/admin_dashboard'>
         <DashboardAdmin/>
        </Route>
        <Route path='/login'>
         <Login/>
        </Route>
        </Switch>
      </Router>
    );
  }
}
 
export default App;
