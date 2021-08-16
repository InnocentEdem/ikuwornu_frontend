
import './App.css';
import Login from './components/login/login';
import Tab from './components/UI/atoms/menu_element';
import Contestant from './components/contestant/contestant';
import Timer from './components/timer/timer';
import Navbar from './components/navbar/navbar';
import QuizOn from './containers/quiz_on/quizOn';
import ContestantView from './containers/contestant/contestantdash';
import Dashboard from './containers/dashboard/dashboard';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
      <Route path='/'>
        <Dashboard/>
      </Route>
      <Route path='/'>
        <Dashboard/>
      </Route>
      </Switch>

    </Router>
  );
}

export default App;
