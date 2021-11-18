import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MasterLayout from './front-page/MasterLayout';
import Home from './public-page/Home';
import Login from './admin/Login';
import BuyRaffle from './public-page/BuyRaffle';
// import Dashboard from './admin/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>

        <Route exact path="/" component={Home} />

        {/* -----------public page ------------ */}
        <Route exact path="/buyraffle" component={BuyRaffle} />

        <Route path = '/admin' name="Admin" render={(props) => <MasterLayout {...props} />} />
        <Route exact path="/login" component={Login} />
        {/* <Route exact path = '/admin/dashboard' component={Dashboard}/> */}

      </Switch>
      </Router>
    </div>
  );
}

export default App;
