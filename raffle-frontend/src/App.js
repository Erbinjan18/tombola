import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MasterLayout from './front-page/MasterLayout';
import Home from './public-page/Home';
import Login from './Auth/Login';
import Raffle from './public-page/Raffle';
import RaffleDraw from './public-page/RaffleDraw';
// import Dashboard from './admin/Dashboard';

/*PUBLIC IMPORT FILES*/

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>

        <Route exact path="/" component={Home} />

        {/* -----------PUBLIC ROUTES------------ */}
        <Route exact path="/raffle" component={Raffle} />
        <Route exact path="/raffle-draw" component={RaffleDraw} />

        <Route path = '/admin' name="Admin" render={(props) => <MasterLayout {...props} />} />
        <Route exact path="/login" component={Login} />
        {/* <Route exact path = '/admin/dashboard' component={Dashboard}/> */}
        

      </Switch>
      </Router>
    </div>
  );
}

export default App;
