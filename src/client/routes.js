import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import TodosPage from './components/todos-page';
import Todos from './components/todos'

const routes = (
  <div>
    <Route path="/" component={App}>
      <IndexRoute component={TodosPage} />
    </Route>
    <Route path="/active" component={App}>
      <IndexRoute component={TodosPage} />
    </Route>
    <Route path="/completed" component={App}>
      <IndexRoute component={TodosPage} />
    </Route>
    <Route path="/archived" component={App}>
      <IndexRoute component={TodosPage} />
    </Route>
  </div>
);

export default routes;
