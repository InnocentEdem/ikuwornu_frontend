
import './App.css';
import Login from './components/login/login';
import Tab from './components/UI/atoms/menu_element';
import Contestant from './components/contestant/contestant';
import Timer from './components/timer/timer';
import Navbar from './components/navbar/navbar';
import QuizOn from './containers/quiz_on/quizOn';
import ContestantView from './containers/contestant/contestantdash';
import Dashboard from './containers/dashboard/dashboard';


function App() {
  return (
     <div>
    {/* // <Login/>
    // <Tab text="hello" tabColor='Pink'/>
    // <Contestant name = 'Kojo Bonsu'/>
    // <Timer limit="2"/> */}
    <Dashboard/>
    
    </div>
  );
}

export default App;
