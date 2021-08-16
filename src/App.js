
import './App.css';
import Login from './components/login/login';
import Tab from './components/UI/atoms/menu_element';
import Contestant from './components/contestant/contestant';
import Timer from './components/timer/timer';
import Navbar from './components/navbar/navbar';
import QuizOn from './containers/quiz_on/quizOn';
import ContestantView from './containers/contestant/contestantdash';
import Dashboard from './containers/dashboard/dashboard_create';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DashboardAdmin from './containers/dashboard/dashboard_admin';
import CreateQuiz from './containers/dashboard/createQuiz';
import DashboardQuestions from './containers/dashboard/dashboard_question';
import DashboardCreate from './containers/dashboard/dashboard_create';


function App() {
  return (
    <Router>
      <Switch>
      <Route path='/'>
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

export default App;
