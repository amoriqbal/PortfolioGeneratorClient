import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';

import {MainPage} from './MainPage';
import {About} from './About';
import {Login} from './Login';
import {Register} from './Register';

class HomeRouter extends Component{
  render(){
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <MainPage/>
          </Route>
          <Route path="/about" exact>
            <About/>
          </Route>
          <Route path="/register" exact>
            <Register/>
          </Route>
          <Route path="/login" exact>
            <Login/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default HomeRouter;
