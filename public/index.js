import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import login from './login';
import AuthenticationUI from './Authentication UI';
import ProfilePage from './ProfilePage';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={login} />
      <Route path="/authentication" component={AuthenticationUI} />
      <Route path="/profile" component={ProfilePage} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
