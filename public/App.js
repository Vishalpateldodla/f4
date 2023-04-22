import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Authentication from './Authentication UI .js';
import ProfilePage from './ProfilePage.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login.html" component={Authentication} />
        <Route exact path="/ProfilePage.js" component={ProfilePage} />
      </Switch>
    </Router>
  );
}

export default App;
