import React, {Component} from 'react';
import Footer from '../footer/footer';
import Nav from '../nav/nav';
import Landing from '../router/landing/landing';
import Form from '../router/form/form';
import Adopt from '../router/adopt/adopt';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './root.css';

export class Root extends Component {

  render() {
    return (
      <div>
      <Router>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/adopt" component={Adopt} />
          <Route exact path="/form" component={Form} />
        </Switch>
        <Footer />
      </Router>
      </div>
    )
  }
}



export default Root
