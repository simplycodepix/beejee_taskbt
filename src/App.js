import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import LoginContainer from './containers/LoginContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/login" component={LoginContainer} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
