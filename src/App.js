import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './employee/HomeComp/Home';
import SignIn from './employee/Auth/SignIn';
import SignUp from './employee/Auth/SignUp';
import Search from './employee/searchComponent/Search';
import MapSearch from './employee/mapSearch/MapSearch'
import MapPage from './employee/mapSearch/MapPage';
import Profile from './employee/Profile/Profile';
import Login from './employer/Auth/Login'
import Register from './employer/Auth/Register'
import Report from './employer/Report/Report'
import Candidates from './employer/Candidate/Candidates';
import Analytics from './employer/Report/Analytics';
import Job from './employer/JobDashboard/Job';
import EmployerHome from './employer/Home/EmployerHome'
import './App.css';




function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/signIn' component={SignIn} />
          <Route path='/signUp' component={SignUp} />
          <Route path='/map' component={MapPage} />
          <Route path='/search' component={Search} />
          <Route path='/profile' component={() => <Profile authorized={true} />} />       {/* Make auth function for autorization */}
          <Route path='/employer/login' component={Login} />
          <Route path='/employer/register' component={Register} />
          <Route path='/employer/Dashboard' component={EmployerHome} />
          <Route path='/employer/report/settings' component={Report} />
          <Route path='/employer/report/analytics' component={Analytics} />
          <Route path='/employer/report/jobs' component={Job} />
          <Route path='/employer/report/candidates' component={Candidates} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
