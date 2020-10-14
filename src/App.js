import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Issues from './components/IssueList';
import IssueDetails from './components/IssueDetails';

const App = () => (
  <Fragment>
    <Router>
      <div>
        <Route exact path='/' component={Issues} />
        <Route exact path='/issues/:number' component={IssueDetails} />
      </div>
    </Router>
  </Fragment>
);

export default App;
