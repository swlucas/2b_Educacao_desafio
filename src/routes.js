import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Comic from './pages/Comic';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/comic/:id" component={Comic} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
