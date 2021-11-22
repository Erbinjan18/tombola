import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MasterLayout from './front-page/MasterLayout';
import Home from './public-page/Home';
import Login from './Auth/Login';
import BuyRaffle from './public-page/BuyRaffle';
import Register from './Auth/Register';
// import Dashboard from './admin/Dashboard';

/*USER IMPORT FILES*/
import RaffleList from './user/RaffleList';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>

        <Route exact path="/" component={Home} />

        {/* -----------PUBLIC ROUTES------------ */}
        <Route exact path="/buyraffle" component={BuyRaffle} />
        <Route exact path="/signup" component={Register} />


        <Route path = '/admin' name="Admin" render={(props) => <MasterLayout {...props} />} />
        <Route exact path="/login" component={Login} />
        {/* <Route exact path = '/admin/dashboard' component={Dashboard}/> */}


        {/* -------------USER ROUTES------------- */}
        <Route exact path="/rafflelist" component={RaffleList} />

      </Switch>
      </Router>
    </div>
  );
}

export default App;
