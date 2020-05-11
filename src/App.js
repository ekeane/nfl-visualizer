import React from 'react';
import './App.css';
import Dashboard from './routes/Dashboard';
import Login from './routes/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/dashboard" component={Dashboard}/>
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
