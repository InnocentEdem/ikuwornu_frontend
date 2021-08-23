
import './App.css';
import React, { Component } from 'react';
import Login from './components/login/login';
import QuizOn from './containers/quiz_on/quizOn';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import DashboardAdmin from './containers/dashboard/dashboard_admin';
import DashboardQuestions from './containers/dashboard/dashboard_question';
import DashboardCreate from './containers/dashboard/dashboard_create';
import DashboardEvents from './containers/dashboard/dashboard_events';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated:true }
    this.authorization=this.authorization.bind(this)
  }
   authorization(){
    this.setState({
      authenticated:true
    })
   }
   
 
  
   
  render() {

    return (
      <Router>
        <Switch>
      <Route exact path="/" >{this.state.authenticated?<DashboardCreate/>:<Login  authorization={this.authorization}/>}</Route>
        <Route exact path="/livequiz">{this.state.authenticated?<QuizOn/>:<Login/>}</Route>
        <Route exact path="/admin_dashboard">{this.state.authenticated?<DashboardAdmin/>:<Login/>}</Route>
        <Route exact path="/schedule">{this.state.authenticated?<DashboardEvents/>:<Login/>}</Route>
        <Route path='/login'>
        <Login authorization={this.authorization}></Login>
        </Route>
        </Switch>
      </Router>
    );
  }
}
 
export default App;
