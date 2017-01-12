import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './components/App/App'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'


const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="projects" component={Projects}/>
    </Route>
  </Router>
);

export default Routes;
