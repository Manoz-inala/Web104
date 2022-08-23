import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from './UI-components/Navbar'
import Home from "./UI-components/Home";
import playersInfo from "./UI-components/Players-info";
import contactApp from "./UI-components/Contact-app";
import LoginSignup from "./UI-components/LoginSignup";
import Apps from "./UI-components/Apps";

class App extends Component {
  render() {
    return <>
    <Router>
        <Navbar />
        <Switch>
          <Route path="/Home" component={Home}/>
          <Route path="/Contact-app" component={contactApp}/>
          <Route path="/Players-info" component={playersInfo}/>
          <Route path="/LoginSignup" component={LoginSignup}/>
          <Route path="/Apps" component={Apps}/>
        </Switch>
    </Router>
    </>
  
  }
}
export default App