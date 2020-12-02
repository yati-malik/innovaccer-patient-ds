
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import PatientProfile from './components/patient/patientProfile';
import { Provider } from 'react-redux';
import store from './redux/store/store';

function App() {
  return (
    <Provider store= {store}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/patientProfile/:patientId" component={PatientProfile} ></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
