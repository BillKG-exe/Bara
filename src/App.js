import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './employee/HomeComp/Home'
import SignIn from './employee/Auth/SignIn'
import SignUp from './employee/Auth/SignUp'
import MapPage from './employee/mapSearch/MapPage'
import Profile from './employee/Profile/Profile'
import Login from './employer/Auth/Login'
import Register from './employer/Auth/Register'
import Report from './employer/Report/Report'
import Candidates from './employer/Candidate/Candidates'
import Analytics from './employer/Report/Analytics'
import Job from './employer/JobDashboard/Job'
import EmployerHome from './employer/Home/EmployerHome'
import Recruit from './employer/Recruit/Recruit'
import './App.css';
import axios from 'axios'



function App() {
  const candidateAuthenticated = async () => {
    const res = await axios.get('/isAuthenticated/candidate')
    return res.data.authenticated
  }

  const employerAuthenticated = async () => {
    const res = await axios.get('/employer/authenticated')
    return res.data.authenticated
  }
  

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/' exact component={() => <Home authorized={candidateAuthenticated}/>} />
          <Route path='/home' component={() => <Home authorized={candidateAuthenticated}/>} />
          <Route path='/signIn' component={() => <SignIn authorized={candidateAuthenticated}/>} />
          <Route path='/signUp' component={() => <SignUp authorized={candidateAuthenticated}/>} />
          <Route path='/map' component={() => <MapPage authorized={candidateAuthenticated}/>} />
          <Route path='/profile' component={() => <Profile authorized={candidateAuthenticated}/>} />       
          <Route path='/employer/login' component={() => <Login authorized={employerAuthenticated} />} />
          <Route path='/employer/register' component={() => <Register authorized={employerAuthenticated} />} />
          <Route path='/employer/Dashboard' component={() => <EmployerHome authorized={employerAuthenticated} />} />
          <Route path="/employer/recruit" component={() => <Recruit authorized={employerAuthenticated} />} />
          <Route path='/employer/report/settings' component={() => <Report authorized={employerAuthenticated} />} />
          <Route path='/employer/report/analytics' component={() => <Analytics authorized={employerAuthenticated} />} />
          <Route path='/employer/report/jobs' component={() => <Job authorized={employerAuthenticated} />} />
          <Route path='/employer/report/candidates' component={() => <Candidates authorized={employerAuthenticated} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
        
export default App;
